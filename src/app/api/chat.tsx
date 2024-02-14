// Import necessary libraries
// import dotenv from 'dotenv';
// import genai from 'google.generativeai';
// import { NextApiRequest, NextApiResponse } from 'next';

// // Load environment variables
// dotenv.config();
// // Configure Google GenAI
// genai.configure({ api_key: process.env.GOOGLE_API_KEY });

// // Initialize Gemini LLM model
// const model = genai.GenerativeModel('gemini-pro');
// let chat = model.start_chat({ history: [] });

// // Handler function for API route
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { input } = req.body;

//     try {
//       // Send user input to Gemini LLM model
//       const response = chat.send_message(input, { stream: true });

//       // Construct and send response
//       const chunks = [];
//       for await (const chunk of response) {
//         chunks.push(chunk.text);
//       }
//       res.status(200).json({ response: chunks });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   } else {
//     // Method not allowed
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Handler function for API route
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { input } = req.body;
    const apiKey = process.env.GOOGLE_API_KEY;

    try {
      // Make HTTP request to Google's generative AI service
      const response = await axios.post(
        'https://api.example.com/generative-ai',
        { input },
        {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          }
        }
      );

      // Extract and send response
      res.status(200).json({ response: response.data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    // Method not allowed
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
