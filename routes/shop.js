const express = require('express');

const path = require('path');

const router = express.Router();

const rootDir = require('../helper/path');

const adminData = require('./admin');

router.get('/', (req, res, next) => {
  //console.log('shop.js', adminData.product);
  //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  const products = adminData.product;
  res.render('shop', {prods: products, doctTitle: 'Shop'});
});

module.exports = router;
