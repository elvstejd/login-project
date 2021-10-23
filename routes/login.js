const express = require('express');
const router = express.Router();
const User = require('../models/user');

/* GET login page */
router.get('/', async (req, res) => {
    res.render('login');
});

/* POST login page */
router.post('/', async (req, res) => {
    const username = req.body.username;
    // const password = req.body.password;

    try {
        const [rows,] = await User.findPasswordByUsername(username);
        if (!rows.length) /* username is not on db */ console.log('No data, username must not exist. ');

        console.log(rows); // rows object is an array containing [username, password]
    } catch (err) {
        console.log(err);
    }

    res.render('login');

});


module.exports = router;
