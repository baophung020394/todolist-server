const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    id: {
        type: String
    },
    todoName: {
        type: String
    },
   
})


const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo   