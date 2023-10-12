
import React, { use } from 'react';
import { useState } from 'react';

interface  ListOfPuns {
    listofpunid: { id: string, pun: string }[];
  }
  const SearchResults: React.FC = () => {
    const [puns,setPuns] = useState<ListOfPuns['listofpunid']>([])
    const [search,setSearch] = useState('');
    const [error,setError] = useState(null);
    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const searchTerm = e.target.value;
      setSearch(searchTerm);
    };
    const handleSearch = () => {
      setPuns([])
      setError(null);
      // Make an API call to search for puns
      fetch(`/api/pun/search?query=${search}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            // Check if the response data contains an error property
            setError(data.error);
          } else {
            setPuns(data); // Update the puns state with the search results
          }
        })
        .catch((error) => {
          console.error('Error searching for puns:', error);
        });
    };

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
                  onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                      handleSearch();
                    }
                  }}
                />
      </div>
      <div className={`Search text-center flex items-center justify-center rounded border mx-auto w-24 ${search ? 'bg-black text-white' : 'bg-gray-100 text-gray-400'} transition-all duration-300 ease-in-out`}>
  Search
</div>
      </div>

<div className="relative overflow-x-auto">
{error ? (            <div className='mt-2'>
          <p className="text-gray-300 ">
            <div className='flex justify-center text-center'>            <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448"/></svg>
</div>
            
            
            {error}</p>
            </div>
        ) :  puns.length > 0 ? (
    <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Search Results
                </th>
                <th scope="col" className="px-6 py-3">
              &nbsp;
            </th> 
                <th scope="col" className="px-6 py-3">

                </th>
            </tr>
        </thead>
        <tbody>
        {puns.map((pun) => (
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
            ) : (
              <div></div>
            )}
</div>
</>
    );
  };
  
  export default SearchResults;