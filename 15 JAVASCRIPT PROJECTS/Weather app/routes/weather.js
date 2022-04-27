// First we will need express router !
const router = require('express').Router();

// To fetch weatherapi we need to use fetch()....but for that we need to import node-fetch npm package 
const fetch = require('node-fetch');

// importing dotenv !
require('dotenv').config();


// Routes !
router.get('/', (req, res) => {
    // very first time if we open our app , we need to set all the values because opening the app first time we dnt want any data to be rendered !
    res.render('index', {
        city: null,
        des: null,
        icon: null,
        temp: null
    })
})

router.post('/', (req, res) => {
    const city = req.body.city
    const url_api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`
    // console.log(url_api);
    try {
        fetch(url_api)
            .then(res => res.json())
            .then(data => {
                if (data.message === 'city not found') {
                    res.render('index', {
                        city: data.message,
                        des: null,
                        icon: null,
                        temp: null
                    })
                }
                else {
                    const city = data.name;
                    const des = data.weather[0].description;
                    const icon = data.weather[0].icon;
                    const temp = data.main.temp

                    res.render('index', {
                        city, des, icon, temp
                    })
                }
            })
    } catch (error) {
        res.render('index', {
            city: "Something wrong !",
            des: null,
            icon: null,
            temp: null
        })

    }
})

// exporting our router !
module.exports = router;

