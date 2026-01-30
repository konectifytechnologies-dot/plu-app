import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";


export async function proxy(req){
  const token = await getToken({ req })
console.log(token);
  if (!token) {
    
    
    //const pageNames =   pages.map((page)=> {return {name:`/${page.name}`}});
    // Not logged in → redirect to signin
    const signInUrl =  new URL("/auth/login", request.url);

    return NextResponse.redirect(signInUrl);
  }



  return NextResponse.next()
}

export const config = {
  matcher: [
    "/account/*",
  ],
}




