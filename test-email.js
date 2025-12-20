const nodemailer = require('nodemailer');

// Hardcoded credentials for testing
const GMAIL_APP_PASSWORD = 'kjklzapvgtkipjkm';

async function testEmail() {
  try {
    console.log('Testing email configuration...');
    
    if (!GMAIL_APP_PASSWORD) {
      console.error('GMAIL_APP_PASSWORD is not set');
      return;
    }
    
    console.log('Creating transporter...');
    
    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'marwariluxe@gmail.com',
        pass: GMAIL_APP_PASSWORD
      }
    });
    
    console.log('Verifying transporter...');
    
    // Verify transporter configuration
    await transporter.verify();
    
    console.log('Transporter verified successfully!');
    
    // Send test email
    console.log('Sending test email...');
    await transporter.sendMail({
      from: 'marwariluxe@gmail.com',
      to: 'marwariluxe@gmail.com',
      subject: 'Test Email from Marwari Luxe',
      text: 'This is a test email to confirm that the email configuration is working properly.'
    });
    
    console.log('Test email sent successfully!');
  } catch (error) {
    console.error('Error:', error.message);
    console.error('Error code:', error.code);
  }
}

testEmail();