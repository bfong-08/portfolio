import Link from "next/link";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="h-48 bg-midnight flex flex-col gap-4 justify-center items-center">
      <div className="flex h-8 gap-4">
        <IconLink
          href={"https://github.com/bfong-08/"}
          icon={<FaGithub className="w-full h-full" />}
        />
        <IconLink
          href={"https://www.instagram.com/_b.fong_/"}
          icon={<FaInstagram className="w-full h-full" />}
        />
        <IconLink
          href={"https://linkedin.com/in/brandonfong421"}
          icon={<FaLinkedin className="w-full h-full" />}
        />
      </div>
      <div className="flex gap-8">
        <FooterLink href="/">Home</FooterLink>
        <FooterLink href="/about">About Me</FooterLink>
        <FooterLink href="/projects">Projects</FooterLink>
        <FooterLink href="/methodology">Methodology</FooterLink>
      </div>
    </div>
  );
}

function IconLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a target="_blank" href={href} className=" h-full w-auto aspect-square">
      {icon}
    </a>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="hover:underline underline-offset-2">
      {children}
    </Link>
  );
}
