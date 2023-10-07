import React, { useState } from 'react';

import Link from 'next/link';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <nav className="border-b">
      <div className="container mx-auto flex justify-between items-center h-20 xl:w-3/5">
        <Link href="">
          <div className="text-black">
            <h1 className="text-xl font-bold">Puns</h1>
          </div>
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            className=" "
          >
               <div><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 160h352M80 256h352M80 352h352"/></svg></div>
          </button>
        </div>
        <div className={`md:flex ${isOpen ? 'hidden' : 'hidden'}`}>
          <ul className="md:flex space-x-4 items-center">
            <li className=''>
            <Link
                href="/randompun"
                className="hover:text-gray-400 transition duration-300 ease-in-out flex items-center"
              >
              <div><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path fill="currentColor" d="M255.76 44.764c-6.176 0-12.353 1.384-17.137 4.152L85.87 137.276c-9.57 5.536-9.57 14.29 0 19.826l152.753 88.36c9.57 5.536 24.703 5.536 34.272 0l152.753-88.36c9.57-5.535 9.57-14.29 0-19.825l-152.753-88.36c-4.785-2.77-10.96-4.153-17.135-4.153zm-.824 53.11c9.013.097 17.117 2.162 24.31 6.192c4.92 2.758 8.143 5.903 9.666 9.438c1.473 3.507 1.56 8.13.26 13.865l-1.6 5.706c-1.06 4.083-1.28 7.02-.66 8.81c.57 1.764 1.983 3.278 4.242 4.544l3.39 1.898l-33.235 18.62l-3.693-2.067c-4.118-2.306-6.744-4.912-7.883-7.82c-1.188-2.935-.99-7.603.594-14.005l1.524-5.748c.887-3.423.973-6.23.26-8.418c-.653-2.224-2.134-3.983-4.444-5.277c-3.515-1.97-7.726-2.676-12.63-2.123c-4.956.526-10.072 2.268-15.35 5.225c-4.972 2.785-9.487 6.272-13.55 10.46c-4.112 4.162-7.64 8.924-10.587 14.288L171.9 138.21c5.318-5.34 10.543-10.01 15.676-14.013c5.134-4 10.554-7.6 16.262-10.8c14.976-8.39 28.903-13.38 41.78-14.967a68.57 68.57 0 0 1 9.32-.557zm50.757 56.7l26.815 15.024l-33.235 18.62l-26.816-15.023l33.236-18.62zM75.67 173.84c-5.753-.155-9.664 4.336-9.664 12.28v157.696c0 11.052 7.57 24.163 17.14 29.69l146.93 84.848c9.57 5.526 17.14 1.156 17.14-9.895V290.76c0-11.052-7.57-24.16-17.14-29.688l-146.93-84.847c-2.69-1.555-5.225-2.327-7.476-2.387zm360.773.002c-2.25.06-4.783.83-7.474 2.385l-146.935 84.847c-9.57 5.527-17.14 18.638-17.14 29.69v157.7c0 11.05 7.57 15.418 17.14 9.89L428.97 373.51c9.57-5.527 17.137-18.636 17.137-29.688v-157.7c0-7.942-3.91-12.432-9.664-12.278zm-321.545 63.752c6.553 1.366 12.538 3.038 17.954 5.013a99.59 99.59 0 0 1 15.68 7.325c13.213 7.63 23.286 16.324 30.218 26.082c6.932 9.7 10.398 20.046 10.398 31.04c0 5.64-1.055 10.094-3.168 13.364c-2.112 3.212-5.714 5.91-10.804 8.094l-5.2 1.92c-3.682 1.442-6.093 2.928-7.23 4.46c-1.137 1.472-1.705 3.502-1.705 6.092v3.885l-29.325-16.933v-4.23c0-4.72.892-8.376 2.68-10.97c1.787-2.652 5.552-5.14 11.292-7.467l5.2-2.006c3.087-1.21 5.334-2.732 6.742-4.567c1.46-1.803 2.192-4.028 2.192-6.676c0-4.027-1.3-7.915-3.9-11.66c-2.6-3.804-6.227-7.05-10.885-9.74c-4.387-2.532-9.126-4.29-14.217-5.272c-5.09-1.04-10.398-1.254-15.922-.645v-27.11zm269.54 8.607c1.522 0 2.932.165 4.232.493c6.932 1.696 10.398 8.04 10.398 19.034c0 5.64-1.056 11.314-3.168 17.023c-2.112 5.65-5.714 12.507-10.804 20.568l-5.2 7.924c-3.682 5.695-6.093 9.963-7.23 12.807c-1.137 2.785-1.705 5.473-1.705 8.063v3.885l-29.325 16.932v-4.23c0-4.72.894-9.41 2.68-14.067c1.79-4.715 5.552-11.55 11.292-20.504l5.2-8.01c3.087-4.776 5.334-8.894 6.742-12.354c1.46-3.492 2.192-6.562 2.192-9.21c0-4.028-1.3-6.414-3.898-7.158c-2.6-.8-6.23.142-10.887 2.83c-4.387 2.533-9.124 6.25-14.215 11.145c-5.09 4.84-10.398 10.752-15.922 17.74v-27.11c6.553-6.2 12.536-11.44 17.95-15.718c5.417-4.278 10.645-7.87 15.68-10.777c10.738-6.2 19.4-9.302 25.99-9.307zm-252.723 94.515l29.326 16.93v30.736l-29.325-16.93v-30.735zm239.246 8.06v30.735l-29.325 16.93v-30.733l29.326-16.932z"/></svg></div>
                Random Pun
              </Link>
            </li>
            <li className=''>
            <Link
                href="/search"
                className="hover:text-gray-400 transition duration-300 ease-in-out flex items-center"
              >
              <div><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"/></svg></div>

                Search
              </Link>
            </li>
            <li className=''>
            <Link
                href="/addapun"
                className="hover:text-gray-400 transition duration-300 ease-in-out flex items-center"
              >
              <div><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2v-6Z"/></svg>
              </div>
                Add a Pun
              </Link>
            </li>


          </ul>
        </div>
      </div>
    </nav>
    {isOpen && (
  <div className="bg-white absolute top-20 w-full z-20">
    <div className="container mx-auto py-4">
      <ul className="flex flex-col items-center space-y-4 text-2xl">
        <li>
          <Link href="/about" className="hover:text-gray-400 transition duration-300 ease-in-out">
            About
          </Link>
        </li>
        <li>
          <Link href="/education" className="hover:text-gray-400 transition duration-300 ease-in-out">
            Education
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-gray-400 transition duration-300 ease-in-out">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-400 transition duration-300 ease-in-out">
            Contact
          </Link>
        </li>

      </ul>
    </div>
  </div>
)}


    </>
  );
};

export default Header;
