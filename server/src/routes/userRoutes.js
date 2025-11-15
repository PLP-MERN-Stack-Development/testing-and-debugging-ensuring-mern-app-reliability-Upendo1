const express = require('express');
const User = require('../models/User');

const router = express.Router();

// POST /api/users
router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).json(user);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

module.exports = router;
