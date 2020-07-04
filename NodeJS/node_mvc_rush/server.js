const express = require('express') 
const app = express()
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');


// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
 
app.get('/', function (req, res) {
    res.send('Hello world 123')
  })
app.use('/api', require('./controller'));

//swaggerUI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(3000, () => {
    console.log('Example app listening on port 3000!') 
})
