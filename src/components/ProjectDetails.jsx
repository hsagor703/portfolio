import React from "react";
import {
  ExternalLink,
  Github,
  ArrowLeft,
  Cpu,
  Lightbulb,
  Target,
  Rocket,
} from "lucide-react";

const ProjectDetails = () => {
  // Example data structure based on your requirements:
  const project = {
    title: "E-Commerce Dashboard",
    stack: ["React", "Node.js", "Tailwind", "MongoDB"],
    description: "A full-scale administrative dashboard...",
    liveLink: "https://...",
    githubLink: "https://...",
    challenges: "Implementing real-time inventory sync was difficult due to...",
    futurePlans: "Integrating AI-driven analytics for sales forecasting."
  }

  return (
    <div className="min-h-screen bg-[#0b0720] text-white pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button className="flex items-center gap-2 text-gray-400 hover:text-purple-500 transition-colors mb-8 group">
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Portfolio
        </button>

        {/* Project Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-md text-sm text-purple-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-purple-500/20"
            >
              <ExternalLink size={18} /> Live Demo
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-[#1a1438] border border-white/10 hover:border-purple-500 px-6 py-3 rounded-xl font-semibold transition-all"
            >
              <Github size={18} /> Client Code
            </a>
          </div>
        </div>

        {/* Project Banner Image Placeholder */}
        <div className="w-full h-64 md:h-96 bg-gradient-to-br from-purple-900/40 to-[#130d2d] border border-white/10 rounded-3xl mb-12 flex items-center justify-center overflow-hidden">
          <img
            src="/api/placeholder/800/450"
            alt={project.title}
            className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Details Grid */}
        <div className="grid gap-10">
          {/* Description Section */}
          <section>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Target className="text-purple-500" /> Project Overview
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              {project.description}
            </p>
          </section>

          <hr className="border-white/5" />

          {/* Challenges Section */}
          <section className="bg-[#130d2d] p-8 rounded-3xl border border-red-500/10">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Cpu className="text-red-400" /> Challenges Faced
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {project.challenges}
            </p>
          </section>

          {/* Future Improvements Section */}
          <section className="bg-[#130d2d] p-8 rounded-3xl border border-green-500/10">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Rocket className="text-green-400" /> Future Plans
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {project.futurePlans}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
