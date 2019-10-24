import axios from 'axios';

const KEY = 'AIzaSyAf2UMTbPQWC5Q9wqxlF_96RcQ3J5Utgm8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});