const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const fs = require('fs');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render(__dirname + '/public/index');
  });
  
app.post('/submit', function(req, res) {
    
    const location = req.body.location;
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
        const city = data.location.name

        const delivery = [ city,temperature , wind , humidity , visibility  ]

        changeInnerHtml(delivery);
        

    }
    
    catch (error) {
        console.error('API error:', error);
    }
}

function changeInnerHtml(delivery){
    console.log(delivery[0])
    
}






app.listen(PORT , ()=>{
    console.log(`App is running on PORT ${PORT}`)
})
