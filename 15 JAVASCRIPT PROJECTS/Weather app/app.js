const express = require('express');
const app = express();

const PORT = process.env.port || 3000;


// import weather route !
const WeatherRoute = require('./routes/weather')


// Setting up the view engine !
app.set('view engine','ejs');

// middleware routes 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',WeatherRoute)
app.use(express.static('public'));



app.listen(PORT, () => console.log('Server running...'))