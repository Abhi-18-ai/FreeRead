const express = require('express');
const bookRoutes = require('./routes/book.route');
const authRoutes = require('./routes/auth.route');
const app = express();
app.use(express.json());


app.use('/api', bookRoutes);
app.use('/api', authRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Book API');
});

module.exports = app;