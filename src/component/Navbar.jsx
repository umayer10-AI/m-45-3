"use client"
import { signOut, useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import ThemeToggole from "./ThemeToggole";

const Navbar = () => {

    const p = usePathname()
    const {data,pending} = useSession()

    if(pending){
        return <span className="loading loading-spinner text-info"></span>
    }

    console.log(data)
    const user = data?.user

  return (
    <div>
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <p className="font-bold">ACME</p>
          </div>

          <ul className="flex items-center gap-4">
                <li>
                <Link href="/">Home</Link>
                </li>
                <li>
                <Link href="/about">About</Link>
                </li>
                <li>
                <Link href="/product">Product</Link>
                </li>
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggole></ThemeToggole>
            {
                user? <>
                    <Button onClick={() => signOut()} variant="danger-soft">Sign Out</Button>
                </> : 
                <>
                    <Link href={"/auth/signup"}><Button variant="secondary">Sign Up</Button></Link>
                    <Link href={"/auth/signin"}><Button>Sign In</Button></Link>
                </>
            }
          </div>

        </header>
      </nav>
    </div>
  );
};

export default Navbar;
