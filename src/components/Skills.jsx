import { motion } from "framer-motion";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-10 lg:py-12">
      <div className="mx-auto max-w-7xl px-1 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
        
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-slate-400 leading-7">
            Modern technologies that I use to build fast, scalable and
            responsive web applications.
          </p>
        </motion.div>

        {/* Skills */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
        >
          <div className="grid gap-6 lg:grid-cols-3">

            {skillGroups.map((group) => (

              <div key={group.title}>

                <h3 className="mb-4 text-lg font-semibold text-white">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-2">

                  {group.skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{
                          y: -5,
                          scale: 1.05,
                        }}
                        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10"
                      >
                        <Icon className="text-cyan-400 text-lg" />

                        <span className="text-sm font-medium text-white">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}

                </div>

              </div>

            ))}

          </div>
        </motion.div>

      </div>
    </section>
  );
}