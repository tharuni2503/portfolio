import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaArrowUpRightFromSquare } from "react-icons/fa6";
export default function Contact() {
 return <section id="contact" className="px-5 py-24 sm:px-8">
  <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-[#101322] p-8 sm:p-12 md:p-16">
   <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl"/><div className="pointer-events-none absolute -bottom-36 left-1/3 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"/>
   <div className="relative grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
    <div><p className="font-mono text-xs tracking-[.25em] text-cyan-300">YOUR NEXT IDEA STARTS HERE</p><h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">Let’s build something meaningful.</h2><p className="mt-5 max-w-xl leading-7 text-slate-400">Interested in a role, collaboration, or just want to talk about technology? My inbox is open.</p></div>
    <a href="mailto:tharunilodi@gmail.com?subject=Hello%20Tharuni" className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-200">Say hello <FaEnvelope/></a>
   </div>
   <div className="relative mt-10 flex flex-wrap gap-5 border-t border-white/10 pt-6 text-sm text-slate-400">
    <a href="mailto:tharunilodi@gmail.com" className="transition hover:text-white">tharunilodi@gmail.com</a>
    <a href="https://github.com/tharuni2503" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white"><FaGithub/> GitHub <FaArrowUpRightFromSquare className="text-[10px]"/></a>
    <a href="https://www.linkedin.com/in/loditharuni" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white"><FaLinkedin/> LinkedIn <FaArrowUpRightFromSquare className="text-[10px]"/></a>
   </div>
  </motion.div>
 </section>;
}