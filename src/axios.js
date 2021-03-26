import axios from 'axios';
const instance = axios.create({
    //I could also use fetch base Url but then axios is widly used. 
    baseURL: 'https://us-central1-clone-1c5c4.cloudfunctions.net/api'
    // http://localhost:5001/clone-1c5c4/us-central1/api'//the API Url
})

export default instance;