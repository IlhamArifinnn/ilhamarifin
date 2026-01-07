import Hero from "../components/Hero";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <main className="relative overflow-hidden">
        {/* gradient image */}
        <motion.img
          className="absolute top-0 right-0 opacity-60 -z-10"
          src="/gradient.png"
          alt="gradient image"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Animated blur effect */}
        <motion.div
          className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10"
          animate={{
            boxShadow: [
              "0 0 900px 20px rgba(233, 155, 99, 0.7)",
              "0 0 1000px 30px rgba(233, 155, 99, 0.9)",
              "0 0 900px 20px rgba(233, 155, 99, 0.7)",
            ],
            rotate: [-30, -25, -30],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating particles */}
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#e99b63] rounded-full -z-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        <Hero />
      </main>
    </>
  );
};

export default Home;
