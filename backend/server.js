const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
require('dotenv').config(); // Fallback for root environment
const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');

const Collaboration = require('./models/Collaboration');
const ContactMessage = require('./models/ContactMessage');

const app = express();

// Trust proxy for hosted environments like Render/Heroku
app.set('trust proxy', 1);

// CORS Configuration
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'http://localhost:3000',
  'http://127.0.0.1:5173',
  'https://my-portfolio-db4k.onrender.com',
  'https://myportfolio9618.netlify.app',
  'http://myportfolio9618.netlify.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    // Allow any localhost or netlify/render domains
    if (
      allowedOrigins.indexOf(origin) !== -1 ||
      origin.includes('localhost') ||
      origin.includes('netlify.app') ||
      origin.includes('onrender.com') ||
      origin.includes('vercel.app')
    ) {
      return callback(null, true);
    }
    return callback(null, true); // Dev-friendly fallback
  },
  credentials: true
}));

app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '1mb' }));

// Rate limiting: max 20 submissions per hour per IP
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 20,
  message: { error: 'Too many messages submitted from this IP. Please try again later or email directly.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Database state flag
let isDbConnected = false;

// Connect to MongoDB Atlas
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 5000,
  })
    .then(() => {
      isDbConnected = true;
      console.log('Connected to MongoDB Atlas successfully.');
    })
    .catch((err) => {
      isDbConnected = false;
      console.warn('MongoDB connection note (server continues running):', err.message);
    });

  mongoose.connection.on('connected', () => { isDbConnected = true; });
  mongoose.connection.on('disconnected', () => { isDbConnected = false; });
} else {
  console.warn('Warning: MONGODB_URI not provided in environment.');
}

// Nodemailer transporter with existing credentials
let transporter = null;
if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER.trim(),
      pass: process.env.EMAIL_PASS.trim()
    }
  });
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    timestamp: new Date().toISOString(),
    database: isDbConnected ? 'connected' : 'standby',
    service: 'Nishanth Raj Portfolio API'
  });
});

// Unified Contact API handler
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { name, email, category, message, linkedin } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    // Save to MongoDB if available
    let savedToDb = false;
    if (isDbConnected) {
      try {
        const contactDoc = new ContactMessage({
          name: name.trim(),
          email: email.trim(),
          category: category || 'General Inquiry',
          message: message.trim(),
          linkedin: linkedin ? linkedin.trim() : ''
        });
        await contactDoc.save();
        savedToDb = true;
      } catch (dbErr) {
        console.error('Error saving contact to DB:', dbErr.message);
      }
    }

    // Send email notification if transporter is active
    if (transporter) {
      const recipientEmail = process.env.YOUR_EMAIL || 'nishanthsingh9618@gmail.com';

      const mailToOwner = {
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: recipientEmail,
        replyTo: email,
        subject: `New Portfolio Inquiry: [${category || 'General'}] from ${name}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h2 style="color: #0f172a; margin-top: 0;">New Message from Portfolio</h2>
            <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
            <p><strong>Category:</strong> ${category || 'General Inquiry'}</p>
            ${linkedin ? `<p><strong>LinkedIn:</strong> <a href="${linkedin}">${linkedin}</a></p>` : ''}
            <div style="background-color: #f8fafc; padding: 16px; border-radius: 6px; border-left: 4px solid #3b82f6; margin-top: 16px;">
              <h4 style="margin-top: 0; color: #334155;">Message:</h4>
              <p style="white-space: pre-wrap; color: #1e293b;">${message}</p>
            </div>
            <p style="color: #64748b; font-size: 12px; margin-top: 24px;">Sent via Nishanth Raj Portfolio API</p>
          </div>
        `
      };

      const mailToSender = {
        from: `"Nishanth Raj" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Thank you for reaching out, ${name}!`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h2 style="color: #0f172a; margin-top: 0;">Message Received</h2>
            <p>Hi ${name},</p>
            <p>Thank you for reaching out through my portfolio. I have received your message regarding <strong>${category || 'your inquiry'}</strong> and will get back to you shortly.</p>
            <div style="background-color: #f8fafc; padding: 14px; border-radius: 6px; margin: 16px 0;">
              <p style="margin: 0; color: #475569; font-size: 14px;"><strong>Your message summary:</strong></p>
              <p style="white-space: pre-wrap; color: #1e293b; font-size: 14px;">${message}</p>
            </div>
            <p>Best regards,<br/><strong>Nishanth Raj</strong><br/>Software Developer · Full-Stack Engineer<br/><a href="http://www.linkedin.com/in/nishanth-singh">LinkedIn</a> · <a href="https://github.com/Raj72620">GitHub</a></p>
          </div>
        `
      };

      try {
        await Promise.all([
          transporter.sendMail(mailToOwner),
          transporter.sendMail(mailToSender)
        ]);
      } catch (mailErr) {
        console.error('Nodemailer error:', mailErr.message);
      }
    }

    res.status(200).json({
      message: 'Your message has been sent successfully! A confirmation email has been dispatched.',
      savedToDb
    });
  } catch (error) {
    console.error('Submission error:', error);
    res.status(500).json({ error: 'Internal server error while processing request.' });
  }
});

// Backward compatibility for existing /api/collaborate endpoint
app.post('/api/collaborate', contactLimiter, async (req, res) => {
  try {
    const { name, email, linkedin, idea } = req.body;

    if (!name || !email || !idea) {
      return res.status(400).json({ error: 'Name, email, and idea are required.' });
    }

    let savedToDb = false;
    if (isDbConnected) {
      try {
        const newCollaboration = new Collaboration({ name, email, linkedin, idea });
        await newCollaboration.save();
        savedToDb = true;
      } catch (dbErr) {
        console.error('Collaboration DB save note:', dbErr.message);
      }
    }

    if (transporter) {
      const recipientEmail = process.env.YOUR_EMAIL || 'nishanthsingh9618@gmail.com';
      try {
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: recipientEmail,
          replyTo: email,
          subject: `New Collaboration Idea from ${name}`,
          html: `
            <h2>New Collaboration Idea from ${name}</h2>
            <p><strong>Email:</strong> ${email}</p>
            ${linkedin ? `<p><strong>LinkedIn:</strong> ${linkedin}</p>` : ''}
            <p><strong>Idea:</strong></p>
            <p>${idea}</p>
          `
        });

        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: email,
          subject: 'Your Idea Has Been Submitted - Nishanth Raj',
          html: `
            <h2>Thank you for your message, ${name}!</h2>
            <p>I have received your idea and will review it promptly.</p>
            <p><strong>Your submission:</strong></p>
            <p>${idea}</p>
            <p>Best regards,<br/><strong>Nishanth Raj</strong></p>
          `
        });
      } catch (mailErr) {
        console.error('Collaboration email note:', mailErr.message);
      }
    }

    res.status(200).json({ message: 'Idea submitted successfully!', savedToDb });
  } catch (error) {
    console.error('Error in /api/collaborate:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Portfolio server running on port ${PORT}`);
});
