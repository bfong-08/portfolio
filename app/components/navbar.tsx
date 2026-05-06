"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full fixed top-4 px-24 z-40">
      <div
        className="transition-all duration-200 
         h-16 rounded-md flex gap-2 items-center p-2 z-40 text-lg border 
         border-white/10 bg-midnight justify-between px-8">
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
    <Link href={href} className={`navlink text-white`}>
      {children}
    </Link>
  );
};
