const express = require('express') 
const app = express()
const service = require('./service')


  app.post('/deposit', function (req, res) {
    service.deposit(req.body).then((result) => {
    res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500);
      res.json({
        code: 500,
        message: `${error}`
      });
    });
    
  }); 

  app.post('/withdraw', function (req, res) {
    service.withdraw(req.body).then((result) => {
    res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500);
      res.json({
        code: 500,
        message: `${error}`
      });
    });
    
  }); 

  app.post('/transfer', function (req, res) {
    service.transfer(req.body).then((result) => {
    res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500);
      res.json({
        code: 500,
        message: `${error}`
      });
    });
    
  }); 

module.exports =app