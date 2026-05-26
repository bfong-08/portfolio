import Link from "next/link";
import ProjectLink from "../components/project-link";

export default function Projects() {
  return (
    <>
      <header className="flex flex-col gap-8 pt-24 items-center">
        <div className="flex flex-col items-center gap-2 w-sm">
          <h1 className="text-gradient h-12">My Projects</h1>
          <p className="text-center">
            Programming projects built entirely by me in VS Code. You can learn
            more about each project by reading the files on my my{" "}
            <Link
              href={"https://github.com/bfong-08"}
              className="hover:no-underline underline text-accent underline-offset-2">
              Github
            </Link>
            .
          </p>
          <div className="flex gap-4 mt-6">
            <Link className="hollow button" href={"#xfn"}>
              Cross-Functional Teams
            </Link>
            <Link className="hollow button" href={"#maker-faire"}>
              Maker Faire
            </Link>
          </div>
        </div>
      </header>
      <section className="flex flex-wrap gap-8 items-center justify-center pt-8">
        <ProjectLink
          href="https://github.com/bfong-08/quantum-simulator"
          img_src="/projects/quantum-simulator-visual.jpeg"
          img_alt="quantum simulator visual"
          title="Quantum State Simulator"
          description="A lightweight multi-qubit simulator capable of state evolution through quantum gates."
          logos={["python"]}
        />
        <ProjectLink
          href="https://bfong-qubit-visualizer.vercel.app"
          img_src="/projects/qubit-visualizer-visual.png"
          img_alt="qubit visualizer visual"
          title="Qubit Visualizer"
          description="An interface to display the properties of a single qubit state as it evolves through various quantum gates."
          logos={["python", "typescript", "nextjs"]}
        />
        <ProjectLink
          href="https://github.com/bfong-08/grovers-algorithm"
          img_src="/projects/grovers-algorithm.png"
          img_alt="grover's algorithm visualizer"
          title="Grover's Algorithm Simulation"
          description="A simulation of Grover's Algorithm to isolate a chosen 3-bit string from a list of 9 options."
          logos={["python", "qiskit"]}
        />
        <ProjectLink
          href="https://github.com/bfong-08/quantum-visualizer"
          img_src="/projects/bloch-sphere.png"
          img_alt="bloch sphere"
          title="Bloch Sphere Demonstration"
          description="An interactive 3-dimensional Bloch Sphere that displays a single, static qubit state."
          logos={["python"]}
        />
      </section>
      <section
        className="flex items-center justify-center px-24 py-16 -mb-16 h-screen w-full scroll-mt-8"
        id="xfn">
        <div className="rounded-xl border border-grey p-12 bg-black w-full h-full flex flex-col items-center justify-center gap-8">
          <h1>Cross-Functional Teams</h1>
          <div className="h-full flex-1 w-full flex gap-6">
            <p className="flex-2">
              Many, if not most, engineering projects involve many people
              working collaboratively. Members of a project may have different
              skills they specialize in, such as software development,
              3D-design, or mechanical assembly. A{" "}
              <span className="font-bold">cross-functional team (XFN)</span> is
              a group involving members with different specializations that each
              work together to create efficiently and accurately. The keys to an
              efficient and optimal XFN are communication and organization, each
              of which can be achieved in various ways, such as through an{" "}
              <Link
                href={"/methodology#agile"}
                className="underline hover:no-underline text-accent">
                Agile framework
              </Link>
              .
            </p>
            <hr className="h-full border border-grey" />
            <div className="flex-3 flex flex-col gap-2">
              <h2 className="text-gradient text-2xl font-bold">
                FIRST Tech Challenge Robotics Team
              </h2>
              <p className="">
                My FIRST Tech Challenge (FTC) robotics team organized itself
                into two groups: physical and digital. The physical group
                handled the design and assembly of the robot. This team was
                split into subgroups that tackled a specific component of the
                robot, such as the arm or chassis. The digital group handled all
                of the programming of the robot. I was the lead programmer,
                meaning I handled much of the code involving the steering of the
                robot, the movement of the arm, and the object-detection
                feature. I frequently communicated with the group in charge of
                the robot arm to ensure that my code could effectively control
                the arm using buttons on the controller. To ensure inter-group
                transparency, our project manager assembled everyone in a pre-
                and post-meeting debrief to discuss each group's goals and
                progress for the day.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="flex items-center justify-center px-24 py-16 -mb-16 h-screen w-full scroll-mt-8"
        id="maker-faire">
        <div className="rounded-xl border border-grey p-12 bg-black w-full h-full flex flex-col gap-8 items-center justify-center">
          <h1>Maker Faire</h1>
          <p className="flex-1">
            Every year, my high school hosts a Maker Faire for students to
            present one or more of their engineering projects. The Faire is open
            to parents, classmates, and other visitors, and it includes a
            segment from a guest speaker. In 2026, I presented my{" "}
            <a
              href="https://bfong-qubit-visualizer.vercel.app"
              target="_blank"
              className="underline hover:no-underline text-accent">
              Qubit State Visualizer
            </a>
            . Although the physical portion was not completed, I had the pieces
            from an early prototype. However, the website portion was complete.
            <br />
            <br />
            During the Faire, I was approached by various parents, classmates,
            and teachers who demonstrated interest in my project. I hardly
            expected anyone to have an understanding of what a qubit was, so for
            each spectator, I gave them a verbal breakdown of my website's
            purpose and features, and then I showed them the documentation pages
            built into the website. Some spectators clicked around on each
            quantum gate, experimenting with the effects each gate had on the
            qubit state. Others asked me to demonstrate how I would use my own
            website to supplement my own learning or quantum computing
            development.
            <br />
            <br />I am happy with my Maker Faire presentation. I felt prepared
            and confident in my project, and many spectators copied down the
            link to my website for later access.
          </p>
        </div>
      </section>
    </>
  );
}
