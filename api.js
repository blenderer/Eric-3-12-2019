const express = require("express");
const multer = require("multer");
const Fuse = require("fuse.js");

const UPLOAD_PATH = "uploads";
const upload = multer({ dest: `${UPLOAD_PATH}/` });

const app = express();
const port = 4444;

const files = [];

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get("/files", upload.single("file"), async (req, res) => {
  if (!req.query.q) {
    res.json({
      files: files
    });
  }

  var options = {
    keys: ['name'],
  }
  var fuse = new Fuse(files, options)
  
  const filteredFiles = fuse.search(req.query.q);

  res.json({
    files: filteredFiles,
  });
});

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    files.push({
      id: req.file.filename,
      name: req.file.originalname,
      size: req.file.size
    });
    res.json({
      files: files
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});
