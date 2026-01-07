import Spline from "@splinetool/react-spline";
import { Gem, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="flex lg:mt-28 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0"
      >
        {/* tag box-with gradient border */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          animate={{
            boxShadow: [
              "0 0 15px rgba(233, 155, 99, 0.4)",
              "0 0 25px rgba(233, 155, 99, 0.6)",
              "0 0 15px rgba(233, 155, 99, 0.4)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full mt-5"
        >
          <div className="absolute inset-[3px] bg-black dark:bg-white rounded-full flex items-center justify-center gap-2 text-sm font-medium tracking-wide">
            <Gem className="text-gray-200 dark:text-slate-700" />
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              PORTFOLIO
            </motion.span>
          </div>
        </motion.div>

        {/* main heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wider my-4 leading-snug"
          variants={itemVariants}
        >
          Hi, I'm Ilham Arifin👋
          <br />
          <span>Fullstack Developer & Tech Enthusiast</span>
        </motion.h1>

        {/* description */}
        <motion.p
          className="text-base sm:text-lg md:text-base tracking-wider text-gray-400 dark:text-slate-700 max-w-[25rem] lg:max-w-[30rem]"
          variants={itemVariants}
        >
          Welcome to my portfolio! I'm passionate about crafting efficient and
          scalable web applications. Explore my projects and experience as a
          developer.
        </motion.p>

        {/* buttons */}
        <motion.div className="flex gap-4 my-5" variants={itemVariants}>
          <motion.a
            href="https://github.com/IlhamArifinnn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-[#2a2a2a] py-1 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] dark:hover:bg-gray-300"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github /> GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ilhamarifinnn/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-[#2a2a2a] py-1 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] dark:hover:bg-gray-300"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin /> LinkedIn
          </motion.a>
        </motion.div>
      </motion.div>

      {/* 3D robot */}
      <Spline
        className="absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full "
        scene="https://prod.spline.design/Oa1xSh-QPnhV50Ib/scene.splinecode"
      />
    </section>
  );
};

export default Hero;
