// pages/api/[id].js

import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';





export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { query } = request.query;
  const prisma = new PrismaClient();
  if (!query) {
    response.status(400).json({ error: 'Missing query parameter' });
    return;
  }

  const queryValue = Array.isArray(query) ? query[0] : query;

  if (!queryValue) {
    response.status(400).json({ error: 'Empty query parameter' });
    return;
  }

  try {
    if (!isNaN(parseFloat(queryValue))) {
      // If the queryValue is a valid number, treat it as an ID search
      const idResult = await prisma.puns.findUnique({
        where: {
          id: parseInt(queryValue, 10), // Parse as a base-10 integer
        },
      });

      if (idResult) {
        response.status(200).json([idResult]);
      } else {
        response.status(404).json({ error: 'ID ' +  queryValue +   ' not found' });
      }
    } else {
      // If the queryValue is not a valid number, treat it as a pun search
      const punResults = await prisma.puns.findMany({
        where: {
          pun: {
            contains: queryValue,
          },
        },
      });
      if (punResults.length == 0) {
        response.status(404).json({ error: 'No puns with search query ' +  '\'' + queryValue + '\''});
      }
      response.status(200).json(punResults);
    }
  } catch (error) {
    console.error('Error:', error);
    response.status(500).json({ error: 'Internal Server Error' });
  }
}
