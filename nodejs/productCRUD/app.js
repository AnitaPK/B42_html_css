const express = require('express')
const app = express()
require('dotenv').config();

const productRoute = require('./routes/productRoute')
const categoryRoute = require('./routes/categoryRoute')


const port = process.env.PORT


app.use(express.json());

app.use('/api/product', productRoute);

app.use('/api/category',categoryRoute);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// http://localhost:7000/api/product/