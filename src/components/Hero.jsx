import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGithub,
} from "react-icons/fa";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#030712] pt-32 pb-16 text-white md:pt-40 md:pb-20"
    >
      {/* Animated Background */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/20 blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[150px]"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.06),transparent_65%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}

          <motion.div
            variants={item}
            className="inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />

            <span className="text-sm text-emerald-300">
              Available for Freelance
            </span>
          </motion.div>

          {/* Heading */}

          <motion.h1
            variants={item}
            className="mt-8 text-4xl font-black leading-tight md:text-6xl"
          >
            Building{" "}
            <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              beautiful web experiences
            </span>{" "}
            for modern businesses.
          </motion.h1>

          {/* Description */}

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400"
          >
            I create modern, responsive websites that help businesses build a strong online presence and connect with more customers.
          </motion.p>

          {/* Buttons */}

          <motion.div
            variants={item}
            className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <motion.a
              whileHover={{
                scale: 1.05,
                y: -4,
              }}
              whileTap={{
                scale: 0.96,
              }}
              href="#projects"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-7 py-3.5 font-semibold"
            >
              View Projects

              <FaArrowRight className="transition group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.05,
                y: -4,
              }}
              whileTap={{
                scale: 0.96,
              }}
              href="https://github.com/tharuni2503"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 font-semibold backdrop-blur-xl"
            >
              <FaGithub />

              GitHub
            </motion.a>
          </motion.div>

          {/* Stats */}

          <motion.div
            variants={item}
            className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3"
          >
            {[
              {
                number: "3+",
                title: "Projects",
              },
              {
                number: "2026",
                title: "Graduate",
              },
              {
                number: "100%",
                title: "Responsive",
              },
            ].map((stat) => (
              <motion.div
                key={stat.title}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <h2 className="text-4xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.number}
                </h2>

                <p className="mt-2 text-slate-400">
                  {stat.title}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll */}

          <motion.a
            href="#about"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="mt-16 flex flex-col items-center text-slate-500"
          >
            <span className="text-xs uppercase tracking-[0.3em]">
              Scroll
            </span>

            <div className="mt-3 flex h-10 w-6 justify-center rounded-full border border-white/20">
              <motion.div
                animate={{
                  y: [0, 14, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.8,
                }}
                className="mt-2 h-2 w-2 rounded-full bg-cyan-400"
              />
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}