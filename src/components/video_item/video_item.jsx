import React from 'react';
import styles from './video_item.module.css'

const VideoItem = ({video : {snippet}}) => {


    const titleParser = (title)=> {
        if(title.length > 30){
            title = title.slice(0,25).concat('...');
            return title
        }
        return title
      }

    return (
        
<li className={styles.container}>
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
    

export default VideoItem;