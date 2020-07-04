const express = require('express') 
const app = express()
const service = require('./service')

// app.post('/ayetest', function (req, res) {
//     console.log(req.body)
//     service.aye(req.body).then((result) => {
//     res.status(200).json(result);
//     })
//     .catch((error) => {
//       res.status(500);
//       res.json({
//         code: 500,
//         message: `Error Message: ${error}`
//       });
//     });
    
//   }); 

//   app.post('/ayewriteDB', function (req, res) {
//     console.log(req.body)
//     service.ayewriteDB(req.body).then((result) => {
//     res.status(200).json(result);
//     })
//     .catch((error) => {
//       res.status(500);
//       res.json({
//         code: 500,
//         message: `Error Message: ${error}`
//       });
//     });
    
//   }); 

//   app.post('/ayereadDB', function (req, res) {
//     console.log(req.body)
//     service.ayereadDB(req.body).then((result) => {
//     res.status(200).json(result);
//     })
//     .catch((error) => {
//       res.status(500);
//       res.json({
//         code: 500,
//         message: `Error Message: ${error}`
//       });
//     });
    
//   }); 

  //-------------------------------------------------------

  app.post('/LoginStudent', function (req, res) {
    service.LoginStudent(req.body).then((result) => {
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

  app.get('/List', (req, res) => {

    service.List().then((result) => {
      res.status(200).json(result)
      })
      .catch((error) => {
        res.status(500);
        res.json({
          code: 500,
          message: `Error Message: ${error}`
        });
      });
})

app.post('/UpdateData', function (req, res) {
  service.UpdateData(req.body).then((result) => {
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