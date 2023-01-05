const express = require('express')
const router = express.Router()
const { expertSignup } = require('../controller/expertController')


router.post('/signup', expertSignup)


module.exports = router