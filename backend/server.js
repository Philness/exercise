//define the middleware and app
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000
const uri = process.env.ATLAS_URI
const connection = mongoose.connection

//tell the app to use the middleware
app.use(cors()) 
app.use(express.json())
mongoose.connect(uri,{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
//{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
connection.once('open', () => {
    console.log('mongo atlas database connection is doing a-okay.')
})

//add the files for the CRUD routes
const exercisesRouter = require("./routes/exercises.js")
const usersRouter = require("./routes/users.js")
app.use("/exercises", exercisesRouter)
app.use("/users", usersRouter)

app.listen(port, () =>{
    console.log(`we are LIVE on port ${port}, mon capitan!`)
})