const express = require('express')
const Todo = require('../src/models/Todo.model')
const router = express.Router()
const db = require('../config/db');

router.post('/addTodo', async(req, res) => {
    console.log(req.body)
    try {
        const todo = new Todo(req.body)
        await todo.save()
        res.status(201).send({ todo })
    } catch (error) {
        res.status(400).send(error)
    }

})

router.get('/listTodo', async(req, res) => {
    try {
        const todo = await Todo.find({})

        res.status(201).send({ todo })
    } catch (error) {
        res.status(400).send(error)
    }
})


module.exports = router