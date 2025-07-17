const express = require('express');
const router = express.Router();
const Enquiry = require('../models/Enquiry');

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newEnquiry = new Enquiry({ name, email, message });
    await newEnquiry.save();
    res.status(200).json({ success: true, message: 'Enquiry saved' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error saving enquiry' });
  }
});

module.exports = router;
