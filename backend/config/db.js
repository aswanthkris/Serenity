const mongoose = require('mongoose');
require('dotenv').config()
// const app = express()



//connect to server
const PORT = process.env.PORT

//database connection
const MONGO_URI = process.env.MONGO_URI




module.exports = {
    connectToDb: (cb) => {
        mongoose.connect(MONGO_URI)
            .then(() => {
                console.log("connected to db");
                return cb()
            })
            .catch((error) => {
                console.log(error);
            })
    }
}




