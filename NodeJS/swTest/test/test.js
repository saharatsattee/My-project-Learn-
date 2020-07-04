var supertest = require("supertest");
var api = supertest.agent("http://localhost:3000");
var should = require("should");
const expect = require('chai').expect;


describe('Testing unit test ATM Functions', () => {

//ATM Test 
    describe(' Deposit Test Project ATM normal function ', () => {
    it('Check an account number', done => {
      api
        .post('/api/deposit')
        .send({
          account : "rushy",
          password : "0000",
          deposit : 200
        })
        .expect("Content-type",/json/)
        .expect(200)
        .end((e, res) => {
          res.status.should.equal(500)
          res.body.should.have.property('message').eql('Not has a account number')
          // res.body.message.should.equal('OK')
          done()
        })
    })

    it('Check an Password', done => {
      api
        .post('/api/deposit')
        .send({
          account : "rush",
          password : "0000ck",
          deposit : 200
        })
        .expect("Content-type",/json/)
        .expect(200)
        .end((e, res) => {
          res.status.should.equal(500)
          res.body.should.have.property('message').eql('Password false')
          // res.body.message.should.equal('OK')
          done()
        })
    })

    it('Check a money', done => {
      api
        .post('/api/deposit')
        .send({
          account : "rush",
          password : "0000",
          deposit : 30
        })
        .expect("Content-type",/json/)
        .expect(200)
        .end((e, res) => {
          res.status.should.equal(500)
          res.body.should.have.property('message').eql('Unable to deposit money Please do the transaction again, such as 100, 500, 1000.')
          // res.body.message.should.equal('OK')
          done()
        })
    })
  })
  
})
