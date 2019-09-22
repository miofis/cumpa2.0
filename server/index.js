const { server } = require('./api')
const { PORT } = require('./config')
const { log } = require('./util')

server.listen(PORT, () => {
  log(`server listening in port ${PORT}`)
})
