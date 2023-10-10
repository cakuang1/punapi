import Layout from "@/components/layout"

export default function Add() {




  return (
    <Layout>
    <div className='api docs'>
      <div className="mx-auto w-3/5  text-center mt-12">
        <h1 className="text-2xl font-bold">Add A Pun</h1>
        <div className="text-center my-12">
              Have a new Pun and want to contribute? Add your Pun below!  
        </div>
        <form>
   <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 ">
       <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
           <textarea id="comment"  className="w-full px-0 text-lg text-gray-900 bg-white  focus:outline-none h-20" placeholder="Write your Pun ..." required></textarea>
       </div>
   </div>
   <button type="submit" className="bg-gray-600 hover:bg-black text-white py-2 w-32 px-4 rounded">
            Submit
        </button>
</form>
      </div>
      <div className="mx-auto w-3/5  text-center mt-12">
        <h1 className="text-2xl font-bold">Add A Meme</h1>
        <div className="text-center my-12">
              Want to add a Pun based Meme to our database? Upload it here! 
        </div>
        <form>

        <div className="flex items-center justify-center w-full">
        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p className="mb-2 text-sm text-gray-500 "><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500 ">PNG, JPG , SVG</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
        </label>
    </div> 

   <button type="submit" className="bg-gray-600 hover:bg-black text-white py-2 w-32 px-4 rounded">
            Submit
        </button>
</form>
      </div>
    </div>
    </Layout>
    
  )
}
