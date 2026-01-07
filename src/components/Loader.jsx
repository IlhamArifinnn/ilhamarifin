import { motion } from "framer-motion";

const Loader = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#181818] dark:bg-[#f5f5f5] transition-colors duration-300"
  >
    <motion.div
      className="w-16 h-16 border-4 border-[#e99b63] border-t-transparent rounded-full mb-4"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
    <motion.span
      className="text-lg font-semibold text-[#e99b63] dark:text-[#e99b63]"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      Loading...
    </motion.span>

    {/* Loading dots animation */}
    <div className="flex gap-2 mt-4">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 rounded-full bg-[#e99b63]"
          animate={{ y: ["0%", "-50%", "0%"] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  </motion.div>
);

export default Loader;
