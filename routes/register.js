var express = require('express');
var router = express.Router();

const auth = require('../models/auth.js');

router.post('/', function(req, res) {
    auth.register(res, req);
});

module.exports = router;
