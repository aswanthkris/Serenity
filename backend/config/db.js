const mongoose = require('mongoose');
require('dotenv').config()
// const app = express()



//connect to server
const PORT = process.env.PORT

//database connection
const MONGO_URI = process




module.exports = {
    connectToDb: (cb) => {
        mongoose.connect('mongodb://localhost:27017/main_project')
            .then(() => {
                console.log("connected to db");
                return cb()
            })
            .catch((error) => {
                console.log(error);
            })
    }
}




