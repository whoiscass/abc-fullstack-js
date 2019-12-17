'use strict'

const mongoose = require('mongoose')

var BoookSchema = new mongoose.Schema({

  title: { type : String, required: true },
  author: { type : String, required: true },
  // author: { type : mongoose.Schema.Types.ObjectId, required: true },
  description: { type: String, default: '...' },
  image: { type: String, default: '...' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  status: { type: Boolean, default: true }
})


module.exports = mongoose.model('Book', BoookSchema)