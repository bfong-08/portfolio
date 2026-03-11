import Image from "next/image"

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
            Hello! I am a high school senior at St. Joseph Notre Dame High School. My passion lies in mathematics and quantum physics, and I intend to pursue a degree in physics.
          </p>
        </div>
      </header>
      <div className="w-full h-96 bg-gunmetal flex items-center justify-center">
      </div>
    </div>
  );
}
