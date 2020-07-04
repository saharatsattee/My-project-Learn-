const express = require('express') 
const app = express()
const controller = require('./controller')


app.get('/time/:t', (req, res) => {

    let datetime = controller.Time(req.params.t)
    res.status(201).json(datetime).toString
})


app.post('/csv',(req,res)=>{

    var resual= controller.Csv(req.body)
    res.status(201).json(resual).toString //jsonรูปแบบของข้อมูลที่เป็น tree เก็บแบบ key value
})

app.post('/CreatePO',(req,res)=>{
    var resual= controller.CreatePO(req.body)
    res.status(201).json(resual).toString 
})

app.post('/ViewData',async (req,res)=>{
    var resual= await controller.ViewData(req.body)
    res.status(201).json(resual).toString 
})

module.exports =app