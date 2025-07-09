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


 