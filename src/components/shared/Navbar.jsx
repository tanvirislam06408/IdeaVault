
import Link from "next/link";
import { Moon, Sparkles } from "lucide-react";
import NavLinks from "./NavLinks";
import { Button } from "@heroui/react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import SignOut from "./SignOut";
import SideNav from "./SideNav";
import { ProfileDropdown } from "./ProfileDropdown";
import ThemeToggle from "./ThemeToggle";

export default async function Navbar() {

  const session = await auth.api.getSession({
    headers: await headers()
  })
  return (
    <nav className="w-full border-b bg-white dark:bg-slate-900 dark:border-gray-800">
      <div className="mx-auto flex container items-center justify-between px-6 py-4">


        <Link href="/" className="lg:flex  items-center gap-3 hidden">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-md">
            <Sparkles size={18} />
          </div>

          <h1 className="gradient-text font-bold text-xl md:text-3xl ">
            IdeaVault
          </h1>
        </Link>

        <div className="lg:hidden md:hidden">
          <SideNav/>
        </div>


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
          <ThemeToggle/>

{!session?.user?(<><Link
            href="/login"
            className="hidden text-sm font-medium text-gray-700 dark:text-gray-300 sm:block"
          >
            <Button variant="ghost" className="dark:hover:bg-slate-800">Login</Button>
          </Link>

          <Link
            href="/register"
            className="rounded-xl text-sm font-semibold transition hover:scale-102"
          >
           <Button variant='outline' className={'gradient-button py-4'}>Sign Up</Button>
          </Link></>)
          :
          ( <div className="flex gap-2.5">
            <ProfileDropdown/>
          </div>)  }
        </div>
      </div>
    </nav>
  );
}