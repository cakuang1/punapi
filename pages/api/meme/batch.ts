import { list } from '@vercel/blob';
import { NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

// Function to shuffle an array using the Fisher-Yates algorithm
function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default async function blobs(request: Request) {
  const { blobs } = await list();

  // Shuffle the array of blobs
  shuffleArray(blobs);

  // Select the first 4 elements from the shuffled array
  const randomBlobs = blobs.slice(0, 4).map((blob) => blob.url);

  return NextResponse.json({ memes: randomBlobs });
}
