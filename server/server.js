const express = require('express')
const cors = require('cors')
const multer = require('multer')
const path = require("path");

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: function(req, file, cb){
     cb(null,"doc-" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({storage: storage, limits:{fileSize: 10000000}})

const app = express()
const port = process.env.PORT || 5000

// any request coming in, transfer all body into JSON
app.use(express.json())

// allow cross origin from client localhost
app.use(cors())

// creating POST endpoint /file
app.post('/file', upload.single('file'), (req, res) => {
  console.log('body', req.file.length, req.file)

  // here you can do anything that you want for the file
  // ex: you want to save it to database here

  res.json({ success: true })
})

app.listen(port, error => {
  if (error) throw error
  console.log('Server running on port ' + port)
})
