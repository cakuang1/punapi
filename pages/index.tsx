import Layout from "@/components/layout"
import Image from "next/image"





function Pagination() {
    return (
        <div className="rounded">

<p className="font-bold text-3xl mb-2 mt-10"><span className="border-b">GET Pun(s) by Pagination</span></p>
<p className="text-gray-600 mb-4">
Retrieve a pun(s) by providing a page. Fixed to 10 puns per page.
</p>
<div className="relative overflow-x-auto">
<table className="w-full text-sm text-left text-gray-500  ">
  <thead className="text-xs text-gray-700 uppercase bg-gray-100 ">
      <tr>
          <th scope="col" className="px-6 py-3 rounded-l-lg">
          Request Type
          </th>
          <th scope="col" className="px-6 py-3 rounded-r-lg">
          URL
          </th>
      </tr>
  </thead>
  <tbody>
      <tr className="bg-white bg-green-100">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <span className="">GET</span> 
          </th>
          <td className="px-6 py-4 font-semibold">
          https://punapi.rest/api/pun/pagination?{"{page}"}
          </td>
      </tr>
  </tbody>
</table>
</div>
<div>
        <h2 className="font-semibold text-lg mt-6">Parameters</h2>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3 rounded-l-lg">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-3 rounded-r-lg">
                        Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Description
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white dark:bg-gray-800">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        page
                    </th>
                    <td className="px-6 py-4">
                        int
                    </td>
                    <td className="px-6 py-4">
                        The page number
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
<div>
<h2 className="font-semibold text-lg mt-2">Request Example</h2>
<div className="rounded bg-gray-100 border border-gray-300 shadow-md">
  <pre className="text-sm font-mono p-4 overflow-x-auto">
      <code>
        GET <a href="https://punapi.rest/api/pun/pagination?page=2 ">https://punapi.rest/api/pun/pagination?page=2 </a>
      </code>
  </pre>
</div>
<h2 className="font-semibold text-lg mt-2">Response Example</h2>
<div className="rounded bg-gray-100 border border-gray-300 shadow-md">
<div className=" bg-green-100 text-green-400 rounded ">
  <span className="text-xl font-semibold ml-5"> 200</span>
</div>
  <pre className="text-sm font-mono p-4 overflow-x-auto">
  <code>
  {JSON.stringify([
    {"id":11,"pun":"My cat was just sick on the carpet, I don’t think it’s feline well."},
    {"id":12,"pun":"Why did the octopus beat the shark in a fight? Because it was well armed."},
    {"id":13,"pun":"How much does a hipster weigh? An instagram."},
    {"id":14,"pun":"What did daddy spider say to baby spider? You spend too much time on the web."},
    {"id":15,"pun":"Atheism is a non-prophet organisation."},
    {"id":16,"pun":"There’s a new type of broom out, it’s sweeping the nation."},
    {"id":17,"pun":"What cheese can never be yours? Nacho cheese."},
    {"id":18,"pun":"What did the Buffalo say to his little boy when he dropped him off at school? Bison."},
    {"id":19,"pun":"Have you ever heard of a music group called Cellophane? They mostly wrap."},
    {"id":20,"pun":"Why does Superman gets invited to dinners? Because he is a Supperhero."}
  ], null, 2)}
</code>

  </pre>
</div>
</div>

</div>
    )
}




