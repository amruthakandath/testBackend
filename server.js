require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const enquiryRoutes = require('./routes/Enquiry');

const app = express();

app.options('*', cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

app.use('/api/enquiry', enquiryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
