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

      <p className="text-center w-1/2 mx-auto mt-12 text-gray-500">Welcome to PunAPI, your ultimate destination for puns and wordplay! PunAPI is a pun database and API created and maintained by Cary! I have collected puns from all over the web, so you can enjoy a hearty dose of laughter, wit, and clever wordplay all in one place.</p>
      <div className="mx-auto w-3/5 mt-12">
  <h2 className="text-2xl font-semibold text-center">Why I Created This</h2>
  <p className="text-center mt-4 text-gray-500">
  PunAPI is my passion project. It all began as a hobby—a way to combine my love for technology and puns. In my free time, I set out to create a platform that could make people smile with wordplay.  </p>
  <p className="text-center mt-4 text-gray-500">
    The internet is full of puns scattered across various websites and forums, but I wanted to create a centralized space where pun enthusiasts could easily find, share, and enjoy puns of all kinds. I envisioned a platform that would make puns more accessible, searchable, and shareable.
  </p>
  <div className="mx-auto w-3/5 mt-12">
  <h2 className="text-2xl font-semibold text-center">Thanks for reading!</h2>
  <p className="text-center mt-4 text-gray-500 mb-5">Heres the pun of the day as a reward!</p>
  {punOfTheDay && <img src={punOfTheDay} alt="Pun of the Day" />}
</div>
</div>


      </div>
    </Layout>
    
  )
}
