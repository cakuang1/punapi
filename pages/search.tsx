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
            <div><h2 className="Endpoint"> Want to look for a specific pun? </h2></div>
        </div>
        <Table listofpunid={displayedData}/>
      </div>
    </div>
    </Layout>
    
  )
}
