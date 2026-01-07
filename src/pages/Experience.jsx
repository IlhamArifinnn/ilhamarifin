import { BriefcaseBusiness, Users } from "lucide-react";
import { workExperiences, orgExperiences } from "../utils/data/experiences";

const Experience = () => {
  // gunakan data yang sudah dipisah di experiences.js

  return (
    <section
      className="min-h-screen px-4 py-14 md:py-20
        bg-gradient-to-br dark:from-[#f5f5f5] dark:via-[#fff] dark:to-[#e99b63] 
        from-[#181818] via-[#232323] to-[#e99b63]"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#e99b63]">
          Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#e99b63] flex items-center justify-center">
                <BriefcaseBusiness className="text-white" />
              </div>
              <h3 className="text-xl font-semibold dark:text-[#232323] text-white">
                Work Experience
              </h3>
            </div>

            <div className="space-y-6">
              {workExperiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-10 border-l-2 border-[#e99b63]"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#e99b63]"></div>
                  <h4 className="font-semibold text-lg dark:text-[#232323] text-white">
                    {exp.role}
                  </h4>
                  <p className="text-[#e99b63] text-sm font-medium mb-1">
                    {exp.company}
                  </p>
                  <p className="text-gray-400 dark:text-gray-600 text-sm">
                    {exp.period}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Organizational Experience */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#e99b63] flex items-center justify-center">
                <Users className="text-white" />
              </div>
              <h3 className="text-xl font-semibold dark:text-[#232323] text-white">
                Organizational Experience
              </h3>
            </div>

            <div className="space-y-6">
              {orgExperiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-10 border-l-2 border-[#e99b63]"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#e99b63]"></div>
                  <h4 className="font-semibold text-lg dark:text-[#232323] text-white">
                    {exp.role}
                  </h4>
                  <p className="text-[#e99b63] text-sm font-medium mb-1">
                    {exp.company}
                  </p>
                  <p className="text-gray-400 dark:text-gray-600 text-sm">
                    {exp.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
