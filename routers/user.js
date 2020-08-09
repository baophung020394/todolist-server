const express = require('express')
const User = require('../src/models/User')

const router = express.Router()


/** List Users */
router.get('/list-user', async (req, res) => {
    console.log(req.body)
    try {
        const users = User.find()

        res.status(201).json({ users })
    } catch (error) {
        res.status(400).send(error)
    }
})
/** List Users */
router.post('/users', async (req, res) => {
    // Create a new user
    try {
        const user = new User(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
})

/** Login */
router.post('/users/login', async(req, res) => {
    //Login a registered user
    try {
        const { email, password } = req.body
        const user = await User.findByCredentials(email, password)
        if (!user) {
            return res.status(401).send({error: 'Login failed! Check authentication credentials'})
        }
        const token = await user.generateAuthToken()
        res.json({
            _id: user._id,
            email: user.email,
            name: user.name,
            location: user.location,
            users: user,
            tokens: token
         })
    } catch (error) {
        res.status(400).send(error)
    }

})

/** Update Users */
router.post('/users/update/:id', async ( req, res) => {
    console.log(req.body)
    try {
        let clockIn = req.body.clockIn;
        let clockOut = req.body.clockIn;
        let latitude = req.body.latitude;
        let longitude = req.body.longitude;
        let id = req.params.id
        const user = await User.findOneAndUpdate(
            { _id: id},
            { $set: { 
                clockIn: clockIn,
                clockOut: clockOut,
                longitude: longitude,
                latitude: latitude
            }}
        );
        if (!user) {
            return res.status(401).send({error: 'Update fail'});
        }
        res.json({
            users: user
         })
    } catch (error) {
        res.status(400).send(error)
    }
})
module.exports = router