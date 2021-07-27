const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const { json } = require('body-parser')

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

// database
let db = [
    {'1': {Nome: 'Cliente 1', Idade: '20'}},
    {'2': {Nome: 'Cliente 2', Idade: '20'}},
    {'3': {Nome: 'Cliente 3', Idade: '20'}},
]

// Recover data in db
app.get('/', (req, res) => {
    return res.json(db)
})

// Insert data in db
app.post('/add', (req, res) => {
    const body = req.body

    if(!body){
        return res.status(400).end()
    }

    db.push(body)
    return res.json(body)
})

app.listen(3000, () => {
    console.log(`Express started at http://localhost:3000`)
})