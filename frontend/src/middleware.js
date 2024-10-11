
export { default } from "next-auth/middleware";

export const config = { matcher: ["/dashboard/:path*", "/cursos/:path*"] , reactStrictMode: true,
    env: {
      NEXTAUTH_SECRET:"YOUR_KEY_HERE",
    }}

