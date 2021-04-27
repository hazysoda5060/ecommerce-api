const express = require('express')
const app = express()
const products = require('../products.json')

app.get('/api/products', (req, res) => {
    res.status(200).send(products)
})


const port = 3064
app.listen(port, () => console.log(`server is listening on ${port}`))