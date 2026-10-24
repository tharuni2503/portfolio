import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden px-5 pb-24 pt-32 text-white sm:px-8 md:pb-32 md:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_20%,rgba(124,58,237,.2),transparent_35%),radial-gradient(ellipse_at_85%_65%,rgba(6,182,212,.12),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.2fr_.8fr]">
        <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/10 px-4 py-2 text-sm text-violet-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> Open to opportunities · 2026 graduate
          </div>
          <p className="mb-4 font-mono text-sm tracking-[.25em] text-cyan-300">HELLO, WORLD — I'M</p>
          <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Tharuni <span className="bg-gradient-to-r from-violet-300 via-fuchsia-200 to-cyan-300 bg-clip-text text-transparent">Lodi.</span>
          </h1>
          <h2 className="mt-5 text-xl font-medium text-slate-300 sm:text-2xl">Developer blending web experiences with AI.</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            I’m a Computer Science student who enjoys turning ideas into useful digital products — from responsive websites to AI-powered tools. I care about clean interfaces, practical problem-solving, and making technology feel intuitive.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200">Explore my work <FaArrowRight className="transition group-hover:translate-x-1" /></a>
            <a href="#contact" className="rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:border-violet-300/60 hover:bg-white/10">Let’s connect</a>
          </div>
          <div className="mt-8 flex items-center gap-5 text-xl text-slate-400">
            <a aria-label="GitHub" className="transition hover:text-white" href="https://github.com/tharuni2503" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a aria-label="LinkedIn" className="transition hover:text-white" href="https://www.linkedin.com/in/loditharuni" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a aria-label="Email" className="font-mono text-xs tracking-widest transition hover:text-cyan-300" href="mailto:tharunilodi@gmail.com">EMAIL ↗</a>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}} transition={{duration:.8,delay:.1}} className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-violet-500/20 to-cyan-500/15 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c1222]/90 p-5 shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-white/10 pb-4"><span className="h-2.5 w-2.5 rounded-full bg-rose-400"/><span className="h-2.5 w-2.5 rounded-full bg-amber-300"/><span className="h-2.5 w-2.5 rounded-full bg-emerald-400"/><span className="ml-auto font-mono text-xs text-slate-500">tharuni.ts</span></div>
            <div className="py-7 font-mono text-sm leading-8 sm:text-base">
              <p className="text-fuchsia-300">const <span className="text-cyan-200">developer</span> = {'{'}</p>
              <p className="pl-5 text-slate-300">name: <span className="text-emerald-300">"Tharuni Lodi"</span>,</p>
              <p className="pl-5 text-slate-300">focus: <span className="text-emerald-300">["Web", "AI"]</span>,</p>
              <p className="pl-5 text-slate-300">builds: <span className="text-emerald-300">"useful things"</span>,</p>
              <p className="pl-5 text-slate-300">curiosity: <span className="text-amber-200">Infinity</span></p>
              <p className="text-fuchsia-300">{'}'};</p>
              <p className="mt-5 text-slate-500">// Always learning. Always building.</p>
              <div className="mt-5 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[.03] p-3"><FaCode className="text-cyan-300"/><div><p className="text-xs text-slate-400">CURRENT MODE</p><p className="text-sm text-white">Ideas → interfaces → impact</p></div></div>
            </div>
          </div>
          <div className="absolute -right-4 -top-5 rounded-2xl border border-white/10 bg-[#111827] px-4 py-3 shadow-xl"><p className="font-mono text-xs text-slate-500">STACK</p><p className="mt-1 text-sm font-semibold text-cyan-200">React · Python · Flutter</p></div>
          <div className="absolute -bottom-5 -left-4 rounded-2xl border border-white/10 bg-[#111827] px-4 py-3 shadow-xl"><p className="text-xs text-slate-400">Built with curiosity</p><p className="mt-1 text-sm font-semibold text-violet-200">and a lot of ☕-free focus</p></div>
        </motion.div>
      </div>
      <div className="mx-auto mt-20 flex max-w-6xl flex-wrap gap-x-10 gap-y-5 border-t border-white/10 pt-7 text-sm text-slate-500">
        <span>01 / Frontend Development</span><span>02 / AI & Machine Learning</span><span>03 / Product Thinking</span><span className="ml-auto font-mono">SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  );
}