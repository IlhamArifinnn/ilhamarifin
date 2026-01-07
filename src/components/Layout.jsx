import Header from "./Header";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import { motion, AnimatePresence } from "framer-motion";

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi asset loading: tunggu semua gambar di halaman selesai load
    const images = Array.from(document.images);
    if (images.length === 0) {
      setLoading(false);
      return;
    }

    let loaded = 0;
    const onLoad = () => {
      loaded += 1;
      if (loaded === images.length) {
        setTimeout(() => setLoading(false), 500);
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        onLoad();
      } else {
        img.addEventListener("load", onLoad);
        img.addEventListener("error", onLoad);
      }
    });

    // Cleanup
    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", onLoad);
        img.removeEventListener("error", onLoad);
      });
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>
      <Header />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={loading ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.main>
    </>
  );
};

export default Layout;
