import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ 
        success: false, 
        message: 'All fields are required.' 
      }, { status: 400 });
    }
    
    // Validate email format
    if (!email.includes('@')) {
      return NextResponse.json({ 
        success: false, 
        message: 'Please provide a valid email address.' 
      }, { status: 400 });
    }
    
    // Check if GMAIL_APP_PASSWORD is set
    console.log('Checking environment variables for contact form...');
    const gmailPassword = process.env.GMAIL_APP_PASSWORD || 'kjklzapvgtkipjkm';
    
    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'marwariluxe@gmail.com',
        pass: gmailPassword
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    
    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('Transporter verified successfully for contact form');
    } catch (verifyError: any) {
      console.error('Transporter verification failed:', verifyError);
      throw new Error(`Transporter verification failed: ${verifyError.message}`);
    }
    
    // Prepare email content
    const emailSubject = `New Contact Form Submission: ${subject}`;
    const emailBody = `
New contact form submission received:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---

This message was sent from the Marwari Luxe contact form.
`;

    // Send email to your address
    try {
      await transporter.sendMail({
        from: 'marwariluxe@gmail.com',
        to: 'marwariluxe@gmail.com',
        replyTo: email,
        subject: emailSubject,
        text: emailBody
      });
      console.log('Contact form email sent successfully to marwariluxe@gmail.com');
    } catch (sendError: any) {
      console.error('Failed to send contact form email:', sendError);
      throw new Error(`Failed to send email: ${sendError.message}`);
    }
    
    // Return success response
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for contacting us! We will get back to you soon.' 
    });
  } catch (error: any) {
    console.error('Contact form error:', error);
    
    // Provide user-friendly error message
    return NextResponse.json({ 
      success: false, 
      message: 'Thank you for contacting us! We will get back to you soon.' 
    }, { status: 500 });
  }
}