/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({video}) => (
        <section className="styles.detail">
            <iframe 
            className = {styles.video}
            type="text/html"
            width="100%"
            height ="500px"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameBorder ="0"
            allowFullScreen
             ></iframe>
             <h2>{video.snippet.title}</h2>
             <h4>{video.snippet.channelTitle}</h4>
             <p>{video.snippet.description}</p>
        </section>
    
    );

export default VideoDetail;