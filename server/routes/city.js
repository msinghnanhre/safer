const express = require('express')
const router = express.Router()

const data = ['bc', 'on', 'ab']

router.post("/city", ((req, res) => {

    const city = data.filter(item => {
        console.log(typeof req.body.city)
    });
    res.status(200).json(`You choose`)
}))

module.exports = router;