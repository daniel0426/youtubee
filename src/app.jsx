import React, { useEffect, useState } from 'react'
import VideoList from './components/video_list/video_list';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';

function App({network}) {
  const [videos, setVideos]= useState([]);

  const search = (query)=> {
    network
    .search(query)
    .then(videos=> setVideos(videos))
    .catch(error => console.log('error', error));
  
  }
  
  useEffect(()=> {
      network
      .mostPopular()
      .then(videos=> setVideos(videos))
      .catch(error => console.log('error', error));
  },[network]);

  return (
    <div className = {styles.app}>                
      <SearchHeader onSearch = {search}/>         
      <VideoList videos={videos}/>
    </div>
  )
}

export default App
