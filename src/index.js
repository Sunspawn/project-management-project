const express = require('express')
const port = process.env.PORT || 3000
const app = express()

app.get('/', (req, res) => {
    res.send('Hello, World!')
})

app.get('/profile', (req, res) => {
    res.send('profile page')
})

app.listen(port, () => {
    console.log(`Server is up and running at: http://127.0.0.1:${port}`)
})