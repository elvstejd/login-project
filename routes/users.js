var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/', async (req, res) => {
  const data = req.body;
  console.log(data);
  userModel.create(data);

  res.sendStatus(200);

});

module.exports = router;
