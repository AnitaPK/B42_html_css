const express = require('express')
const app = express()
const port = 5001


// app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('public'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))