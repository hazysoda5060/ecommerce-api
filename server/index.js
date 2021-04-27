const express = require('express')
const app = express()
const getProducts = require('./getProducts')

app.get('/api/products', getProducts)


const port = 3064
app.listen(port, () => console.log(`server is listening on ${port}`))