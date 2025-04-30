import React from 'react'
import Link from 'next/link';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight : "200",
    subsets : ['latin'],
    display : "swap",
});

 
const page = () => {


  return (

    <>

        <h1 className='text-center text-[30px] font-semibold underline underline-offset-[5px] mt-[100px]'> Font Optimization </h1>

    <div className='flex items-center justify-center mt-[50px]'>

            {/* <h1 className='font-bold text-2xl' style={{fontFamily : "Roboto", fontWeight:200}}> Hello there, i am Roboto font.. </h1> */}
            <h1 className={roboto.className}> Hello there, i am Roboto font.. </h1>
      
    </div>

</>
  )
}

export default page;