export default function Home() {
  return (
    <Layout>
      <div className="mx-auto w-11/12 md:w-3/5 mt-12 ">
      <h2 className="text-2xl font-semibold text-center">API Documentation</h2>
        <div className="text-2xl font-semibold">Endpoints</div>
          <div className="border mt-2 mb-2"></div>
      <div className="rounded">

      <p className="font-bold text-3xl mb-2 "><span className="border-b">GET a Random Pun</span></p>
      <p className="text-gray-600 mb-4">
    Retrieve a random pun from our collection
</p>
<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500  ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 ">
            <tr>
                <th scope="col" className="px-6 py-3 rounded-l-lg">
                Request Type
                </th>
                <th scope="col" className="px-6 py-3 rounded-r-lg">
                URL
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white bg-green-100">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                
                <span className="">GET</span> 
                </th>
                <td className="px-6 py-4 font-semibold">
                https://punapi.rest/api/pun
                </td>
            </tr>
        </tbody>
    </table>
</div>
<h2 className="font-semibold text-lg mt-6">Parameters</h2>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3 rounded-l-lg">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-3 rounded-r-lg">
                        Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Description
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white dark:bg-gray-800">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        none
                    </th>
                    <td className="px-6 py-4">
                        -----
                    </td>
                    <td className="px-6 py-4">
                    -------------
                    </td>
                </tr>

            </tbody>
        </table>
        
<div>
<h2 className="font-semibold text-lg mt-2">Request Example</h2>
<div className="rounded bg-gray-100 border border-gray-300 shadow-md">

  <pre className="text-sm font-mono p-4 overflow-x-auto">
      <code>
        GET <a href="https://punapi.rest/api/pun">https://punapi.rest/api/pun</a>
      </code>
  </pre>
</div>
    <h2 className="font-semibold text-lg mt-2">Response Example</h2>
    <div className="rounded bg-gray-100 border border-gray-300 shadow-md">
    <div className=" bg-green-100 text-green-400 rounded ">
        <span className="text-xl font-semibold ml-5"> 200</span>
    </div>
        <pre className="text-sm font-mono p-4 overflow-x-auto">
            <code>
            {`{`}
          {"\n"}
          {"  \"id\": \"23  \""}
            {"\n"}
          {"  \"pun\": \"I went to a seafood disco last week... and pulled a mussel.\""}
          {"\n"}
          {`}`}
            </code>
        </pre>
    </div>
</div>
</div>

<div className="rounded">

<p className="font-bold text-3xl mb-2 mt-10"><span className="border-b">GET Pun BY ID</span></p>
<p className="text-gray-600 mb-4">
Retrieve a specific pun by providing its unique identifier (ID).
</p>
<div className="relative overflow-x-auto">
<table className="w-full text-sm text-left text-gray-500  ">
  <thead className="text-xs text-gray-700 uppercase bg-gray-100 ">
      <tr>
          <th scope="col" className="px-6 py-3 rounded-l-lg">
          Request Type
          </th>
          <th scope="col" className="px-6 py-3 rounded-r-lg">
          URL
          </th>
      </tr>
  </thead>
  <tbody>
      <tr className="bg-white bg-green-100">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          
          <span className="">GET</span> 
          </th>
          <td className="px-6 py-4 font-semibold">
          https://punapi.rest/api/pun?id={"{id}"}
          </td>
      </tr>
  </tbody>
</table>
</div>
<div>
        <h2 className="font-semibold text-lg mt-6">Parameters</h2>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3 rounded-l-lg">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-3 rounded-r-lg">
                        Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Description
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white dark:bg-gray-800">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        id
                    </th>
                    <td className="px-6 py-4">
                        int
                    </td>
                    <td className="px-6 py-4">
                        The ID of the pun. This ID can be found in the Search page.
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
<div>
<h2 className="font-semibold text-lg mt-2">Request Example</h2>
<div className="rounded bg-gray-100 border border-gray-300 shadow-md">
  <pre className="text-sm font-mono p-4 overflow-x-auto">
      <code>
        GET <a href="https://punapi.rest/api/pun?id=2">https://punapi.rest/api/pun?id=2</a>
      </code>
  </pre>
</div>
<h2 className="font-semibold text-lg mt-2">Response Example</h2>
<div className="rounded bg-gray-100 border border-gray-300 shadow-md">
<div className=" bg-green-100 text-green-400 rounded ">
  <span className="text-xl font-semibold ml-5"> 200</span>
</div>
  <pre className="text-sm font-mono p-4 overflow-x-auto">
      <code>
          {`{`}
          {"\n"}
          {"  \"id\": \"2\""}
            {"\n"}
          {"  \"pun\": \"I would avoid the sushi if I was you. It’s a little fishy.\""}
          {"\n"}
          {`}`}
      </code>
  </pre>
</div>
</div>
</div>

<Pagination/>

<div className="rounded">

<p className="font-bold text-3xl mb-2 mt-10"><span className="border-b">GET Pun(s) by Searching</span></p>
<p className="text-gray-600 mb-4">
Retrieve a pun(s) by searching 
</p>
<div className="relative overflow-x-auto">
<table className="w-full text-sm text-left text-gray-500  ">
  <thead className="text-xs text-gray-700 uppercase bg-gray-100 ">
      <tr>
          <th scope="col" className="px-6 py-3 rounded-l-lg">
          Request Type
          </th>
          <th scope="col" className="px-6 py-3 rounded-r-lg">
          URL
          </th>
      </tr>
  </thead>
  <tbody>
      <tr className="bg-white bg-green-100">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <span className="">GET</span> 
          </th>
          <td className="px-6 py-4 font-semibold">
          https://punapi.rest/api/pun/search?{"{query}"}
          </td>
      </tr>
  </tbody>
</table>
</div>
<div>
        <h2 className="font-semibold text-lg mt-6">Parameters</h2>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3 rounded-l-lg">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-3 rounded-r-lg">
                        Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Description
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white dark:bg-gray-800">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        query
                    </th>
                    <td className="px-6 py-4">
                        string
                    </td>
                    <td className="px-6 py-4">
                        Key words that you are looking for
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
<div>
<h2 className="font-semibold text-lg mt-2">Request Example</h2>
<div className="rounded bg-gray-100 border border-gray-300 shadow-md">
  <pre className="text-sm font-mono p-4 overflow-x-auto">
      <code>
        GET <a href="https://punapi.rest/api/pun/search?query=cookie">https://punapi.rest/api/pun/search?query=cookie </a>
      </code>
  </pre>
</div>
<h2 className="font-semibold text-lg mt-2">Response Example</h2>
<div className="rounded bg-gray-100 border border-gray-300 shadow-md">
<div className=" bg-green-100 text-green-400 rounded ">
  <span className="text-xl font-semibold ml-5"> 200</span>
</div>
  <pre className="text-sm font-mono p-4 overflow-x-auto">
      <code>
          {`[{`}
          {"\n"}
          {"  \"id\": \"4\""}
            {"\n"}
          {" \"pun\": \"Why did the cookie cry? Because his father was a wafer so long!\""}
          {"\n"}
          {`}]`}
      </code>
  </pre>
</div>
</div>

</div>


<div className="rounded">
<p className="font-bold text-3xl mb-2 mt-10"><span className="border-b">GET Pun Meme</span></p>
<p className="text-gray-600 mb-4">
Retrieve a random pun meme. 
</p>
<div className="relative overflow-x-auto">
<table className="w-full text-sm text-left text-gray-500  ">
  <thead className="text-xs text-gray-700 uppercase bg-gray-100 ">
      <tr>
          <th scope="col" className="px-6 py-3 rounded-l-lg">
          Request Type
          </th>
          <th scope="col" className="px-6 py-3 rounded-r-lg">
          URL
          </th>
      </tr>
  </thead>
  <tbody>
      <tr className="bg-white bg-green-100">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          
          <span className="">GET</span> 
          </th>
          <td className="px-6 py-4 font-semibold">
          https://punapi.rest/api/meme
          </td>
      </tr>
  </tbody>
</table>
</div>
<div>
        <h2 className="font-semibold text-lg mt-6">Parameters</h2>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3 rounded-l-lg">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-3 rounded-r-lg">
                        Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Description
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white dark:bg-gray-800">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        none
                    </th>
                    <td className="px-6 py-4">
                        -----
                    </td>
                    <td className="px-6 py-4">
                    -------------
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
<div className=" rounded-md border p-4">
<h2 className="font-semibold text-lg mt-2">Request Example</h2>
<div className="rounded bg-gray-100 border border-gray-300 shadow-md">
  <pre className="text-sm font-mono p-4 overflow-x-auto">
      <code>
        GET <a href="https://punapi.rest/api/meme">https://punapi.rest/api/meme</a>
      </code>
  </pre>
</div>
<h2 className="font-semibold text-lg mt-2" >Response Example</h2>
<div className="rounded bg-gray-100 border border-gray-300 shadow-md">
<div className=" bg-green-100 text-green-400 rounded ">
  <span className="text-xl font-semibold ml-5"> 200</span>
</div>
  <pre className="text-sm font-mono p-4 overflow-x-auto">
      <code>
          {`{`}
          {"\n"}
          {"  \"meme\": \"https://b085hi8rvymugnvm.public.blob.vercel-storage.com/2-bJZtO1TbX8MRhbK4Cx5UFkxHxNjz2C.jpg\""}
          {"\n"}
          {`}`}
          {"\n"}
      </code>
  </pre>

</div>
<div className="mt-5 text-center mb-10"><span className="font-semibold text-lg text-green-400 mr-3 ">GET </span>  https://b085hi8rvymugnvm.public.blob.vercel-storage.com/2-bJZtO1TbX8MRhbK4Cx5UFkxHxNjz2C.jpg
</div>
<div className="flex items-center justify-center">
    <img src={'https://b085hi8rvymugnvm.public.blob.vercel-storage.com/2-bJZtO1TbX8MRhbK4Cx5UFkxHxNjz2C.jpg'} alt="" width={500} height={500}/>    
</div>

</div>

</div>  
      </div>
    </Layout>
    
  )
}
