var express = require('express');
var router = express.Router();

const me = require('../models/me.js');

router.get("/", (req, res) => {
    me.getPresentation(req, res);
});

module.exports = router;
