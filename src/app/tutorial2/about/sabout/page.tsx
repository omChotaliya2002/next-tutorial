"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const page = () => {

    const router = useRouter();

  return (


    <div className='mt-[40px] flex flex-col items-center justify-center'>
            <h1 className='font-semibold text-2xl'> About Students </h1>

            <button className="mt-[40px] w-[100px] h-[40px] font-semibold text-lg text-black rounded-md bg-white hover:bg-black hover:text-white hover:ring-2 hover:ring-white active:bg-slate-600 hover:cursor-pointer"
            onClick={()=>router.push("/tutorial2/about")}> &#x21d0; Back </button>  

    </div>
  )
}

export default page;