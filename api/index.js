const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("connected to the DB.");
        // listen to 
        app.listen(process.env.PORT, () => {
            console.log("listening for requests on port", process.env.PORT);
        })
    })
    .catch((err) => {
        console.log(err);
    })

module.exports = app