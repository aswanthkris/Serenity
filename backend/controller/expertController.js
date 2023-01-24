
const expertModel = require('../model/expertModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// const validation = {
//     userExist
// }


const expertSignup = async (req, res) => {
    const expertDetails = req.body
    console.log("req.body is", expertDetails);
    const expert = await expertModel.findOne({ email: expertDetails.email })
    try {
        if (expert) {
            let existingUser = 'Existing user'
            res.status(400).json({ status: "User already exist", data: existingUser })
        } else {
            const savedExpert = await expertModel.create(expertDetails)
            res.status(200).json(savedExpert)
        }

    } catch (error) {
        res.status(400).json({ error: error.message })

    }

}

const expertLogin = async (req, res) => {
    let validation = {
        userLog: false,
        passErr: false,
        invalidUser: false
    }

    const expertDetails = req.body.value
    console.log(expertDetails);

    try {
        const expertValidation = await expertModel.findOne({ email: expertDetails.email })
        console.log(expertValidation);
        if (expertValidation) {
            if (expertDetails.password === expertValidation.password) {

                validation.userLog = true
                const token = jwt.sign({
                    user: expertValidation.name,
                    email: expertValidation
                }, 'secret123')
                let errMessage = "Logged in"
                res.status(200).json({ token, data: errMessage, expert: expertValidation })



            } else {
                validation.passErr = true
                let errMessage = "Password Incorrect"
                console.log("incorrect password");

                res.json({ status: "Wrong email or password", data: errMessage })
            }
        } else {
            validation.invalidUser = true
            let errMessage = "Invalid Expert"
            console.log("Invalid Expert")
            res.json({ status: "Wrong email or password", data: errMessage })
        }
    } catch (error) {
        console.log("in error", error);
        res.status(400).json({ error: error.message })
    }

}

const changeProfilePhoto = async (req, res) => {
    try {
        // console.log(req.body.url)
        const imageUrl = req.body.url
        const user = req.body.email
        const response = await expertModel.updateOne({ email: user }, {
            $set: {
                image: imageUrl
            }
        })
        res.status(200).json({ response })

    } catch (error) {
        res.status(400).json({ error: error.message })

    }
}


const getExpert = async (req, res) => {
    const email = req.body
    try {
        const response = await expertModel.findOne({ email: email.expertEmail })
        const expert = response
        console.log("response  is : ", expert);

        res.status(200).json({ expert })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}








module.exports = { expertSignup, changeProfilePhoto, expertLogin, getExpert }