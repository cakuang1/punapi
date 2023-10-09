import { list } from '@vercel/blob';
import { NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

// Function to pick a random element from an array
function getRandomElement(arr: string | any[]) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export default async function blobs(request: Request) {
  const { blobs } = await list();
 
  // Pick a random blob from the list
  const randomBlob = getRandomElement(blobs);
  
  return NextResponse.json({meme : randomBlob.url});
}
