const express = require('express')
require('dotenv').config()
const db = require('./config/db')
const app = express()
const requestLog = require('./middleware/middleware')

//Import routes
const userRoutes = require('./routes/userRouter')
const adminRoutes = require('./routes/adminRouter')
const expertRoutes = require('./routes/expertRouter')

const cors = require('cors')

//mongoose
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);


//middlewares
app.use(express.json())
app.use(cors())
app.use(requestLog)

//routes
app.use('/user', userRoutes)
app.use('/admin', adminRoutes)
app.use('/expert', expertRoutes)


// //connect to server
const PORT = process.env.PORT


db.connectToDb((err) => {
    if (!err) {
        app.listen(PORT, () => {
            console.log(`Listening to port ${PORT}`);
        })

    } else {
        console.log(err);
    }
})