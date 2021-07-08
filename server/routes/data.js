const express = require('express')
const router = express.Router()
//data file
const data = require('../data/data.json')

//filter data based on method of breach
let email = []
let networkServer = []
let others = []

let dataBasedOnBreach = [email, networkServer ,others]

data.map(item => {
    if (item.Location === "Email") {
        email.push(item)
    } else if (item.Location === "Network Server") {
        networkServer.push(item)
    } else {
        others.push(item)
    } 
})

router.get("/data", ((req, res) => {
    res.status(200).json(data)
}))


// get data based on breach method
router.get("/data/breach", ((req, res) => {
    res.status(200).json(dataBasedOnBreach)
}))




module.exports = router;