const auth = require('../db/auth.db');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const userExists = await auth.findOne({ username });
    if (userExists) {
      return res.status(400).json({ message: 'Username already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new auth({ username, password: hashedPassword });
    const savedUser = await newUser.save();
    res.status(201).json({ message: 'User registered successfully', user: savedUser });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  };


exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await auth.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }   

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successful' });
    } catch (error) {
    res.status(500).json({ message: error.message });
    }

    // exports.getAllUsers = async (req, res) => {
    // try {
    //     const users = await auth.find();
    //     res.json(users);
    // } catch (error) {
    //     res.status(500).json({ message: error.message });
    // }
  

};
