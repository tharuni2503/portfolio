import { motion } from "framer-motion";
import {
  FaArrowUp,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030712]">

      {/* Background Glow */}

      <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-violet-600/10 blur-[180px]" />

      <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <h2 className="text-4xl font-black text-white md:text-5xl">
            Thanks for Visiting 👋
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            I'm always excited to work on modern websites,
            creative ideas and meaningful digital experiences.
          </p>

        </motion.div>

        {/* Social */}

        <div className="mt-12 flex justify-center gap-5">

          <motion.a
            whileHover={{ y: -5, scale: 1.1 }}
            href="https://github.com/tharuni2503"
            target="_blank"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition hover:border-cyan-400 hover:bg-cyan-500/10"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            whileHover={{ y: -5, scale: 1.1 }}
            href="https://linkedin.com"
            target="_blank"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition hover:border-cyan-400 hover:bg-cyan-500/10"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            whileHover={{ y: -5, scale: 1.1 }}
            href="mailto:tharunilodi@gmail.com"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition hover:border-cyan-400 hover:bg-cyan-500/10"
          >
            <FaEnvelope />
          </motion.a>

        </div>

        {/* Divider */}

        <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <p className="text-center text-sm text-slate-400">
            © {year}
            <span className="font-semibold text-white">
              {" "}Tharuni Lodi
            </span>
            . All rights reserved.
          </p>

          <p className="text-center text-sm text-slate-400">
            Designed & Developed with ❤️ using React + Tailwind CSS
          </p>

          <motion.a
            href="#home"
            whileHover={{
              y: -4,
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,.25)]"
          >
            Back to Top
            <FaArrowUp />
          </motion.a>

        </div>

      </div>

    </footer>
  );
}