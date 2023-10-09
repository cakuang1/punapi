
import React from 'react';

interface  listofpuns {
    listofpunid: { id: string, pun: string }[];
  }

  const Table: React.FC<listofpuns> = ({listofpunid}) => {
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
</div>

    );
  };
  
  export default Table;