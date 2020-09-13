const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/texts.sqlite');

const reports = {
    getReport: function(req, res) {
        let sql = 'SELECT * FROM reports WHERE week = ' + req.params.week;

        db.get(sql, function(err, row) {
            if (err) {
                return res.status(500).json({
                    error: {
                        status: 500,
                        source: "GET /reports/week/:week",
                        title: "Database error 500",
                        detail: err.message
                    }
                });
            }
            return res.status(200).json({
                data: row
            });
        });
    },

    getAllReports: function(req, res) {
        let sql = 'SELECT * FROM reports';

        db.all(sql, function(err, rows) {
            if (err) {
                return res.status(500).json({
                    error: {
                        status: 500,
                        source: "GET /reports",
                        title: "Database error 500",
                        detail: err.message
                    }
                });
            }
            return res.status(200).json({
                data: rows
            })
        })
    },

    updateReport: function(res, req) {
        let sql = 'UPDATE reports SET content = ? WHERE week = ?';

        db.run(sql, req.body.content, req.body.week, function(err) {
            if (err) {
                return res.status(500).json({
                    errors: {
                        status: 500,
                        source: "POST /reports/update",
                        title: "Database error 500",
                        detail: err.message
                    }
                })
            }
            return res.status(204).send();
        });
    },

    createReport: function(res, req) {
        let sql = 'INSERT INTO reports (week, content) VALUES (?, ?)';

        db.run(sql, req.body.week, req.body.content, function(err) {
            if (err) {
                return res.status(500).json({
                    errors: {
                        status: 500,
                        source: "POST /reports/create",
                        title: "Database error 500",
                        detail: err.message
                    }
                })
            }
            return res.status(201).send();
        });
    }
}

module.exports = reports;
