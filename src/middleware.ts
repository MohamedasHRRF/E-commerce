import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export async function middleware(request: NextRequest) {

    const token = await getToken({req:request});

    const {pathname} = request.nextUrl;

    const authpages = ['/login', '/register'];
    const routes = ['/', '/cart', "/allorders", "/Payment",'/brands', '/categories', '/productDetails'];

    if(!token && routes.includes(pathname)){
        return NextResponse.redirect(new URL('/login', request.url));
    }
 
    if(token && authpages.includes(pathname)){
        return NextResponse.redirect(new URL('/', request.url));
    }

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/cart", "/allorders" , "/Payment" ,"/brands", "/categories", "/productDetails" ,"/login", "/register"],
}