

module.exports = [{
    user: [
        ['get', '/', 'find'],
        ['get', '/:id', 'findOne'],
        ['post', '/', 'create'],
        ['put', '/:id', 'update'],
        ['delete', '/', 'delete'],
    ]
}]
