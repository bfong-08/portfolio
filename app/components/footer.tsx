import Link from "next/link";

export default function Footer() {
  return (
    <div className="h-48 bg-midnight flex flex-col gap-2 justify-center items-center">
      <div className="flex">
        <Link href={""} />
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
