const next = require('next')
const { server } = require('./api')
const { log } = require('./util')

const PORT = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  server.use((req, res) => handle(req, res))
  server.listen(PORT, () => {
    log(`server listening in port ${PORT}`)
  })
})
