const express = require('express');
const db = require("./db/connection");
const usersRouter = require('./src/routes/users');
const showsRouter = require('./src/routes/shows');

const port = 3000;
const app = express();

app.use(express.json());

app.use('/users', usersRouter);
app.use('/shows',showsRouter);


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/moviestheater`)
})