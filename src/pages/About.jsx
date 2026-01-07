import {
  BookMarked,
  Code,
  FolderCode,
  GraduationCap,
  UserRound,
} from "lucide-react";
import { skills } from "../utils/data/skills";
import { motion } from "framer-motion";

const About = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
    hover: {
      scale: 1.03,
      y: -5,
      transition: { duration: 0.3 },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.3 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 200 },
    },
    hover: {
      scale: 1.1,
      rotate: [0, 0, 0, 0],
      transition: { duration: 0.2 },
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
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#e99b63]">
            About Me
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column */}
          <div className="space-y-8">
            {/* Intro */}
            <motion.div
              className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] dark:from-white dark:to-gray-100 rounded-xl p-6 shadow-lg hover-lift"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-10 h-10 rounded-full bg-[#e99b63] flex items-center justify-center"
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <UserRound className="text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold dark:text-[#232323] text-white">
                  Introduction
                </h3>
              </div>
              <p className="text-gray-300 dark:text-gray-600 leading-relaxed text-justify">
                Saya adalah{" "}
                <span className="text-[#e99b63] font-medium">
                  Fullstack Web Developer{" "}
                </span>
                dengan fokus utama pada pengembangan aplikasi berbasis
                <span className="text-[#e99b63] font-medium">
                  {" "}
                  React dan Laravel
                </span>
                . Saat ini saya merupakan mahasiswa S1 Teknik Informatika di STT
                Terpadu Nurul Fikri.
                <br />
                <br />
                Saya terbiasa membangun aplikasi web end-to-end, mulai dari
                perancangan UI, integrasi REST API, autentikasi pengguna, hingga
                pengelolaan database. Beberapa project saya digunakan langsung
                oleh organisasi dan institusi, bukan sekadar project latihan.
              </p>
            </motion.div>

            {/* Background */}
            <motion.div
              className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] dark:from-white dark:to-gray-100 rounded-xl p-6 shadow-lg hover-lift"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-10 h-10 rounded-full bg-[#e99b63] flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <BookMarked className="text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold dark:text-[#232323] text-white">
                  Background
                </h3>
              </div>
              <p className="text-gray-300 dark:text-gray-600 leading-relaxed text-justify">
                Latar belakang saya berasal dari SMK Teknik Komputer dan
                Jaringan, yang membentuk pemahaman kuat tentang sistem,
                jaringan, dan troubleshooting. Saat menempuh kuliah S1, saya
                mulai fokus ke pengembangan software, khususnya web application.
                <br />
                <br />
                Saya aktif mengerjakan project akademik maupun non-akademik,
                termasuk sistem informasi, CMS, dan landing page berbasis
                kebutuhan nyata pengguna.
              </p>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Education */}
            <motion.div
              className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] dark:from-white dark:to-gray-100 rounded-xl p-6 shadow-lg hover-lift"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-10 h-10 rounded-full bg-[#e99b63] flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <GraduationCap className="text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold dark:text-[#232323] text-white">
                  Education
                </h3>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "S1 Teknik Informatika",
                    period: "2023 – Sekarang",
                    institution: "STT Terpadu Nurul Fikri",
                  },
                  {
                    title: "Teknik Komputer & Jaringan",
                    period: "2020 – 2023",
                    institution: "SMKN 1 Padangsidimpuan",
                  },
                ].map((edu, index) => (
                  <motion.div
                    key={index}
                    className="border-l-2 border-[#e99b63] pl-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-semibold text-lg dark:text-[#232323] text-white">
                        {edu.title}
                      </h4>
                      <motion.span
                        className="text-sm text-[#e99b63] font-medium"
                        whileHover={{ scale: 1.1 }}
                      >
                        {edu.period}
                      </motion.span>
                    </div>
                    <p className="text-gray-400 dark:text-gray-600">
                      {edu.institution}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Hard Skills */}
            <motion.div
              className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] dark:from-white dark:to-gray-100 rounded-xl p-6 shadow-lg hover-lift"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-10 h-10 rounded-full bg-[#e99b63] flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Code className="text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold dark:text-[#232323] text-white">
                  Hard Skills
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="flex items-center justify-center gap-3 bg-[#333] dark:bg-gray-200 text-gray-300 dark:text-gray-700 text-sm px-0 py-2 rounded-lg text-center hover:bg-[#e99b63] hover:text-white dark:hover:bg-[#e99b63] dark:hover:text-white transition-all duration-300"
                    variants={skillItemVariants}
                    whileHover="hover"
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.05 }}
                  >
                    <motion.img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-6 h-6"
                    />
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] dark:from-white dark:to-gray-100 rounded-xl p-6 shadow-lg hover-lift"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-10 h-10 rounded-full bg-[#e99b63] flex items-center justify-center"
                  whileHover={{ scale: 1.2 }}
                >
                  <FolderCode className="text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold dark:text-[#232323] text-white">
                  Soft Skills
                </h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Problem Solving",
                  "Kerja Tim & Komunikasi",
                  "Manajemen Waktu",
                  "Adaptif dan Inisiatif",
                ].map((skill, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-2 text-gray-300 dark:text-gray-600"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.i
                      className="bx bx-check text-[#e99b63]"
                      whileHover={{ scale: 1.3 }}
                    ></motion.i>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
