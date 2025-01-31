import React from 'react'
import "../styles/VideoCard.css";

function VideoCard({ title, url, thumbnail }) {
    const videoId = url.split("v=")[1];

  return (
    <div className="video-card">
        <h3>{title}</h3>
        <a href={url} target="_blank" rel="noopener noreferrer">
            {/* <img src={thumbnail} alt={title} className="video-thumbnail" /> */}
        </a>
        <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            className="video-player"
            allow="autoplay; fullscreen"
            allowFullScreen
        ></iframe>
    </div>
  )
}

export default VideoCard