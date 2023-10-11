
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
interface  listofpuns {
    listofpunid: { id: string, pun: string }[];
  }

  const Table: React.FC = () => {
    const [listofpunid, setList] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
   
    // change later

    const numberofpages = 10;

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

   function handleRight() {
      if (currentPage < numberofpages) {
        setCurrentPage(currentPage + 1)
      }
   }
   function handleLeft() {
    if (currentPage > 0) {
      setCurrentPage(currentPage + 1)
    }
    

 }

    useEffect(() => {
      // Fetch data from /api/pagi/1 when the component mounts
      fetch('/api/pagi/' + currentPage)
        .then((response) => response.json())
        .then((data) => {
          // Update the state with the fetched data
          setList(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, [currentPage]); // Make sure the dependencies array is empty
    const pageNumbers = Array.from({ length: 10 }, (_, index) => index + 1);



    return (
<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Pun
                </th>
                <th scope="col" className="px-6 py-3">
              &nbsp;
            </th> {/* An empty cell to create space */}
                <th scope="col" className="px-6 py-3">
                    id
                </th>
            </tr>
        </thead>
        <tbody>
        {listofpunid.map((pun) => (
            <tr
              key={pun.id} // Use a unique key for each row
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {pun.pun}
              </td>
              <td className="px-6 py-3">&nbsp;</td> {/* An empty cell for spacing */}
              <td className="px-6 py-3">{pun.id}</td>
            </tr>
          ))}
        </tbody>
    </table>
    <nav className="inline-flex items-center p-1 rounded bg-white space-x-2 mt-2">
      <a
        className="p-1 text-black bg-white hover:text-white hover:bg-blue-600 hover:border-blue-600"
        href="#"
        onClick={handleLeft}
      >
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </a>
      <div>
      <p className="text-gray-500 hover:bg-gray-100 p-2 rounded-md">Page {currentPage} of 10</p>
      {isDropdownOpen && (
          <div className="dropdown-content">
            <ul>
              {pageNumbers.map((pageNumber) => (
                <li key={pageNumber} onClick={() => setCurrentPage(pageNumber)}>
                  {pageNumber}
                </li>
              ))}
            </ul>
          </div>
          
        )}
        </div>
      <a
        className="p-1 text-black bg-white hover:text-white"
        href="#"
        onClick={handleRight}
      >
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </a>

    </nav>
</div>

    );
  };
  
  export default Table;