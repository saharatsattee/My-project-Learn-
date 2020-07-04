
// const db = require('./utilsdb/modelDB')
const editJsonFile = require("edit-json-file");
let file = editJsonFile(`${__dirname}/sss.json`);

file.set("password", false);

file.save();



// var company = 'rush'
// var collections = 'Document'
// var key = '12'
// var value = '21 '
// var value2 = '21 '
// // var v1 = 'go'
// // var v2 = { hash1: '456', hash2: '789' }
// // var DB = 'rush'
// // var table = 'CompanyData'
// //write
// var v = db.DBwrite(company,collections,key,value,value2) //insert db 
// console.log(v)

//------------------------------------------------------------------
//insert db for admin 
// db.AdminDBwrite(DB,public,private)
// db.DBwrite3(DB,table,key,v1,v2)
// db.DBdelete(DB,'CompanyData',DB)
// db.SetStatusComplete(DB,table,key)
//db.SetStatusWait(DB,table,key)
// console.log("INVOICE_BODY|"+key)
// db.CreateDbForCompany(company,public,private) //insert db 



//------------------------------------------------------------------


//read

// async function somefunction(){ //get value 
//     var DB = 'Aye'
//     var COL= 'Aye'
//     var ID= '59050315'

//     data = await db.DBreadSTATUS(DB,COL,ID) 
//     console.log(data);

// }

// somefunction()


// me = myjson.blockchain.ca.url
// console.log(me)


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
// var ta = new Array();
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db(DB);
//   var i
//   dbo.collection(table).find({value : 'go'}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result.length);
//     for( i=0;i<result.length; i++){
//        console.log(result[i].hash.hash2)
//         ta[i] = result[i].hash.hash2
//     }
//     console.log(ta)
//     db.close();
//   });
// });

// async function test() {
//     var DB = 'Aye'
//     var table =  'Aye'
//     var data = new Array();
//     data = await db.readarray(DB, table)
//     console.log(data)
// }

// test()



// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017";
// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db(DB);
//     var myquery = { value: "rush" };
//     var newvalues = { $set: { _id: key, value: "boss" } };
//     dbo.collection(collections).updateOne(myquery, newvalues, function (err, res) {
//       if (err) throw err;
//       db.close();
//     });
//   });


// var x = {"a":"rush" ,"b":"saharat","c" :"sattee" }
// console.log(x.a)

// asyncFunc(cb, cb);

// function asyncFunc (running, done) {
//   for (var i = 0;i<10;i++) {
//     running('i = ' + i);
//   }
//   done('done');
// }

// function cb (str) {
//   console.log(str);
// }

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017";



// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";


//     MongoClient.connect(url, async function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("1");
//         var mysort = { value1: -1 };
//         dbo.collection("1").find().sort(mysort).toArray( function (err, result) {
//           if (err) throw err;
//           console.log(result);
//           db.close();
//         });
//       });
  
    
  

