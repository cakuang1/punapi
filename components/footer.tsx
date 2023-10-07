import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="text-gray-500  p-4 mt-20">
      <div className="container mx-auto flex  items-center text-sm w-3/5">
        <div className='w-1/2'>
        <div>
        <p>Welcome to PunHub, your ultimate destination for puns and wordplay! PunHub is a pun database and API created and maintained by <a href='' className='font-bold'>Cary</a>! I have collected puns from all over the web, so you can enjoy a hearty dose of laughter, wit, and clever wordplay all in one place.</p>
        
        <p>© 2023 Cary Kuang. All rights reserved.</p>
      </div>
        </div>

        <div className='flex'>
          <div className=' text-center'><h2 className='font-bold text-xl'>Navigate</h2>
          <ul className='text-xl '>
            <li>
              <Link href="/" className='hover:text-gray-400 transition duration-300 ease-in-out'>
              API
              </Link>
            </li>
            <li>
              <Link href="/randompun" className='hover:text-gray-400 transition duration-300 ease-in-out'>
                Random Pun
              </Link>
            </li>
            <li>
              <Link href="/searchpun" className='hover:text-gray-400 transition duration-300 ease-in-out'>
                Search
              </Link>
            </li>
            <li>
              <Link href="/addapun" className='hover:text-gray-400 transition duration-300 ease-in-out'>
                Add a Pun
              </Link>
            </li>
          </ul>
          </div>
          <div className=' text-center'><h2 className='font-bold text-xl'>External Links</h2>
          <ul className='text-xl '>
            <li>
              <Link href="/" className='hover'>
              API
              </Link>
            </li>
            <li>
              <Link href="/randompun">
                Random Pun
              </Link>
            </li>
            <li>
              <Link href="/searchpun">
                Search
              </Link>
            </li>
            <li>
              <Link href="/addapun">
                Add a Pun
              </Link>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
