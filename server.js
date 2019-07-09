const express = require('express');

// initialize app variable with express
const app = express();

// Endpoint to test out
app.get('/', (req, res) => res.send('API running!'));

// putting PORT in a variable
const PORT = process.env.PORT || 5000;

// listining for a PORT
app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));
