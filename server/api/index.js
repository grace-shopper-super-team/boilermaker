const router = require('express').Router()

// router.use('/bla', require('./bla))


// handle 404s
router.use(function (req, res, next) {
  const err = new Error('Not found.')
  err.status = 404
  next(err)
})

module.exports = router
