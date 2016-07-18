let beforeAction = require('../beforeAction/beforeAction.js')

let route = {
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

    //user
    let express = require('express')
    Object.keys(route).forEach(function (key) {
        let router = express.Router()
        let array = route[key]
        let controller = require('../controller/' + key + '.js')
        array.forEach(function (value) {
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
