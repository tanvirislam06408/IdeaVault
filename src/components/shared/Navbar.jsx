
import Link from "next/link";
import { Moon, Sparkles } from "lucide-react";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto flex container items-center justify-between px-6 py-4">
        
      
        <Link href="/" className="lg:flex flex items-center gap-3 md:hidden">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md">
            <Sparkles size={18} />
          </div>

          <h1 className="gradient-text font-bold text-xl md:text-3xl ">
            IdeaVault
          </h1>
        </Link>

        
        <div className="hidden items-center gap-2 rounded-full  p-2 md:flex">
          <NavLinks
            href="/"
          >
            Home
          </NavLinks>

          <NavLinks
            href="/ideas"
          >
            Ideas
          </NavLinks>
          <NavLinks
            href="/add-ideas"
          >
           Add Idea
          </NavLinks>
          <NavLinks
            href="/my-ideas"
          >
           My Ideas
          </NavLinks>
          <NavLinks
            href="/interactions"
          >
            My Interaction
          </NavLinks>
        </div>

        <div className="flex items-center gap-5">
          <button className="text-gray-700">
            <Moon size={18} />
          </button>

          <Link
            href="/login"
            className="hidden text-sm font-medium text-gray-700 sm:block"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-102"
          >
            SignUP
          </Link>
        </div>
      </div>
    </nav>
  );
}