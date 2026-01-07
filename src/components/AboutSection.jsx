import React from "react";
import { Code2, Palette, Terminal, Award } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { label: "Experience", value: "8+ Month" },
    { label: "Projects Completed", value: "12+" },
    // { label: "Happy Clients", value: "90+" },
  ];

  // [#0b0720]
  return (
    <section id="about" className="rounded-2xl border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className=" px-4 py-1 rounded-full text-sm border border-purple-500/30 flex items-center gap-2">
            👨‍💻 About Me
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transforming Ideas into <br />
              <span className="text-purple-500">Digital Reality</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I'm <span className="text-purple-500 font-bold">Jony Shagor</span> , a dedicated Fresher Frontend Developer with over 8+ Month of experience in crafting beautiful, high-performance web applications. My journey began with a curiosity for how things work on the web, which quickly turned into a career fueled by a passion for pixel-perfect design and clean code.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Palette className="text-purple-500" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold ">Design Mindset</h4>
                  <p className="text-sm text-gray-400">
                    Pixel-perfect implementation of UI/UX.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Code2 className="text-purple-500" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold ">Clean Code</h4>
                  <p className="text-sm text-gray-400">
                    Maintainable and optimized architecture.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="flex gap-8 border-t border-gray-800 pt-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold ">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Skill Cards/Visual */}
          <div className="relative">
            {/* Decorative Background Glow */}
            <div className="absolute -inset-4 bg-purple-600/20 blur-3xl rounded-full"></div>

            <div className="relative  border border-white/10 p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Terminal size={20} className="text-purple-500" /> Technical
                Stack
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  "React.js",
                  "Next.js",
                  "JavaScript",
                  
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2  border border-purple-500/20 rounded-xl text-sm hover:border-purple-500 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-8 p-6 bg-purple-600/10 rounded-2xl border border-purple-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="text-purple-500" />
                  <span className="font-bold">Solution Architect</span>
                </div>
                <p className="text-xs text-gray-400 uppercase">
                  Focusing on User-Centric Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
