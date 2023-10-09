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
    </div>
    </Layout>
    
  )
}
