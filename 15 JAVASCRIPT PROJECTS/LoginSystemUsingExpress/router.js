var express = require('express');
var router = express.Router();

const credentials = {
    email: "admin@gmail.com",
    password: "admin123"
}

// Login user route
router.post('/login', (req, res) => {
    if(req.body.email == credentials.email && req.body.password == credentials.password ){
        // we are creating a session for 'user' variable and storing the user emailid into it 
        req.session.user = req.body.email;
        res.redirect('/route/dashboard')
        // res.end("Login Succesfull !")
    }else{
        res.end("Invalid Username !")
    }
})

// Route for dashboard

router.get('/dashboard', (req, res) => {
    if(req.session.user){
        res.render('dashboard',{user:req.session.user})
    }
    else{
        res.send("Unauthorized User !")
    }
})

// Route for logout

router.get('/logout', (req, res) => {
    req.session.destroy(function(error) {
        if(error){
            console.log(error);
            res.send("Error !")
        }
        else{
            res.render('base',{title:"Express", logout:"Logout Succesfully!"})
        }  
    })
})


module.exports = router ;