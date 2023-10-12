// pages/api/[id].js

import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse,
  )  {
    const prisma = new PrismaClient();
    const { id } = request.query;

    try {
      if (typeof id === 'string') {
        const pun = await prisma.puns.findUnique({
          where: {
            id: parseInt(id), 
          },
        });
    
        if (!pun) {
          return response.status(404).json({ error: 'Pun not found' });
        }
    
        response.status(200).json( pun );
      } else {
        return response.status(400).json({ error: 'Invalid ID format' });
      }
    } catch (error) {
      console.error('Error fetching pun:', error);
      response.status(500).json({ error: 'Internal server error' });
    } finally {
      await prisma.$disconnect(); // Disconnect from the database
    }
    
}
