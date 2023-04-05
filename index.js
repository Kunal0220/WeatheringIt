const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
require('dotenv').config();
<<<<<<< newui

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

=======
const PORT = process.env.PORT

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(express.static('public'));

// app.set('view engine', 'ejs');



app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});




app.post('/',(req,res)=>{
    const location = req.body.name;
    res.send(location)
    res.send(getData(location))
    console.log(getData(location))
    res.end()
})

const getData = async(location)=>{
    // var location = 'Bengaluru'
    var link = `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${location}&aqi=yes`
    
    let res = await axios.get(link);
    
    let data = res.data;
    
    return(data);
    
}
>>>>>>> node

app.listen(PORT , ()=>{
    console.log(`App is running on PORT ${PORT}`)
})