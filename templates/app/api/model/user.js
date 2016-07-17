let Model = require('../config/model.js')

let mongoose = require('mongoose')
let extend = require('mongoose-schema-extend')
let Schema = mongoose.Schema

let bcrypt = require('bcrypt')
let saltRounds = 10

let User = Model.extend({
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
    last_login: Date,
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
