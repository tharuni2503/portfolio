import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#030712] py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          
          <h2 className="mt-8 text-4xl font-black text-white md:text-5xl">
            Recent{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            A few websites I've built for businesses and personal brands.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                  {project.category}
                </span>

                <h3 className="mt-4 text-4xl font-black text-white">
                  {project.title}
                </h3>

                <p className="mt-6 leading-8 text-slate-400">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-10 flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 font-semibold text-white"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white hover:border-cyan-400"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}