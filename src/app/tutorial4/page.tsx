"use client";

import React from 'react';
import custom from "@/app/custom.module.css";
import other from "@/app/other.module.css";
import outside from "@/app/styles/outside.module.css";
import styles from "@/app/styles/styles.module.css";
import { useState } from 'react';
import Link from 'next/link';

const page = () => {

        const [color, setColor] = useState("");

        const {red} = styles;


  return (

    <>

    <div className='flex flex-col items-center justify-center mt-[40px] text-[30px]'>
            <details className='mb-[50px] hover:cursor-pointer hover:scale-105 select-none'>
                    <summary className={custom.main}> Hello </summary>
                        <p className='text-[18px]'> this style is come from custom.module.css file. </p>   
            </details>

            <details className='mb-[50px] hover:cursor-pointer hover:scale-105 select-none'>
                    <summary className={other.main}> Hello </summary>
                        <p className='text-[18px]'> this style is come from other.module.css file. </p>   
            </details>

            <details className='mb-[50px] hover:cursor-pointer hover:scale-105 select-none'>
                    <summary className={outside.main}> Hello </summary>
                        <p className='text-[18px]'> this style is come from outside.module.css file in styles folder. </p>   
            </details>
            
            <p className={styles[color]} style={{marginBottom:"20px", backgroundColor:color}}> Change my color 👇 </p>
            <div className='flex flex-row justify-center items-center space-x-5 mb-[40px]'>
                    <button className='w-[70px] h-[30px] rounded-md bg-red-500 text-lg text-white font-semibold hover:scale-105 hover:cursor-pointer hover:bg-red-400' 
                        onClick={()=> setColor("red")}> Red </button>
                    <button className='w-[70px] h-[30px] rounded-md bg-green-500 text-lg font-semibold hover:scale-105 hover:cursor-pointer hover:bg-green-400' 
                        onClick={()=> setColor("green")}> Green </button>
            </div>

            <details className='mb-[70px] mt-[50px] hover:cursor-pointer hover:scale-105 select-none'>
                    <summary id={styles.company}> Hello </summary>
                        <p className='text-[18px]'> this style is come from using id instead of class styles.module.css file in styles folder. </p>   
            </details>

            <h1 className={red}> We are using const variable "red" for easy styling </h1>
            <h1 className={red}> We are using const variable "red" for easy styling </h1>
            <h1 className={red} style={{marginBottom:"100px"}}> We are using const variable "red" for easy styling </h1>


        <div className='flex items-center justify-center space-x-12'>
                <Link href={"/tutorial4/image"}>
                <button className='w-[200px] h-[40px] font-semibold bg-white text-black text-[16px] rounded-xl ring-2 ring-white hover:cursor-pointer hover:bg-black hover:text-white transition-all delay-75'>
                         Image Optimization </button>
                </Link>

                <Link href={"/tutorial4/font"}>
                    <button className='w-[200px] h-[40px] font-semibold bg-white text-black text-[16px] rounded-xl ring-2 ring-white hover:cursor-pointer hover:bg-black hover:text-white transition-all delay-75'>
                        Font Optimization </button>
                </Link>
        </div>

        <div className='mb-[100px] mt-[20px] space-x-12'>

             <Link href={"/tutorial4/metadata"}>
                    <button className='w-[200px] h-[40px] font-semibold bg-white text-black text-[16px] rounded-xl ring-2 ring-white hover:cursor-pointer hover:bg-black hover:text-white transition-all delay-75'>
                    Dynamic metadata </button>
            </Link>

            <Link href={"/tutorial4/userdetailes"}>
                    <button className='w-[200px] h-[40px] font-semibold bg-white text-black text-[16px] rounded-xl ring-2 ring-white hover:cursor-pointer hover:bg-black hover:text-white transition-all delay-75'>
                      Next script elem. </button>
            </Link>


        </div>
            
    </div>
    </>
  )
}

export default page;