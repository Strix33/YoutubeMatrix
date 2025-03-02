import React from "react";
import VideoList from "../components/VideoList";

const videos = [
  { id: 1, title: "React Tutorial", thumbnail: "/assets/react.jpg" },
  { id: 2, title: "Node.js Crash Course", thumbnail: "/assets/thumbnail.webp" },
  { id: 3, title: "MongoDB Guide", thumbnail: "/assets/thumbnail.webp" },
];

const Home = ({ searchTerm }) => {
  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home">
      <h1>📺 Video Streaming</h1>
      <VideoList videos={filteredVideos} />
    </div>
  );
};

export default Home;
