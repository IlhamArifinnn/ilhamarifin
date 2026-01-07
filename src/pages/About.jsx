const About = () => {
  const skills = [
    {
      name: "HTML",
      icon: "/logos/html5.svg",
    },
    {
      name: "CSS",
      icon: "/logos/css3.svg",
    },
    {
      name: "JavaScript",
      icon: "/logos/javascript.svg",
    },
    {
      name: "PHP",
      icon: "/logos/php.svg",
    },
    {
      name: "React",
      icon: "/logos/react.svg",
    },
    {
      name: "Laravel",
      icon: "/logos/laravel.svg",
    },
    {
      name: "Python",
      icon: "/logos/python.svg",
    },
    {
      name: "Node.js",
      icon: "/logos/nodejs.svg",
    },
    {
      name: "Express.js",
      icon: "/logos/express.svg",
    },
    {
      name: "MySQL",
      icon: "/logos/mysql.svg",
    },
    {
      name: "Tailwind",
      icon: "/logos/tailwindcss.svg",
    },
    {
      name: "Bootstrap",
      icon: "/logos/bootstrap.svg",
    },
    {
      name: "Git",
      icon: "/logos/git.svg",
    },

    {
      name: "Github",
      icon: "/logos/github.svg",
    },
    {
      name: "Figma",
      icon: "/logos/figma.svg",
    },
    {
      name: "Vercel",
      icon: "/logos/vercel.svg",
    },
    {
      name: "AWS Basic",
      icon: "/logos/aws.svg",
    },
    {
      name: "Azure",
      icon: "/logos/azure.svg",
    },
  ];

  return (
    <section
      className="min-h-screen px-4 py-14 md:py-20 
        bg-gradient-to-br dark:from-[#f5f5f5] dark:via-[#fff] dark:to-[#e99b63] 
        from-[#181818] via-[#232323] to-[#e99b63]"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#e99b63]">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Intro */}
            <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] dark:from-white dark:to-gray-100 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#e99b63] flex items-center justify-center">
                  <i className="bx bx-user text-white text-xl"></i>
                </div>
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
            </div>

            {/* Background */}
            <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] dark:from-white dark:to-gray-100 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#e99b63] flex items-center justify-center">
                  <i className="bx bx-bulb text-white text-xl"></i>
                </div>
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
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Education */}
            <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] dark:from-white dark:to-gray-100 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#e99b63] flex items-center justify-center">
                  <i className="bx bx-book-open text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold dark:text-[#232323] text-white">
                  Education
                </h3>
              </div>

              <div className="space-y-6">
                <div className="border-l-2 border-[#e99b63] pl-4">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-semibold text-lg dark:text-[#232323] text-white">
                      S1 Teknik Informatika
                    </h4>
                    <span className="text-sm text-[#e99b63] font-medium">
                      2023 – Sekarang
                    </span>
                  </div>
                  <p className="text-gray-400 dark:text-gray-600">
                    STT Terpadu Nurul Fikri
                  </p>
                </div>

                <div className="border-l-2 border-[#e99b63] pl-4">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-semibold text-lg dark:text-[#232323] text-white">
                      Teknik Komputer & Jaringan
                    </h4>
                    <span className="text-sm text-[#e99b63] font-medium">
                      2020 – 2023
                    </span>
                  </div>
                  <p className="text-gray-400 dark:text-gray-600">
                    SMKN 1 Padangsidimpuan
                  </p>
                </div>
              </div>
            </div>

            {/* Hard Skills */}
            <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] dark:from-white dark:to-gray-100 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#e99b63] flex items-center justify-center">
                  <i className="bx bx-code-alt text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold dark:text-[#232323] text-white">
                  Hard Skills
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="flex items-center justify-center gap-3 bg-[#333] dark:bg-gray-200 text-gray-300 dark:text-gray-700 text-sm px-0 py-2 rounded-lg text-center hover:bg-[#e99b63] hover:text-white dark:hover:bg-[#e99b63] dark:hover:text-white transition-all duration-300"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-6 h-6"
                    />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] dark:from-white dark:to-gray-100 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#e99b63] flex items-center justify-center">
                  <i className="bx bx-group text-white text-xl"></i>
                </div>
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
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-300 dark:text-gray-600"
                  >
                    <i className="bx bx-check text-[#e99b63]"></i>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
