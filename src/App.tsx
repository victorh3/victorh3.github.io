import { useState } from "react";
import { motion } from "motion/react";
import { Github, Mail, Sun, Moon } from "lucide-react";

import ProjectCard, { type Project } from "./ProjectCard";

const projects: Project[] = [
  {
    title: "Project One",
    description: "A high-performance web app for XYZ Client.",
    tags: ["React", "Node.js", "AWS"],
  },
  {
    title: "Project Two",
    description: "Scalable SaaS architecture with real-time data.",
    tags: ["TypeScript", "Tailwind", "Firebase"],
  },
  {
    title: "Project Three",
    description: "E-commerce engine with optimized CI/CD.",
    tags: ["Next.js", "Shopify", "CI/CD"],
  },
];

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <main className="min-h-screen transition-colors duration-500 bg-slate-50 dark:bg-[#0F172A] text-slate-900 dark:text-white font-sans selection:bg-cyan-400 selection:text-slate-900">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 flex justify-between items-center p-8 backdrop-blur-md">
          <span className="text-lg font-bold tracking-tighter uppercase">
            victorh3
          </span>
          <div className="flex gap-6 items-center">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="hover:text-cyan-400 transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Github
              size={20}
              className="hover:text-pink-500 cursor-pointer transition-colors"
            />
            <Mail
              size={20}
              className="hover:text-cyan-400 cursor-pointer transition-colors"
            />
          </div>
        </nav>

        {/* Hero Section */}
        <section className="h-screen flex flex-col justify-center items-center px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent"
          >
            BUILDING DIGITAL <br /> EXPERIENCES.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-2xl"
          >
            Software Developer focused on high-performance web solutions and
            clean, scalable code.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 px-8 py-3 rounded-full border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all"
          >
            View Projects
          </motion.button>
        </section>

        {/* Project Grid */}
        <section className="max-w-6xl mx-auto px-8 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
