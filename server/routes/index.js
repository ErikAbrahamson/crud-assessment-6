var express = require('express');
var models = require('../models/index.js');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hats', function(req, res) {
  models.Todo.findAll({})
    .then(function(hats) {
      res.json(hats);
    });
});
router.post('/brands', function(req, res) {
  models.Brand.create({
    name: req.body.name
  }).then(function(brand) {
    res.json(brand);
  });
});


module.exports = router;
