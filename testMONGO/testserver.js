
const express = require('express') 
const app = express()
var MongoClient = require('mongodb').MongoClient; //libmongoDB
var url = "mongodb://localhost:27017/mydb"; 

// MongoClient.connect(url, function(err, db) { //connect DB url
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.createCollection("MyData", function(err, res) { //create collection 
//     if (err) throw err;
//     console.log("Collection created!");
//     var myobj = [
//       { _id: 1, name: 'rush'},
//       { _id: 2, name: 'boss'},
//       { _id: 3, name: 'peet'}
//     ];
//     dbo.collection("MyData").insertMany(myobj, function(err, res) { //insertMany
//       if (err) throw err;
//       console.log("Number of documents inserted: " + res.insertedCount);
//     db.close();
//   });
// });
// })


  


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("MyData").findOne({_id: 1}, function(err, result) {
    if (err) throw err;
    // console.log(result.name);
    var name = result.name
    console.log(name);
    db.close();
  });
}); //get value from db 