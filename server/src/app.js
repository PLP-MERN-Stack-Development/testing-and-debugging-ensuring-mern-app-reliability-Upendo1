const express = require('express');
const bugRoutes = require('./routes/bugRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());

app.use('/api/bugs', bugRoutes);
app.use('/api/users', userRoutes);

module.exports = app;
