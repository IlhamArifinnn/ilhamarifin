import { Github, Link } from "lucide-react";
import projectsData from "../utils/data/projects";

const Projects = () => {
  return (
    <section
      className="min-h-screen px-4 py-14 md:py-20 
        bg-gradient-to-br dark:from-[#f5f5f5] dark:via-[#fff] dark:to-[#e99b63] 
        from-[#181818] via-[#232323] to-[#e99b63]"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#e99b63]">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] dark:from-white dark:to-gray-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Year Badge */}
              <div className="mb-3">
                <span className="inline-block bg-[#e99b63] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {project.year}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 dark:text-[#232323] text-white">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 dark:text-gray-600 text-sm mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[#333] dark:bg-gray-200 text-gray-300 dark:text-gray-700 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 text-sm ">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[#e99b63] hover:text-[#d88a57] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[#e99b63] hover:text-[#d88a57] transition-colors"
                  >
                    <Link className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
