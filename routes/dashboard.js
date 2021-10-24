var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
    res.render('dashboard', { nombre: req.user.name, role: req.user.role || 'Ninguno' });
});

module.exports = router;
