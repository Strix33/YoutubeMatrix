import React from "react";
import { Link } from "react-router-dom";

const videos = [
  {
    id: 1,
    title: "React Tutorial",
    thumbnail: "/assets/react.jpg",
  },
  {
    id: 2,
    title: "Node.js Crash Course",
    thumbnail: "/assets/thumbnail.webp",
  },
];

const VideoList = () => {
  return (
    <div className="video-list">
      {videos.map((video) => (
        <Link key={video.id} to={`/video/${video.id}`} className="video-card">
          <img src={video.thumbnail} alt={video.title} />
          <h3>{video.title}</h3>
        </Link>
      ))}
    </div>
  );
};

export default VideoList;
