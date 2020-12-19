// sapp.js

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Containerized Node.js app running on EC2</h1>')
})

app.listen(3000, () => {
    console.log('server started on port 3000')
})