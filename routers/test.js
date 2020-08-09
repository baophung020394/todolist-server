const express = require('express')
const Test = require('../src/models/Test')
const router = express.Router()
const db = require('../config/db');

router.post('/tests', async(req, res) => {
    console.log(req.body)
    try {
        const test = new Test(req.body)
        await test.save()
        res.status(201).send({ test })
    } catch (error) {
        res.status(400).send(error)
    }

})


module.exports = router