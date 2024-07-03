

const router = require("express").Router();

const User = require('../models/userModel'); // Assuming userModel.js is in the same directory

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).json({ message: 'Registration successful' }); // Or include the token in the response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user' });
  }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
    //   const isMatch = await bcrypt.compare(password, user.password);
    //   if (!isMatch) {
    //     return res.status(401).json({ message: 'Invalid username or password' });
    //   }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error logging in' });
      }
    });


module.exports = router;