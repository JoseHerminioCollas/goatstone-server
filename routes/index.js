var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Goatstone  API',
    message: `Welcome : ${new Date()}`
  });
});

module.exports = router;
