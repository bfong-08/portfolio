"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full fixed top-4 px-24 z-40 font-grotesk">
      <div
        className={`transition-all duration-150 
         h-16 rounded-md flex gap-2 items-center p-2 z-40 text-lg border 
        bg-midnight justify-between px-8
         ${isScrolled ? "border-grey" : " border-transparent"}`}>
        <Link
          href={"/"}
          className="px-2 font-bold h-full flex items-center text-2xl text-gradient">
          Brandon Fong
        </Link>
        <div className="flex h-full font-normal gap-4">
          <Navlink href={"/"} pathname={pathname}>
            Home
          </Navlink>
          <Navlink href={"/about"} pathname={pathname}>
            About Me
          </Navlink>
          <Navlink href={"/projects"} pathname={pathname}>
            Projects
          </Navlink>
          <Navlink href={"/methodology"} pathname={pathname}>
            Methodology
          </Navlink>
        </div>
      </div>
    </nav>
  );
}

const Navlink = ({
  href,
  children,
  pathname,
}: {
  href: string;
  children: React.ReactNode;
  pathname: string;
}) => {
  return (
    <div className="flex justify-center h-full w-fit relative">
      <Link
        href={href}
        className={`flex justify-center h-full w-fit transition-all hover:brightness-80
        duration-150 rounded-md py-2 px-4 text-white absolute underline-offset-8
      ${pathname == href ? "font-medium underline" : "font-normal"}`}>
        {children}
      </Link>
      <span
        className="flex justify-center h-full font-medium
        py-2 px-4 relative top-0 left-0 pointer-events-none invisible"
        aria-hidden="true">
        {children}
      </span>
    </div>
  );
};
