// DEPENDENCIES
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const cors = require('cors')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.use(cors())

// CONTROLLERS
app.use('/hobbies', require('./controller/hobby'))
app.use('/events', require('./controller/events'))
app.use('/locations', require('./controller/locations'))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`)
})