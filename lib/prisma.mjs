import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import csv from 'csv-parser';

const prisma = new PrismaClient();

// Read and parse the CSV file
const results = [];
fs.createReadStream('test.csv')
  .pipe(csv())
  .on('data', (row) => {
    results.push(row);
  })
  .on('end', async () => {
    // Iterate through the parsed data and insert it into the database
    for (const punData of results) {
      const { pun} = punData;

      // Insert the data into the "Puns" table
      await prisma.puns.create({
        data: {
          pun,

        },
      });
    }
    console.log('Data insertion completed.');

    // Disconnect the Prisma client
    await prisma.$disconnect();
  })
  .on('error', (error) => {
    console.error('Error parsing CSV:', error);
  });
