import React, { useState } from "react";
import "../App.css";

const Upload = ({ onVideoUpload }) => {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [video, setVideo] = useState(null);

  const handleThumbnailChange = (e) => {
    setThumbnail(URL.createObjectURL(e.target.files[0]));
  };

  const handleVideoChange = (e) => {
    setVideo(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && video && thumbnail) {
      onVideoUpload({ title, thumbnail, video });
      setTitle("");
      setThumbnail(null);
      setVideo(null);
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload Video</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Video Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input type="file" accept="image/*" onChange={handleThumbnailChange} required />
        <input type="file" accept="video/*" onChange={handleVideoChange} required />
        <button type="submit">Upload</button>
      </form>
      {thumbnail && <img src={thumbnail} alt="Thumbnail Preview" className="thumbnail-preview" />}
    </div>
  );
};

export default Upload;
