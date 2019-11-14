'use strict'

const express = require('express')
const app = express()
const path = require('path')

const morgan = require('morgan')

const { multer, upload } = require('./utils/multer')

// middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(multer(upload).single('image'))
app.use(morgan('combined'))

// router
require('./routes/')(app)

// static files
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app