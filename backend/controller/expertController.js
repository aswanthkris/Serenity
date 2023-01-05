
const expertModel = require('../model/expertModel')


// const validation = {
//     userExist
// }


const expertSignup = async (req, res) => {
    const expertDetails = req.body

    const expert = await expertModel.findOne({ email: expertDetails.email })
    try {
        if (expert) {
            res.json({ status: "user exists", message: "This email is already registered !" })
        } else {
            const savedExpert = await expertModel.create(expertDetails)
            res.status(200).json(savedExpert)
        }

    } catch (error) {
        res.status(400).json({ error: error.message })

    }

}












module.exports = { expertSignup }