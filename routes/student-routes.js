const express = require('express');
const studentRoutes = express.Router();

otherRoutes.get('/whatever2', (req, res, next) => {
  res.render('something-view2.ejs');
});

otherRoutes.post('/search', (req, res, next) => {
  res.render('/');
});

module.exports = studentRoutes;
