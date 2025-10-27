// File: app/page.js

'use client'; // PENTING: Ieu pikeun ngagunakeun useState

import { useState } from 'react'; 

// Inline Styles (Pikeun tampilan anu saderhana)
const inputStyle = { /* ... (Same as before) */ };
const buttonStyle = { /* ... (Same as before) */ };

export default function HomePage() { // Ganti tina Home() janten HomePage()
  const [niche, setNiche] = useState('');
  const [audience, setAudience] = useState('');
  const [result, setResult] = useState('Your perfect bio will appear here...');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResult('Generating 3 optimized bios using AI...');

    try {
      // Nelepon ka API Route
      const response = await fetch('/api/generate', { // Ieu masih bakal jalan
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ niche, audience }),
      });

      const data = await response.json();

      if (data.error) {
        setResult(`Error: ${data.error}. Check your GEMINI_API_KEY on Vercel.`);
      } else {
        const formattedResult = data.result.replace(/--/g, '<hr/>');
        setResult(formattedResult);
      }

    } catch (error) {
      setResult('Failed to connect to the server or AI. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '20px', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      {/* KODEU UI TI INDEX.JS ANJEUN DI SINI (COPY TI BAGIAN RETURN) */}
      <header style={{ paddingBottom: '30px' }}>
        <h1 style={{ fontSize: '2.5em', color: '#1a1a1a' }}>
          **BioPerfect AI**
        </h1>
        <h2 style={{ fontSize: '1.5em', color: '#333', marginTop: '-10px' }}>
          Craft the Perfect Instagram Bio in Seconds.
        </h2>
        <p style={{ color: '#555', maxWidth: '600px', margin: '10px auto' }}>
          **Micro-SaaS:** Leverage AI to generate an optimized, high-converting 150-character bio that captures your niche and drives traffic.
        </p>
      </header>

      <main style={{ maxWidth: '600px', margin: '0 auto', padding: '25px', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <form onSubmit={handleSubmit}>
          {/* ... INPUT NICHE DAN AUDIENCE DI SINI ... */}
          <div style={{ marginBottom: '20px', textAlign: 'left' }}>
            <label htmlFor="niche" style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#1a1a1a' }}>Your Niche/Industry:</label>
            <input type="text" id="niche" value={niche} onChange={(e) => setNiche(e.target.value)} placeholder="e.g., Organic Skincare, Freelance Web Designer" required style={inputStyle} />
          </div>

          <div style={{ marginBottom: '30px', textAlign: 'left' }}>
            <label htmlFor="audience" style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#1a1a1a' }}>Your Target Audience:</label>
            <input type="text" id="audience" value={audience} onChange={(e) => setAudience(e.target.value)} placeholder="e.g., Young Moms, Small Business Owners, Gen Z" required style={inputStyle} />
          </div>

          <button type="submit" style={buttonStyle} disabled={isLoading}>
            {isLoading ? 'Generating... Please wait' : 'Generate 3 Bio Options!'}
          </button>
        </form>

        <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#e9f7ff', borderRadius: '8px', border: '2px solid #0070f3' }}>
          <h3 style={{ color: '#1a1a1a' }}>Generated Bio Results:</h3>
          <p style={{ minHeight: '50px', fontWeight: 'bold', color: '#0070f3', fontSize: '1.1em', textAlign: 'left' }}>
            <span dangerouslySetInnerHTML={{ __html: result }} /> 
          </p>
        </div>
        <p style={{ marginTop: '10px', fontSize: '0.8em', color: '#888' }}>*Bio results are optimized for Instagram's 150-character limit.</p>
      </main>

      <footer style={{ marginTop: '50px', fontSize: '0.8em', color: '#aaa' }}>
        <p>&copy; 2025 BioPerfect AI. Powered by AI and Vercel.</p>
      </footer>
    </div>
  );
}
