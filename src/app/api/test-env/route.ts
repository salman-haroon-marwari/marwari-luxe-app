import { NextResponse } from 'next/server';

export async function GET() {
  console.log('GMAIL_APP_PASSWORD:', process.env.GMAIL_APP_PASSWORD);
  
  return NextResponse.json({ 
    gmailPasswordSet: !!process.env.GMAIL_APP_PASSWORD,
    gmailPasswordLength: process.env.GMAIL_APP_PASSWORD ? process.env.GMAIL_APP_PASSWORD.length : 0,
    timestamp: new Date().toISOString()
  });
}