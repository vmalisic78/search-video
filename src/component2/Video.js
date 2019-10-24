import React from 'react';

const Video = ({item, onVideoSelect }) => {
    return ( 
        <div className="row my-2 border" onClick={() => onVideoSelect(item)}>
            <div classname="col-4 float-left">
                <img className="img img-fluid" src={item.snippet.thumbnails.default.url} alt={item.snippet.description} />
            </div>            
            <div className="col-6 float-right">
                 <p className="text-left">{item.snippet.title}</p>
            </div>
        </div>
     );
}
 
export default Video;