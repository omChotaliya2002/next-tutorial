"use client";

import { useState, useEffect } from "react";

type Post = {

    id : number;
    title : string;
    body : string;

};

export default function Page() {

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {

         const fetchData = async () => {

            const data = await fetch ("https://dummyjson.com/posts", {cache: "no-store"});
            const res = await data.json();
            setPosts(res.posts);
        };

        fetchData();

    }, [])

    return(
<>
        <div className="flex flex-col items-center justify-center"> 
            
            <h1 className="mt-[20px] mb-[70px] text-3xl font-semibold underline underline-offset-[5px]"> All Posts  </h1> 

            {
                posts.map((post)=> (
                
                    <div className="flex flex-col items-center justify-center mb-[20px]" style={{border:"0px solid white"}}>
                        <h1 className="text-lg font-semibold mb-[10px]"> Post id :  {post.id} </h1>
                        <p className="underline underline-offset-[5px] mb-[9px] font-mono hover:scale-105 hover:cursor-pointer"> Title :  {post.title} </p>
                        <p className="text-center mb-[5px]" style={{border:"0px solid white"}}> {post.body} </p>
                        <hr className="mt-[10px] border-[1px] border-white w-full"/>
                    </div>
                ))
            }

            <div>

            </div>
            
        </div>


</>
    )
    
}