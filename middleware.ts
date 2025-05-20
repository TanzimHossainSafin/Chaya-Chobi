import { auth } from "@/auth"
export default auth((req) => {
  console.log("middleware running for:", req.nextUrl.pathname)
  if (!req.auth && req.nextUrl.pathname !== "/api/auth/signin") {
    const newUrl = new URL("/api/auth/signin", req.nextUrl.origin)
    return Response.redirect(newUrl)
  }
})
export const config = {
  matcher: ["/movielist","/movieadd","/moviesuggestion"],
}