const express = require('express') 
const app = express()
var bodyParser = require('body-parser');
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
 
app.get('/', function (req, res) {
    res.send('Hello world 123')
  })

app.use('/api', require('./router'));

app.listen(3000, () => {
    console.log('Example app listening on port 3000!') 
})


// {
// 	"number1":{
// 		"a" : "1",
// 		"b" : "1"
// 	},
// 	"number2":{
// 		"a" : "2",
// 		"b" : "3"
// 	}
// }