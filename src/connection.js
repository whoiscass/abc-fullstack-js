'use strict'

const mongoose = require('mongoose')
const app = require('./')
const { port, db, secret } = require('./config')

mongoose.Promise = global.Promise

const mongooseConntectOptions = {
  useNewUrlParser: true, 
  useCreateIndex: true, 
  useUnifiedTopology: true
}

mongoose.connect(db, mongooseConntectOptions,  (err) => {
  if (err) {
    console.log(`DATABASE connection problem ${err}`)
  } else {
    console.log(`Successfully connected to ${db}`)
  }
})

app.listen(port, () => {
  console.log(`server successfully running on port: ${ port }`)
})