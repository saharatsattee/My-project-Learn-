const express = require('express') 
const app = express()
const bodyParser = require('body-parser'); //json body 
const swaggerUi = require('swagger-ui-express'); //view of express 
const swaggerDocument = require('./swagger/swagger.json');

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api', require('./controller'));

//swaggerUI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(3000, () => {
    console.log('Example app listening on port 3000!') 
})
