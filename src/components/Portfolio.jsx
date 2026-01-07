import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  ArrowLeft,
  Cpu,
  Lightbulb,
  Target,
  Rocket,
} from "lucide-react";
const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ["All Projects"];
  // , 'React.js', 'Vue.js', 'UI Design'];

  const projects = [
    {
      id: 1,
      title: "Hero.IO",
      description:
        "A powerful and interactive web application built with React and React Router, featuring modern UI interactions such as search, sorting, toast notifications, dynamic app installation & deletion, app detail view, and data visualization charts.",
      image: "https://i.ibb.co.com/QvFZspPg/Screenshot-23.png",
      tags: ["React", "Tailwind"],
      version: "v2.0",
      LiveUrl: "https://spectacular-strudel-c84562.netlify.app/",
      githubLink: "https://github.com/hsagor703/assignment-8-hero-apps",
      challenges:
        "Implementing real-time inventory sync was difficult for me in this project but i can done this",
      futurePlans:
        "React | JSReact Router DOM | React Icons | React Hot Toast | Chart Library (Recharts / Chart.js) | LocalStorage for installed app management",
    },
    {
      id: 2,
      title: "Pawmart",
      description:
        "PawMart is a community-driven platform where pet owners, breeders, and shops can list pets for adoption or sell pet-related products (food, toys, accessories, etc.). Buyers and adopters can browse, contact, and order directly.",
      image: "https://i.ibb.co.com/fYFS9DK8/Screenshot-21.png",
      tags: ["React", "Firebase"],
      LiveUrl: "https://pawmart-assignment.web.app/",
      githubLink: "https://github.com/hsagor703/pawmaert-assignment-10",
      Challenges:
        "Ensuring that different users could easily list pets or products, browse available options, and communicate safely without making the platform complex or confusing.",
      futurePlans:
        "🧑‍💻 User Authentication (SIGHUP & Login with Firebase) | 🐶 Pet Services Listing (with image, name, price & rating) | 🔍 View Details Page for each  |  Why Adopt from PawMart? section | 👩‍⚕️ Meet Our Pet Heroes section | 📱 Responsive Design for all devices | 🔔 Error & Success Toast Messages | 🔄 Loading Spinner while data is fetching | 🧭 Persistent Navbar & Footer | 🌐 Persistent backend server side",
    },
    {
      id: 3,
      title: "Asset Verse",
      description:
        "AssetVerse is a Corporate Asset Management System designed to help companies efficiently manage physical assets (laptops, accessories, furniture, etc.) and track asset assignments across employees. It simplifies HR operations, improves accountability, and",
      image: "https://i.ibb.co.com/3yn4wsVr/Screenshot-22.png",
      tags: ["React", "Firebase", "Stripe"],
      LiveUrl: "https://final-assignment-4c484.web.app/",
      githubLink: "https://github.com/hsagor703/final-assignment-client",
      challenges:
        "Implementing real-time inventory synchronization was challenging because inventory data needed to update instantly for multiple users without causing data conflicts.",
      futurePlans:
        "🔐 Role-based authentication (HR & Employee) | 🏢 HR can manage company assets (add, update, delete) | 👨‍💼 Employee can request assets | ✅ HR approval & rejection system | 📊 Asset tracking (returnable & non-returnable) | 📈 Dashboard with summary & charts | 💳 Subscription-based employee limits (Stripe payment) | 🔍 Search & filter assets and requests | 📱 Fully responsive UI | 🔒 Protected routes & authorization | 📦 npm Packages Used",
    },
  ];

  const getTagColor = (tag) => {
    const colors = {
      React: "text-blue-600 bg-blue-50 dark:text-blue-300 dark:bg-blue-900/30",
      Tailwind:
        "text-cyan-600 bg-cyan-50 dark:text-cyan-300 dark:bg-cyan-900/30",
      Stripe:
        "text-green-600 bg-green-50 dark:text-green-300 dark:bg-green-900/30",
      Firebase:
        "text-purple-600 bg-purple-50 dark:text-purple-300 dark:bg-purple-900/30",
      HTML5:
        "text-orange-600 bg-orange-50 dark:text-orange-300 dark:bg-orange-900/30",
      Sass: "text-pink-600 bg-pink-50 dark:text-pink-300 dark:bg-pink-900/30",
    };
    return (
      colors[tag] ||
      "text-gray-600 bg-gray-50 dark:text-gray-300 dark:bg-gray-900/30"
    );
  };

  return (
    <section className="relative" id="portfolio">
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10 pointer-events-none opacity-50"></div>

      <div className="text-center mb-16">
        <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-900 dark:text-white mb-6">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          A selection of projects that demonstrate my ability to solve complex
          problems with clean code and intuitive design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-white dark:bg-surface-dark rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col cursor-pointer"
            href="#project-details"
          >
            <div className="relative overflow-hidden h-60">
              <img
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={project.image}
              />
              {project.version && (
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
                  {project.version}
                </div>
              )}
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-3 py-1 text-xs font-bold tracking-wide rounded-full ${getTagColor(
                      tag
                    )}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3">
                {project.description}
              </p>
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/10">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover:text-primary transition-colors"
                >
                  View Details <i className="ri-arrow-right-line text-lg"></i>
                </button>

                {selectedProject && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
                    <div className="bg-white dark:bg-surface-dark max-w-4xl w-full rounded-2xl p-6 relative overflow-y-auto max-h-[90vh]">
                      {/* Close Button */}
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-4 right-4 text-slate-500 hover:text-red-500 text-xl"
                      >
                        ✕
                      </button>

                      <div className="">
                        <div className="max-w-4xl mx-auto">
                          {/* Back Button */}
                          <button onClick={() => setSelectedProject(null)} className="flex items-center gap-2 text-gray-400 hover:text-purple-500 transition-colors mb-8 group">
                            <ArrowLeft
                              size={20}
                              className="group-hover:-translate-x-1 transition-transform"
                            />
                            Back to Portfolio
                          </button>

                          {/* Project Header */}
                          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                            <div>
                              <h1 className="text-2xl md:text-4xl font-bold mb-4">
                                {selectedProject.title}
                              </h1>
                              <div className="flex flex-wrap gap-2">
                                {selectedProject.tags.map((tech, i) => (
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
                                href={selectedProject.LiveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-purple-500/20"
                              >
                                <ExternalLink size={18} /> Live Demo
                              </a>
                              <a
                                href={selectedProject.githubLink}
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
                              src={selectedProject.image}
                              alt={selectedProject.title}
                              className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"
                            />
                          </div>

                          {/* Details Grid */}
                          <div className="grid gap-10">
                            {/* Description Section */}
                            <section className="bg-[#130d2d] p-8 rounded-3xl border border-red-500/10">
                              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <Target className="text-purple-500" /> Project
                                Overview
                              </h3>
                              <p className="text-gray-400 leading-relaxed text-lg">
                                {project.description}
                              </p>
                            </section>

                            <hr className="border-white/5" />

                            {/* Challenges Section */}
                            <section className="bg-[#130d2d] p-8 rounded-3xl border border-red-500/10">
                              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <Cpu className="text-red-400" /> Challenges
                                Faced
                              </h3>
                              <p className="text-gray-400 leading-relaxed">
                                {project.challenges}
                              </p>
                            </section>

                            {/* Future Improvements Section */}
                            <section className="bg-[#130d2d] p-8 rounded-3xl border border-green-500/10">
                              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <Rocket className="text-green-400" /> Future
                                Plans
                              </h3>
                              <p className="text-gray-400 leading-relaxed">
                                {project.futurePlans}
                              </p>
                            </section>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <a
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light transition-colors"
                  href={project.LiveUrl}
                  target="blank"
                >
                  Live Demo <i className="ri-arrow-right-up-line text-lg"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 font-medium hover:text-primary dark:hover:text-primary transition-colors"
          href="https://github.com/hsagor703"
          target="blank"
        >
          View Github Profile <i className="ri-arrow-right-line"></i>
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
