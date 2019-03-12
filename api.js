const express = require("express");
const bodyParser = require('body-parser');
const multer = require("multer");
const Fuse = require("fuse.js");

const UPLOAD_PATH = "uploads";
const upload = multer({ dest: `${UPLOAD_PATH}/` });

const app = express();
const port = 4444;

let files = [];

app.use(bodyParser.json());
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get("/files", async (req, res) => {
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

app.delete("/files", async (req, res) => {
  console.log(req.body);
  if (!req.body.id) {
    return res.sendStatus(400);
  }

  console.log(files);
  
  files = files.filter(file => file.id !== req.body.id);

  res.json({
    files: files,
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
