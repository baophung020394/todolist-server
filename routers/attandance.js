const express = require('express')
const Attandance = require('../src/models/Attandance')
const router = express.Router()
const db = require('../config/db');

router.get('/list', async (req, res) => {
    console.log(req.body)
    try {
        const attandances = await Attandance.find({})

        res.status(201).send({ attandances })
    } catch (error) {
        res.status(400).send(error)
    }
})
/** Create attandances */
router.post('/attandances', async(req, res) => {
    //Login a registered user
    console.log(req.body)
    try {
        const attandance = new Attandance(req.body)
        await attandance.save()
        res.status(201).send({ attandance })
    } catch (error) {
        res.status(400).send(error)
    }

})


module.exports = router