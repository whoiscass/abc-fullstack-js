'use strict'

const router = require('express').Router()
const { createBook, getBooks, getBooksById, updateBook, deleteBook } = require('../controllers/book')

router.route('/')
  .get(getBooks)
  .post(createBook)

router.route('/:id')
  .get(getBooksById)
  .patch(updateBook)
  .delete(deleteBook)

module.exports = router
    