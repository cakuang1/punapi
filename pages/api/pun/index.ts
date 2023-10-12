import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
export const config = {
  runtime: 'edge',
};
const prisma = new PrismaClient();
export default async function index(
  request: NextApiRequest,
  response: NextApiResponse,
) {
    try {
        const allPuns = await prisma.puns.findMany();
        const randomIndex = Math.floor(Math.random() * allPuns.length);
        const randomPun = allPuns[randomIndex];
  response.status(200).json(randomPun);
} catch (error) {
    console.error('Error fetching random pun:', error);
    response.status(500).json({ error: 'Internal server error' });
  } finally {
    await prisma.$disconnect(); // Disconnect from the database
  }
};