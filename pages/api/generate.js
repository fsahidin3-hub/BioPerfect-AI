// File: pages/api/generate.js

import { GoogleGenAI } from '@google/genai';

// Baca Konci Rahasia dari Vercel
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { niche, audience } = req.body;

  if (!niche || !audience) {
    return res.status(400).json({ error: 'Missing niche or audience' });
  }
  
  // PROMPT PENTING: Paréntah ka AI
  const prompt = `
    You are a professional Instagram Bio Optimizer. 
    Generate 3 distinct, highly effective Instagram bio options (max 150 characters each). 
    The bios must be for the niche: "${niche}" and targeted towards the audience: "${audience}".
    The bios must include emojis and a strong Call-to-Action (CTA).
    Output the 3 bios, each on a new line, separated by two dashes (--).
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: {
          temperature: 0.7,
      }
    });

    const aiResultText = response.text.trim();
    
    // Kirimkeun hasilna deui ka front-end
    res.status(200).json({ result: aiResultText });

  } catch (error) {
    console.error('Gemini API Error:', error);
    res.status(500).json({ error: 'Failed to generate bio from AI.' });
  }
}
