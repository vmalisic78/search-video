import React from 'react';

const VideoDetail = ({video}) => {
    if(!video){
        return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return ( 
        <div className="container-fluid p-2 border border-primary rounded">
            <div className="row p-0 mx-auto">
                <iframe 
                    className="mx-auto" 
                    title={video.description}
                    src={videoSrc} 
                    frameBorder="0" 
                    width="100%" height="450" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen 
                />
            </div>
           <h2>{video.snippet.title}</h2> 
           <p>{video.snippet.description}</p>
        </div>
     );
}
 
export default VideoDetail;