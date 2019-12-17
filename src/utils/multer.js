'use strict'

const multer = require('multer')
const path = require('path')

const upload = multer.diskStorage({
  destination: path.join(__dirname, '../public/storage'),
  filename: (req, file, cb) => {
    cb(null, `${ new Date().getTime() }${ path.extname(file.originalname) }`)
  }
})

module.exports = { multer, upload }