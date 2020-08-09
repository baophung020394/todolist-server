const express = require('express');
const userRouter = require('./routers/user');
const attandanceRouter = require('./routers/attandance');
const testRouter = require('./routers/test');
const cors = require('cors');
const bodyParser = require("body-parser");
const port = process.env.PORT
require('./config/db');

const app = express()

/* CORS */
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

// app.use(express.json())

app.use(testRouter)
// app.use(userRouter)
// app.use(attandanceRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})