import { list } from '@vercel/blob';
import { VercelRequest, VercelResponse } from '@vercel/node';

// Function to shuffle an array using the Fisher-Yates algorithm
function shuffleArray<T>(array: T[]): void {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default async function blobs(request: VercelRequest, response: VercelResponse) {
  try {
    const { blobs } = await list();

    // Shuffle the array of blobs
    shuffleArray(blobs);
    // Select the first 4 elements from the shuffled array
    const randomBlobs = blobs.slice(0, 4).map((blob) => blob.url);

    return response.status(200).json({ memes: randomBlobs });
  } catch (error) {
    console.error('Error fetching blobs:', error);
    return response.status(500).json({ error: 'Internal server error' });
  }
}
