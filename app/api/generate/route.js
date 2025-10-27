// File: app/api/generate/route.js

import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req) {
  try {
    const { niche, audience } = await req.json(); 

    if (!niche || !audience) {
      return NextResponse.json({ error: 'Missing niche or audience' }, { status: 400 });
    }
    
    const prompt = `
      You are a professional Instagram Bio Optimizer. 
      Generate 3 distinct, highly effective Instagram bio options (max 150 characters each). 
      The bios must be for the niche: "${niche}" and targeted towards the audience: "${audience}".
      The bios must include emojis and a strong Call-to-Action (CTA).
      Output the 3 bios, each on a new line, separated by two dashes (--).
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: { temperature: 0.7 }
    });

    const aiResultText = response.text.trim();
    
    return NextResponse.json({ result: aiResultText }, { status: 200 });

  } catch (error) {
    console.error('Gemini API Error:', error);
    return NextResponse.json({ error: 'Failed to generate bio from AI.' }, { status: 500 });
  }
}
