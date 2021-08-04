import axios from 'axios';

const KEY='AIzaSyBGSNFczhtFeWLObvmIcwClf4_cIeprMJE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults:5,
        key:KEY
    }
});
