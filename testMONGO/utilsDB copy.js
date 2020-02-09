var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";



function DBwrite(DB, collections, key, value1,value2) {
  MongoClient.connect(url, function (err, db) { //connect DB url
    if (err) throw err;
    var dbo = db.db(DB);
    dbo.createCollection(collections, function (err, res) { //create collection 
      if (err) throw err;
      var myobj = [
        { _id: key, value1: value1, value2 :value2 }
      ];
      dbo.collection(collections).insertMany(myobj, function (err, res) { //insertMany
        if (err) throw err;

        db.close();
      });
    });
  })
  return;
}


async function DBreadvalue1(DB, collections, key) {
  var data;
  db = await MongoClient.connect(url)
  if (!db) console.log('error to connect database server ')
  var dbo = db.db(DB);
  result = await dbo.collection(collections).findOne({ _id: key })
  if (!result) console.log('data not found ')
  //console.log(result.name);
  data = result.value1
  db.close();

  return data;
}

function DBdelete(company, collections, key) {

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(company);
    var myquery = { _id: key };
    dbo.collection(collections).deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      db.close();
    });
  });

  return
}


function readarray(DB, table) {
  var data = new Array();
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(DB);
    dbo.collection(table).find({ value: 'go' }).toArray(function (err, result) {
      if (err) throw err;
      // console.log(result.length);
      for (i = 0; i < result.length; i++) {
        // console.log(result[i].hash.hash2)
        data[i] = result[i].hash.hash2
      }
      console.log(data)
      db.close();
    });
  });
  return;
}

async function sortvalue1(DB, collections) {
    var data;
    db = await MongoClient.connect(url)
    if (!db) console.log('error to connect database server ')
    var dbo = db.db(DB);
    var mysort = { value1: -1 };
    result = await dbo.collection(collections).find().sort(mysort).toArray()
    if (!result) console.log('data not found ')
    console.log(result);
    data = result
    db.close();
  
    return data;
  }


module.exports = {
  DBwrite: DBwrite,
  DBreadvalue1: DBreadvalue1,
  DBdelete: DBdelete,
  readarray: readarray,
  sortvalue1 : sortvalue1

}


