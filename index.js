// File: pages/index.js

import Head from 'next/head';
import { useState } from 'react'; 
// Catetan: Urang can masangkeun AI (Gemini) di dieu. Ieu ngan tampilan heula.

export default function Home() {
  const [niche, setNiche] = useState('');
  const [audience, setAudience] = useState('');
  const [result, setResult] = useState('Your perfect bio will appear here...');

  // Fungsi anu bakal ngajalankeun AI engké
  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult('Generating...');
    
    // IEU HANYA SIMULASI SEMENTARA. Engké diganti ku kodeu AI.
    setTimeout(() => {
      setResult(`AI Generated Bio (Preview): Creator | ${niche} Expert | Serving ${audience}. Tap the link to work with me!`);
    }, 2000);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '20px', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <Head>
        <title>BioPerfect AI - Craft the Perfect Instagram Bio</title>
        <meta name="description" content="AI tool to generate optimized Instagram bios for high conversion." />
      </Head>

      {/* HEADER SECTION */}
      <header style={{ paddingBottom: '30px' }}>
        <h1 style={{ fontSize: '2.5em', color: '#1a1a1a' }}>
          **BioPerfect AI**
        </h1>
        <h2 style={{ fontSize: '1.5em', color: '#333', marginTop: '-10px' }}>
          Craft the Perfect Instagram Bio in Seconds.
        </h2>
        <p style={{ color: '#555', maxWidth: '600px', margin: '10px auto' }}>
          Leverage AI to generate an optimized, high-converting 150-character bio that captures your niche and drives traffic. Stop guessing, start converting.
        </p>
      </header>

      {/* INPUT FORM SECTION */}
      <main style={{ maxWidth: '600px', margin: '0 auto', padding: '25px', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <form onSubmit={handleSubmit}>
          
          <div style={{ marginBottom: '20px', textAlign: 'left' }}>
            <label htmlFor="niche" style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#1a1a1a' }}>
              Your Niche/Industry:
            </label>
            <input
              type="text"
              id="niche"
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              placeholder="e.g., Organic Skincare, Freelance Web Designer"
              required
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '30px', textAlign: 'left' }}>
            <label htmlFor="audience" style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#1a1a1a' }}>
              Your Target Audience:
            </label>
            <input
              type="text"
              id="audience"
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              placeholder="e.g., Young Moms, Small Business Owners, Gen Z"
              required
              style={inputStyle}
            />
          </div>

          <button type="submit" style={buttonStyle}>
            Generate Bio!
          </button>
        </form>

        {/* RESULT SECTION */}
        <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#e9f7ff', borderRadius: '8px', border: '2px solid #0070f3' }}>
          <h3 style={{ color: '#1a1a1a' }}>Generated Bio:</h3>
          <p style={{ minHeight: '50px', fontWeight: 'bold', color: '#0070f3', fontSize: '1.1em' }}>
            {result}
          </p>
        </div>
        <p style={{ marginTop: '10px', fontSize: '0.8em', color: '#888' }}>
          *Bio results are optimized for Instagram's 150-character limit.
        </p>
      </main>

      {/* FOOTER */}
      <footer style={{ marginTop: '50px', fontSize: '0.8em', color: '#aaa' }}>
        <p>&copy; 2025 BioPerfect AI. Powered by AI and Vercel.</p>
      </footer>
    </div>
  );
}

// Inline Styles (Pikeun tampilan anu saderhana)
const inputStyle = {
  width: '100%',
  padding: '12px',
  boxSizing: 'border-box',
  border: '1px solid #ddd',
  borderRadius: '6px',
  fontSize: '1em',
};

const buttonStyle = {
  backgroundColor: '#0070f3',
  color: 'white',
  padding: '12px 20px',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '1.1em',
  fontWeight: 'bold',
  width: '100%',
  transition: 'background-color 0.3s'
};
