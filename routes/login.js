var express = require('express');
var router = express.Router();
var userModel = require('../models/user.js');

/* GET login page */
router.get('/', async (req, res) => {
    res.render('login');
});

/* POST login page */
router.post('/', async (req, res) => {
    // get user data from request
    const username = req.body.username;
    const password = req.body.password;

    // check if data matches saved
    const user = await userModel.findByUsername(username);

    if (user && user.contrasena === password) {
        // if it do redirect to dashboard 
        console.log('Yay!');
        res.redirect('/dashboard');
    } else {
        // if it don't show error message
        console.log('NO!');
    }

    res.render('login');



});


module.exports = router;
