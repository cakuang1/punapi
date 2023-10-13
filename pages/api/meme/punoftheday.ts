

import { list } from '@vercel/blob';
import { NextApiRequest, NextApiResponse } from 'next';



export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse,
  )  {
    response.setHeader('Cache-Control', 'public, s-maxage=3600');
    function getRandomElement(arr: string | any[]) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
      }
    try {
        const { blobs } = await list();
 
        // Pick a random blob from the list
        const randomBlob = getRandomElement(blobs);
        
        return response.json({meme : randomBlob.url});
    }
    catch {
        return response.status(400)
    }



    
}
