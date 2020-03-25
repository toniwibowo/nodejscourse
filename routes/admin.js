const express = require('express');

const path = require('path');

const rootDir = require('../helper/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
  //res.sendFile(path.join(rootDir,'views', 'add-product.html'));
  //next();
  res.render('add-product',{pageTitle: 'Admin Add Product'})
});

router.post('/add-product', (req, res, next) => {
  products.push({title: req.body.title})
  res.redirect('/');
});

//module.exports = router;
exports.routes = router;
exports.product = products;
