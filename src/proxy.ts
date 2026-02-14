import { NextRequest, NextResponse } from "next/server";
import { userService } from "./services/user.service";
import { Role } from "./constants/roles";


export async function proxy (request : NextRequest){

    const pathName = request.nextUrl.pathname;

    let isAuthenticated = false;
    let isAdmin = false;

    const {data} = await userService.getSession();

    if(data){
        isAuthenticated = true;
        isAdmin = data.user.role === Role.admin;
    }

    // User is not authenticated and trying to access protected routes
    if(!isAuthenticated){
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // User is authenticated and role = admin
    // admin cannot access user dashboard
    if(isAdmin && pathName.startsWith('/dashboard')){
        return NextResponse.redirect(new URL('/admin-dashboard', request.url));
    }

    // User is authenticated and role = user
    // user cannot access admin dashboard

    if(!isAdmin && pathName.startsWith('/admin-dashboard')){
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    return NextResponse.next()

}

export const config ={
    matcher: [
        '/dashboard' ,
        '/dashboard/:path*',
        '/admin-dashboard' ,
        '/admin-dashboard/:path*'
    ]
}