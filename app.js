const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const proofController = require('./controllers/proof.js')

app.use(bodyParser.json())

app.post('/create', proofController.create)
app.post('/verify', proofController.verify)

app.get('/proof/:hash', proofController.get)

app.listen(3001, ()=>console.log('BB-PoE Started'))