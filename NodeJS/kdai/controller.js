const moment = require('moment');
const SLASH_DMYHMS = 'DD/MM/YYYY HH:mm:ss';
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
//----------------------MongoDB---------------------------------------
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Kdai:blockchainkmitl@cluster0-9oqtf.mongodb.net/KDAI?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });


function Time(t) {
    let now = moment().format(SLASH_DMYHMS);
    let pass = moment().subtract(t, 'days').format(SLASH_DMYHMS);
    let future = moment().add(t, 'days').format(SLASH_DMYHMS);
    return {
        now : now ,
        pass : pass ,
        futurn : future
    }
}

function Csv(data) {
    const csvWriter = createCsvWriter({
        path: 'out.csv',
        header: [
          {id: 'name', title: 'Name'},
          {id: 'age', title: 'Age'},
          {id: 'school', title: 'School'},
          {id: 'major', title: 'Major'},
          {id: 'faculty', title: 'Faculty'},
        ]
      });
    const file = [
        {
          name: data.Name,
          age : data.Age,
          school: data.School,
          major: data.Major,
          faculty: data.Faculty
        }
      ];
    csvWriter
        .writeRecords(file)
        return 'The CSV file was written successfully';
}

function CreatePO(Data) {
  client.connect(err => {
    const collection = client.db("KDAI").collection("Document");

    collection.insertOne ({_id: Data._id , DocRef: Data.DocRef ,Owner:Data.Owner , Dealer:Data.Dealer , DocDate: Data.DocDate , Type:Data.Type })
    client.close();
  });
  return 'You have created PO ';
}

async function ViewData(Data) {
  await client.connect();
  const collection = await client.db("KDAI").collection("Document");
  resual = await  collection.findOne({_id: Data._id });
  await client.close();
  return resual ;
}


module.exports = {
    Time: Time,
    Csv: Csv,
    CreatePO: CreatePO,
    ViewData : ViewData
}