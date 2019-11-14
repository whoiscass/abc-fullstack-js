'use strict'

const booksRoutes = require('./book')

module.exports = (app) => {
  app.use('/api-v1/books', booksRoutes)
}