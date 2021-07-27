const express = require('express')
const routes = express.Router()

// database
let db = [
    {'1': {Nome: 'Cliente 1', Idade: '20'}},
    {'2': {Nome: 'Cliente 2', Idade: '20'}},
    {'3': {Nome: 'Cliente 3', Idade: '20'}},
]

// Recover data in db
routes.get('/', (req, res) => {
    return res.json(db)
})

// Insert data in db
routes.post('/add', (req, res) => {
    const body = req.body

    if(!body){
        return res.status(400).end()
    }

    db.push(body)
    return res.json(body)
})

module.exports = routes