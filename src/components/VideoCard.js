import React from "react";

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <img src={video.thumbnail} alt={video.title} />
      <h3>{video.title}</h3>
    </div>
  );
};

export default VideoCard;
