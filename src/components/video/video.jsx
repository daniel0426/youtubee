import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import styles from './video.module.css';

function Video(props){

    const [channelThumbnail, setChannelThumbnail]= useState([]);
    const [videoView, setVideoView] = useState([]);

    const videoThumbnail = props.video.snippet.thumbnails.medium.url;
    const videoTitle = props.video.snippet.title;
    const channelName = props.video.snippet.channelTitle ;
    const uplodeDate = new Date(props.video.snippet.publishedAt).toLocaleDateString("en-NZ");
    
   const videoViewParser =  (x)=> {
        if(x < 9999) {
            return x;
        }

        if(x < 1000000) {
            return Math.round(x/1000) + "K";
        }
        if( x < 10000000) {
            return (x/1000000).toFixed(1) + "M";
        }

        if(x < 1000000000) {
            return Math.round((x/1000000)) + "M";
        }

    }
   useEffect(()=> {
    
      
      fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&id=${props.video.snippet.channelId}\n&key=AIzaSyDPpl4M-Fr1wKscqvrKXgcG8xZHWeV1-Ok`)
        .then(response => response.json())
        .then(channelData => setChannelThumbnail(channelData.items[0].snippet.thumbnails.default.url))
        .catch(error => console.log('error', error));

        fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${props.video.id}&key=AIzaSyDPpl4M-Fr1wKscqvrKXgcG8xZHWeV1-Ok`)
        .then(response => response.json())
        .then(videoData => setVideoView(videoData.items[0].statistics.viewCount))
        .catch(error => console.log('error', error));  
   })

   return(
        <li> 
            <img src={props.video.snippet.thumbnails.medium.url} alt="videoImg" />   
            <div className={styles.detailContainer}>
                <img src={channelThumbnail} alt="" />
                <div className={styles.description}>
                    <h1>{videoTitle}</h1>
                    <h3>{channelName}</h3>
                    <p>{uplodeDate}</p>
                    <p>{videoViewParser(videoView)} views </p>
                </div>
            
            </div>

        </li>
    )
}
export default Video;