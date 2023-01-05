const adminModel = require('../model/adminModel')
const expertModel = require('../model/expertModel')
const jwt = require('jsonwebtoken')

//admin login
const adminLogin = async (req, res) => {


    const validation = {
        adminLog: false,
        passErr: false,
        invalidAdmin: false
    }


    const adminDetails = req.body
    const admin = await adminModel.findOne({ name: adminDetails.name })
    try {
        if (admin) {
            if (admin.password === adminDetails.password) {
                validation.adminLog = true
                const token = jwt.sign({
                    name: admin.name
                }, "secret123")
                res.json({ token, loggedIn: validation.adminLog })
            } else {
                validation.passErr = true
                res.json({
                    passErr: validation.passErr, message: "The entered password is wrong"
                })
            }
        } else {
            validation.invalidAdmin = true
            res.json({
                nameErr: validation.invalidAdmin, message: "There is no such Admin exists"
            })
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

//Approve expert signup

const approveExpert = async (req, res) => {
    const expertDetails = req.body
    try {
        const expert = await expertModel.findOneAndUpdate({ _id: expertDetails._id }, { approved: true })
        try {
            if (expert) {
                res.json({ data: expert, message: "Expert has been approved" })
            }
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

    // console.log(expert);
}
const blockExpert = async (req, res) => {
    const expertDetails = req.body
    try {
        const expert = await expertModel.findOneAndUpdate({ _id: expertDetails._id }, { block: true })
        try {
            if (expert) {
                res.json({ data: expert, message: "Expert has been blocked" })
            }
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    } catch (error) {
        res.status(400).json({ error: error.message })

    }

}

module.exports = {
    adminLogin,
    approveExpert,
    blockExpert
} 