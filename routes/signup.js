var express = require('express');
var router = express.Router();

/* GET login page */
router.get('/', async (req, res) => {
    res.render('signup');
});

/* POST login page */
router.post('/', async (req, res) => {

    res.render('signup');
});


module.exports = router;
