const express = require('express')

const app = express()
const config = require('./config/server')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

require('./routes/UserRoute')(app)

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Index'
    })
})

app.listen(config.port, () => {
    console.log(`Server start at: ${config.port}`)
})