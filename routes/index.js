var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function (req, res, next) {
  res.render('login');
});

router.get('/brand', function (req, res, next) {
  res.render('brand');
});

router.get('/brandpage', function (req, res, next) {
  res.render('brandpage');
});

router.get('/home', function (req, res, next) {
  res.render('homepage');
});

router.get('/footer', function (req, res, next) {
  res.render('footer');
});

router.get('/header', function (req, res, next) {
  res.render('header');
});


module.exports = router;
