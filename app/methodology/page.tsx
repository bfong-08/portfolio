import Link from "next/link";
import { Suspense } from "react";
import { SDT } from "./sdt";

export default function Methodology() {
  return (
    <>
      <header className="h-screen flex mt-4 flex-col gap-y-4 items-center justify-center">
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
      <Suspense>
        <SDT />
      </Suspense>

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
