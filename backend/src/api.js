const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const { Strategy } = require('passport-local')
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const { db } = require('./model')

const sessionStore = new SequelizeStore({ db })
sessionStore.sync()

// TODO: configure passport strategy

// TODO: implement user serialization and deserialization

const api = express.Router()
const server = express()
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(cors())
server.use(session({
    // TODO: change secret
    secret: 'keyboard cat',
    store: sessionStore,
    resave: false,
    proxy: true
}))
server.use(passport.initialize())
server.use(passport.session())

api.get('/health', (req, res) => {
    res.json({
        message: 'ok'
    })
})

// TODO: uncomment after strategy is implemented
// api.post('/login', passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/login'
// }))

server.use('/api', api)

module.exports = {
    server
}
