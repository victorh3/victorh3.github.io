import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  tags: string[];
}

function ProjectCard({ title, description, tags }: Project) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm group hover:border-pink-500/50 transition-colors"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <ExternalLink
          size={18}
          className="text-slate-400 group-hover:text-pink-500 transition-colors"
        />
      </div>
      <p className="text-slate-500 dark:text-slate-400 mb-6">{description}</p>
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] uppercase tracking-widest px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-cyan-400 font-bold"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
