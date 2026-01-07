import About from "./pages/About";
import { Route, Routes, useLocation } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Snowfall from "react-snowfall";
import { useEffect, useRef } from "react";

function App() {
  const outlineRef = useRef(null);
  const dotRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${
          mouse.current.x - 6
        }px, ${mouse.current.y - 6}px, 0)`;
        outlineRef.current.style.transform = `translate3d(${
          position.current.x - 20
        }px, ${position.current.y - 20}px, 0)`;
      }

      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative">
      <Layout>
        {isHomePage && <Snowfall color="#ffbb00" className="snowfall -z-10"  snowflakeCount={80}/>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>

      {/* custom cursor ring */}
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 h-9 w-9 rounded-full border border-[#e99b63] pointer-events-none z-[9999]"
        style={{ transition: "transform 0.1s ease-out" }}
      ></div>

      {/* custom cursor dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-3 w-3 rounded-full bg-[#e99b63] pointer-events-none z-[9999]"
      ></div>
    </section>
  );
}

export default App;
