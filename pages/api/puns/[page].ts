// pages/api/puns/[id].js

import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse,
  )  {

    try {
        const { page } = request.query;
        const pageSize = 30; // Set the page size to 30
        if (typeof page === 'string') {
            const skip = (parseInt(page)- 1) * pageSize;
            const data = await prisma.puns.findMany({
            skip,
            take: pageSize,
        });
        }


        response.json(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        response.status(500).json({ error: 'Internal server error' });
      }
    
}
