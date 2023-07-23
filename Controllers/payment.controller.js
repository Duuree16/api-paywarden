const HospitalPayment = require('../Models/payment.model');

async function createHospitalPayment(paymentData) {
  try {
      const newPayment = new HospitalPayment(paymentData);
      newPayment.save()
    return newPayment;
  } catch (error) {
    throw new Error('Failed to create hospital payment record.');
  }
}

async function getAllPaymentRecords() {
  try{
    const payments = await HospitalPayment.find();
    return payments
  }
  catch(error)
  {
    throw new Error('Failed to get hospital payment records.');
  }
}

// Function to delete a hospital payment record by ID
async function deleteHospitalPayment(paymentId) {
  try {
    const deletedPayment = await HospitalPayment.findByIdAndDelete(paymentId);
    if (!deletedPayment) {
      throw new Error('Payment record not found.');
    }
    return deletedPayment;
  } catch (error) {
    throw new Error('Failed to delete hospital payment record.');
  }
}

// Function to update a hospital payment record by ID
async function updateHospitalPayment(paymentId, updatedData) {
  try {
    const updatedPayment = await HospitalPayment.findByIdAndUpdate(
      paymentId,
      { $set: updatedData },
      { new: true }
    );
    if (!updatedPayment) {
      throw new Error('Payment record not found.');
    }
    return updatedPayment;
  } catch (error) {
    throw new Error('Failed to update hospital payment record.');
  }
}

module.exports = {
    createHospitalPayment,
    deleteHospitalPayment,
    updateHospitalPayment,
    getAllPaymentRecords
  };