const express = require('express')
const app = express()
require('dotenv').config();

const productRoute = require('./routes/productRoute')


const port = process.env.PORT


app.use(express.json());

app.use('/api/product', productRoute);


// add route for category

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// http://localhost:7000/api/product/