var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";



function UpdateData(DB, collections, account ,old_money ,new_money ) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(DB);
    var myquery = { _id: account ,money: old_money };
    var newvalues = { $set: { money: new_money } };
    dbo.collection(collections).updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      db.close();
    });
  });
  return new_money ;
}


  //-------------------------------------------------------------

  function GetData(DB, collections, account) {
    return new Promise(async(resolve, reject) => {
    db = await MongoClient.connect(url)
    if (!db) {
      console.log('error to connect database server ')
      reject('error to connect database server ')
    }
    var dbo = db.db(DB);
    result = await dbo.collection(collections).findOne({ _id: account })
    db.close();
  
    resolve (result)
  });
  }


module.exports = {
  GetData: GetData,
  UpdateData: UpdateData,
}


