
const express = require('express') 
const app = express()
  
app.get('/gettime', (req, res) => {

    var datetime = new Date()
    console.log(`datetime: ${datetime}`)
    res.send(datetime)
})
 
app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})