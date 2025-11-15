// Number 2
const express = require('express');
const Bug = require('../models/bugModel');
const router = express.Router();

// GET all bugs
router.get('/', async (req, res, next) => {
  try {
    const bugs = await Bug.find();
    res.status(200).json(bugs);
  } catch (err) {
    next(err);
  }
});

// POST new bug
router.post('/', async (req, res, next) => {
  try {
    const bug = await Bug.create(req.body);
    res.status(201).json(bug);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
