import React, { useState, useEffect } from 'react';
import './app.css';
import VideoList from './components/video_list/videoList';

function App() {
  const [videos, setVideos] = useState([]);

 useEffect(()=> {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDPpl4M-Fr1wKscqvrKXgcG8xZHWeV1-Ok", requestOptions)
    .then(res => res.json())
    .then(data => setVideos(data.items))
    .catch(error => console.log('error', error));
 },[])

  return (
    <div>
    <VideoList videos={videos}/>
    </div>
  );
}

export default App;
