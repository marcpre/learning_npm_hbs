require('dotenv').config()
const express = require('express')
const logger= require('morgan')
const path = require('path')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.use(logger(process.env.LOG_ENV))

app.get('/', (req, res) => {
    const titel = "This is a titel"
    const body = "Lorem ipsum dolor sit amen ..."
    const list = ['apple', 'banana', 'vegetable']
    const htmlTag = '<h2>This is an unescaped Heading</h2>'
    const user = {
    admin: true
  }
    res.render('index',{titel, body, list, htmlTag, user})
})


// Start Server
const port = process.env.APP_PORT || 8080
const host = process.env.APP_URL || '0.0.0.0'

app.listen(port, host, () => {
    console.log(`Listening on ${host}:${port}/`)
})

module.exports = app
