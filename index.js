const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

const PORT = process.env.PORT


const getData = async()=>{
    var location = 'Bengaluru'
    var link = `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${location}&aqi=yes`

    let res = await axios.get(link);

    let data = res.data;
    // console.log(data);

}

getData();



app.get('/' ,(req,res)=>{
    res.json('Helllo World');
} )

app.post('/',(req,res)=>{
    const fname = req.body.name;
    res.send(fname)
})


app.listen(PORT , ()=>{
    console.log(`App is running on PORT ${PORT}`)
})