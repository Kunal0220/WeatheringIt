const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
require('dotenv').config();
const PORT = process.env.PORT

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // const myData = { message: 'Hello from the backend!' };
    res.render(__dirname + '/public/index');
  });
  
app.post('/submit', function(req, res) {
    const location = req.body.location;
    // console.log(location)
    getData(location)
    res.redirect('/')
});

async function getData(location) {
    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${location}&aqi=yes`);
        const data = response.data;
        // console.log('API response:', data);

        const temperature = data.current.temp_c
        const wind = data.current.wind_kph
        const humidity = data.current.humidity
        const visibility = data.current.vis_km
        
        console.log('wind ' + wind)
        console.log('temperature '+ temperature)
        console.log('visibility '+visibility)
        console.log('humidity '+humidity)
    }
    
    catch (error) {
        console.error('API error:', error);
    }
}


app.listen(PORT , ()=>{
    console.log(`App is running on PORT ${PORT}`)
})


// const d2 = async(location)=>{
//     // var location = 'Bengaluru'
//     var link = `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${location}&aqi=yes`
    
//     let res = await axios.get(link);
    
//     let data = res.data;
    
//     return(data);
    
// }