const path = require('path')

const express = require('express')
const Router = express.Router

const jsonServer = require('json-server')
const {
    authMiddleware,
    protect
} = require('./auth')
const uploadMiddleware = require('./upload')

const settings = {
    port: process.env.PORT || 8080,
    database: 'db.json',
    jwt: {
        secret: '123456789',
        algorithm: 'HS256',
        // Valid one day
        lifetime: 60 * 60 * 24,
        cookieKey: 'lpmiaw-react-auth-token'
    },
    upload: {
        uploadDir: path.join(
            __dirname,
            '../../public/uploads'
        ),
        baseUrl: '/uploads/'
    }
}

const jsonServerRouter = jsonServer.router(settings.database)
const middlewares = jsonServer.defaults()

const app = express()

const apiRouter = Router()
    .use(authMiddleware(settings))
    .use(uploadMiddleware(settings.upload))
    .use(jsonServerRouter)

app
    // Set default middlewares (logger, static, cors and no-cache)
    .use(middlewares)
    .use(jsonServer.bodyParser)
    .use('/api', apiRouter)


app.listen(settings.port)