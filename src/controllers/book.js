'use strict'

const queries = require('../utils/queries')
const Book = require('../models/book')

module.exports = {
  async createBook(req, res) {
    try {
      const { body } = req
      const response = await queries.saveObject(Book, body)
      res.status(200).json(response)
    } catch(err) {
      console.log(err)
      res.status(500).json(err)
    }
  },

  async getBooks(req, res) {
    try {
      const response = await queries.getObjectsByParams(Book, {}, [])
      res.status(200).json(response.reverse())
    } catch(err) {
      console.log(err)
      res.status(500).json(err)
    }
  },

  async getBooksById(req, res) {
    try {
      const { params: { id } } = req
      const response = await queries.getOneObjectByParams(Book, { '_id': id }, [])
      res.status(200).json(response)
    } catch(err) {
      console.log(err)
      res.status(500).json(err)
    }
  },

  async updateBook(req, res) {
    try {
      const { body, params: { id } } = req
      const response = await queries.updateObjectsByParams(Book, { '_id': id }, { ...body, updatedAt: new Date() })
      res.status(200).json(response)
    } catch(err) {
      console.log(err)
      res.status(500).json(err)
    }
  },

  async deleteBook(req, res) {
    try {
      const { params: { id } } = req
      const response = await queries.deleteObjectsByParams(Book, { '_id': id })
      res.status(200).json(response)
    } catch(err) {
      console.log(err)
      res.status(500).json(err)
    }
  }
}
