let beforeAction = require('../beforeAction/beforeAction.js')

let user = require('../controller/user.js')

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
    app.get('/', function(req, res,next) {
        res.render('index', { title: 'express' })
    })
}



let route = [
    '/user,user.find',
    '/user/:id,user.findOne',
    '/user,user.create',
    '/user/:id,user.update',
    '/user/:id,user.delete'
]
