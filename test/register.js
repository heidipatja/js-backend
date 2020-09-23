/* global describe it */

process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app.js');

chai.should();

chai.use(chaiHttp);

describe('>>>REGISTER>>>', () => {
    describe('POST REGISTER NEW USER', () => {
        it('201 NEW USER ADDED', (done) => {
            chai.request(server)
                .post("/register")
                .send({
                    email: "new@test.se",
                    password: "newuser"
                })
                .end((err, res) => {
                    res.should.have.status(201);
                    done();
                    res.body.should.be.an("object");
                });
        });
    });
});
