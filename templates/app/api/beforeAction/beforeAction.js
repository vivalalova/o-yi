const helper = require('../helper/helper.js')
const env = require('../config/env.js')

const { wrap: async } = require('co')

module.exports = {
    offSetAndLimit: function(req, res, next) {
        if (req.query.offset) {
            req.query.skip = parseInt(req.query.offset || 0)
        } else {
            req.query.skip = parseInt(req.query.skip || 0)
        }
        req.query.limit = parseInt(req.query.limit || 30)
        next()
    },
    removeInput:function(req, res, next) {
        delete req.body.updatedAt
        delete req.body.createdAt
        delete req.body.id
        next()
    }
}
