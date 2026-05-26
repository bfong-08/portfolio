import Image from "next/image";
import Link from "next/link";

export default function ProjectLink({
  href,
  img_src,
  img_alt,
  title,
  description,
  logos,
}: {
  href: string;
  img_src: string;
  img_alt: string;
  title: string;
  description: string;
  logos?: string[];
}) {
  return (
    <Link
      href={href}
      className="h-64 w-md rounded-md  overflow-hidden flex item-center justify-center 
        relative group border border-grey hover:border-accent transition-all duration-150"
      target="_blank">
      <Image
        src={img_src}
        alt={img_alt}
        width={1000}
        height={1000}
        className="w-full object-cover group-hover:scale-[102%] group-hover:brightness-75
          transition-all duration-150"
      />
      <div className="flex absolute top-0 right-0 p-4 h-20 gap-4">
        {logos &&
          logos.map((logo) => (
            <Image
              src={`/logos/${logo}.png`}
              alt={""}
              width={100}
              height={100}
              key={logo}
              className="h-full w-auto aspect-auto"
            />
          ))}
      </div>
      <div
        className="flex flex-col gap-2 justify-end absolute bottom-0 left-0 w-full h-full p-4 z-10 
          text-white bg-linear-to-t from-black to-black/">
        <h2 className="font-bold text-2xl">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </Link>
  );
}
