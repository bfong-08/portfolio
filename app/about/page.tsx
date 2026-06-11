import Image from "next/image";
import React from "react";
import { BsPlusLg } from "react-icons/bs";

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
      <header className="w-full md:h-screen md:py-0 mt-4 flex md:flex-row flex-col md:px-32 px-16 gap-16 justify-center items-center">
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
        <div className="w-md flex flex-col justify-center text-white gap-4">
          <h1 className="text-gradient text-6xl h-20 md:text-left text-center">
            About Me
          </h1>
          <p className="md:text-left text-center">
            Hey! My name is <BW>Brandon Fong,</BW> and I am an incoming college
            freshman from the Bay Area. During high school, I taught myself{" "}
            <BW>Java, Python, </BW> and <BW>JavaScript</BW> through online
            sources. My focus was on web development and deep learning using{" "}
            <BW>Next.js</BW> and <BW>PyTorch</BW>, respectively. However, I have
            since found a passion for <BW>quantum computing,</BW> and I have
            taught myself fundamental concepts through IBM Quantum Learning. I
            plan to attend <BW>Princeton University</BW> as a <BW>physics</BW>{" "}
            major in the fall, and I hope to earn a PhD in{" "}
            <BW>quantum physics!</BW>
          </p>
        </div>
      </header>
      <div className="w-full flex flex-col md:flex-row gap-8 px-24 my-8 items-stretch">
        <TimelineCard title="Education">
          <TimelineCardItem
            title="St. Joseph Notre Dame High School"
            years="2022-2026"
            description="Private Catholic High School in Alameda, CA."
          />
          <TimelineCardItem
            title="Princeton University"
            years="2026-Present"
            description="Private Four-Year University. Majoring in Physics."
          />
        </TimelineCard>
        <TimelineCard title="Work Experience">
          <TimelineCardItem
            title="Mathnasium Math Instructor"
            years="2025-Present"
            description="Tutored students of grades K-12 in various math subjects."
          />
        </TimelineCard>
      </div>
      <div className="bg-black flex flex-col items-center p-8 gap-8 mx-24 rounded-xl border border-grey">
        <h1>Relevant Coursework</h1>
        <div className="flex flex-nowrap gap-4 overflow-x-scroll no-scrollbar max-w-full">
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
      <div className="bg-black flex flex-col gap-8 items-center justify-center mx-24 my-8 rounded-xl border border-grey p-8">
        <h1 className="">Skills</h1>
        <div className="flex flex-col md:flex-row gap-4 flex-nowrap overflow-x-scroll no-scrollbar max-w-full">
          <SkillCard
            title="Python"
            description="Programming deep learning models with PyTorch and simulating quantum circuits with Qiskit.">
            <Image
              className="h-1/2 w-auto aspect-square"
              src={"/logos/pytorch.png"}
              alt="pytorch logo"
              width={100}
              height={100}
            />
            <BsPlusLg className="h-8 w-auto aspect-square" />
            <Image
              className="h-3/4 w-auto aspect-square"
              src={"/logos/python.png"}
              alt="python logo"
              width={100}
              height={100}
            />
            <BsPlusLg className="h-8 w-auto aspect-square" />
            <Image
              className="invert h-1/2 w-auto aspect-square"
              src={"/logos/qiskit.png"}
              alt="qiskit logo"
              width={100}
              height={100}
            />
          </SkillCard>
          <SkillCard
            title="TypeScript"
            description="Frontend and backend web development using Next.js App Router">
            <Image
              className="h-2/3 w-auto aspect-square"
              src={"/logos/typescript.png"}
              alt="typescript logo"
              width={100}
              height={100}
            />
            <BsPlusLg className="h-8 w-auto aspect-square" />
            <Image
              className="h-2/3 w-auto aspect-square"
              src={"/logos/nextjs.png"}
              alt="next.js logo"
              width={100}
              height={100}
            />
          </SkillCard>
          <SkillCard
            title="Java"
            description="Object-oriented programming for AP Computer Science A">
            <Image
              className="h-full w-auto aspect-auto"
              src={"/logos/java.png"}
              alt="java logo"
              width={100}
              height={100}
            />
          </SkillCard>
          <SkillCard
            title="Graphic Design"
            description="Designing components for the web and physical media">
            <Image
              className="h-full w-auto aspect-auto"
              src={"/logos/figma.png"}
              alt="figma logo"
              width={100}
              height={100}
            />
          </SkillCard>
          <SkillCard
            title="Laser Cutting"
            description="Designing cutouts and laser cutting plywood using a Dremel Digilab">
            <Image
              className="h-1/2 w-auto aspect-auto"
              src={"/logos/dremel-digilab.png"}
              alt="dremel logo"
              width={100}
              height={100}
            />
          </SkillCard>
        </div>
      </div>
    </>
  );
}

function TimelineCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex-1 bg-black gap-8 rounded-xl border 
    border-grey flex items-center justify-start flex-col px-16 
    py-8">
      <h1>{title}</h1>
      <ul className="flex flex-col gap-4 w-full">{children}</ul>
    </div>
  );
}

function TimelineCardItem({
  title,
  years,
  description,
}: {
  title: string;
  years: string;
  description?: string;
}) {
  return (
    <li className="flex flex-col w-full rounded-md p-4 bg-midnight border border-grey hover:border-accent transition-all duration-150">
      <h2 className="text-lg font-bold">{title}</h2>
      <h3 className="text-accent">{years}</h3>
      <p>{description}</p>
    </li>
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

function SkillCard({
  title,
  children,
  description,
}: {
  title: string;
  children: React.ReactNode;
  description: string;
}) {
  return (
    <div className="flex flex-col shrink-0 w-2xs gap-2 hover:border-accent transition-all duration-150 p-4 bg-midnight items-center rounded-md border border-grey">
      <div className="flex items-center justify-center gap-2 h-28 p-2 w-full">
        {children}
      </div>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-center md:block hidden">{description}</p>
    </div>
  );
}
