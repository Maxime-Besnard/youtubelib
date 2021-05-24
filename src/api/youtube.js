import axios from 'axios';
const KEY = 'AIzaSyAFpMIqqeh1E4h3aeahF4WinTRtcQ9zI3g';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    },
    headers:{}
})