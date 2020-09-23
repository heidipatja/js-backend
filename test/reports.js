/* global describe it */

process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app.js');
let token = "";

chai.should();

chai.use(chaiHttp);

describe('>>>REPORT>>>', () => {
    describe('GETTING ALL REPORTS', () => {
        it('200 HAPPY PATH', (done) => {
            chai.request(server)
                .get("/")
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('GET REPORT', () => {
        it('200 HAPPY PATH', (done) => {
            chai.request(server)
                .get("/reports/week/1")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    done();
                });
        });
    });

    describe('GET DB COLUMN THAT DOES NOT EXIST', () => {
        it('500 NO SUCH COLUMN', (done) => {
            chai.request(server)
                .get("/reports/week/hej")
                .end((err, res) => {
                    res.should.have.status(500);
                    res.body.should.be.an("object");
                    done();
                });
        });
    });

    describe('GET REPORT THAT DOES NOT EXIST', () => {
        it('404 WEEK DOES NOT EXIST', (done) => {
            chai.request(server)
                .get("/reports/week/87")
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.be.an("object");
                    done();
                });
        });
    });

    describe('PUT ADD NEW REPORT', () => {
        it('500 SAD PATH NO TOKEN', (done) => {
            chai.request(server)
                .put("/reports")
                .send({
                    week: 1,
                    content: "Updated text."
                })
                .end((err, res) => {
                    res.should.have.status(500);
                    done();
                });
        });
    });

    describe('PUT UPDATE REPORT', () => {

        it('LOGGING IN', (done) => {
            chai.request(server)
                .post("/login")
                .send({
                    email: "test@test.se",
                    password: "test"
                })
                .end((err, res) => {
                    token = res.body.data.token;
                    done();
                });
        });

        it('200 HAPPY PATH HAS TOKEN', (done) => {
            chai.request(server)
                .put("/reports")
                .set("x-access-token", token)
                .send({
                    week: 1,
                    content: "Updated text."
                })
                .end((err, res) => {
                    res.should.have.status(204);
                    done();
                });
        });
    });

    describe('POST ADD NEW REPORT', () => {

        it('LOGGING IN', (done) => {
            chai.request(server)
                .post("/login")
                .send({
                    email: "test@test.se",
                    password: "test"
                })
                .end((err, res) => {
                    token = res.body.data.token;
                    done();
                });
        });

        it('200 HAPPY PATH NEW POST', (done) => {
            chai.request(server)
                .post("/reports")
                .set("x-access-token", token)
                .send({
                    week: 11,
                    content: "New text."
                })
                .end((err, res) => {
                    res.should.have.status(201);
                    done();
                });
        });
    });

    describe('GET ALL REPORTS', () => {

        it('200 HAPPY PATH GOT ALL POSTS', (done) => {
            chai.request(server)
                .get("/reports")
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
});
