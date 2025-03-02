import React from "react";
import { useParams } from "react-router-dom";

const VideoPlayer = () => {
  const { id } = useParams();
  
  return (
    <div className="video-player">
      <h2>Playing Video ID: {id}</h2>
      <video controls>
        <source src={`/videos/sample${id}.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
