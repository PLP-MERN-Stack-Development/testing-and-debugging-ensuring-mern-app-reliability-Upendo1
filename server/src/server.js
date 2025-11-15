// Number 2
const express = require('express');
const cors = require('cors');

const bugRoutes = require('./routes/bugRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/bugs', bugRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send("API Running");
});

module.exports = app;
