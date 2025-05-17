import { auth } from "@/auth"
export default auth((req) => {
  console.log("middleware running for:", req.nextUrl.pathname)
  if (!req.auth && req.nextUrl.pathname !== "/login") {
    const newUrl = new URL("/login", req.nextUrl.origin)
    return Response.redirect(newUrl)
  }
})
export const config = {
  matcher: ["/movielist"],
}