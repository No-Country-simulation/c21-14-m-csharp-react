import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function Navbar() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <nav className="flex justify-between items-center bg-trueGray-200 px-24 p-5">
      <h1 className="text-xl font-bold"> <Link href="/">Brickly Logo</Link></h1>

      <ul className="flex gap-x-4">
            <li>
              <Link className="p-2 px-4 rounded-md bg-gray-950 text-white" href="/auth/register">CREAR CUENTA</Link>
            </li>
      </ul>
    </nav>
  );
}

export default Navbar;
