const express = require('express');
const mongoose = require('mongoose');
const authenticateToken = require('./middleware/authenticateToken');
const BlacklistedToken = require('./models/BlacklistedToken');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
const cartRoutes=require('./routes/cart');
const orderRoutes=require('./routes/order');
require('dotenv').config();


const app = express();
const PORT = 3333; // Change the port number as needed

// MongoDB connection
mongoose.connect("mongodb+srv://e_commerce:Azr2010q+@cluster0.br3gnsk.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app.use(express.json())

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define your routes and middlewarex`
// Example route
app.get('/test', (req, res) => {
  res.send('Hello, World!');
  console.log("Test is passed !")
  
});
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/orders', orderRoutes);






// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
