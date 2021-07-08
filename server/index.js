const express = require('express')
const app = express()
const cors = require('cors')

//port
require("dotenv").config();
const port = process.env.PORT || 8080

//middleware
app.use(express.json())
app.use(express.static("public"))
app.use(cors())


//data routes goes here


app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})