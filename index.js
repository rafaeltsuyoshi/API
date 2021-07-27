const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./config/routes')

// initiate server
const app = express()

// add morgan for logs
app.use(morgan('dev'))

// add bodyParser
app.use(bodyParser.urlencoded({extended: false}))

// use json data
app.use(express.json())

// for security
app.use(cors({}))

// use routes
app.use(routes)

app.listen(3000, () => {
    console.log(`Express started at http://localhost:3000`)
})