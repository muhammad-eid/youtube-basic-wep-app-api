import React from 'react'
import VideoCard from './VideoCard';

const VideosList = ({ videos, onVideoSelect}) => {
    const renderList = videos.map((video) => {
        // console.log(video);
        return <VideoCard key={video.id.videoId || video.id.playlistId || video.id.channelId} data={video} onVideoSelect={onVideoSelect}/>;
    });

    
    return (
        <div>
            {renderList}
        </div>
    );
}

export default VideosList;