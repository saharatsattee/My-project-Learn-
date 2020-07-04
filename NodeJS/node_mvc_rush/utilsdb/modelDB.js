var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";



// function DBwrite(DB, collections, key, value1,value2) {
//   MongoClient.connect(url, function (err, db) { //connect DB url
//     if (err) throw err;
//     var dbo = db.db(DB);
//     dbo.createCollection(collections, function (err, res) { //create collection 
//       if (err) throw err;
//       var myobj = [
//         { _id: key, value1: value1, value2 :value2 }
//       ];
//       dbo.collection(collections).insertMany(myobj, function (err, res) { //insertMany
//         if (err) throw err;

//         db.close();
//       });
//     });
//   })
//   return `done to write DB`;
// }
// //db.Aye.insertMany([{ _id: "11111", value1: "aye", value2 :"not pass" }]) for use in shell


// function DBreadSTATUS(DB, collections, id) {
//   return new Promise(async(resolve, reject) => {
//   var data;
//   db = await MongoClient.connect(url)
//   if (!db) {
//     console.log('error to connect database server ')
//     reject('error to connect database server ')
//   }
//   var dbo = db.db(DB);
//   result = await dbo.collection(collections).findOne({ _id: id })
//   if (!result) {
//     console.log('data not found ')
//     reject('data not found ')
//   }
//   //console.log(result.name);
//   data = result.value2
//   db.close();

//   resolve (data)
// });
// }

// function checkDATA(DB, collections, id) {
//   return new Promise(async(resolve, reject) => {
//   db = await MongoClient.connect(url)
//   if (!db) {
//     console.log('error to connect database server ')
//     reject('error to connect database server ')
//   }
//   var dbo = db.db(DB);
//   result = await dbo.collection(collections).findOne({ _id: id })
//   db.close();

//   resolve (result)
// });
// }

// function DBdelete(company, collections, key) {

//   MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db(company);
//     var myquery = { _id: key };
//     dbo.collection(collections).deleteOne(myquery, function (err, obj) {
//       if (err) throw err;
//       console.log("1 document deleted");
//       db.close();
//     });
//   });

//   return
// }


// async function sortvalue1(DB, collections) {
//     var data;
//     db = await MongoClient.connect(url)
//     if (!db) console.log('error to connect database server ')
//     var dbo = db.db(DB);
//     var mysort = { value1: -1 };
//     result = await dbo.collection(collections).find().sort(mysort).toArray()
//     if (!result) console.log('data not found ')
//     console.log(result);
//     data = result
//     db.close();
  
//     return data;
//   }


function ReadArray(DB, table) {
  return new Promise(async(resolve, reject) => {
  var data = new Array(); 
  db = await MongoClient.connect(url)
  if (!db) {
    console.log('error to connect database server ')
    reject('error to connect database server ')
  }
  var dbo = db.db(DB);
  data = await dbo.collection(table).find({status : "check"}).toArray()
  if (!data) {
    console.log('data not found ')
    reject('data not found ')
  }
  db.close();
  resolve (data)
});
}

function UpdateData(DB, collections, ID ) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(DB);
    var myquery = { _id: ID ,status: "check" };
    var newvalues = { $set: { status: "Not Check" } };
    dbo.collection(collections).updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      db.close();
    });
  });
  return `done to write DB`;
}


  //-------------------------------------------------------------

  function CheckStudent(DB, collections, ID) {
    return new Promise(async(resolve, reject) => {
    db = await MongoClient.connect(url)
    if (!db) {
      console.log('error to connect database server ')
      reject('error to connect database server ')
    }
    var dbo = db.db(DB);
    result = await dbo.collection(collections).findOne({ _id: ID })
    db.close();
  
    resolve (result)
  });
  }


  function Login(DB, collections, ID, status) {
  MongoClient.connect(url, function (err, db) { //connect DB url
    if (err) throw err;
    var dbo = db.db(DB);
    dbo.createCollection(collections, function (err, res) { //create collection 
      if (err) throw err;
      var myobj = [
        { _id: ID, status: status }
      ];
      dbo.collection(collections).insertMany(myobj, function (err, res) { //insertMany
        if (err) throw err;

        db.close();
      });
    });
  })
  return `done to write DB`;
}




module.exports = {
  // DBwrite: DBwrite,
  // DBreadSTATUS: DBreadSTATUS,
  // DBdelete: DBdelete,
  ReadArray: ReadArray,
  // sortvalue1 : sortvalue1,
  // checkDATA : checkDATA,
  CheckStudent : CheckStudent ,
  Login : Login ,
  UpdateData:UpdateData,

}


