import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";


export function middleware (request : NextRequest) {

    // console.log("middleware working...");


    // ==> REDIRECTION FOR ALL THE ROUTES : ⭕
    // if(request.nextUrl.pathname != "/tutorial2/login") {

        // return NextResponse.redirect(new URL("/tutorial2/login",request.url))   // ◀◀◀◀ uncomment this 
    // }


    // ========================================================================================

    // ==> REDIRECTS TO SPECIFIC ROUTE : ⭕
    // ==> This rewrite method redirect to login but remain about path in the url : 👍

    // if(request.nextUrl.pathname === "/tutorial2/about") {
    //     return NextResponse.rewrite(new URL("/tutorial2/login", request.nextUrl))
    // }



}

// ==> This method redirect to login and also change the browser route to login not about : 👍

// export const config = {                 // ◀◀◀◀ uncomment this

//     matcher : ["/tutorial2/about/cabout:path*", "/tutorial2/user/:path*"]  // you can redirect to multi routes too..😉
// }