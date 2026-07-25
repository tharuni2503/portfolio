import { motion } from "framer-motion";
import { whyChoose } from "../data/whyChoose";

export default function WhyChooseMe() {
  return (
    <section
  id="why-me"
  className="relative overflow-hidden bg-[#030712] py-24"
>
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[180px]" />
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
            Why Businesses
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Choose Me
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            I focus on creating websites that are visually appealing,
            easy to use, and built to support your business goals.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {whyChoose.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,.15)]"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 p-5 text-3xl text-white transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Icon />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}