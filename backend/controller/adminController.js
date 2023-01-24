const adminModel = require('../model/adminModel')
const expertModel = require('../model/expertModel')
const userModel = require('../model/userModel')
const jwt = require('jsonwebtoken')

//admin login
const adminLogin = async (req, res) => {


    const validation = {
        adminLog: false,
        passErr: false,
        invalidAdmin: false
    }


    const adminDetails = req.body

    try {
        const admin = await adminModel.findOne({ name: adminDetails.name })
        if (admin) {
            if (admin.password === adminDetails.password) {
                // console.log("in log");
                validation.adminLog = true
                const adminToken = jwt.sign({
                    name: admin.name
                }, "secret123")
                res.json({ adminToken, loggedIn: validation.adminLog })
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
    const expertId = req.body.expertId

    try {

        const expert = await expertModel.findOneAndUpdate({ _id: expertId }, { approved: true })
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

//Block Expert
const blockExpert = async (req, res) => {
    const expertId = req.body.expertId
    try {
        const expert = await expertModel.findOneAndUpdate({ _id: expertId }, { approved: false })
        try {
            if (expert) {
                res.json({ data: expert, message: "Expert approval revoked" })
            }
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    } catch (error) {
        res.status(400).json({ error: error.message })

    }

}



//Get all experts
const getExperts = async (req, res) => {
    // console.log("here in backend");
    try {
        const response = await expertModel.find().sort({ approved: 1 })
        res.status(200).json({ data: response })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


//Block User
const blockUser = async (req, res) => {
    const userId = req.body.userId
    // console.log("userId", userId);
    try {
        // console.log("try1");

        const user = await userModel.findOneAndUpdate({ _id: userId }, { block: true })
        // console.log("user after block", user);

        try {
            // console.log("try2");

            if (user) {
                console.log("ifffffff");

                res.json({ data: user, message: "User has been blocked" })
            }
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    } catch (error) {
        res.status(400).json({ error: error.message })

    }

}

//unblock User
const unblockUser = async (req, res) => {
    console.log("inside unblock backend")
    const userId = req.body.userId
    try {
        const user = await userModel.findOneAndUpdate({ _id: userId }, { block: false })
        try {
            if (user) {
                res.json({ data: user, message: "User has been un-blocked" })
            }
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    } catch (error) {
        res.status(400).json({ error: error.message })

    }

}

const getUsers = async (req, res) => {
    console.log("inside get users");
    try {

        const response = await userModel.find().sort({ block: 1 })
        res.status(200).json({ data: response })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports = {
    adminLogin,
    approveExpert,
    blockExpert,
    getExperts,
    blockUser,
    unblockUser,
    getUsers
} 