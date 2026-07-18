const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./src/db/db');
require('dotenv').config();
const app = require('./src/app');

 
connectDB();
const PORT = process.env.PORT || 4000;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

