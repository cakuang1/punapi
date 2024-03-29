import Layout from "@/components/layout"
import Table from "@/components/table"
import SearchResults from "@/components/searchresults"
export default function Search() {
  return (
    <Layout>
    <div className='api docs'>
      <div className="mx-auto w-11/12 md:w-3/5  text-center mt-12">
        <h1 className="text-2xl font-bold">Search Puns</h1>
        <div className="mt-4">
            <div><h2 className="Endpoint font-semibold"> Explore our pun database</h2></div>
        <SearchResults/>
        <Table />
      </div>  
      </div>
    </div>
    </Layout>
    
  )
}
