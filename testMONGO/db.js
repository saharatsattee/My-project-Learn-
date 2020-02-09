
//Creating a Database
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/nodejs";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// }); 



//Creating a Collection
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/nodejs";

// MongoClient.connect(url, (err, db)=> {
//   if (err) throw err;
//   var dbo = db.db("rush");
//   dbo.createCollection("Detail", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });

//Insert
// MongoClient.connect(url, function(err, db) { //connect DB url
//   if (err) throw err;
//   var dbo = db.db("rush");
//   dbo.createCollection("Detail", function(err, res) { //create collection 
//     if (err) throw err;
//   //   console.log("Collection created!");
//     var myobj = [
//       { _id: 1, name: 'rushy',phone : 00},
//       { _id: 2, name: 'bossy',phone : 00 },
//       { _id: 3, name: 'peety', phone : 00 }
//     ];
//     dbo.collection("Detail").insertMany(myobj, function(err, res) { //insertMany
//       if (err) throw err;
//       console.log("Number of documents inserted: " + res.insertedCount);
//     db.close();
//   });
// });
// })

//Find data and get value to use 
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("rush");
//     dbo.collection("Detail").findOne({_id:1}, function(err, result) {
//       if (err) throw err;
//       // console.log(result.name);
//       var name = result.name
//       console.log(name);
//       db.close();
//     });
//   }); //get value from db 


//query
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("rush");
  var query = { name: "rushy" };
  dbo.collection("Detail").find(query).toArray(function(err, result) {
    if (err) throw err;
    // const test = JSON.parse(result)
    // console.log(test.name);
    console.log(result)
    db.close();
  });
});