const user = require('../controller/user.js')

module.exports = [{
    user: [
        ['get', '/', user.find],
        ['get', '/:id', user.findOne],
        ['post', '/', user.create],
        ['put', '/:id', user.update],
        ['delete', '/', user.delete],
    ]
}]
