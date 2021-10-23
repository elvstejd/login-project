var express = require('express');
var router = express.Router();

/* GET login page */
router.get('/', async (req, res) => {
    res.render('login');
});

/* POST login page */
router.post('/', async (req, res) => {
    // get user data from request
    const username = req.body.username;
    const password = req.body.password;

});


module.exports = router;
