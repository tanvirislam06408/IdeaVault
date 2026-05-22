import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { auth } from './lib/auth'

 
// This function can be marked `async` if using `await` inside
export async function proxy(request) {
    const session=await auth.api.getSession({
        headers: await headers()
    })
     const pathname = request.nextUrl.pathname;
     
   if(!session){
     return NextResponse.redirect(new URL(`/login?callbackUrl=${pathname}`, request.url))
   }
   NextResponse.next()
}
 
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
 
export const config = {
  matcher: ['/add-ideas','/my-ideas','/profile','/interactions','/ideas/:id'],
}