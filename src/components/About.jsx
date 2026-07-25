import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaPalette,
  FaRocket,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLaptopCode />,
    title: "Modern Development",
    description:
      "Building fast, responsive websites using React, Vite and Tailwind CSS.",
  },
  {
    icon: <FaPalette />,
    title: "Clean UI Design",
    description:
      "Creating visually appealing interfaces with a strong focus on user experience.",
  },
  {
    icon: <FaCode />,
    title: "Maintainable Code",
    description:
      "Writing clean, scalable and reusable code following modern development practices.",
  },
  {
    icon: <FaRocket />,
    title: "Performance",
    description:
      "Optimizing websites for speed, accessibility and responsiveness across all devices.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative py-14 lg:py-20 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />

            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              Passionate about creating websites that people enjoy using.
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              I'm Tharuni, a Frontend Developer who enjoys turning ideas into
              modern, responsive and interactive websites. I focus on clean
              design, smooth user experience and writing maintainable code.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              Whether it's a business website, restaurant, healthcare platform
              or portfolio, my goal is to build digital experiences that look
              professional and perform exceptionally well.
            </p>

            {/* Stats */}

            <div className="mt-10 flex flex-wrap gap-5">

              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.04,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 px-7 py-5 backdrop-blur-xl"
              >
                <h3 className="text-4xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  3+
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Projects Built
                </p>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.04,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 px-7 py-5 backdrop-blur-xl"
              >
                <h3 className="text-4xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  100%
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Responsive Design
                </p>
              </motion.div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {features.map((item) => (
              <motion.div
                key={item.title}
                variants={card}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(34,211,238,.12)",
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition"
              >
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-2xl"
                >
                  {item.icon}
                </motion.div>

                <h3 className="mt-6 text-lg font-semibold group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}