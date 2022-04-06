var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('FarmHands', { title: 'Search Results ~ Developing Web Apps and Services' });
});

module.exports = router;
