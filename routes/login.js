const express = require('express');
const router = express.Router();
const User = require('../models/user');
const password = require('../passport-config');

/* GET login page */
router.get('/', async (req, res) => {
    res.render('login');
});

/* POST login page */
router.post('/', password.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true
}));


module.exports = router;
