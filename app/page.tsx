import Image from "next/image";
import Link from "next/link";
import { Carousel, CarouselItem } from "./components/carousel";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="font-grotesk bg-midnight text-white">
      <header className="flex items-center justify-center h-screen relative px-8 md:px-48">
        <div className="flex flex-col gap-8 pt-8 flex-4 z-10 w-3/4 md:w-1/2 h-full justify-center ">
          <div className="flex flex-col gap-4">
            <h1 className="text-6xl text-center md:text-left">
              Hi, I'm <span className="text-gradient">Brandon</span>
            </h1>
            <h2 className="font-semibold text-2xl text-center md:text-left">
              Aspiring Quantum Physicist
            </h2>
            <p className="text-sm text-gray leading-6 text-center md:text-left">
              I am a senior at St. Joseph Notre Dame High School who has a
              passion for mathematics and quantum physics. I am committed to
              studying Physics at UCLA for the Class of 2030!
            </p>
          </div>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link href={"/about"} className="button gradient ">
              More About Me!
            </Link>
            <Link
              href={"mailto:branfong21@gmail.com"}
              className="button hollow">
              Get in Touch
            </Link>
          </div>
          <div className="flex h-8 items-center gap-4 justify-center md:justify-start">
            <Link
              className="h-full aspect-square"
              href="https://github.com/bfong-08"
              target="_blank">
              <FaGithub className="text-white h-full w-full" />
            </Link>
            <Link
              className="h-full aspect-square"
              href="https://www.linkedin.com/in/brandonfong421/"
              target="_blank">
              <FaLinkedin className="text-white h-full w-full" />
            </Link>
          </div>
        </div>
        <div className="flex flex-3 h-full md:relative absolute">
          <Image
            src="/profile-picture-no-bg.png"
            alt="pfp"
            width={500}
            height={500}
            className="object-contain aspect-auto scale-125 md:scale-150 bottom-0 md:-right-10 md:absolute relative origin-bottom md:opacity-100 opacity-20"
          />
        </div>
      </header>
      <div className="w-full pt-12 pb-18 gap-8 bg-black text-white flex flex-col items-center justify-center">
        <h1 className="">FEATURED PROJECTS</h1>
        <div className="flex gap-8">
          <ProjectLink
            href="https://github.com/bfong-08/quantum-simulator"
            img_src="/quantum-simulator-visual.jpeg"
            img_alt="quantum simulator visual"
            title="Quantum State Simulator"
            description="A lightweight simulator created using Python and NumPy"
          />
          <ProjectLink
            href="https://bfong-qubit-visualizer.vercel.app"
            img_src="/qubit-visualizer-visual.png"
            img_alt="qubit visualizer visual"
            title="Qubit Visualizer"
            description="A simple interface to evolve a qubit state using quantum gates"
          />
        </div>
      </div>
      <div className="w-full text-white flex flex-col items-center justify-center">
        <Carousel>
          <CarouselItem />
        </Carousel>
      </div>
    </div>
  );
}

const ProjectLink = ({
  href,
  img_src,
  img_alt,
  title,
  description,
}: {
  href: string;
  img_src: string;
  img_alt: string;
  title: string;
  description: string;
}) => {
  return (
    <Link
      href={href}
      className="h-96 w-xs  overflow-hidden flex item-center justify-center 
        relative group hover:scale-[101%] transition-all duration-200"
      target="_blank">
      <Image
        src={img_src}
        alt={img_alt}
        width={1000}
        height={1000}
        className="w-full object-cover group-hover:scale-110 group-hover:brightness-75
          transition-all duration-200"
      />
      <div
        className="flex flex-col gap-1 justify-end absolute bottom-0 left-0 w-full h-full p-4 z-10 
          text-white bg-linear-to-t from-black to-black/">
        <h2 className="font-bold text-xl">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </Link>
  );
};
