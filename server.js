const express = require('express')
const app = express()

app.post('/weather', (req, res) => {
    const zipcode = req.body
})

app.use(express.urlencoded({ encoded: true }))

app.listen(3000)