import { ProjectsSection } from "../components/ProjectsSection";
import { Navbar } from "../components/Navbar";

const Projects = () => {
  return (
    <section className="flex min-h-screen flex-col">
      <Navbar />
      <ProjectsSection />
    </section>
  );
};

export default Projects;
