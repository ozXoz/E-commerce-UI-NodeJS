const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const BlacklistedToken = require('../models/BlacklistedToken');

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by username or email
    const user = await User.findOne({ $or: [{ username }, { email: username }] });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a JSON Web Token (JWT)
    const token = jwt.sign({ userId: user._id }, 'your-secret-key');

    // Send the JWT as a response
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.post('/logout', async (req, res) => {
  const { token } = req.body;

  // Add the token to the blacklist
  const blacklistedToken = new BlacklistedToken({ token });
  await blacklistedToken.save();

  res.json({ message: 'Logged out successfully' });
});


module.exports = router;
