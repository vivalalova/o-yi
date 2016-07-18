let mongoose = require('mongoose')
let Schema = mongoose.Schema

let Model = new Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, {
    strict: false
})

Model.options.toJSON = {
    transform: function(doc, ret, options) {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
        delete ret.password
        delete ret.__t
        return ret
    }
}

module.exports = Model
