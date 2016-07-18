const {Name} = require('../model/{name}.js')
const helper = require('../helper/helper.js')

const { wrap: async } = require('co')

module.exports = {
    find: async(function*(req, res, next) {
        try {
            const result = yield {Name}.find().skip(req.query.skip).limit(req.query.limit).exec()
            return res.send(result)
        } catch (err) {
            return helper.err(err, res)
        }
    }),
    findOne: async(function*(req, res, next) {
        const result = yield {Name}.findOne({ _id: req.params.id })
        return res.send(result)
    }),
    create: async(function*(req, res) {
        try {
            const {name} = new {Name}(req.body)
            const result = yield {name}.save()
            return res.send(result)
        } catch (err) {
            return helper.err(err, res)
        }
    }),
    update: async(function*(req, res, next) {
        try {
            const result = yield {Name}.update({ _id: req.params.id }, req.body)
            helper.errHandler(result, res, function() {
                return res.send(result)
            })
        } catch (err) {
            return helper.err(err, res)
        }
    }),
    delete: async(function*(req, res, next) {
        try {
            const result = yield {Name}.remove({ _id: req.params.id })
            helper.errHandler(result, res, function() {
                return res.send(result)
            })
        } catch (err) {
            return helper.err(err, res)
        }
    }),
}
