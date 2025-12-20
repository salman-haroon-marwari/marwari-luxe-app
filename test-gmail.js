const nodemailer = require('nodemailer');

// Exact credentials from your environment file
const GMAIL_APP_PASSWORD = 'kjklzapvgtkipjkm';

async function testEmail() {
  try {
    console.log('Testing with exact credentials from .env file');
    console.log('Gmail user: marwariluxe@gmail.com');
    console.log('App password length:', GMAIL_APP_PASSWORD.length);
    
    // Create transporter using Gmail SMTP with explicit settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'marwariluxe@gmail.com',
        pass: GMAIL_APP_PASSWORD
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    
    console.log('Verifying transporter...');
    await transporter.verify();
    console.log('Transporter verified successfully!');
    
    console.log('Sending test email...');
    await transporter.sendMail({
      from: 'marwariluxe@gmail.com',
      to: 'marwariluxe@gmail.com',
      subject: 'Test Email from Marwari Luxe - Direct Test',
      text: 'This is a test email sent directly from Node.js to verify the Gmail configuration.'
    });
    
    console.log('Test email sent successfully!');
  } catch (error) {
    console.error('Error details:');
    console.error('Message:', error.message);
    console.error('Code:', error.code);
    console.error('Stack:', error.stack);
  }
}

testEmail();