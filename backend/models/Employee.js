const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  department: { type: String, required: true },
  salary: { type: Number, required: true },
  dob: { type: Date, required: true }, // Date of Birth
  dateOfJoining: { type: Date, required: true }, // Date of Joining
  maritalStatus: { type: String, enum: ['Single', 'Married', 'Divorced', 'Widowed'], required: true }, // Marital Status
  email: { type: String, required: true, unique: true }, // Email
  phoneNumber: { type: String, required: true }, // Phone Number
  address: { type: String, required: true }, // Address
  emergencyContact: { type: String, required: true }, // Emergency Contact Name
  relationshipToEmergency: { type: String, required: true }, // Relationship to Emergency Contact
  bloodGroup: { type: String, required: true }, // Blood Group
  education: { type: String }, // Education details
  languagesKnown: { type: [String] }, // Array of languages known
  username: { type: String, required: true, unique: true }, // Username for login
  password: { type: String, required: true }, // Password for login
});

module.exports = mongoose.model('Employee', EmployeeSchema);
