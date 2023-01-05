const express = require('express')
const { createUser, loginUser, expertsList, expertProfile, filterExpert } = require('../controller/userController')
const router = express.Router()

//user signup
router.post('/', createUser)
router.post('/login', loginUser)
router.get('/experts-list', expertsList)
router.post('/expert-profile', expertProfile)
router.post('/filter-expert', filterExpert)



module.exports = router       