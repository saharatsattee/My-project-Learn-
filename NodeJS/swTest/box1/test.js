const chai = require('chai')
const chaiHttp = require('chai-http')
const {after, before, describe, it} = require('mocha')
const server = require('../project/server.js')

chai.use(chaiHttp)
chai.should()

describe('Testing unit test ATM Functions ', () => {
  
  before(done => {
    // Do something here before test
    done()
  })
//---------------------------------------------------------


//-----------------------------------------------------------------------------
    describe(' Deposit Test Project ATM normal function ', () => {
    it('Check an account number', done => {
      chai
        .request(server)
        .post('/api/deposit')
        .send({
          account : "rushy",
          password : "0000",
          deposit : 200
        })
        .end((e, res) => {
          res.should.have.status(500)
          res.body.should.have.property('message').eql('Not has a account number')
          done()
        })
    })

    it('Check an Password', done => {
      chai
        .request(server)
        .post('/api/deposit')
        .send({
          account : "rush",
          password : "0000ck",
          deposit : 200
        })
        .end((e, res) => {
          res.should.have.status(500)
          res.body.should.have.property('message').eql('Password false')
          done()
        })
    })
    it('Check a money', done => {
      chai
        .request(server)
        .post('/api/deposit')
        .send({
          account : "rush",
          password : "0000",
          deposit : 30
        })
        .end((e, res) => {
          res.should.have.status(500)
          res.body.should.have.property('message').eql('Unable to deposit money Please do the transaction again, such as 100, 500, 1000.')
          done()
        })
    })
    // it('ฝากเงิน', done => {
    //   chai
    //     .request(server)
    //     .post('/api/deposit')
    //     .send({
    //       account : "rush",
    //       password : "0000",
    //       deposit : 100
    //     })
    //     .end((e, res) => {
    //       res.should.have.status(200)
    //       res.body.should.eql(4900)
    //       done()
    //     })
    // })
  })

 

////////////////////////////////////////////////////////////////////////////////////////////////////////////

describe(' Withdraw Test Project ATM normal function ', () => {
  it('Check an account number', done => {
    chai
      .request(server)
      .post('/api/withdraw')
      .send({
        account : "rushy",
        password : "0000",
        deposit : 200
      })
      .end((e, res) => {
        res.should.have.status(500)
        res.body.should.have.property('message').eql('Not has a account number')
        done()
      })
  })

  it('Check an Password', done => {
    chai
      .request(server)
      .post('/api/withdraw')
      .send({
        account : "rush",
        password : "0000ck",
        deposit : 200
      })
      .end((e, res) => {
        res.should.have.status(500)
        res.body.should.have.property('message').eql('Password false')
        done()
      })
  })

  it('Check a money', done => {
    chai
      .request(server)
      .post('/api/withdraw')
      .send({
        account : "rush",
        password : "0000",
        deposit : 30
      })
      .end((e, res) => {
        res.should.have.status(500)
        res.body.should.have.property('message').eql('Unable to deposit money Please do the transaction again, such as 100, 500, 1000.')
        done()
      })
  })
  // it('ถอนเงิน', done => {
  //   chai
  //     .request(server)
  //     .post('/api/withdraw')
  //     .send({
  //       account : "rush",
  //       password : "0000",
  //       withdraw : 100
  //     })
  //     .end((e, res) => {
  //       res.should.have.status(200)
  //       res.body.should.eql(4800)
  //       done()
  //     })
  // })


})
  

////////////////////////////////////////////////////////////////////////////////////////////////////////////

describe(' Transfer Test Project ATM normal function ', () => {
  it('Check an accountA number', done => {
    chai
      .request(server)
      .post('/api/transfer')
      .send({
        accountA : "rushy",
        password : "0000",
        transfer : 200,
        accountB :"aye"
      })
      .end((e, res) => {
        res.should.have.status(500)
        res.body.should.have.property('message').eql('Not has a accountA number')
        done()
      })
  })

  it('Check an accountB number', done => {
    chai
      .request(server)
      .post('/api/transfer')
      .send({
        accountA : "rush",
        password : "0000",
        transfer : 200,
        accountB :"ayeeiei"
      })
      .end((e, res) => {
        res.should.have.status(500)
        res.body.should.have.property('message').eql('Not has a accountB number')
        done()
      })
  })

  it('Check a Password', done => {
    chai
      .request(server)
      .post('/api/transfer')
      .send({
        accountA : "rush",
        password : "0000ck",
        transfer : 200,
        accountB :"aye"
      })
      .end((e, res) => {
        res.should.have.status(500)
        res.body.should.have.property('message').eql('Password false')
        done()
      })
  })

  it('Check a money', done => {
    chai
      .request(server)
      .post('/api/transfer')
      .send({
        accountA : "rush",
        password : "0000",
        transfer : 6000,
        accountB :"aye"
      })
      .end((e, res) => {
        res.should.have.status(500)
        res.body.should.have.property('message').eql('Money not enough')
        done()
      })
  })

  it('Check transfer yourself ', done => {
    chai
      .request(server)
      .post('/api/transfer')
      .send({
        accountA : "rush",
        password : "0000",
        transfer : 100,
        accountB :"rush"
      })
      .end((e, res) => {
        res.should.have.status(500)
        res.body.should.have.property('message').eql(`Can't transfer money to your account`)
        done()
      })
  })

  // it('test false ', done => {
  //   chai
  //     .request(server)
  //     .post('/api/transfer')
  //     .send({
  //       accountA : "rush",
  //       password : "0000",
  //       transfer : 100,
  //       accountB :"rush"
  //     })
  //     .end((e, res) => {
  //       res.should.have.status(500)
  //       res.body.should.have.property('message').eql(`Can't transfer money to your account 555555`)
  //       done()
  //     })
  // })
  
})

















    


  //-----------------------------------------------------------------------------


  after(done => {
    // Do something here after test
    done()
  })
})
