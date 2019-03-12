const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const Fuse = require("fuse.js");
const fileType = require("file-type");

const UPLOAD_PATH = "uploads";
const storage = multer.memoryStorage();
const upload = multer({ dest: `${UPLOAD_PATH}/`, storage: storage });

const app = express();
const port = 4444;

const validFileExtensions = {
  png: true,
  jpg: true
};

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
    keys: ["name"]
  };
  var fuse = new Fuse(files, options);

  const filteredFiles = fuse.search(req.query.q);

  res.json({
    files: filteredFiles
  });
});

app.delete("/files", async (req, res) => {
  if (!req.body.id) {
    return res.sendStatus(400);
  }

  files = files.filter(file => file.id !== req.body.id);

  res.json({
    files: files
  });
});

app.post("/files", upload.single("file"), async (req, res) => {
  // check the actual file type via magic number
  const fileExtension = fileType(req.file.buffer).ext;
  if (!validFileExtensions[fileExtension]) {
    return res.sendStatus(400);
  }

  try {
    files.push({
      id: new Date().getTime(),
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
