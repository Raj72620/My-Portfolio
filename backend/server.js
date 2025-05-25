require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const Collaboration = require('./models/Collaboration');

const app = express();

// CORS Configuration 
const allowedOrigins = [
  'http://localhost:5173',          // Local dev
  'https://my-portfolio-db4k.onrender.com',  // Your backend
  'https://your-frontend-url.com'   // ⭐ Add your frontend URL here when deployed
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// API endpoint to handle collaboration submissions
app.post('/api/collaborate', async (req, res) => {
  try {
    const { name, email, linkedin, idea } = req.body;

    // Save to database
    const newCollaboration = new Collaboration({ name, email, linkedin, idea });
    await newCollaboration.save();

    // Email to you
    const mailOptionsToYou = {
      from: process.env.EMAIL_USER,
      to: process.env.YOUR_EMAIL,
      subject: 'New Collaboration Idea',
      html: `
        <h2>New Collaboration Idea from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        ${linkedin ? `<p><strong>LinkedIn:</strong> ${linkedin}</p>` : ''}
        <p><strong>Idea:</strong></p>
        <p>${idea}</p>
      `
    };

    // Email to the submitter
    const mailOptionsToSubmitter = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your Idea Has Been Submitted',
      html: `
        <h2>Thank you for your idea, ${name}!</h2>
        <p>We've received your collaboration idea and will get back to you soon.</p>
        <p>Here's what you submitted:</p>
        <p><strong>Idea:</strong></p>
        <p>${idea}</p>
        <p>Best regards,</p>
        <p>Nishanth Raj</p>
      `
    };

    // Send both emails
    await transporter.sendMail(mailOptionsToYou);
    await transporter.sendMail(mailOptionsToSubmitter);

    res.status(200).json({ message: 'Idea submitted successfully!' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));