let session = require('express-session')

module.exports = session({
    secret: 'zZJ1T4cvgZZAG4zfTgyZH3ddsnlxHiZSTOcXFWGFXYINfEQESlqNrDzd3HUO',
    cookie: { maxAge: 86400 * 1000 },
    resave: false,
    saveUninitialized: false
})