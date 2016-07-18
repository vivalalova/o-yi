const Model = require('../config/model.js')

const mongoose = require('mongoose')
const extend = require('mongoose-schema-extend')
const Schema = mongoose.Schema

const bcrypt = require('bcrypt')
const saltRounds = 10

const User = Model.extend({
    account: {
        type: String,
        required: true,
        index: { unique: true }
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    token: String,
})

User.pre('save', function(next) {
    if (this.password && this.isNew) {
        this.password = bcrypt.hashSync(this.password, saltRounds)
    }
    next()
})

User.statics = {
    checkToken: function(token) {
        return this.findOne({
            token: token
        }).exec()
    }
}

module.exports = mongoose.model('User', User)
