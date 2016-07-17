let beforeAction = require('../beforeAction/beforeAction.js')

let user = require('../controller/user.js')

let route = [
    ['get', '/user', 'user.find'],
    ['get', '/user/:id', 'user.findOne'],
    ['post', '/user', 'user.create'],
    ['put', '/user/:id', 'user.update'],
    ['delete', '/user/:id', 'user.delete']
]


module.exports = function(app) {
    //beforeAction
    app.all('*', beforeAction.offSetAndLimit)
    app.all('*', beforeAction.removeInput)

    //user
    app.get('/user', user.find)
    app.get('/user/:id', user.findOne)
    app.post('/user', user.create)
    app.put('/user/:id', user.update)
    app.delete('/user/:id', user.delete)

    //index.html
    app.get('/', function(req, res, next) {
        res.render('index', { title: 'express' })
    })
}


function controller_method(string) {


    // return func
}
