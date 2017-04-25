const express = require('express');
const studentRoutes = express.Router();

studentRoutes.get('/whatever2', (req, res, next) => {
  res.render('something-view2.ejs');
});

studentRoutes.post('/search', (req, res, next) => {
  res.render('/');
});

module.exports = studentRoutes;
