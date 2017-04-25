const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//construct schema
const studentSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  age: { type: Number },
  schoolId: { type: String },
  picture: { type: String }
});

// export schema
const Student = mongoose.model('Student', studentSchema);

//
module.exports = Student;
