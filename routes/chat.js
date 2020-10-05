var express = require('express');
var router = express.Router();

const chat = require('../models/chat.js');
const dsn =  "mongodb://localhost:27017/chat";

router.get("/", async (req, res) => {
    try {
        let response = await chat.findInCollection(dsn, "chatlog", {}, {}, 0);
        res.json(response);
    } catch (err) {
        res.json(err);
    }
});

router.post("/", async (req, res) => {
    try {
        let response = await chat.insertCollection(dsn, "chatlog", req.body);
        res.json(response);
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;
