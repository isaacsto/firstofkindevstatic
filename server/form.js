const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config(); // Fixed dotenv require statement

// Initialize Express app
const app = express();

// Middleware
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from React build folder
app.use(express.static(path.join(__dirname, '..', 'build')));

// Handle React routing, return React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

// Handle form submission
app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;

  console.log('Email:', process.env.EMAIL_USER);
  console.log('Password:', process.env.EMAIL_PASS ? 'Loaded' : 'Not loaded');

  // Configure email transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: 'isaacstofko@gmail.com', 
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Something went wrong. Please try again later.');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Thank you for your message! We will get back to you soon.');
    }
  });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
