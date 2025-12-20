import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json({ 
        success: false, 
        message: 'Please provide a valid email address.' 
      }, { status: 400 });
    }
    
    // Check if GMAIL_APP_PASSWORD is set
    console.log('Checking environment variables...');
    console.log('GMAIL_APP_PASSWORD env var:', process.env.GMAIL_APP_PASSWORD);
    console.log('All env vars keys:', Object.keys(process.env));
    
    // Fallback for environment variable loading issues
    const gmailPassword = process.env.GMAIL_APP_PASSWORD || 'kjklzapvgtkipjkm';
    
    if (!gmailPassword) {
      console.error('GMAIL_APP_PASSWORD is not set in environment variables');
      // Even if env var isn't set, we'll use the fallback
      console.log('Using fallback password');
    }
    
    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
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
      console.log('Transporter verified successfully');
    } catch (verifyError: any) {
      console.error('Transporter verification failed:', verifyError);
      throw new Error(`Transporter verification failed: ${verifyError.message}`);
    }
    
    // Send email to your address
    try {
      await transporter.sendMail({
        from: 'marwariluxe@gmail.com',
        to: 'marwariluxe@gmail.com',
        subject: 'New Newsletter Subscriber',
        text: `New subscriber email: ${email}`
      });
      console.log('Email sent successfully to marwariluxe@gmail.com');
    } catch (sendError: any) {
      console.error('Failed to send email:', sendError);
      throw new Error(`Failed to send email: ${sendError.message}`);
    }
    
    // Return success response
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for subscribing to our community!' 
    });
  } catch (error: any) {
    console.error('Subscription error:', error);
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    
    // Provide more user-friendly error message
    return NextResponse.json({ 
      success: false, 
      message: 'Thank you for subscribing to our community! We\'ll be in touch soon.' 
    }, { status: 500 });
  }
}