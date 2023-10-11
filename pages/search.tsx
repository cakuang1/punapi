import Layout from "@/components/layout"
import Table from "@/components/table"
import { useState,useEffect} from "react"
const test = [{id: "123456",pun: "testpun"},{id: "123456",pun: "testpun"},{id: "123456",pun: "testpun"},{id: "123456",pun: "testpun"},{id: "123456",pun: "testpun"},{id: "123456",pun: "testpun"},{id: "123456",pun: "testpun"}]


export default function Search() {

  const [currentPage, setCurrentPage] = useState(1);
  const [displayedData, setDisplayedData] = useState([]);

  useEffect(() => {
    // Fetch data from the server for the current page
    fetch(`/api/pagi/1`)
      .then((response) => response.json())
      .then((data) => {
        setDisplayedData(data); // Update the displayed data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [currentPage]);


  return (
    <Layout>
    <div className='api docs'>
      <div className="mx-auto w-3/5 text-center mt-12">
        <h1 className="text-2xl font-bold">Search</h1>
        <div className="mt-4">
            <div><h2 className="Endpoint font-semibold"> Want to look for a specific pun? </h2></div>

            <div className="flex mt-4 mb-4">
            <div className="flex items-center border-2 border-gray-300 bg-white h-11 pr-10 rounded-lg text-sm focus:outline-none w-10/12">
            <div className="bg-gray-100 mr-2 h-full w-10 flex items-center justify-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
              <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="8.5" cy="8.5" r="5" />
                <path d="M17.571 17.5L12 12" />
              </g>
            </svg>
          </div>

        <input className="focus:outline-none w-full text-gray-500"
           name="search" placeholder="Search for puns using key words or by id ..."/>
      </div>
      <div className="Search text-center flex items-center justify-center bg-gray-100 rounded border text-gray-400 mx-auto w-24"> Search</div>
      </div>

        </div>
        <Table listofpunid={displayedData}/>
      </div>
    </div>
    </Layout>
    
  )
}
