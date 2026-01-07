import Header from "./Header";
import { useState, useEffect } from "react";

const Loader = () => (
  <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#181818] dark:bg-[#f5f5f5] transition-colors duration-300">
    <div className="w-16 h-16 border-4 border-[#e99b63] border-t-transparent rounded-full animate-spin mb-4"></div>
    <span className="text-lg font-semibold text-[#e99b63] dark:text-[#e99b63]">
      Loading...
    </span>
  </div>
);

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
      if (loaded === images.length) setLoading(false);
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
      {loading && <Loader />}
      <Header />
      <main
        className={
          loading
            ? "opacity-0 pointer-events-none"
            : "opacity-100 transition-opacity duration-500"
        }
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
