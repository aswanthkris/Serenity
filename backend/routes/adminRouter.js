const express = require('express')
const router = express.Router()
const { adminLogin, approveExpert, blockExpert } = require('../controller/adminController')


router.post('/login', adminLogin)
router.post('/approve-expert', approveExpert)
router.post('/block-expert', blockExpert)
module.exports = router 
