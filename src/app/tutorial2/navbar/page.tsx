"use client";

import React from 'react';
import Link from 'next/link';
import { useState , useRef, useEffect} from 'react';

const page = () => {

   const [isOpen, setIsOpen] = useState(false);
   const [isAboutOpen, setIsAboutOpen] = useState(false);

   const dropdownRef1 = useRef<HTMLDivElement | null>(null);  //tells ts that this ref is going to point a real <div> or null at first.👍
   const dropdownRef2 = useRef<HTMLDivElement | null>(null);

   // DETECT CLICK OUTSIDE FOR LOGIN : 

   useEffect(() => {
      
      const handleClickOutside = (event : Event) => {

         if(dropdownRef1.current && !dropdownRef1.current.contains(event.target as Node)) {     // because contain expects a node👍
                  setIsOpen(false);
         }
      }
      document.addEventListener("mousedown", handleClickOutside);
   
     return () => {
            document.removeEventListener("mousedown",handleClickOutside)
     }
   }, [])


// DETECT CLICK OUTSIDE FOR ABOUT :

   useEffect(()=> {
   const handleClickOutside = (event : Event) => {

      if(dropdownRef2.current && !dropdownRef2.current.contains(event.target as Node)) {     // because contain expects a node👍
               setIsAboutOpen(false);
      }
   }
   document.addEventListener("mousedown", handleClickOutside);

  return () => {
         document.removeEventListener("mousedown",handleClickOutside)
  }
}, [])
   




  return (

<>
        <div className='flex flex-row h-[35px] w-full items-center justify-center space-x-20 mt-[-80px] bg-slate-700' style={{border:"0px solid white"}}>
            <div className='relative hover:underline hover:underline-offset-4'> 
               <Link href={"/tutorial2/home"}>   <p>Home</p>  </Link>
           </div>

           <div ref={dropdownRef1} className='relative hover:underline hover:underline-offset-4'> 
               <Link href={"/tutorial2/login"}> Login
                    </Link>

            {/* <div ref={dropdownRef1} className='relative hover:underline hover:underline-offset-4'> 
               <Link onClick={()=> setIsOpen(!isOpen)} href={"/tutorial2/home"}> Login
                    </Link> */}

               {/* {
                  isOpen &&(
                     <div className='absolute mt-[5px] w-[110px] rounded-md text-center flex flex-col bg-slate-600' style={{border:"1px solid white"}}> 

                        <Link onClick={()=> setIsOpen(false)} className='text-[14px] hover:text-[15px] hover:bg-black' href={"/tutorial2/tlogin"}> Teacher Login </Link>
                        <Link onClick={()=> setIsOpen(false)} className='text-[14px] hover:text-[15px] hover:bg-black' href={"/tutorial2/slogin"}> Student Login </Link>

                     </div>
                  )
               } */}

           </div>

           <div ref={dropdownRef2} className='relative hover:underline hover:underline-offset-4'> 
               <Link href={"/tutorial2/about"}>   
                  <p>About us</p>  
               </Link>
        
            {/* <div ref={dropdownRef2} className='relative hover:underline hover:underline-offset-4'> 
               <Link onClick={()=>setIsAboutOpen(!isAboutOpen)} href={"/tutorial2/home"}>   
                  <p>About us</p>  
               </Link> */}

               {/* {
                  isAboutOpen && (

                     <div className='absolute mt-[5px] w-[110px] rounded-md text-center flex flex-col bg-slate-600' style={{border:"1px solid white"}}> 

                        <Link onClick={()=> setIsAboutOpen(false)} className='text-[14px] hover:text-[15px] hover:bg-black' href={"/tutorial2/about/cabout"}> About College </Link>
                        <Link onClick={()=> setIsAboutOpen(false)} className='text-[14px] hover:text-[15px] hover:bg-black' href={"/tutorial2/about/sabout"}> About Students </Link>

                     </div>

                  )
               } */}

            </div>

            <div className='hover:underline hover:underline-offset-4'>
               <Link href={"/tutorial2/contact"}>   <p> Contact us </p>  </Link>
            </div>
    </div>

    </>
  )
}

export default page;