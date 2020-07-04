var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";


  function CheckStudent(DB, collections, email) {
    return new Promise(async(resolve, reject) => {
    db = await MongoClient.connect(url)
    if (!db) {
      console.log('error to connect database server ') 
      reject('error to connect database server ')
    }
    var dbo = db.db(DB);
    result = await dbo.collection(collections).findOne({ _id: email })
    db.close();
  
    resolve (result)
  });
  }

  function Login(DB, collections, email ) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(DB);
    var myquery = { _id: email ,status: "not check" };
    var newvalues = { $set: { status: "Check" } };
    dbo.collection(collections).updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      db.close();
    });
  });
  return `done to updata DB`;
}

function StudentNotCheck(DB, table) {
  return new Promise(async(resolve, reject) => {
  var data = new Array(); 
  db = await MongoClient.connect(url)
  if (!db) {
    console.log('error to connect database server ')
    reject('error to connect database server ')
  }
  var dbo = db.db(DB);
  data = await dbo.collection(table).find({status : "not check"}).toArray()
  db.close();
  resolve (data)
});
}

function StudentCheck(DB, table) {
  return new Promise(async(resolve, reject) => {
  var data = new Array(); 
  db = await MongoClient.connect(url)
  if (!db) {
    console.log('error to connect database server ')
    reject('error to connect database server ')
  }
  var dbo = db.db(DB);
  data = await dbo.collection(table).find({status : "Check"}).toArray()
  db.close();
  resolve (data)
});
}





module.exports = {

  CheckStudent : CheckStudent ,
  Login : Login,
  StudentNotCheck : StudentNotCheck ,
  StudentCheck : StudentCheck ,

}






