import Image from "next/image";
import Link from "next/link";
import { Carousel, CarouselItem } from "./components/carousel";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Home() {
  return (
    <div className="font-grotesk bg-midnight text-white">
      <header className="flex items-center justify-center h-screen relative gap-32">
        <Image
          src="/profile-picture-no-bg.png"
          alt="pfp"
          width={500}
          height={500}
          className="absolute w-xl bottom-0 ml-8"
        />
        <div className="flex flex-col gap-4 w-100 z-10">
          <span className="text-lavender font-bold text-2xl">
            Hi, my name is
          </span>
          <h1 className="text-7xl">BRANDON FONG</h1>
          <hr className="w-32 border-2 mt-2 text-lavender" />
          <div className="flex mt-16 h-8 items-center gap-4">
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
        <div className="flex flex-col w-84 z-10 gap-8">
          <hr className="border border-lilac w-32 -mb-2" />
          <h2 className="text-3xl font-semibold">
            Aspiring Physics Major, based in the Bay Area
          </h2>
          <p className="text-sm text-lilac leading-6">
            I am a senior at St. Joseph Notre Dame High School who has a passion
            for mathematics and quantum physics. I'm not officially committed
            yet, but I intend to pursue a degree in physics at UCLA!
          </p>
          <Link
            href={"/about"}
            className="hover:underline flex items-center mt-4 gap-2 text-lavender">
            More about me →
          </Link>
        </div>
      </header>
      <div className="w-full pt-12 pb-18 gap-8 bg-lilac text-white flex flex-col items-center justify-center">
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
          text-gray bg-linear-to-t from-black to-black/">
        <h2 className="font-bold text-xl">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </Link>
  );
};
