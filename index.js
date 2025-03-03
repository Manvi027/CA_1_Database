const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());


const port = 8080;

app.listen(port,() => {
    console.log(`server running at $[port]`);
})

