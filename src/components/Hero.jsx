import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaLinkedin, FaCode, FaRegCompass } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";

const fadeUp = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } };

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden px-5 pb-20 pt-32 text-white sm:px-8 md:pb-28 md:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_12%_18%,rgba(124,58,237,.18),transparent_34%),radial-gradient(ellipse_at_86%_55%,rgba(6,182,212,.11),transparent_32%)]"/>
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[.13] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]"/>
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.12fr_.88fr]">
        <motion.div initial="hidden" animate="visible" variants={{visible:{transition:{staggerChildren:.1}}}}>
          <motion.div variants={fadeUp} className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[.04] px-3.5 py-2 text-xs tracking-wide text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.7)]"/> SOFTWARE DEVELOPER · CLASS OF 2026
          </motion.div>
          <motion.p variants={fadeUp} className="mb-4 font-mono text-xs tracking-[.28em] text-cyan-300">HELLO, I'M THARUNI</motion.p>
          <motion.h1 variants={fadeUp} className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-.055em] sm:text-6xl md:text-7xl">
            Thoughtful code.<br/><span className="bg-gradient-to-r from-violet-300 via-fuchsia-200 to-cyan-200 bg-clip-text text-transparent">Useful technology.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            I’m Tharuni Lodi, a Computer Science graduate-in-progress focused on building intuitive web experiences and exploring practical AI. I turn curious ideas into considered, working products — one iteration at a time.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="group inline-flex items-center gap-3 rounded-full bg-slate-100 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200">Explore selected work <FaArrowRight className="transition group-hover:translate-x-1"/></a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.03] px-6 py-3.5 text-sm font-medium text-white transition hover:border-violet-300/50 hover:bg-white/[.07]">Get in touch</a>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-5 text-lg text-slate-500">
            <a aria-label="GitHub" className="transition hover:text-white" href="https://github.com/tharuni2503" target="_blank" rel="noreferrer"><FaGithub/></a>
            <a aria-label="LinkedIn" className="transition hover:text-white" href="https://www.linkedin.com/in/loditharuni" target="_blank" rel="noreferrer"><FaLinkedin/></a>
            <a href="mailto:tharunilodi@gmail.com" className="font-mono text-[10px] tracking-[.18em] transition hover:text-cyan-200">EMAIL ↗</a>
          </motion.div>
        </motion.div>

        <motion.div initial={{opacity:0,scale:.96,y:10}} animate={{opacity:1,scale:1,y:0}} transition={{duration:.8,delay:.2}} className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-violet-500/15 via-transparent to-cyan-500/15 blur-2xl"/>
          <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0b101c]/95 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between border-b border-white/[.08] px-5 py-4"><div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-violet-300"/><span className="text-xs font-medium text-slate-300">A little about my approach</span></div><FaRegCompass className="text-slate-500"/></div>
            <div className="p-6 sm:p-7">
              <p className="font-mono text-[10px] tracking-[.22em] text-slate-500">WORKING PRINCIPLES</p>
              <div className="mt-6 space-y-5">
                <div className="flex gap-4"><span className="font-mono text-xs text-violet-300">01</span><div><h3 className="text-sm font-semibold text-white">Start with the problem</h3><p className="mt-1 text-sm leading-6 text-slate-400">Understand the need before reaching for a tool.</p></div></div>
                <div className="flex gap-4"><span className="font-mono text-xs text-cyan-300">02</span><div><h3 className="text-sm font-semibold text-white">Make complexity feel simple</h3><p className="mt-1 text-sm leading-6 text-slate-400">Clear interfaces, useful features, thoughtful details.</p></div></div>
                <div className="flex gap-4"><span className="font-mono text-xs text-fuchsia-300">03</span><div><h3 className="text-sm font-semibold text-white">Learn by shipping</h3><p className="mt-1 text-sm leading-6 text-slate-400">Build, test, reflect, and improve with every iteration.</p></div></div>
              </div>
              <div className="mt-7 rounded-xl border border-white/[.08] bg-white/[.025] p-4">
                <div className="flex items-center justify-between"><span className="text-xs text-slate-400">Areas I’m exploring</span><FaCode className="text-cyan-300"/></div>
                <div className="mt-3 flex flex-wrap gap-2">{["Frontend","Applied AI","Computer Vision","Mobile"].map(t=><span key={t} className="rounded-md border border-white/10 px-2.5 py-1 text-[11px] text-slate-300">{t}</span>)}</div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -right-3 hidden rounded-xl border border-white/10 bg-[#111827] px-4 py-3 shadow-xl sm:block"><p className="font-mono text-[10px] tracking-widest text-slate-500">CURRENT FOCUS</p><p className="mt-1 text-xs font-medium text-cyan-100">Web × AI × UX</p></div>
        </motion.div>
      </div>
      <a href="#about" className="mx-auto mt-20 flex w-fit items-center gap-3 border-t border-white/10 pt-6 text-[10px] tracking-[.22em] text-slate-500 transition hover:text-slate-200"><span>SCROLL TO EXPLORE</span><FaArrowDown/></a>
    </section>
  );
}