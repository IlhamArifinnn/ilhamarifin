import { BriefcaseBusiness, Users } from "lucide-react";
import { workExperiences, orgExperiences } from "../utils/data/experiences";
import { motion } from "framer-motion";

const Experience = () => {
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

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const timelineItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100 },
    },
    hover: {
      scale: 1.02,
      x: 10,
      transition: { duration: 0.3 },
    },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.5 },
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
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#e99b63]">
            Experience
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Work Experience */}
          <motion.div variants={sectionVariants}>
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="w-10 h-10 rounded-full bg-[#e99b63] flex items-center justify-center"
                variants={iconVariants}
                whileHover="hover"
              >
                <BriefcaseBusiness className="text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold dark:text-[#232323] text-white">
                Work Experience
              </h3>
            </div>

            <div className="space-y-6">
              {workExperiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative pl-10 border-l-2 border-[#e99b63]"
                  variants={timelineItemVariants}
                  whileHover="hover"
                  custom={index}
                >
                  {/* Animated dot */}
                  <motion.div
                    className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#e99b63]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    whileHover={{
                      scale: [1, 1.5, 1],
                      transition: { duration: 0.5 },
                    }}
                  />

                  {/* Timeline content */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    <h4 className="font-semibold text-lg dark:text-[#232323] text-white">
                      {exp.role}
                    </h4>
                    <motion.p
                      className="text-[#e99b63] text-sm font-medium mb-1"
                      whileHover={{ scale: 1.03 }}
                    >
                      {exp.company}
                    </motion.p>
                    <p className="text-gray-400 dark:text-gray-600 text-sm">
                      {exp.period}
                    </p>
                  </motion.div>

                  {/* Animated connector line */}
                  <motion.div
                    className="absolute left-[-2px] top-4 bottom-0 w-0.5 bg-gradient-to-b from-[#e99b63] to-transparent"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{
                      delay: index * 0.1 + 0.5,
                      duration: 0.5,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Organizational Experience */}
          <motion.div variants={sectionVariants}>
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="w-10 h-10 rounded-full bg-[#e99b63] flex items-center justify-center"
                variants={iconVariants}
                whileHover="hover"
              >
                <Users className="text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold dark:text-[#232323] text-white">
                Organizational Experience
              </h3>
            </div>

            <div className="space-y-6">
              {orgExperiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative pl-10 border-l-2 border-[#e99b63]"
                  variants={timelineItemVariants}
                  whileHover="hover"
                  custom={index}
                >
                  {/* Animated dot */}
                  <motion.div
                    className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#e99b63]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    whileHover={{
                      scale: [1, 1.5, 1],
                      boxShadow: "0 0 10px rgba(233, 155, 99, 0.8)",
                      transition: { duration: 0.5 },
                    }}
                  />

                  {/* Timeline content */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    <h4 className="font-semibold text-lg dark:text-[#232323] text-white">
                      {exp.role}
                    </h4>
                    <motion.p
                      className="text-[#e99b63] text-sm font-medium mb-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      {exp.company}
                    </motion.p>
                    <p className="text-gray-400 dark:text-gray-600 text-sm">
                      {exp.period}
                    </p>
                  </motion.div>

                  {/* Animated connector line with gradient */}
                  <motion.div
                    className="absolute left-[-2px] top-4 h-0 w-0.5 bg-gradient-to-b from-[#e99b63] via-[#ff8a5c] to-transparent"
                    initial={{ height: 0 }}
                    animate={{ height: "calc(100% - 1rem)" }}
                    transition={{
                      delay: index * 0.1 + 0.5,
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Floating elements decoration */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-[#e99b63]/20"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-6 h-6 rounded-full bg-[#e99b63]/10"
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>
    </motion.section>
  );
};

export default Experience;
