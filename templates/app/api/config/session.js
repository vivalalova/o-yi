const session = require('express-session')

const option = {
    secret: 'zZJ1T4cvgZZAG4zfTgyZH3ddsnlxHiZSTOcXFWGFXYINfEQESlqNrDzd3HUO',
    cookie: { maxAge: 86400 * 1000 },
    resave: false,
    saveUninitialized: false
}


module.exports = session(option)