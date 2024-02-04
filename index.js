require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require ("cors")

const app = express()

// External Route
const userRoutes = require('./routes/user')

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cors())

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

let db = mongoose.connection
db.once('open', () => console.log("Now connected to the Database"))

// Backend route
app.use('/users', userRoutes)

if (require.main === module) {
    app.listen(process.env.PORT, () => {
        console.log(`API is now online on port ${process.env.PORT}`)
    })
}

module.exports = app