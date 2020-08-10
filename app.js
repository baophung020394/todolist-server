const express = require('express');
const todoRouter = require('./routers/todo');
const cors = require('cors');
const bodyParser = require("body-parser");
const port = process.env.PORT
require('./config/db');

const app = express()

/* CORS */
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

// app.use(express.json())

app.use(todoRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})