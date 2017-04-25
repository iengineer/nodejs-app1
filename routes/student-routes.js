const express = require('express');
const Student = require('../models/student-model.js');
const studentRoutes = express.Router();

studentRoutes.get('/whatever2', (req, res, next) => {
  res.render('something-view2.ejs');
});

studentRoutes.post('/search', (req, res, next) => {
  res.render('/');
});

studentRoutes.get('/students', (req, res, next) => {
  Student.find((err, studentList) => {
    if (err) {
      next(err);
      return;
    }

    // If no error
    res.render('list-students-view.ejs', {
      students: studentList
    });
  });
});

module.exports = studentRoutes;
