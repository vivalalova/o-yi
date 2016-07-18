let User = require('../model/user.js')
let helper = require('../helper/helper.js')

let bcrypt = require('bcrypt')
let saltRounds = 10
let crypto = require('crypto')

let { wrap: async } = require('co')

module.exports = {
    find: async(function*(req, res, next) {
        try {
            let result = yield User.find().skip(req.query.skip).limit(req.query.limit).exec()
            return res.send(result)
        } catch (err) {
            return helper.err(err,res)
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
            return helper.err(err,res)
        }
    }),
    update: async(function*(req, res, next) {
        try {
            let result = yield User.update({ _id: req.params.id }, req.body)
            helper.errHandler(result, res, function() {
                return res.send(result)
            })
        } catch (err) {
            return helper.err(err,res)
        }
    }),
    delete: async(function*(req, res, next) {
        try {
            let result = yield User.remove({ _id: req.params.id })
            helper.errHandler(result, res, function() {
                return res.send(result)
            })
        } catch (err) {
            return helper.err(err,res)
        }
    }),
    login: async(function*(req, res, next) {
        try {
            let user = yield User.findOne({ account: req.params.account })

            helper.errHandler(user, res,function (a,b) {
                // body...
            })


            res.send(user)
        } catch (err) {
            console.log(err)
            return helper.err(err,res)
        }
    }),
}
