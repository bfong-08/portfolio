import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="font-mulish">
      <header className="flex items-center justify-center h-screen dark-gradient gap-20">
        <div className="overflow-hidden aspect-square flex items-center justify-center w-xs relative">
          <Image src="/profile-picture-no-bg.png" alt="pfp" width={500} height={500} className="absolute z-10 -bottom-12 scale-125"/>
          <Image src="/header-graphic.png" alt="" width={500} height={500} className="absolute top-0 left-0"/>
        </div>
        <div className="flex flex-col gap-12 w-sm">
          <h1 className="text-7xl">Brandon Fong</h1>
          <p>
            Hello! I am a high school senior at St. Joseph Notre Dame High School 
            who has a passion mathematics and quantum physics. 
            I'm not committed to college yet, but I intend to pursue a degree in physics!
          </p>
        </div>
      </header>
      <div className="w-full pt-12 pb-18 gap-6 bg-linear-to-tl from-salmon to-pink text-gunmetal flex flex-col items-center justify-center">
        <h1>
          Featured Projects
        </h1>
        <Link href="https://github.com/bfong-08/quantum-simulator" 
        className="h-48 w-4xl overflow-hidden rounded-xl flex item-center justify-center 
        relative group">
          <Image src="/quantum-simulator-visual.jpeg" alt="quantum simulator visual" 
          width={1000} height={1000} className="w-full object-cover group-hover:scale-110 group-hover:brightness-50
          transition-all duration-200"/>
          <div className="flex flex-col justify-end absolute bottom-0 left-0 w-full h-full p-4 z-10 
          text-gray bg-linear-to-t from-black to-black/">
            <h2 className="font-bold text-2xl">
              Quantum State Simulator
            </h2>
            <p>
              A lightweight simulator created using Python and NumPy
            </p>
          </div>
        </Link>
      </div>
      <div className="w-full py-12 gap-8 bg-gunmetal text-gray flex flex-col items-center justify-center">

      </div>
    </div>
  );
}
