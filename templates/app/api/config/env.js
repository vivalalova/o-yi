const db = process.env.DB || process.env.MONGODB_URI
const development = process.env.DEVELOPMENT
const port =  process.env.PORT

module.exports = {
    db: db || 'mongodb://localhost/o-yi',
    isDevelopment: development || true,
    port: port || 3000,
}


