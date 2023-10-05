import { ProjectsSection } from "../components/ProjectsSection";
import { Navbar } from "../components/Navbar";

const Projects = () => {
  return (
    <section className="flex min-h-screen flex-col bg-gradient-to-r from-black via-purple-900 to-pink-900">
      <Navbar />
      <ProjectsSection />
    </section>
  );
};

export default Projects;
