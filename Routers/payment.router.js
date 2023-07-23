
// hospitalPaymentRouter.js
const express = require('express');
const router = express.Router();

const {
  createHospitalPayment,
  deleteHospitalPayment,
  updateHospitalPayment,
  getAllPaymentRecords
} = require('../Controllers/payment.controller');

// Define your routes
router.post('/hospital-payment', async (req, res) => {
  try {
    const newPayment = await createHospitalPayment(req.body);
    res.status(201).json(newPayment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/hospital-payment/:id', async (req, res) => {
  try {
    const deletedPayment = await deleteHospitalPayment(req.params.id);
    res.json(deletedPayment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/hospital-payment/:id', async (req, res) => {
  try {
    const updatedPayment = await updateHospitalPayment(req.params.id, req.body);
    res.json(updatedPayment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/hospital-payment' , async (_req,res) => {
  try {
    const paymentRecords = await getAllPaymentRecords();
    res.json(paymentRecords);

  }catch(err){
    res.status(500).json({error:err.message});
  }
})

module.exports = router;
