// app
const express = require('express')
const app = express()


// logging middleware
const volleyball = require('volleyball')
app.use(volleyball)

// static middleware
const path = require('path')
app.use(express.static(path.join(__dirname, '../public')))

// parsing middlware
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

// session middleware
const session = require('express-session');

app.use(session({
  secret: process.env.SESSION_SECRET || 'a wildly insecure secret',
  resave: false,
  saveUninitialized: false
}));


//routes
app.use('/api', require('./api'))

// AT THE END OF ALL ROUTES
// send Index HTML
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public'))
})

// AT THE VERY END
// handle 500s
app.use(function (err, req, res, next) {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

module.exports = app
