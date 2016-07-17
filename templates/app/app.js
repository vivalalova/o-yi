let express = require('express')
let path = require('path')
let favicon = require('serve-favicon')
let logger = require('morgan')
let cookieParser = require('cookie-parser')
let session = require('./api/config/session.js')
let bodyParser = require('body-parser')
let env = require('./api/config/env.js')
let app = express()

// view engine setup
app.set('views', path.join(__dirname, 'api/views'))
app.set('view engine', 'ejs')

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

if (env.isDevelopment === true) {
    app.use(logger('dev'))
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(session)

require('./api/config/route.js')(app)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found')
    err.status = 404
    next(err)
})

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500)

        return res.send({
            message: err.message,
            error: err
        })
    })
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    res.send({
        message: err.message,
        error: {}
    })
})


module.exports = app
