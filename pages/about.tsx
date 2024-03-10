import Layout from "@/components/layout"
import Image from "next/image"
import { useState, useEffect } from 'react';

export default function Home() {
  const [punOfTheDay, setPunOfTheDay] = useState('');
  useEffect(() => {
    // Fetch pun of the day from the API
    fetch('/api/meme/punoftheday')
      .then((response) => response.json())
      .then((data) => {
        if (data.meme) {
          setPunOfTheDay(data.meme);
        }
      })
      .catch((error) => {
        console.error('Error fetching pun of the day:', error);
      });
  }, []);
  return (
    <Layout>
 <div className="mx-auto w-11/12 md:w-3/5    mt-12">
      <h2 className="text-2xl font-semibold text-center">About</h2>
      <p className="text-center w-1/2 mx-auto mt-12 text-gray-500">PunAPI is a public API that is completely free to use.</p>
      <div className="mx-auto w-3/5 mt-12">
  <h2 className="text-2xl font-semibold text-center">Why I Created This</h2>
    <p className="text-center w-1/2 mx-auto mt-12 text-gray-500">I created this as a fun hobby project.</p>
    <div className="mx-auto mt-12">
    <h2 className="text-2xl font-semibold text-center">What I used to Create This</h2>
    <p className="text-center w-1/2 mx-auto mt-12 text-gray-500">The API is hosted on Vercel&apos;s serverless architecture. Nextjs/React for the frontend. Node and Golang for the backend.</p>
    </div>
    <div className="mx-auto mt-12">
    <h2 className="text-2xl font-semibold text-center">Notes</h2>
    <p className="text-center w-1/2 mx-auto mt-12 text-gray-500">Recently rewrote part of the backend in Golang. Looking to see if there are perfomance changes.</p>
    </div>

</div>


      </div>
    </Layout>
    
  )
}
