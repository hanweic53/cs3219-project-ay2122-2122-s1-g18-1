const cors = require('cors')
const dotenv = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')

const routes = require('./src/routes')

const app = express()
const port = process.env.PORT || 8000

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.json({
    status: 'healthy'
  })
})

app.use('/api', routes)

app.listen(port, () => {
  console.log('Running on port', port)
})

dotenv.config()
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })

module.exports = app
