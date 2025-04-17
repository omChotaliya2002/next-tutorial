"use client";

// USER PAGE : ========

import Link from "next/link";

export default function User() {
    
        const name = ["Mark", "Stephen", "Lora", "Satyan", "Lichi"];


    return (
        <div className="mt-[40px]"> 

                <h1 className="font-semibold underline underline-offset-4 text-2xl"> List of Users :  </h1>

                
                    <ul className="mt-[10px]">
                {
                    name.map((username : string)=> (    // wrap the map function in additional () when it spans multiple values

                      <li className="hover:underline hover:underline-offset-4 text-lg" key={username}> <Link href={`/tutorial2/user/${encodeURIComponent(username)}`}> {username} </Link> </li>
                    
                   ))}
                 </ul>

        </div>
)


}