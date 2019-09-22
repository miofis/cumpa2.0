const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const { Strategy } = require('passport-local')
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const { db } = require('./model')

const sessionStore = new SequelizeStore({ db })
sessionStore.sync()

passport.use(new Strategy(
  ((username, password, done) => {
    if (!username) {
      return done(null, false, { message: 'Incorrect username' })
    }
    if (password !== 'secret') {
      return done(null, false, { message: 'Incorrect password' })
    }

    return done(null, { username })
  })
))

passport.serializeUser((user, done) => {
  done(null, user.username)
})

passport.deserializeUser((id, done) => {
  done(null, { username: id })
})

const api = express.Router()
const server = express()
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(session({
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

api.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}))

api.post('/logout', (req, res) => {
  if (req.user) {
    return req.session.destroy(() => {
      res.redirect('/')
    })
  }
  return res.redirect('/')
})

api.get('/user/me', (req, res) => res.json({
  user: req.user
}))

server.use('/api', api)

module.exports = {
  server
}
