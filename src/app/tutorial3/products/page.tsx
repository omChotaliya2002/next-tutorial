//THIS IS A SERVER COMPONENT TO FETCH API DATA ============= 📌

import Products from "./Products";

type Product = {
  id : number;
  title : string;
  images : string[];
  price : Float16Array;
  rating : number;
}

type APIResponse = {
  products : Product[];
}


async function getProducts() : Promise<Product[]> {
    const res = await fetch ("https://dummyjson.com/products", {cache : "no-store"});

    if(!res.ok){
        throw new Error("failed to fetch products.");
    }

    const data: APIResponse = await res.json();

    console.log("data are : ", data);

    return data.products;
}



export default async function productsPage() {

      const products = await getProducts();
      return <Products products = {products}/>

      
}
