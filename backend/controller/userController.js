const UserSignup = require('../model/userModel')
const ExpertList = require('../model/expertModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const sendMail = require('../controller/sendMail')

const { CLIENT_URL } = process.env.CLIENT_URL

//add new user details
const createUser = async (req, res) => {
    const userDetails = req.body
    const validation = { userExist: false }
    // console.log("entered in body", userDetails);
    //add doc to db
    try {
        const { name, email, password } = req.body
        const userValidation = await UserSignup.findOne({ email: userDetails.email })
        if (userValidation) {
            validation.userExist = true
            let existingUser = 'Existing user'
            console.log("user existsssss");
            res.status(400).json({ status: "User already exist", data: existingUser })
        } else {
            const passwordHash = await bcrypt.hash(password, 12)
            // console.log(password, passwordHash);
            const newUser = {
                name, email, password: passwordHash
            }
            console.log("newuser", newUser);
            const activationToken = createActivationToken(newUser)
            const url = `${CLIENT_URL}/user/activate/${activationToken}`
            sendMail(email, url)
            console.log(activationToken);
            const user = await UserSignup.create(userDetails)
            console.log("user created");
            res.status(200).json({ user, mssg: "User registered. Please activate your account to start " })
        }

    } catch (error) {
        console.log("in this catch");
        res.status(400).json({ error: error.message })
        console.log(error);
    }

}
const createActivationToken = (payload) => {
    return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, { expiresIn: '5m' })
}
const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' })
}
const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' })
}

//verify user login 
const loginUser = async (req, res) => {

    let validation = {
        userLog: false,
        passErr: false,
        invalidUser: false
    }

    const userDetails = req.body.value
    console.log(userDetails);

    try {
        const userValidation = await UserSignup.findOne({ email: userDetails.email })
        if (userValidation) {
            if (userDetails.password === userValidation.password) {
                validation.userLog = true
                const token = jwt.sign({
                    user: userValidation.name,
                    email: userValidation
                }, 'secret123')
                let errMessage = "Logged in"
                res.json({ token, data: errMessage, user: userValidation })
                console.log("user logged in");
            } else {
                validation.passErr = true
                let errMessage = "Password Incorrect"
                res.json({ status: "Wrong email or password", data: errMessage })
            }
        } else {
            validation.invalidUser = true
            let errMessage = "Invalid User"
            res.json({ status: "Wrong email or password", data: errMessage })
        }
    } catch (error) {
        console.log("inside catch");
        res.status(400).json({ error: error.message })
    }

}

//get experts list

const expertsList = async (req, res) => {
    const experts = await ExpertList.find()
    try {
        if (experts) {
            res.json({ data: experts })
        } else {
            res.status(400).json({ data: "no data found" })
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}
//Get a single expert

const expertProfile = async (req, res) => {
    console.log("req", req.body);
    try {
        const expert = await ExpertList.findOne({ _id: req.body.id })
        console.log(expert);
        res.json({ status: "got expert", expert })
    } catch (error) {
        res.json({ error: error.message })
    }
}

//filter experts

const filterExpert = async (req, res) => {
    const filterDetails = req.body
    console.log("filter details", filterDetails);
    try {
        const expert = await ExpertList.find({
            "language": {
                "$in": [`${filterDetails.languages}`]
            },
            "specialization": {
                "$in": [`${filterDetails.specialization}`]
            },
            // "availableDate": {
            //     "$in": [`${filterDetails.availableDate}`]
            // }


        })
        console.log("expert", expert);
        res.json({ status: "filtered list", expert })
    } catch (error) {
        res.json({ error: error.message })
    }
}

//Payment success page

const paymentSuccess = (req, res) => {
    try {
        const redirectUrl = req.body.succesurl;
    } catch (err) {

    }
}

module.exports = {
    createUser,
    loginUser,
    expertsList,
    expertProfile,
    filterExpert,
    paymentSuccess
}       