import { list } from '@vercel/blob';
import type { VercelRequest, VercelResponse } from '@vercel/node';


// Function to pick a random element from an array
function getRandomElement<T>(arr: T[]): T {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export default async function blobs(request: VercelRequest, response: VercelResponse) {
  try {
    const { blobs } = await list();
    
    // Pick a random blob from the list
    const randomBlob = getRandomElement(blobs);

    return response.status(200).json({ meme: randomBlob.url });
  } catch (error) {
    console.error('Error fetching blobs:', error);
    return response.status(500).json({ error: 'Internal server error' });
  }
}
