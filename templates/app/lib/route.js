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
        array.forEach(function(value) {
            if (value.length > 3) {
                for (let i = 3; i < value.length; i++) {
                    if (typeof value[i] === 'function') {
                        router[value[0]](value[1], value[i])
                    }
                }
            }
            if (typeof value[2] === 'function') {
                router[value[0]](value[1], value[2])
            }
        })
        app.use('/' + key, router)
    })
}
