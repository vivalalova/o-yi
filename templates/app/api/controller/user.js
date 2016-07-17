let User = require('../model/user.js')
let helper = require('../helper/helper.js')

const { wrap: async } = require('co')

module.exports = {
    find: async(function*(req, res, next) {
        try {
            let result = yield User.find().skip(req.query.skip).limit(req.query.limit).exec()
            return res.send(result)
        } catch (err) {
            return res.status(400).send(err)
        }
    }),
    findOne: async(function*(req, res, next) {
        let result = yield User.findOne({ _id: req.params.id })
        return res.send(result)
    }),
    create: async(function*(req, res) {
        try {
            let user = new User(req.body)
            let result = yield user.save()
            return res.send(result)
        } catch (err) {
            return res.status(400).send({ message: err.message })
        }
    }),
    update: async(function*(req, res, next) {
        try {
            let result = yield User.update({ _id: req.params.id }, req.body)
            helper.errHandler(null, result, res, function() {
                return res.send(result)
            })
        } catch (err) {
            return helper.errHandler(err, res.body, res)
        }
    }),
    delete: async(function*(req, res, next) {
        try {
            let result = yield User.remove({ _id: req.params.id })
            helper.errHandler(null, result, res, function() {
                return res.send(result)
            })
        } catch (err) {
            return helper.errHandler(err, res.body, res)
        }

    })
}
