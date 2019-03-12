const express = require('express');
const multer = require('multer');

const UPLOAD_PATH = 'uploads';
const upload = multer({ dest: `${UPLOAD_PATH}/` });

const app = express();
const port = 4444;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.post('/upload', upload.single('document'), async (req, res) => {
  try {
    console.log(Object.keys(req.file));
    res.json({"foo": "bar"});;
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
})