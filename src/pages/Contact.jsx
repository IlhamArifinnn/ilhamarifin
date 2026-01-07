import { Github, Instagram, Link, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const EMAIL_ACCESS_KEY = import.meta.env.VITE_EMAIL_ACCESS_KEY;
  const URL_EMAIL_API = import.meta.env.VITE_BASE_URL_EMAIL;
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(e.target);
    formData.append("access_key", EMAIL_ACCESS_KEY);

    try {
      const response = await fetch(URL_EMAIL_API, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully! 🎉");
        e.target.reset();
      } else {
        console.error(data);
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setResult("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const contactItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100 },
    },
    hover: {
      scale: 1.05,
      x: 10,
      transition: { duration: 0.3 },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(233, 155, 99, 0.4)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
    tap: { scale: 0.95 },
    loading: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.6,
        repeat: Infinity,
      },
    },
  };

  const formFieldVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 0 3px rgba(233, 155, 99, 0.2)",
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
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#e99b63]">
            Contact Me
          </h2>
          <motion.p
            className="text-lg text-gray-300 dark:text-gray-600 max-w-2xl mx-auto"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            I'm always open to discussing new projects, creative ideas, or
            opportunities. Feel free to reach out!
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] dark:from-white dark:to-gray-100 rounded-xl p-8 shadow-lg relative overflow-hidden"
            variants={itemVariants}
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#e99b63]/0 via-[#e99b63]/5 to-[#e99b63]/0"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <input type="hidden" name="from_name" value="Portfolio Contact" />

            {/* NAME */}
            <motion.div className="mb-6" variants={itemVariants}>
              <label className="block mb-2 text-white dark:text-[#232323]">
                Your Name
              </label>
              <motion.input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 bg-transparent border border-gray-600 dark:border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e99b63] text-white dark:text-[#232323] focus:outline-none"
                placeholder="Enter your name"
                whileFocus="focus"
                variants={formFieldVariants}
              />
            </motion.div>

            {/* EMAIL */}
            <motion.div className="mb-6" variants={itemVariants}>
              <label className="block mb-2 text-white dark:text-[#232323]">
                Your Email
              </label>
              <motion.input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-transparent border border-gray-600 dark:border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e99b63] text-white dark:text-[#232323] focus:outline-none"
                placeholder="Enter your email"
                whileFocus="focus"
                variants={formFieldVariants}
              />
            </motion.div>

            {/* SUBJECT */}
            <motion.div className="mb-6" variants={itemVariants}>
              <label className="block mb-2 text-white dark:text-[#232323]">
                Subject
              </label>
              <motion.input
                type="text"
                name="subject"
                required
                className="w-full px-4 py-3 bg-transparent border border-gray-600 dark:border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e99b63] text-white dark:text-[#232323] focus:outline-none"
                placeholder="Subject"
                whileFocus="focus"
                variants={formFieldVariants}
              />
            </motion.div>

            {/* MESSAGE */}
            <motion.div className="mb-8" variants={itemVariants}>
              <label className="block mb-2 text-white dark:text-[#232323]">
                Message
              </label>
              <motion.textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 bg-transparent border border-gray-600 dark:border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e99b63] resize-none text-white dark:text-[#232323] focus:outline-none"
                placeholder="Write your message..."
                whileFocus="focus"
                variants={formFieldVariants}
              ></motion.textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#e99b63] to-[#d88a57] text-white font-semibold rounded-lg relative overflow-hidden"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              animate={isSubmitting ? "loading" : "initial"}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <motion.div className="flex items-center justify-center gap-2">
                  <motion.div
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  Sending...
                </motion.div>
              ) : (
                "Send Message"
              )}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.button>

            {result && (
              <motion.p
                className="mt-4 text-center text-sm text-gray-300 dark:text-gray-600"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {result}
              </motion.p>
            )}
          </motion.form>

          {/* Contact Info Section */}
          <motion.div variants={itemVariants}>
            <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] dark:from-white dark:to-gray-100 rounded-xl p-8 shadow-lg h-full relative overflow-hidden">
              {/* Floating particles */}
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-[#e99b63] rounded-full"
                  style={{
                    left: `${20 + i * 20}%`,
                    top: `${10 + i * 15}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}

              <motion.h3
                className="text-2xl font-bold mb-6 dark:text-[#232323] text-white"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Get in Touch
              </motion.h3>

              <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className="flex items-center gap-4"
                  variants={contactItemVariants}
                  whileHover="hover"
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-[#e99b63] flex items-center justify-center"
                    transition={{ duration: 0.5 }}
                  >
                    <Instagram className="text-white" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold dark:text-[#232323] text-white">
                      Instagram
                    </h4>
                    <a
                      href="https://www.instagram.com/ipinnn_08"
                      target="_blank"
                      className="text-gray-400 dark:text-gray-600 hover:text-[#e99b63] transition-colors"
                    >
                      instagram.com/ipinnn_08
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4"
                  variants={contactItemVariants}
                  whileHover="hover"
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-[#e99b63] flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Mail className="text-white" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold dark:text-[#232323] text-white">
                      Email
                    </h4>
                    <a
                      href="mailto:ilhamarifinhrp.work@gmail.com"
                      className="text-gray-400 dark:text-gray-600 hover:text-[#e99b63] transition-colors"
                    >
                      ilhamarifinhrp.work@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4"
                  variants={contactItemVariants}
                  whileHover="hover"
                >
                  <motion.div className="w-12 h-12 rounded-full bg-[#e99b63] flex items-center justify-center">
                    <Github className="text-white" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold dark:text-[#232323] text-white">
                      GitHub
                    </h4>
                    <a
                      href="https://github.com/IlhamArifinnn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 dark:text-gray-600 hover:text-[#e99b63] transition-colors"
                    >
                      github.com/IlhamArifinnn
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4"
                  variants={contactItemVariants}
                  whileHover="hover"
                >
                  <motion.div className="w-12 h-12 rounded-full bg-[#e99b63] flex items-center justify-center">
                    <Linkedin className="text-white" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold dark:text-[#232323] text-white">
                      LinkedIn
                    </h4>
                    <a
                      href="https://www.linkedin.com/in/ilhamarifinnn/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 dark:text-gray-600 hover:text-[#e99b63] transition-colors"
                    >
                      linkedin.com/in/ilhamarifinnn
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4"
                  variants={contactItemVariants}
                  whileHover="hover"
                >
                  <motion.div className="w-12 h-12 rounded-full bg-[#e99b63] flex items-center justify-center">
                    <Link className="text-white" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold dark:text-[#232323] text-white">
                      Resume
                    </h4>
                    <a
                      href="/cv-IlhamArifin.pdf"
                      download
                      className="text-gray-400 dark:text-gray-600 hover:text-[#e99b63] transition-colors"
                    >
                      Download My CV
                    </a>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="mt-8 pt-6 border-t border-gray-700 dark:border-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <p className="text-gray-400 dark:text-gray-600 text-sm">
                  I typically respond within 24 hours. Looking forward to
                  connecting with you!
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
