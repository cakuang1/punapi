import { list } from '@vercel/blob';
import type { VercelRequest, VercelResponse } from '@vercel/node';

function getRandomElement<T>(arr: T[]): T {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export default async function handler(
    request: VercelRequest,
    response: VercelResponse,
  )  {
    response.setHeader('Cache-Control', 'public, s-maxage=3600');
    try {
        const { blobs } = await list();
        // Function to pick a random element from an array
        // Pick a random blob from the list
        const randomBlob = getRandomElement(blobs);
        return response.json({ meme: randomBlob.url });
    }
    catch (error) {
        console.error('Error fetching blobs:', error);
        return response.status(500).json({ error: 'Internal server error' });
    }
}
