import Layout from "@/components/layout"

export default function Home() {
  return (
    <Layout>
      <div className="mx-auto w-3/5   mt-12">
      <h2 className="text-2xl font-semibold text-center">API Documentation</h2>
        <div className="text-2xl font-semibold">Endpoints</div>
          <div className="border mt-2 mb-2"></div>
          
      <div className="rounded">

      <p className="font-bold text-3xl mb-2 "><span className="border-b">GET a Random Pun</span></p>
      <p className="text-gray-600 mb-4">
    Retrieve a random pun from our collection of humorous wordplay. Use this endpoint to add a touch of humor to your day or integrate puns into your applications for a fun twist. Each request will return a unique pun for your enjoyment.
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
                https://api.punapi.rest/
                </td>
            </tr>
        </tbody>
    </table>
</div>
<div>

    <h2 className="font-semibold text-lg mt-2">Response Example</h2>
    <div className="rounded bg-gray-100 border border-gray-300 shadow-md">
    <div className=" bg-green-100 text-green-400 rounded ">
        <span className="text-xl font-semibold ml-5"> 200</span>
    </div>
        <pre className="text-sm font-mono p-4">
            <code>
                {`{`}
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
          https://api.punapi.rest/{"{id}"}
          </td>
      </tr>
  </tbody>
</table>
</div>
<div>

<h2 className="font-semibold text-lg mt-2">Response Example</h2>
<div className="rounded bg-gray-100 border border-gray-300 shadow-md">
<div className=" bg-green-100 text-green-400 rounded ">
  <span className="text-xl font-semibold ml-5"> 200</span>
</div>
  <pre className="text-sm font-mono p-4">
      <code>
          {`{`}
          {"\n"}
          {"  \"pun\": \"I went to a seafood disco last week... and pulled a mussel.\""}
          {"\n"}
          {`}`}
      </code>
  </pre>
</div>
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
                        The ID of the pun. This ID can be found in the Search section
                    </td>
                </tr>
            </tbody>
        </table>
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
          https://api.punapi.rest/{"{id}"}
          </td>
      </tr>
  </tbody>
</table>
</div>
<div>

<h2 className="font-semibold text-lg mt-2">Response Example</h2>
<div className="rounded bg-gray-100 border border-gray-300 shadow-md">
<div className=" bg-green-100 text-green-400 rounded ">
  <span className="text-xl font-semibold ml-5"> 200</span>
</div>
  <pre className="text-sm font-mono p-4">
      <code>
          {`{`}
          {"\n"}
          {"  \"pun\": \"I went to a seafood disco last week... and pulled a mussel.\""}
          {"\n"}
          {`}`}
      </code>
  </pre>
</div>
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
                        String
                    </td>
                    <td className="px-6 py-4">
                        ID 
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
</div>


        <h2>Get a Pun of a specific type</h2>

        <ul>
          <li><strong>Homophonic Pun:</strong> Relies on words that sound alike but have different meanings. The humor is based on the sound similarity.</li>
          <li><strong>Homographic Pun:</strong> Exploits words that are spelled the same but have different meanings, often relying on sight more than sound.</li>
          <li><strong>Homonymic Pun:</strong> Relies on words that are both homographs (spelled the same) and homophones (sound the same), often involving words with multiple meanings.</li>
          <li><strong>Compound Pun:</strong> Contains two or more puns within the same statement, involving multiple pun aspects.</li>
          <li><strong>Recursive Pun:</strong> The second aspect of the pun relies on understanding an element in the first, creating a layered interpretation.</li>
          <li><strong>Visual Pun:</strong> Involves visual elements or symbols that contribute to wordplay, often using pictures or symbols.</li>
          <li><strong>Paronomastic Pun:</strong> Manipulates well-known idioms, proverbs, or phrases to deliver a punned twist, altering the expected phrase.</li>
          <li><strong>Metonymic Pun:</strong> Exploits the metonymic relationship between words, where one word is substituted for another closely associated concept.</li>
          <li><strong>Sylleptic/Heteronymic Pun:</strong> A single word affects the rest of the sentence, changing the meaning of the idiom it's used in, using the word in both its literal and metaphorical senses.</li>
          <li><strong>Antanaclasis Pun:</strong> A single word or phrase is repeated, but the meaning changes each time, creating a surprising shift in meaning.</li>
        </ul>

        <p></p>

        
      </div>
    </Layout>
    
  )
}
