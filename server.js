const express = require('express')
const path = require('path')

const app = express()

const Rollbar = require('rollbar')

const rollbar = new Rollbar({
  accessToken: '6ca14f4626c44b0d97c92239ae6bb5f8', 
  captureUncaught: true, 
  captureUnhandledRejections: true,

})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/index.html'))
  rollbar.info('Html was monitored successfully')
})

const port = process.env.PORT || 5656

app.use(rollbar.errorHandler())

app.listen(port, () => console.log(`Hippity Hoppity your server is poppening on port: ${port}`))
