import React, { memo } from 'react';
import styles from './video_item.module.css'

const VideoItem = memo(
    ({video, video : {snippet}, onVideoClick, display}) => {


        const titleParser = (title)=> {
            if(title.length > 30){
                title = title.slice(0,25).concat('...');
                return title
            }
            return title
          }
    
         const displayType = display ==='list' ? styles.grid : styles.list
    
        return (
            
            <li className={`${styles.container} ${displayType}`} onClick={()=> onVideoClick(video)}>
                <div className={styles.video}>
                    <img  className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt="" />
                </div>
                <div className={styles.metadata}>
                    <p className={styles.title}>{titleParser(snippet.title)}</p>
                    <p className={styles.channel}>{snippet.channelTitle}</p>
                </div>
            </li>
        )
    }
)
    

export default VideoItem;