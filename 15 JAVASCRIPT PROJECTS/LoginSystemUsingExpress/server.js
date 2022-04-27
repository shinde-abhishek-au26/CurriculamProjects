const express = require('express');
const app = express();
const port = process.env.PORT || 3003
const path = require('path');
const bodyparser = require('body-parser');
const session = require('express-session');
const { v4:uuidv4} = require('uuid');
const router  = require('./router');

// Setting view engine !
app.set("view engine","ejs")

// Loading Static assests
app.use('/static',express.static(path.join(__dirname,'public')))
app.use('/assets',express.static(path.join(__dirname,'public/assets')))


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(session({
    // we are generating the unique hash string using uuid package !!
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}))

// Route middleware
app.use('/route', router)

// Home ROUTE
app.get('/', (req, res) => {
    res.render('base',{title:"Login System"})
})






app.listen(port, () => console.log('server running...'))