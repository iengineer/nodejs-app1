// This file is used to interact with the Database

// We need mongoose to talk to MonogoDB (duh, wadson!)
const mongoose = require('mongoose');

// copy the mongoose connect from app.js to ensure accuracy
mongoose.connect('mongodb://localhost/blah');

// The schema we are inserting...
const Student = require('../models/student-model.js');

// DATA WE ARE INSERTING
const studentsInfo = [
  {
    firstName: 'Wadson',
    lastName: 'Fleurigene',
    age: 28,
    schoolId: '1337',
    picture: '/images/blah.gif'
  },
  {
    firstName: 'Nizar',
    lastName: 'Khakdhsih',
    age: 21,
    schoolId: '7331',
    picture: '/images/blah.gif'
  }
];

// Creating a connection
Student.create(studentsInfo, (err, studentsDocs) => {
  if (err) {
    throw err;
  }
  // For each student we add, let me know in the console, bro.
  studentsDocs.forEach((oneStudent) => {
    console.log(`NEW STUDENT ${oneStudent.firstName} -> ${oneStudent._id}`);
  });
});
