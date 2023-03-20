const router = require('express').Router()

const rootController = require('../controllers/index')

router.get('/', rootController.sayHi)

module.exports = router
