import React from "react";

const Upload = () => {
  return (
    <div className="upload">
      <h2>Upload a Video</h2>
      <input type="file" accept="video/*" />
      <button>Upload</button>
    </div>
  );
};

export default Upload;
