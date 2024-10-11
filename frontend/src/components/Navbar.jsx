import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function Navbar() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <nav className="flex justify-between items-center px-24 p-8">
      <h1 className="text-xl font-bold">Brickly Logo</h1>

      <ul className="flex gap-x-4">
        {!session?.user ? (
          <>
            <li>
              <Link href="/">COMO FUNCIONA</Link>
            </li>
            <li>
              <Link href="/auth/login">INGRESAR</Link>
            </li>
            <li>
              <Link className="p-2 px-4 rounded-md bg-gray-950 text-white" href="/auth/register">CREAR CUENTA</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/api/auth/signout">Logout</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
