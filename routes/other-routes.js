const express = require('express');
const otherRoutes = express.Router();

otherRoutes.get('/whatever', (req, res, next) => {
  res.render('something-view.ejs');
});

otherRoutes.post('/search', (req, res, next) => {
  res.render('/');
});

module.exports = otherRoutes;
