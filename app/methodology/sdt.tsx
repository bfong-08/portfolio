"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

export function SDT() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const activeDtStep = searchParams.get("design-thinking") || "";

  const handleDtStep = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("design-thinking", term);
    } else {
      params.delete("design-thinking");
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

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

  return (
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
