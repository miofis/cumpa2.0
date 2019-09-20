const express = require('express')
const api = express.Router()

api.get('/health', (req, res) => {
  res.json({
    message: 'ok'
  })
})

module.exports = {
  api
}
