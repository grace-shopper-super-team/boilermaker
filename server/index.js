// app
const express = require('express')
const app = express()

// starting the server
const port = process.env.PORT || 3000
app.listen(port, function () {
  console.log('Knock, knock')
  console.log("Who's there?")
  console.log(`Your server, listening on port ${port}`)
})

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
