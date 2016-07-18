const Model = require('../config/model.js')

const mongoose = require('mongoose')
const extend = require('mongoose-schema-extend')
const Schema = mongoose.Schema

const {Name} = Model.extend({

})

module.exports = mongoose.model('{Name}', {Name})
