

import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';





export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse,
  )  {
    response.setHeader('Cache-Control', 'public, s-maxage=3600');
    const prisma = new PrismaClient();
    const { page } = request.query;
    try {
      if (typeof page === 'string') {
        const { page = '1' } = request.query; // Default value '1' if 'page' is not provided
        const pageSize = 10; // Set the page size to 30
        const skip = (parseInt(page.toString()) - 1) * pageSize;
        const data = await prisma.puns.findMany({
          skip,
          take: pageSize,
        });
    
        response.json(data);
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
