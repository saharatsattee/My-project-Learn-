const express = require('express') 
const app = express()
const service = require('./service')




app.post('/MVC_login', function (req, res) {
  service.MVC_login(req.body).then((result) => {
  res.status(200).json(result);
  })
  .catch((error) => {
    res.status(500);
    res.json({
      code: 500,
      message: `Error Message: ${error}`
    });
  });
  
}); 

app.get('/MVC_Report', function (req, res) {
  service.MVC_Report(req.body).then((result) => {
  res.status(200).json(result);
  })
  .catch((error) => {
    res.status(500);
    res.json({
      code: 500,
      message: `Error Message: ${error}`
    });
  });
  
}); 

module.exports =app