// USER ID PAGE : (DYNAMIC ROUTE PAGE) : 

import Link from "next/link";

export default function UserDetails({params} : {params : {id : string}}) {
 
    const id = decodeURIComponent(params.id);

    return(
<>
        <div className="mt-[50px]"> 

            <h1 className="text-center underline underline-offset-4 text-xl font-semibold"> Student Details :  </h1>
            <p className="mt-[20px]"> <b> User Name : </b> {id}</p>

        </div>

        <div>

        <Link href={"/tutorial2/user"}>
            <button className="mt-[40px] w-[80px] h-[40px] font-semibold text-lg text-black rounded-md bg-white hover:bg-black hover:text-white hover:ring-2 hover:ring-white active:bg-slate-600 hover:cursor-pointer">
                &#x21d0; Back
            </button>
        </Link>

        </div>
</>
    )

}