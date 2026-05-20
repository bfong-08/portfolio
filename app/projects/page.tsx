import ProjectLink from "../components/project-link";

export default function Projects() {
  return (
    <>
      <header className="flex flex-wrap gap-x-8 gap-y-4 items-center justify-center py-24">
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
      </header>
    </>
  );
}
