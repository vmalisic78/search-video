import React from 'react';
import Video from './Video';


const VideoList = ({videos, onVideoSelect}) => {
    return ( 
        <div className="container-fluid">
            {videos.map( (item,i)=> {
                return <Video 
                    key={i} 
                    item={item} 
                    onVideoSelect={onVideoSelect} 
                />
            })}
        </div> 
    );
}
 
export default VideoList;