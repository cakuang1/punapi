
import React from 'react';
import { useState } from 'react';



interface  listofpuns {
    listofpunid: { id: string, pun: string }[];
  }
  const [search,setSearch] = useState('');

  const [displayedData, setDisplayedData] = useState([]);

  const handleSearchInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
  };




  const SearchResults: React.FC<listofpuns> = ({listofpunid}) => {

    return (
        <>           <div className="flex mt-4 mb-4">
            <div className="flex items-center border-2 border-gray-300 bg-white h-11 pr-10 rounded-lg text-sm focus:outline-none w-10/12">
            <div className="bg-gray-100 mr-2 h-full w-10 flex items-center justify-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
              <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="8.5" cy="8.5" r="5" />
                <path d="M17.571 17.5L12 12" />
              </g>
            </svg>
          </div>
          <input
                  className="focus:outline-none w-full text-gray-500"
                  name="search"
                  placeholder="Search for puns using key words or by id ..."
                  value={search} // Connect the input value to the search state
                  onChange={handleSearchInputChange} // Add onChange event handler
                />
      </div>
      <div className={`Search text-center flex items-center justify-center rounded border mx-auto w-24 ${search ? 'bg-black text-white' : 'bg-gray-100 text-gray-400'} transition-all duration-300 ease-in-out`}>
  Search
</div>

      </div>
<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Search Results
                </th>
                <th scope="col" className="px-6 py-3">
              &nbsp;
            </th> {/* An empty cell to create space */}
                <th scope="col" className="px-6 py-3">

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

</div>
</>
    );
  };
  
  export default SearchResults;