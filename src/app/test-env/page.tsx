'use client';

import { useEffect, useState } from 'react';

export default function TestEnvPage() {
  const [envVars, setEnvVars] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    // This will only show public environment variables
    setEnvVars({
      GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD || 'Not set',
      NEXT_PUBLIC_TEST: process.env.NEXT_PUBLIC_TEST || 'Not set'
    });
  }, []);

  const testApiRoute = async () => {
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: 'test@example.com' }),
      });
      
      const data = await response.json();
      console.log('API Response:', data);
      alert(`API Response: ${JSON.stringify(data)}`);
    } catch (error) {
      console.error('API Error:', error);
      alert(`API Error: ${error}`);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-8">Environment Variables Test</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Environment Variables:</h2>
        <div className="space-y-2">
          <div>
            <strong>GMAIL_APP_PASSWORD:</strong> {envVars.GMAIL_APP_PASSWORD}
          </div>
          <div>
            <strong>NEXT_PUBLIC_TEST:</strong> {envVars.NEXT_PUBLIC_TEST}
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">API Tests:</h2>
          <button 
            onClick={testApiRoute}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
          >
            Test Subscribe API
          </button>
        </div>
      </div>
    </div>
  );
}