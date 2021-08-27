import React from 'react';
import Video from '../video_item/video';

const VideoList = (props) => (
    
            <ul>
                {props.videos.map(video => (
                <Video video={video} key={video.id}/>
                ))}
            </ul>
    );

export default VideoList;