const express = require('express')
const app = express()
const cors = require('cors')

const cityRoute = require("./routes/city")

//port
require("dotenv").config();
const port = process.env.PORT || 8080

//middleware
app.use(express.json())
app.use(express.static("public"))
app.use(cors())


//data routes goes here
app.use("/api", cityRoute)

app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})