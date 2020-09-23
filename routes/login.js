var express = require('express');
var router = express.Router();

const auth = require('../models/auth.js');

router.get('/', function(req, res) {
    const data = {
        data: {
            msg: "login page"
        }
    };

    res.json(data);
});

router.post('/', function(req, res) {
    auth.login(res, req);
});

module.exports = router;
