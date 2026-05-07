import Image from "next/image";

export default function About() {
  const courses = [
    {
      title: "Calculus 1",
      grade: "A",
      institution: "College of Alameda",
    },
    {
      title: "AP Calculus BC",
      score: "5",
      institution: "St. Joseph Notre Dame High School",
    },
    {
      title: "AP Computer Science A",
      score: "5",
      institution: "St. Joseph Notre Dame High School",
    },
    {
      title: "AP Physics 1",
      score: "5",
      institution: "St. Joseph Notre Dame High School",
    },
    {
      title: "Multivariable Calculus",
      grade: "A",
      institution: "College of Alameda",
    },
    {
      title: "Differential Equations",
      grade: "A",
      institution: "College of Alameda",
    },
  ];

  return (
    <>
      <header className="w-full h-screen flex px-32 gap-16 justify-center">
        <div className="flex items-center justify-center">
          <div className="overflow-hidden border border-grey w-72 rounded-md ">
            <Image
              src={"/profile-picture.jpg"}
              alt="pfp"
              width={500}
              height={500}
              className="border w-sm scale-150"
            />
          </div>
        </div>
        <div className=" w-md flex flex-col justify-center text-white gap-4">
          <h1 className="text-gradient text-6xl h-20">About Me</h1>
          <p>
            Hey! My name is <BW>Brandon Fong,</BW> and I am an incoming college
            freshman from the Bay Area. During high school, I taught myself{" "}
            <BW>Java, Python, </BW> and <BW>JavaScript</BW> through online
            sources. My focus was on web development and deep learning using{" "}
            <BW>Next.js</BW> and <BW>PyTorch</BW>, respectively. However, I have
            since found a passion for <BW>quantum computing,</BW> and I have
            taught myself fundamental concepts through IBM Quantum Learning. I
            plan to attend <BW>UCLA</BW> as a <BW>physics</BW> major in the
            fall, and I hope to earn a PhD in <BW>quantum physics!</BW>
          </p>
        </div>
      </header>
      <div className="bg-black flex flex-col items-center py-8 gap-8">
        <h1>Relevant Coursework</h1>
        <div className="flex flex-nowrap gap-4 px-8 overflow-x-scroll no-scrollbar max-w-full">
          {courses.map((course) => (
            <CourseCard
              key={course.title}
              title={course.title}
              score={course.score}
              grade={course.grade}
              institution={course.institution}
            />
          ))}
        </div>
      </div>
      <div className="bg-black">
        <h1>Skills</h1>
      </div>
    </>
  );
}

function CourseCard({
  title,
  score,
  grade,
  institution,
}: {
  title: string;
  score?: string;
  grade?: string;
  institution: string;
}) {
  return (
    <div
      className="bg-midnight flex flex-col shrink-0 rounded-md 
    border border-grey p-4 w-2xs hover:border-accent transition-all 
    duration-150">
      <h2 className="text-white text-xl font-bold">{title}</h2>
      <h3 className="text-accent">
        {score ? "Score" : "Grade"}: {score ? score : grade}
      </h3>
      <p className="">Taken at {institution}</p>
    </div>
  );
}

function BW({ children }: { children: React.ReactNode }) {
  return <span className="font-bold">{children}</span>;
}
