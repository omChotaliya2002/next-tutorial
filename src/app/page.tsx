import Link from "next/link";

export default function Home() {


  return (

<>
    <div className="flex items-center justify-center text-2xl mt-[100px] font-bold">
        Next.js tutorials : 
    </div>

    <div className="flex flex-row items-center justify-center space-x-4">

          <div className="t1 mt-[30px]"> 
              <Link href={"/tutorial1"}>
                  <button className="w-[100px] h-[40px] font-semibold text-lg text-black rounded-md bg-white hover:bg-black hover:text-white hover:ring-2 hover:ring-white active:bg-slate-600 hover:cursor-pointer"> 
                      Tutorial-1 </button>
              </Link>
          </div>

          <div className="t2 mt-[30px]">
              <Link href={"/tutorial2/home"}> 
                  <button className="w-[100px] h-[40px] font-semibold text-lg text-black rounded-md bg-white hover:bg-black hover:text-white hover:ring-2 hover:ring-white active:bg-slate-600 hover:cursor-pointer"> 
                      Tutorial-2 </button>
              </Link>
          </div>

          <div className="t3 mt-[30px]">
              <Link href={"/"}> 
                  <button className="w-[100px] h-[40px] font-semibold text-lg text-black rounded-md bg-white hover:bg-black hover:text-white hover:ring-2 hover:ring-white active:bg-slate-600 hover:cursor-pointer"> 
                      Tutorial-3 </button>
              </Link>
          </div>

          <div className="t4 mt-[30px]">
              <Link href={"/"}> 
                  <button className="w-[100px] h-[40px] font-semibold text-lg text-black rounded-md bg-white hover:bg-black hover:text-white hover:ring-2 hover:ring-white active:bg-slate-600 hover:cursor-pointer"> 
                      Tutorial-4 </button>
              </Link>
          </div>

    </div>


  </>
  );
}
