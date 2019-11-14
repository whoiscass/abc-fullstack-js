'use strict'

const mongoose = require('mongoose')
const app = require('./')
const config = require('./config')

mongoose.Promise = global.Promise

const mongooseConntectOptions = {
  useNewUrlParser: true, 
  useCreateIndex: true, 
  useUnifiedTopology: true
}

mongoose.connect(config.db, mongooseConntectOptions,  (err) => {
  if(err) {
    console.log(`DATABASE connection problem ${err}`)
  }else {
    console.log(`Successfully connected to ${config.db}`)
  }
})

app.listen(config.port, () => {
  console.log(`server successfully running on port: ${ config.port }`)
})