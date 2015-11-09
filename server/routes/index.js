var express = require('express');
var models = require('../models/index.js');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hats', function(req, res) {
  models.Hat.findAll({})
    .then(function(hats) {
      res.json(hats);
    });
});

router.get('/hats/:id', function(req, res) {
  models.Hat.find({
    where: {
      id: req.params.id
    }
  }).then(function(hat) {
    res.json(hat);
  });
});

router.post('/hats', function(req, res) {
  models.Hat.create({
    price: req.body.price,
    popular: req.body.popular,
    color: {
      primary: req.body.primary,
      mixed: req.body.mixed
    }
  }).then(function(hat) {
    res.json(hat);
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
