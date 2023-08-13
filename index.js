const express = require("express");
require("dotenv").config();
const { connection } = require("./config/db");
const { FormModel } = require("./config/models/formModel");
var cors = require('cors')
const app = express();

app.use(express.json());

app.use(cors())
app.post("/createform", async (req, res) => {
    try {
        console.log(req.body);
        await FormModel.insertMany(req.body);
        res.send({ "message": "Form is created successfully" });
    }
    catch (err) {
        res.send(err);
    }
})

app.get("/getform", async (req, res) => {
    try {
        let data = await FormModel.find().limit(1).sort({ $natural: -1 });
        res.send(data);
    }
    catch (err) {
        res.send(err);
    }
})


app.listen(process.env.Port, async () => {
    try {
        await connection;
        console.log("successfully connected to database");
    }
    catch (err) {
        console.log(err);
    }
    console.log(`Server is running on port ${process.env.Port}`);
})