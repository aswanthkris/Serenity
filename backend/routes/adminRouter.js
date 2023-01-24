const express = require('express')
const router = express.Router()
const { adminLogin, approveExpert, blockExpert, getExperts, blockUser, unblockUser, getUsers } = require('../controller/adminController')


router.post('/login', adminLogin)
router.post('/approve-expert', approveExpert)
router.post('/block-expert', blockExpert)
router.post('/get-experts', getExperts)
router.post('/block-user', blockUser)
router.post('/unblock-user', unblockUser)
router.post('/get-users', getUsers)
module.exports = router 
