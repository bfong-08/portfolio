import Image from "next/image";

export default function About() {
  return (
    <>
      <header className="w-full h-screen flex px-32">
        <div className="flex items-center justify-center w-1/2">
          <div className="overflow-hidden border border-accent w-72 rounded-md ">
            <Image
              src={"/profile-picture.jpg"}
              alt="pfp"
              width={500}
              height={500}
              className="border w-sm scale-150"
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-center text-white">
          <h1 className="text-gradient text-6xl h-20 ">Brandon Fong</h1>
          <p>Lorem ipsum</p>
        </div>
      </header>
      <div className="bg-black">
        <h1>EDUCATION</h1>
      </div>
      <div className="bg-black">
        <h1>SKILLS</h1>
      </div>
    </>
  );
}
