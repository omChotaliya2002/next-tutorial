"use client";

import React from "react";
import Navbar from "./navbar/page";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { stringify } from "querystring";


export default function Layout({children} : Readonly<{children : React.ReactNode;}>) {

        const path = usePathname();  // fetch the current path where user navigates👍
        // console.log(path);


        // use array for fewer paths 🤏 : 
        // const paths = ["/tutorial2/contact", "/tutorial2/tlogin", "/tutorial2/about/cabout"];


        //use set for multiple paths 👍 : 
        const hiddenNavbarPaths = new Set(["/tutorial2/contact", "/tutorial2/login/tlogin", "/tutorial2/about/cabout"]);  

     return (
    <html>
        <body>
            <div className="flex flex-col mt-[100px] items-center justify-center">


                {/* FOR ARRAY :  */}

                {/* {
                    !paths.includes(path) ? <Navbar/> 
                    : <Link className="font-semibold hover:underline hover:underline-offset-4" href={"/tutorial2/home"}> &#x2616; Go to Home page </Link>
                } */}


            
                {/* FOR SET :  */}

                {
                    !hiddenNavbarPaths.has(path) ? <Navbar/>
                    : <Link className="font-semibold hover:underline hover:underline-offset-4 mt-[120px]" href={"/tutorial2/home"}> &#x2616; Go to Home page </Link>
                }

            
            {/* paste all the children components from current parent folder 👍 */}
            {children}  
            </div>
        </body>
    </html>
     )}