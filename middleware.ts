import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COOKIE_NAME } from "./constants";

export default async function middleware(request: NextRequest) {
  const authToken = request.cookies.get(COOKIE_NAME)?.value;

  if (
    request.nextUrl.pathname === "/api/auth/login" ||
    request.nextUrl.pathname === "/api/auth/logout" ||
    request.nextUrl.pathname === "/api/auth/me"
  ) {
    return null;
  }

  const loggedInUserNot = request.nextUrl.pathname === "/auth/login";

  if (loggedInUserNot) {
    if (authToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    if (!authToken) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    } else {
    }
  }
}

export const config = {
  matcher: ["/", "/templates", "/auth/login", "/api/auth/:path*"],
};
