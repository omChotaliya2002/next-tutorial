import React from 'react';
import Link from 'next/link';

const page = () => {


  return (

    <>

    <div className='flex items-center justify-center mt-[50px]'>

            <p className='text-2xl font-bold underline underline-offset-4'> Know About us </p>

    </div>

    <div className='flex flex-row space-x-8 mt-[40px]'>

    <Link href={"/tutorial2/about/cabout"}>
        <button className="mt-[40px] w-[140px] h-[40px] font-semibold text-md text-black rounded-md bg-white hover:bg-black hover:text-white hover:ring-2 hover:ring-white active:bg-slate-600 hover:cursor-pointer">
            About College
        </button>
    </Link>

    <Link href={"/tutorial2/about/sabout"}>
        <button className="mt-[40px] w-[140px] h-[40px] font-semibold text-md text-black rounded-md bg-white hover:bg-black hover:text-white hover:ring-2 hover:ring-white active:bg-slate-600 hover:cursor-pointer">
            About Students
        </button>
    </Link>

</div>
</>
  )
}

export default page;