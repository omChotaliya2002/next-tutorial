import React from 'react';
import Link from 'next/link';

const page = () => {


  return (


    <div className='flex flex-col items-center justify-center mt-[100px]'>

        <Link href={"/tutorial3/products-2"}prefetch> 
            <h1 className="mt-[40px] font-semibold text-lg text-white underline underline-offset-[5px] hover:cursor-pointer hover:scale-110">
              Show Data Fethched using Client Component </h1> 
        </Link>

        <Link href={"/tutorial3/products"}prefetch> 
           <h1 className="mt-[40px] font-semibold text-lg text-white underline underline-offset-[5px] hover:cursor-pointer hover:scale-110">
             Show Data Fethched using Server Component </h1> 
        </Link>


        <Link href={"/"}>
        <button className="mt-[40px] w-[80px] h-[40px] font-semibold text-lg text-black rounded-md bg-white hover:bg-black hover:text-white hover:ring-2 hover:ring-white active:bg-slate-600 hover:cursor-pointer"
            > &#x21d0; Back </button> 
        </Link>
    </div>
  )
}

export default page;