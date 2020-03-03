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

mongoose.connect(db, mongooseConntectOptions)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.listen(port, () => {
  console.log(`server successfully running on port: ${ port }`)
})