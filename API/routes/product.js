const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Product = require('../models/product');
const BlacklistedToken = require('../models/BlacklistedToken');
const authenticateToken=require('../middleware/authenticateToken');

// POST /api/products
router.post('/goods', authenticateToken, async (req, res) => {
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: 'Access forbidden. Admin only.' });
    }
  
    try {
      const product = new Product(req.body);
      await product.save();
      res.status(201).json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
  // PUT /api/products/:id
  router.put('/goods/:id', authenticateToken, async (req, res) => {
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: 'Access forbidden. Admin only.' });
    }
  
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      Object.assign(product, req.body);
      await product.save();
      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
  // DELETE /api/products/:id
  router.delete('/goods/:id', authenticateToken, async (req, res) => {
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: 'Access forbidden. Admin only.' });
    }
  
    try {
      const { id } = req.params;
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      await Product.deleteOne({_id: id});
      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
  // GET /api/products/goods/:id GetById
router.get('/goods/:id', authenticateToken, async (req, res) => {
  if (!req.user.isAdmin) {
      return res.status(403).json({ message: 'Access forbidden. Admin only.' });
  }
  try {

      const product = await Product.findById(req.params.id);
      if (!product) {
          return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
  }
});

// LATER ON FIX CATEGORIES
// GET /api/products/goods
router.get('/goods', async (req, res) => {    
  try {
    const { new: isNew, categories } = req.query;
    let products;

    if (isNew) {
      products = await Product.find().sort({_id:-1}).limit(5);
    } else if (categories) {
      products = await Product.find({ categories: { $in: [categories] }}).sort({_id:-1}).limit(5);
    } else {
      products = await Product.find();
    }

    res.json(products);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
  }
});




  

        

        
        
      
         module.exports = router;
      