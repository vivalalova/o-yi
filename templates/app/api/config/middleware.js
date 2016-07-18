const middleware = {
    'body-parser': [
        ['json'],
        ['urlencoded', { extended: false }],
    ],
    'cookie-parser': [],
}

module.exports = function(app) {

    Object.keys(middleware).forEach(function(key) {
        const array = middleware[key]
        array.forEach(function(value) {
            let module = require(key)
            if (value.length == 1) {
                module = module[value[0]]()
            } else {
                const param = []
                for (let i = 1; i < value.length; i++) {
                    param.push(value[i])
                }
                module = module[value[0]].apply(this, param)
            }
            app.use(module)
        })
    })
}
