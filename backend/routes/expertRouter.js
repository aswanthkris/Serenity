const express = require('express')
const router = express.Router()
const { expertSignup, changeProfilePhoto, expertLogin, getExpert } = require('../controller/expertController')


router.post('/signup', expertSignup)
router.post('/photo-change', changeProfilePhoto)
router.post('/login', expertLogin)
router.post('/getExpert', getExpert)
module.exports = router