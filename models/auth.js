// const db = new sqlite3.Database('./db/texts.sqlite');
const db = require("../db/db.js");

require('dotenv').config();

const bcrypt = require('bcryptjs');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

const auth = {
    register: function(res, req) {
        bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
            db.run('INSERT INTO users (email, password) VALUES (?, ?)',
                req.body.email,
                hash,
                (err) => {
                    if (err) {
                        return res.status(500).json({
                            errors: {
                                status: 500,
                                source: 'POST /register',
                                title: 'Database error',
                                detail: err.message
                            }
                        });
                    }
                    return res.status(201).json({
                        data: {
                            message: 'Created new user.'
                        }
                    });
                }
            );
        });
    },

    login: function(res, req) {
        const email = req.body.email;
        const password = req.body.password;

        let sql = 'SELECT * FROM users WHERE email = ?';

        db.get(sql, email, (err, rows) => {
            if (err) {
                return res.status(500).json({
                    errors: {
                        status: 500,
                        source: 'POST /login',
                        title: 'Database error',
                        detail: err.message
                    }
                });
            }
            if (rows === undefined) {
                return res.status(401).json({
                    errors: {
                        status: 401,
                        source: 'POST /login',
                        title: 'Did not match any user information in the database',
                    }
                });
            }

            bcrypt.compare(password, rows.password, (err, result) => {
                if (result) {
                    let token = jwt.sign({ email: rows.email }, secret, { expiresIn: '1h'});

                    return res.json({
                        data: {
                            email: rows.email,
                            token: token
                        }
                    });
                }
                return res.status(401).json({
                    errors: {
                        status: 401,
                        source: 'POST /login',
                        detail: 'Wrong password'
                    }
                })
            });
        });
    },

    checkToken: function(req, res, next) {
        const token = req.headers['x-access-token'];

        jwt.verify(token, secret, function(err) {
            if (err) {
                return res.status(500).json({
                    errors: {
                        status: 500,
                        source: "Reports check token",
                        title: "Authentication failed",
                        detail: err.message
                    }
                });
            }
            next();
        });
    }
};

module.exports = auth;
