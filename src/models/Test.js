const mongoose = require('mongoose')

const testSchema = mongoose.Schema({
    testId: {
        type: String
    },
    testName: {
        type: String
    },
   
})


const Test = mongoose.model('Test', testSchema)

module.exports = Test   