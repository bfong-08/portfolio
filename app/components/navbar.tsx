"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbHome, TbUser } from "react-icons/tb";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className="transition-all duration-200 bg-lilac text-midnight
        fixed h-16 rounded-lg flex gap-2 items-center p-2 z-40 text-xl m-4 shadow-lg">
      <Navlink href={"/"} pathname={pathname}>
        <TbHome className="h-full w-full" />
      </Navlink>
      <div className="border h-10 border-midnight/20 " />
      <Navlink href={"/about"} pathname={pathname}>
        <TbUser className="h-full w-full" />
      </Navlink>
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
    <Link
      href={href}
      className={`navlink ${pathname == href ? "bg-black/20 text-midnight" : ""}`}>
      {children}
    </Link>
  );
};
