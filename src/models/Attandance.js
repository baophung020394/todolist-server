const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const attandanceSchema = mongoose.Schema({
    userId: {
        type: String
    },
    userName: {
        type: String
    },
    clockIn: {
        type: String
    },
    clockOut: {
        type: String
    },
    countryName: {
        type: String
    },
    latitude: {
        type: String
    },
    longitude: {
        type: String
    },
    avatar: {
        type: String
    }
})


const Attandance = mongoose.model('Attandance', attandanceSchema)

module.exports = Attandance   