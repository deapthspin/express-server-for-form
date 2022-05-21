const express = require('express')
const bodyParser = require('body-parser')
const mongoPractice = require('./mongo')


const app = express()

app.use(bodyParser.json())

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE')
    next()
})

app.post('/poops', mongoPractice.createPoop)
app.get('/poops', mongoPractice.getPoops)
app.post('/forms', mongoPractice.createQ)
app.get('/forms', mongoPractice.getQ)
app.delete('/forms/:id', mongoPractice.deleteQ)

app.listen(6969)