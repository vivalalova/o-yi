let Model = require('../config/model.js')

let mongoose = require('mongoose')
let extend = require('mongoose-schema-extend')
let Schema = mongoose.Schema

let bcrypt = require('bcrypt')
let saltRounds = 10

let User = Model.extend({

})

User.pre('save', function(next) {
    if (this.password && this.isNew) {
        this.password = bcrypt.hashSync(this.password, saltRounds)
    }
    next()
})

User.statics = {
    checkToken: function(token) {
        let today = new Date()
        today.setHours(0, 0, 0, 0)

        return this.findOne({
            token: token,
            last_login: {
                $gte: today
            }
        }).exec()
    }
}

module.exports = mongoose.model('User', User)
