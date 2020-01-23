import axios from 'axios';

const youTube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
  // params: {
  //   part: 'snippet',
  //   type: 'video',
  //   maxResults: 5,
  //   key: 'AIzaSyDhfPFv85-koi4fVvDl89KmoPYHbH4i0UY'
  // }
});

export default youTube;
