'use strict'

module.exports = {

  async saveObject(Model, data) {
    const newObject = new Model(data)
    return newObject.save()
  },

  async getOneObjectByParams(Model, params, properties) {
    return Model.findOne(params).populate(properties)
  },

  async getObjectsByParams(Model, params, properties) {
    return Model.find(params).populate(properties)
  },

  async deleteObjectsByParams(Model, params) {
    return Model.deleteMany(params)
  },

  async updateObjectsByParams(Model, params, data) {
    return Model.updateOne(params, data)
  }

}