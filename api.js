const express = require('express');
const multer = require('multer');

const UPLOAD_PATH = 'uploads';
const upload = multer({ dest: `${UPLOAD_PATH}/` });

const app = express();
const port = 4444;

const files = [];

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    files.push({
      name: req.file.originalname,
      size: req.file.size
    });
    res.json({
      files: files
    });;
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
})