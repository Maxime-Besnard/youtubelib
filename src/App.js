import React from 'react';
import './App.css';
import Search from './components/Search';
import VideoList from './components/VideoList';
import youtubeApi from './api/youtube';
import Videoplayer from './components/Videoplayer'
import john from './users/john.json'
import mark from './users/mark.json'


export default class App extends React.Component {

  state = {
    videosMetaInfo: [],
    videosUser: [],
    selectedVideoId: null,
  };


  onVideoSelected = videoId => {
      this.setState({
        selectedVideoId:videoId
      })
  }

  onSearch = async keyword => {
    const response = await youtubeApi.get("/search", {
      params: {
        q: keyword,
        type: "video",
      }
    });
    this.setState({
      videosMetaInfo: response.data.items,
      selectedVideoId: response.data.items[0].id.videoId
    });    
  };

  onRead = async () => {
    var tab = [];
    var user = john;
    for (var index = 0; user.videos[index]; index++) {
      const response = await youtubeApi.get("/search", {
        params: {
          q: user.videos[index].title,
          type: "video",
          maxResults: 1,
        }
      });
      
      tab.push(response.data.items[0]);
      console.log(response);
    }
    this.setState({
      videosUser: tab,
    });  
  };

  render(){
    
    return (
      
      
      <div className="App">
        
        <div id="left">
            <Search onSearch={this.onSearch}
            onRead={this.onRead}/>
            <Videoplayer videoId={this.state.selectedVideoId}/>
        </div>

        <div id="right">
          <VideoList onVideoSelected={this.onVideoSelected}
          data={this.state.videosMetaInfo}/>
          <VideoList onRead={this.onRead}
          onVideoSelected={this.onVideoSelected}
          data={this.state.videosUser}/>
        </div>

      </div>
    );
  }
}