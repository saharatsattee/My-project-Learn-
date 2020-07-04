const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Kdai:blockchainkmitl@cluster0-9oqtf.mongodb.net/KDAI?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
var data;

// function DBwrite(DocNum,DocRef,Owner,Dealer,DocDate,Type) {
//   client.connect(err => {
//     const collection = client.db("KDAI").collection("Document");

//     collection.insertOne ({_id: DocNum , DocRef: DocRef ,Owner:Owner , Dealer:Dealer , DocDate:DocDate , Type:Type })
//     client.close();
//   });
//   return;
// }


// DBwrite('PO_2222222','Apple','KMITIL','Science','22/12/2019','PO')

test()

 async function test() {
    data = await DBread('PO_2222222')
    console.log(data)
}



async function DBread(id) {
  await client.connect();
  const collection = await client.db("KDAI").collection("Document");
  data = await  collection.findOne({_id: id });
  await client.close();
  return data ;
}




