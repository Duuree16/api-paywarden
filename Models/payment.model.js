const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the HospitalPayment schema
const HospitalPaymentSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true,
  },
  diagnosis: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ['Paid', 'Pending', 'Cancelled'],
    default: 'Pending',
  },
  amountToPay: {
    type: Number,
    required: true,
  },
  doctor: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    enum: ['Card', 'Cash', 'Bank Transfer'],
    required: true,
  },
});

// Create and export the HospitalPayment model
const HospitalPayment = mongoose.model('HospitalPayment', HospitalPaymentSchema);
module.exports = HospitalPayment;