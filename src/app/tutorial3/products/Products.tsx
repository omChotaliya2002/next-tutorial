"use client"; 
import React from 'react';
import Image from 'next/image';


type Product = {
    id : number;
    title : string;
    images : string[];
    price : Float16Array;
    rating : number;
}

type ProductsProps = {
    products : Product[];
}


export default function Products({products} : ProductsProps){
    
    return (

<>

            <div className='flex items-center justify-center mt-[20px]'>
                    <h1 className='text-2xl font-semibold underline underline-offset-4 mb-[20px]'> All products </h1>    
            </div>

    <div className='flex flex-wrap items-center justify-center text-center mt-[50px] space-x-10' style={{border:"0px solid white"}}>

                    

      {products.map((product) => {
        const productImage: string = product.images?.find((img : string)=> img)|| 'Product image not available';

        return (
           
          <div key={product.id} className="card flex flex-col w-[250px] h-[450px] items-center justify-center mb-8 hover:scale-105 hover:cursor-pointer" 
              style={{border:"2px solid red"}}>

                <div className='' style={{border:"0px solid white"}}> 
            <Image style={{border:"0px solid white"}} alt={product.title} height={120} width={120} src={productImage} 
                className="rounded-lg h-fit bg-white"/>
              </div>

            <h1 className="text-lg underline underline-offset-4 mt-[20px]">{product.title}</h1>
            <h1 className="text-lg mt-[15px]"> Price : {product.price} &#x24;</h1>
            <h1 className="text-lg font-semibold"> Rating :  {product.rating}</h1>

          </div>
        );
      })}

    </div>
</>
        

    )
}