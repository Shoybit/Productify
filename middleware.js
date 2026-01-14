import { NextResponse } from "next/server";

export function middleware(req) {
  const isAuth = req.cookies.get("auth");

  if (!isAuth && req.nextUrl.pathname.startsWith("/add-product")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
