var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
    // const user = await userModel.findByUsername(username);
    res.render('dashboard', { nombre: 'Yoel', rol: 'Admin' });
});

module.exports = router;
