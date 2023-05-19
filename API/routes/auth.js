const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const BlacklistedToken = require('../models/BlacklistedToken');
const authenticateToken=require('../middleware/authenticateToken');

const { JWT_SECRET } = process.env;
router.post('/register', async (req, res) => {
    try {
      const { username, email, password } = req.body;
             // Check if the username or email already exists
             const existingUser = await User.findOne({ $or: [{ username }, { email }] });
             if (existingUser) {
               return res.status(409).json({ message: 'Username or email already exists' });
             }
      
             // Hash the password
             const hashedPassword = await bcrypt.hash(password, 10);
      
             // Create a new user with hashed password
             const newUser = new User({ username, email, password: hashedPassword });
             await newUser.save();
      
             res.status(201).json({ message: 'User registered successfully' });
           } catch (error) {
             console.error(error);
             res.status(500).json({ message: 'Server Error' });
           }
         });
      
         // POST /api/auth/login
         router.post('/login', async (req, res) => {
           try {
             const { username, password } = req.body;
      
             // Find the user by username
             const user = await User.findOne({ username });
             if (!user) {
               return res.status(401).json({ message: 'Invalid username or password' });
             }
      
             // Compare the provided password with the stored hash
             const isPasswordValid = await bcrypt.compare(password, user.password);
             if (!isPasswordValid) {
               return res.status(401).json({ message: 'Invalid username or password' });
             }
      
             // Generate JWT token
             const token = jwt.sign({ userId: user._id,
            isAdmin:user.isAdmin},process.env.JWT_SECRET);

            
      
             res.json({ token });
           } catch (error) {
             console.error(error);
             res.status(500).json({ message: 'Server Error' });
           }
         });
      
         // POST /api/auth/logout
         
         router.post('/logout', async (req, res) => {
          try {
            // const { token } = req.headers;
            const authHeader = req.headers.authorization;
        
            if (!authHeader) {
              return res.status(400).json({ message: 'Token is required' });
            }

            const token = authHeader.split(' ')[1]; // Get the token from the Authorization header
        
            jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
              if (err) {
                return res.status(401).json({ message: 'Invalid token' });
              }
        
              try {
                const user = await User.findById(decoded.userId);
                if (!user) {
                  return res.status(401).json({ message: 'User not found' });
                }
        
                // Check if the token already exists in the BlacklistedToken collection
                const existingToken = await BlacklistedToken.findOne({ token });
                if (existingToken) {
                  return res.status(400).json({ message: 'Token is already blacklisted' });
                }
        
                // Create a new instance of BlacklistedToken
                const blacklistedToken = new BlacklistedToken({ token });
                await blacklistedToken.save();
        
                res.json({ message: 'Successfully logged out' });
              } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Server Error' });
              }
            });
          } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
          }
        });

        // PUT /api/auth/users/:id
router.put('/users/:id', authenticateToken, async (req, res) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({ message: 'Access forbidden. Admin only.' });
  }

  try {
    const { username, email, password, isAdmin } = req.body;
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the user fields
    user.username = username || user.username;
    user.email = email || user.email;
    user.isAdmin = isAdmin !== undefined ? isAdmin : user.isAdmin;

    if (password) {
      // Hash the new password
      user.password = await bcrypt.hash(password, 10);
    }

    await user.save();
    res.json({ message: 'User updated successfully' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// DELETE /api/auth/users/:id
router.delete('/users/:id', authenticateToken, async (req, res) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({ message: 'Access forbidden. Admin only.' });
  }

  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await User.deleteOne({_id: id});
    res.json({ message: 'User deleted successfully' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// GET /api/auth/users/:id
router.get('/users/:id', authenticateToken, async (req, res) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({ message: 'Access forbidden. Admin only.' });
  }

  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Exclude password from the response
    const { password, ...userData } = user.toObject();
    res.json(userData);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});


/// ASKED SAFA .
// GET /api/auth/users
router.get('/users', authenticateToken, async (req, res) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({ message: 'Access forbidden. Admin only.' });
  }
  //
  const query= req.query.new
  try {
    const users = query ? await User.find().sort({_id:-1}).limit(5) :await User.find(); // return the user who just got signed up

    if (!users) {
      return res.status(404).json({ message: 'No users found' });
    }

    // Exclude password from the response
    const usersData = users.map(user => {
      const { password, ...userData } = user.toObject();
      return userData;
    });
    res.json(usersData);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

        

        
        
      
         module.exports = router;
      