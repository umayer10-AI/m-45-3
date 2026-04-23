"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {

    const p = usePathname()

  return (
    <div>
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <p className="font-bold">ACME</p>
          </div>

          <ul className="flex items-center gap-4">
                <li>
                <Link href="/" className={p==='/'? "btn btn-accent btn-outline":"btn"}>Home</Link>
                </li>
                <li>
                <Link href="/about" className={p==='/about'? "btn btn-accent btn-outline":"btn"}>About</Link>
                </li>
          </ul>
          
        </header>
      </nav>
    </div>
  );
};

export default Navbar;
