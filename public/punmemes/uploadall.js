import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

const directoryPath = '/'; // Replace with the actual path to your directory
const apiUrl = 'https://your-api-endpoint.com/upload'; // Replace with your API endpoint

const uploadFile = async (filePath, filename) => {
  try {
    const response = await fetch(`${apiUrl}?filename=${filename}`, {
      method: 'POST',
      body: fs.createReadStream(filePath),
      headers: {
        'Content-Type': 'application/octet-stream', // Set the appropriate content type
      },
    });

    if (response.ok) {
      console.log(`Uploaded ${filename}`);
    } else {
      console.error(`Failed to upload ${filename}`);
    }
  } catch (error) {
    console.error(`Error uploading ${filename}: ${error}`);
  }
};

const uploadAllFilesInDirectory = async () => {
  const files = fs.readdirSync(directoryPath);

  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    await uploadFile(filePath, file);
  }
};

uploadAllFilesInDirectory();
