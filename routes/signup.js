var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const Role = require('..//models/role');

/* GET signup page */
router.get('/', async (req, res) => {
    const [rows,] = await Role.findAll();
    res.render('signup', { roles: rows });
});

/* POST signup page */
router.post('/', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User(Date.now().toString(), req.body.name, req.body.username, hashedPassword);
        const [rows,] = await newUser.save();
        await newUser.assignRole(parseInt(req.body.role));
        return res.redirect('/login');
    } catch (err) {
        console.log('err:', err);
    }

    res.render('signup');
});


module.exports = router;
