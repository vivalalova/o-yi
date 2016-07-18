const routeArray = require('../api/config/route.js')
const express = require('express')

module.exports = function(app) {
    for (const index in routeArray) {
        const route = routeArray[index]
        useController(route, app)
    }
}

function useController(route, app) {
    Object.keys(route).forEach(function(key) {
        const router = express.Router()
        const array = route[key]
        const controller = require('../api/controller/' + key + '.js')
        array.forEach(function(value) {
            router[value[0]](value[1], controller[value[2]])
        })
        app.use('/' + key, router)
    })
}
