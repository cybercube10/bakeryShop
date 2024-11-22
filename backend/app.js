// app.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productRoutes = require('./routes/products'); 
const cors = require('cors')
const path = require('path')
const fs = require('fs')
dotenv.config();

const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}


const app = express();

// Middleware to parse JSON
app.use(express.json());

app.use(cors()); 

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB
const connectDB = require('./db/connect')

// Route for handling products
app.use('/api/products', productRoutes); // Route for CRUD operations on products

//Route for handling auth  


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'An error occurred!' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  await connectDB(process.env.MONGOURI); 
  console.log(`Server running on http://localhost:${PORT}`);
});

