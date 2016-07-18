let beforeAction = require('../beforeAction/beforeAction.js')

const route = {
    user: [
        ['get', '/', 'find'],
        ['get', '/:id', 'findOne'],
        ['post', '/', 'create'],
        ['put', '/:id', 'update'],
        ['delete', '/', 'delete'],
    ],
}


module.exports = function(app) {
    //beforeAction
    app.all('*', beforeAction.offSetAndLimit)
    app.all('*', beforeAction.removeInput)

    const express = require('express')
    Object.keys(route).forEach(function(key) {
        const router = express.Router()
        const array = route[key]
        const controller = require('../controller/' + key + '.js')
        array.forEach(function(value) {
            router[value[0]](value[1], controller[value[2]])
        })
        app.use('/' + key, router)
    })

    //index.html
    app.get('/', function(req, res, next) {
        res.render('index', { title: 'express' })
    })
}


function controller_method(string) {


    // return func
}
