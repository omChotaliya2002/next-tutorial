"use client";

import { Component, useState } from 'react';
import React from 'react';
import { useRouter } from 'next/navigation';


const page = () => {

    const router = useRouter();

    const [name, setName] = useState("& omi");

    const myfunc = (item : any) => {

        setTimeout(() => {
            setName("& omi") 
        },2000);

        setName("omdev");

        // alert(item);
    }

    const InnerComp  = () => {

        return (
            <h1> I am an Inner component </h1>
        )
    }



  return ( 


    <div className='flex flex-col items-center justify-center mt-[50px]'>

        <h1 className='mt-[40px] text-center text-2xl font-semibold underline underline-offset-4'> Tutorial - 1 </h1>
        <h1 className='mt-[10px] text-center text-2xl font-semibold underline underline-offset-4'> Events, Function and state {name} </h1>

            <button className="mt-[40px] mb-[20px] w-[100px] h-[40px] font-semibold text-lg text-black rounded-md bg-white hover:bg-black hover:text-white hover:ring-2 hover:ring-white active:bg-slate-600 hover:cursor-pointer"
            onClick={()=>myfunc("parameter from function")}> 
               Click me   </button>

                {/* 1. use as component :  */}
                {/* <InnerComp/> */}      

                {/* 2.use as fucntion :     */}
                {InnerComp()}


                
          <button className="mt-[40px] w-[80px] h-[40px] font-semibold text-lg text-black rounded-md bg-white hover:bg-black hover:text-white hover:ring-2 hover:ring-white active:bg-slate-600 hover:cursor-pointer"
           onClick={()=> router.push("/")} > &#x21d0; Back </button>  
        

    </div>
  )
}

export default page;