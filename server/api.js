const express = require('express')
const bodyParser = require('body-parser')

const api = express.Router()
const server = express()
server.use(bodyParser.json())

api.get('/health', (req, res) => {
  res.json({
    message: 'ok'
  })
})

server.use('/api', api)

module.exports = {
  server
}
