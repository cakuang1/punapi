import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="mt-6 bg-gray-50">
      <div className="mx-auto max-w-screen-xl p-4 py-6 lg:py-8 w-3/5">

        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Cary Kuang</a>. All Rights Reserved.
          </span>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-2 text-sm font-semibold text-gray-900 uppercase dark:text-white">Navigate</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="">
                  <Link href="/about" className="hover:underline">About</Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">API Documentation</Link>
                </li>
                <li>
                  <Link href="/randompun" className="hover:underline">Random Pun</Link>
                </li>
                <li>
                  <Link href="/search" className="hover:underline">Search</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-sm font-semibold text-gray-900 uppercase dark:text-white">External Links</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="">
                  <Link href="https://github.com/cakuang1" className="hover:underline">GitHub</Link>
                </li>

              </ul>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
