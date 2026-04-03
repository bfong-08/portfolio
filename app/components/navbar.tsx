import Link from "next/link";
import { TbHome, TbUser } from "react-icons/tb";

export default function Navbar() {
    return (
        <nav className="transition-all duration-200 bg-gray text-gunmetal
        fixed h-16 rounded-lg flex gap-2 items-center p-2 z-40 text-xl m-4 shadow-lg">
            <Link href={"/"} className="navlink">
                <TbHome className="h-full w-full text-gunmetal"/>
            </Link>
            <div className="border h-10 border-pewter/20 "/>
            <Link href={'/about'} className="navlink">
                <TbUser className="h-full w-full text-gunmetal"/>
            </Link>
        </nav>
    )
}