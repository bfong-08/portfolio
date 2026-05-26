"use client";

import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function Methodology() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const activeDtStep = searchParams.get("design-thinking") || "";

  const dtTabs = [
    {
      index: "",
      description:
        "The first step in an engineering project is using empathy to fully understand the experiences of the intended users. Empathizing includes observation, interaction, and immersion within their experiences. This is one of the most important engineering steps because it ensures that an engineering creation serves to actually help others.",
      exampleTitle: "Interactive Qubit State Visualizer",
      exampleDescription:
        "I wanted to make a project involving quantum computing. In my conversations with my classmates, parents, and even some teachers, I realized how difficult even the most fundamental quantum concepts can be to grasp. Thus, I decided my project would involve making quantum science more accessible for the average person.",
    },
    {
      index: "define",
      description:
        "The second step is defining a meaningful and actionable problem statement to address through the project. This involves using the information gathered from empathy and noticing patterns of behavior of potential users. Defining a problem is important for setting specific goals and ensuring that a project directly mitigates an issue.",
      exampleTitle: "Interactive Qubit State Visualizer",
      exampleDescription:
        "For users to ease their way into quantum computing, the best place to start is with the single qubit. The problem I sought to address was users getting confused about what a qubit is, the mathematical definition of the qubit, and what quantum gates actually do. ",
    },
    {
      index: "ideate",
      description:
        "The next step is to ideate, or brainstorm potential solutions to the problem. This involves creating a wide range of possible ideas instead of coming up with a single, best solution. Having a wide range of ideas eventually makes the prototyping stage easier and accounts for inevitable failures.",
      exampleTitle: "Interactive Qubit State Visualizer",
      exampleDescription:
        "My first idea was to create a physical, motorized representation of the Bloch sphere, which is one of the most common ways to visually display a quantum state. I planned to use an Arduino for the motors and 3D-printed pieces for the body and arms of the machine. Later on, I decided to create an online interface for users to directly interact with the qubit. I also planned to have the two Bloch sphere angles and the qubit's probabilities displayed on the interface.",
    },
    {
      index: "prototype",
      description:
        "The next step is prototyping, or building early models of the intended solution. These prototypes should be quick and cheap to create so that as much feedback from users can be amassed. Prototypes also do not need to resemble the final creation. They can be as simple as a storyboard or a role-playing simulation.",
      exampleTitle: "Interactive Qubit State Visualizer",
      exampleDescription:
        "I sketched various ideas for the physical qubit visualizer. I intended to have a rotating circular baseplate with a beam protruding upward from the center. A servo attached to the bottom of the beam would rotate a gear-pully mechanism that would rotate a second beam attached to the top of the first beam. However, I began actually bulding the website first. When the website was mostly done, I moved on to creating pieces for the machine using a laser-cutter and plywood.",
    },
    {
      index: "test",
      description:
        'The final step is testing prototypes. This involves allowing users to experience using a product. While this is technically the "final" step, the feedback gained from users\' preliminary experiences can be used to gain empathy, brainstorm new ideas, or adjust prototypes. Engineering is a cyclical process; it is rare that one original solution is the perfect one.',
      exampleTitle: "Interactive Qubit State Visualizer",
      exampleDescription:
        "Since I am also someone who benefits from my own engineering project, I gained some testing feedback from myself. This included the website's readability, a streamlined layout of quantum gate buttons, and the responsiveness of live updates. For the physical portion, I adjusted the baseplate to provide a mount for the lower servo. Then, when I showed my website to users, I realized it was still hard to understand the purpose of the website. So, I created several documentation pages to explain each feature.",
    },
  ];

  const handleDtStep = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("design-thinking", term);
    } else {
      params.delete("design-thinking");
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <>
      <header className="h-screen flex flex-col gap-y-4 items-center justify-center">
        <h1 className="h-12">
          My <span className="text-gradient h-12">Engineering</span> Process
        </h1>
        <p className="w-md text-center">
          Beyond actually building or programming something, a lot goes on
          behind the scenes when it comes to planning. Below are some thoughts I
          take into consideration when brainstorming an idea for a project.
        </p>
        <div className="flex justify-center items-center gap-4 mt-4">
          <Link href="#design-thinking" className="hollow button">
            Design Thinking
          </Link>
          <Link href="#agile" className="hollow button">
            Agile
          </Link>
          <Link href="#ethics" className="hollow button">
            Ethics
          </Link>
        </div>
      </header>
      <section
        className="flex h-screen py-16 px-24 scroll-mt-8 "
        id="design-thinking">
        <div className="flex flex-col border items-center gap-4 border-grey w-full rounded-xl bg-black p-12">
          <h1 className="">Design Thinking</h1>
          <div className="flex flex-col w-full h-full justify-center pt-12 relative items-center ">
            <div className="flex top-px w-full absolute h-12 z-20">
              {dtTabs.map((tab) => (
                <SidebarLink
                  key={tab.index}
                  index={tab.index}
                  onClick={() => handleDtStep(tab.index)}>
                  {tab.index
                    ? tab.index.charAt(0).toUpperCase() + tab.index.slice(1)
                    : "Empathize"}
                </SidebarLink>
              ))}
            </div>
            <div
              className={`flex flex-1 z-0 w-full relative border border-grey bg-midnight rounded-md ${activeDtStep ? "" : "rounded-tl-none"} ${activeDtStep == "assess" && "rounded-tr-none"}`}>
              {dtTabs.map((tab) => (
                <div
                  key={tab.index}
                  className={`${activeDtStep == tab.index ? "flex" : "hidden"} p-4 gap-6 w-full`}>
                  <p className="flex-1">{tab.description}</p>
                  <hr className="h-full border border-grey" />
                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-bold text-2xl text-gradient h-8">
                      {tab.exampleTitle}
                    </h2>
                    <p>{tab.exampleDescription}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        className="flex h-screen pb-32 -mb-16 px-24 scroll-mt-24"
        id="agile">
        <div className="flex flex-col border items-center justify-center gap-6 border-grey w-full rounded-xl bg-black p-12">
          <h1 className="">Lean Software Development</h1>
          <div className="flex h-full gap-4 w-full">
            <div className="rounded-md border border-grey bg-midnight py-4 px-6 h-full flex flex-col gap-2">
              <h2 className="font-bold text-2xl">Core Principles:</h2>
              <ol className="list-decimal pl-8 flex flex-col gap-2">
                <li>Eliminate Waste</li>
                <li>Amplify Learning</li>
                <li>Decide as Late as Possible</li>
                <li>Deliver as Fast as Possible</li>
                <li>Empower the Team</li>
                <li>Build Integrity In</li>
                <li>Optimize the Whole</li>
              </ol>
            </div>
            <div className="flex-1 w-full px-4 py-2 flex flex-col gap-4">
              <p>
                Lean software development is an{" "}
                <span className="font-bold">Agile</span> framework that seeks to
                optimize efficiency in the workplace through the 7 principles
                listed to the left. As the name suggests, this framework is
                largely used for software development, where usable prototypes
                can be developed and released to users in quick succession.
                Since all of my projects involve software development, it makes
                sense for me to use this framework.
              </p>
              <hr className="border-grey" />
              <h2 className="text-gradient font-bold text-xl">
                Interactive Qubit State Visualizer
              </h2>
              <p>
                When developing my qubit state visualizer, I eliminated waste by
                only displaying the most important features of the qubit and
                quantum gates. I also frequently pushed my code to my GitHub,
                which automatically updated the Vercel deployment, allowing me
                to learn from users' experiences quickly. Many of my test users
                in practice were my classmates. With every update, I delivered
                as quickly as possible to uphold efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="flex h-screen pb-32 -mb-32 px-24 scroll-mt-24"
        id="ethics">
        <div className="flex flex-col border items-center gap-6 border-grey w-full rounded-xl bg-black p-12">
          <h1 className="">Ethics</h1>
          <div className="flex flex-col gap-4">
            <p>
              I follow the set of rules compiled by the{" "}
              <a
                className="underline hover:no-underline text-accent cursor-pointer"
                href="https://www.computer.org/education/code-of-ethics"
                target="_blank">
                IEEE Computer Society and Association for Computing Machinery
                (ACM)
              </a>{" "}
              under a <span className="font-bold">deontological </span> ethics
              framework. The rules include:
            </p>
            <ol className="w-full flex flex-col gap-2 list-decimal pl-8">
              <li>Acting consistently with the public interest</li>
              <li>
                Acting in a manner that is in the best interests of my client
                and employer consistent with the public interest
              </li>
              <li>
                Ensuring my products meet the highest professional standards
                possible
              </li>
              <li>
                Maintaining integrity and independence in my professional
                judgment
              </li>
              <li>Being fair to and supportive of my colleagues</li>
              <li>
                Participating in lifelong learning regarding the practice of my
                profession
              </li>
              <li>
                Subscribing to and promoting an ethical approach to the practice
                of my profession
              </li>
            </ol>
            <p>
              By following these rules, I can ensure that each of my projects,
              as well as the underlying engineering process, abides by good
              practices that promote the common good and do not harm or mistreat
              anyone involved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function SidebarLink({
  onClick,
  index,
  children,
}: {
  onClick: Function;
  index: string;
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const activeDtStep = searchParams.get("design-thinking") || "";
  return (
    <button
      onClick={() => onClick()}
      className={`button justify-center items-center w-full hover:bg-midnight  rounded-b-none border ${activeDtStep == index ? "border-b-transparent z-20 font-bold border-grey bg-midnight" : "border-transparent bg-none"}`}>
      {children}
    </button>
  );
}
