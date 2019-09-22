const express = require('express')
const bodyParser = require('body-parser')
const next = require('next')
const { api } = require('./api')
const { log } = require('./util')

const PORT = process.env.PORT || 3000

const server = express()
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    server.use(bodyParser.json())
      .use('/api', api)
      .use((req, res) => handle(req, res))
      .listen(PORT, () => {
        log(`server listening in port ${PORT}`)
      })
  })
