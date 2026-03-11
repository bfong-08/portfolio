import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="transition-all duration-200 bg-none">
            <Link href={"/"}>
                Brandon Fong
            </Link>
        </nav>
    )
}