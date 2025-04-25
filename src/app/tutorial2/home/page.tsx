"use client";

import React from 'react';
// import Navbar from '../navbar/page';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const page = () => {

  const router = useRouter();

  

  return (

<>
    {/* <Navbar/>     */}

      <h1 className='mt-[80px] text-center text-2xl font-semibold underline underline-offset-4'> Tutorial - 2 </h1>
      <h1 className='mt-[10px] text-center text-2xl font-semibold underline underline-offset-[5px]'> Basic & Nested Routing, Common Layout, Conditional Layout 
        <br/> Catch segments of route, <br/> 404 Page not found, <br/> Middleware, </h1>

    <div className='flex flex-col items-center justify-center text-xl mt-[50px] mb-[150px]'>       
                Welcome to home page..!
    
        <Link className='mt-[20px] hover:underline hover:underline-offset-4 font-semibold text-lg' href={"/tutorial2/user"}> 
           See List of Users🤵
        </Link>


        <Link className='mt-[20px] hover:underline hover:underline-offset-4 font-semibold text-lg' href={"/tutorial2/home/error"}> 
           Global 404 page
        </Link>

        <Link className='mt-[20px] hover:underline hover:underline-offset-4 font-semibold text-lg' href={"/tutorial2/about/abc"}> 
           Route specific 404 page
        </Link>
        
          <button className="mt-[40px] w-[80px] h-[40px] font-semibold text-lg text-black rounded-md bg-white hover:bg-black hover:text-white hover:ring-2 hover:ring-white active:bg-slate-600 hover:cursor-pointer"
            onClick={()=>router.push("/")}> &#x21d0; Back </button>  
  </div>
  </>
  )
}

export default page;