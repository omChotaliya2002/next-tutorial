import React from 'react'
import Image, { StaticImageData } from "next/image";
import img from "/tutorials/next-tutorial/public/img.jpg"; 

const page = () => {


  return (

<>
    <div className='mb-[100px] flex flex-col items-center justify-center mt-[50px]'>
        <Image src={img} alt='image' height={500} width={500} className='mb-[20px] ring-2 ring-white hover:rounded-4xl hover:cursor-pointer transition-all delay-150'/>

      <details className='flex flex-col items-center justify-center select-none'>
          <summary className='font-semibold text-amber-200 underline underline-offset-[5px]'> Image Optimization </summary>

              <h1 className='mt-[8px]'> The Image property of next.js helps in image Optimization of the provided image so the page runs smoothly and fastly. </h1>

      </details>
    </div>


    </>

  )
}

export default page;