const express = require('express');
const otherRoutes = express.Router();

// localhost:3000/whatever
otherRoutes.get('/whatever', (req, res, next) => {
  res.render('something-view.ejs');
});

otherRoutes.post('/search', (req, res, next) => {
  res.render('/');
});

module.exports = otherRoutes;
