const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// API endpoint to handle form data submission
app.post('/api/formdata', (req, res) => {
  const { email, name, message } = req.body;

 
  res.json({ message: 'Form data received successfully' });
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
