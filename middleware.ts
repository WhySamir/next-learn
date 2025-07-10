// middleware.ts (at root of project)
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// old technique
// export function middleware(request: NextRequest) {
//   console.log("Middleware triggered:", request.nextUrl.pathname);
//   return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
//   matcher: ["/profile"],
// };
// next
export function middleware(request: NextRequest) {
  if(request.nextUrl.pathname==="/profile")
  return NextResponse.redirect(new URL("/", request.url));
}

import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
 