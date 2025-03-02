const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads")); // Serve uploaded files

// Multer Setup (for file uploads)
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});
const upload = multer({ storage });

// ✅ Upload Video API
app.post("/upload", upload.fields([{ name: "thumbnail" }, { name: "video" }]), (req, res) => {
  if (!req.files || !req.body.title) {
    return res.status(400).json({ error: "Missing fields!" });
  }

  const videoData = {
    title: req.body.title,
    thumbnail: `/uploads/${req.files.thumbnail[0].filename}`,
    video: `/uploads/${req.files.video[0].filename}`,
  };

  res.json(videoData); // Send back uploaded video details
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
