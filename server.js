// requiring in express
const express = require('express');
// requiring in the connecting to our MongoDB database
const connectDB = require('./config/db');

// initialize app variable with express
const app = express();

// Connect to the database
connectDB();

// innitialize Middleware
// bodyParser
app.use(express.json({ extended: false }));

// Endpoint to test out
app.get('/', (req, res) => res.send('API running!'));

// code to access routes created
// define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// putting PORT in a variable
const PORT = process.env.PORT || 5000;

// listining for a PORT
app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));
//
