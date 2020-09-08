var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    const data = {
        data: {
            msg: "reports get"
        }
    };
    res.json(data);
});

router.get("/week/:kmom", (req, res) => {
    const data = {
        data: {
            week: "1",
            content: "hej från backend"
        }
    };

    res.json(data);
});

// router.post("/",
//     (req, res, next) => checkToken(req, res, next),
//     (req, res) => reports.addReport(res, req.body));
//
// function checkToken(req, res, next) {
//     const token = req.headers['x-access-token'];
//
//     jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
//         if (err) {
//             // send error response
//         }
//
//         // Valid token send on the request
//         next();
//     });
// }

module.exports = router;
