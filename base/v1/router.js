const router = require('express').Router()

const root = require('./routes/index')

router.get('/', root)

module.exports = router
