import { useState } from "react";
import { Github, Link, ChevronLeft, ChevronRight } from "lucide-react";
import projectsData from "../utils/data/projects";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const PROJECTS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projectsData.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = projectsData.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.5 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0 10px 30px rgba(233, 155, 99, 0.3)",
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
    tap: {
      scale: 0.97,
    },
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const techVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
      },
    },
    hover: {
      scale: 1.06,
      y: -2,
    },
  };

  return (
    <motion.section
      className="min-h-screen px-4 py-14 md:py-20 
        bg-gradient-to-br dark:from-[#f5f5f5] dark:via-[#fff] dark:to-[#e99b63] 
        from-[#181818] via-[#232323] to-[#e99b63]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#e99b63]">
            My Projects
          </h2>
          <p className="text-gray-300 dark:text-gray-600 mb-12 max-w-2xl mx-auto">
            A collection of my recent work showcasing different technologies and
            solutions
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {currentProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] dark:from-white dark:to-gray-100 rounded-xl p-6 shadow-lg overflow-hidden relative group"
              variants={projectVariants}
              whileHover="hover"
              whileTap="tap"
              custom={index}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#e99b63]/0 via-[#e99b63]/10 to-[#e99b63]/0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />

              {/* Project Image */}
              <motion.div
                className="mb-4 overflow-hidden rounded-lg relative"
                variants={imageVariants}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover rounded-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Image overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Year Badge */}
              <motion.div
                className="mb-3"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <span className="inline-block bg-gradient-to-r from-[#e99b63] to-[#ff6b6b] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {project.year}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h3
                className="text-xl font-semibold mb-3 dark:text-[#232323] text-white hover:text-[#e99b63] transition-colors"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {project.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-gray-400 dark:text-gray-600 text-sm mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                {project.description}
              </motion.p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="bg-[#333] dark:bg-gray-200 text-gray-300 dark:text-gray-700 text-xs px-3 py-1 rounded-full"
                    variants={techVariants}
                    whileHover="hover"
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Links */}
              <motion.div
                className="flex gap-4 text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[#e99b63] hover:text-[#d88a57] transition-colors"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Github className="w-4 h-4" />
                    </motion.div>
                    Code
                  </motion.a>
                )}
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[#e99b63] hover:text-[#d88a57] transition-colors"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      whileHover={{ rotate: [0, 30, -30, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Link className="w-4 h-4" />
                    </motion.div>
                    Live Demo
                  </motion.a>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            className="flex justify-center items-center gap-2 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {/* Previous Button */}
            <motion.button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded-lg transition-all ${currentPage === 1
                ? "text-gray-500 cursor-not-allowed"
                : "text-[#e99b63] hover:bg-[#e99b63]/20"
                }`}
              whileHover={currentPage !== 1 ? { scale: 1.1 } : {}}
              whileTap={currentPage !== 1 ? { scale: 0.9 } : {}}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <motion.button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-lg font-semibold transition-all ${currentPage === page
                  ? "bg-gradient-to-r from-[#e99b63] to-[#ff6b6b] text-white shadow-lg"
                  : "text-gray-300 dark:text-gray-600 hover:bg-[#e99b63]/20"
                  }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {page}
              </motion.button>
            ))}

            {/* Next Button */}
            <motion.button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-lg transition-all ${currentPage === totalPages
                ? "text-gray-500 cursor-not-allowed"
                : "text-[#e99b63] hover:bg-[#e99b63]/20"
                }`}
              whileHover={currentPage !== totalPages ? { scale: 1.1 } : {}}
              whileTap={currentPage !== totalPages ? { scale: 0.9 } : {}}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Projects;
