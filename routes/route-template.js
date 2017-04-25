const express = require('express');
const routeNameHere = express.Router();


routeNameHere.get('/pageHere', (req, res, next) => {
  res.render('a-page-here.ejs');
});

routerNameHere.get('/newPageHere', (req, res, next) => {
  res.redirect('/page');
});

routeNameHere.post('/post-page', (req, res, next) => {
  res.redirect('/post-page');
});

module.exports = routeNameHere;
