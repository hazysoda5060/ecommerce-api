const express = require('express')
const app = express()
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

app.get('/api/products', getProducts)

app.get('/api/products/:id', getProduct)


const port = 3064
app.listen(port, () => console.log(`server is listening on ${port}`))