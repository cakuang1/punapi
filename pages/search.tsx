import Layout from "@/components/layout"
import Table from "@/components/table"

const test = [{id: "123456",pun: "testpun"},{id: "123456",pun: "testpun"},{id: "123456",pun: "testpun"},{id: "123456",pun: "testpun"},{id: "123456",pun: "testpun"},{id: "123456",pun: "testpun"},{id: "123456",pun: "testpun"}]


export default function Random() {

  return (
    <Layout>
    <div className='api docs'>
      <div className="mx-auto w-3/5 text-center mt-12">
        <h1 className="text-2xl font-bold">Search</h1>
        <div className="mt-4">
            <div><h2 className="Endpoint"> Want to look for a specific pun? </h2></div>
        </div>
        <Table listofpunid={test}/>
      </div>
    </div>
    </Layout>
    
  )
}
