var express = require('express');
var router = express.Router();

require('dotenv').config();

const reports = require('../models/reports.js');
const auth = require('../models/auth.js');

router.get("/", (req, res) => {
    reports.getAllReports(req, res);
});

router.get("/week/:week", (req, res) => {
    reports.getReport(req, res);
});

router.put("/",
    (req, res, next) => auth.checkToken(req, res, next),
    (req, res) => reports.updateReport(res, req)
);

router.post("/",
    (req, res, next) => auth.checkToken(req, res, next),
    (req, res) => reports.createReport(res, req)
);

module.exports = router;
