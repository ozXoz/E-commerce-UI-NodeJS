const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const authenticateToken = require('../middleware/authenticateToken');

// POST /api/carts - Add item to the cart
router.post('/addcard', authenticateToken, async (req, res) => {
    try {
        const newCartItem = new Cart(req.body);
        const savedCartItem = await newCartItem.save();
        res.status(201).json(savedCartItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

router.put('/update/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        let cartItem = await Cart.findById(id);

        if (!cartItem) {
            return res.status(404).json({ message: 'Cart item not found.' });
        }

        cartItem = await Cart.findByIdAndUpdate(id, {$set: req.body}, {new: true});
        res.json(cartItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});



// DELETE /api/carts/:id - Delete cart item
router.delete('/delete/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        await Cart.findByIdAndDelete(req.params.id);
        res.json({ message: 'Cart item deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// GET /api/carts/:id - Get cart item by id
router.get('/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const cartItem = await Cart.findById(req.params.id);
        if (!cartItem) {
            return res.status(404).json({ message: 'Cart item not found' });
        }
        res.json(cartItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// GET /api/carts - Get all carts
router.get('/', authenticateToken, async (req, res) => {
    try {
        const carts = await Cart.find();
        res.json(carts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});


module.exports = router;
