import "./Projects.css";
import { projects } from "./projectsData";
import { ProjectCard } from "./ProjectCard.jsx";

export default function Projects() {
  return (
    <div className="projects__list">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}
