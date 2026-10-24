import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const links = [{name:"About",href:"#about"},{name:"Expertise",href:"#skills"},{name:"Work",href:"#projects"},{name:"Contact",href:"#contact"}];

export default function Navbar() {
  const [open,setOpen] = useState(false);
  const [scrolled,setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll",onScroll,{passive:true});
    return () => window.removeEventListener("scroll",onScroll);
  },[]);
  return <>
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-white/10 bg-[#080b14]/90 shadow-lg shadow-black/10 backdrop-blur-xl" : "border-transparent bg-transparent"}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" aria-label="Tharuni Lodi home" className="flex items-center gap-3" onClick={()=>setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-300/30 bg-violet-300/10 font-mono text-sm font-bold text-violet-200">TL<span className="text-cyan-200">.</span></span>
          <span><span className="block text-sm font-semibold tracking-[.12em] text-white">THARUNI LODI</span><span className="mt-0.5 block text-[10px] tracking-[.2em] text-slate-500">DEVELOPER · AI ENTHUSIAST</span></span>
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {links.map(link=><a key={link.name} href={link.href} className="text-sm text-slate-400 transition hover:text-white">{link.name}</a>)}
          <a href="https://github.com/tharuni2503" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:border-cyan-300/50 hover:text-cyan-200">GitHub ↗</a>
        </nav>
        <button type="button" aria-label={open?"Close menu":"Open menu"} aria-expanded={open} onClick={()=>setOpen(v=>!v)} className="rounded-lg p-2 text-2xl text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 md:hidden">{open?<HiX/>:<HiMenuAlt3/>}</button>
      </div>
    </header>
    <AnimatePresence>{open&&<motion.nav aria-label="Mobile navigation" initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} className="fixed inset-x-0 top-[72px] z-40 border-b border-white/10 bg-[#080b14]/95 p-6 shadow-2xl backdrop-blur-xl md:hidden">{links.map(link=><a key={link.name} href={link.href} onClick={()=>setOpen(false)} className="block border-b border-white/5 py-4 text-lg text-slate-200 transition hover:text-cyan-200">{link.name}</a>)}<a href="https://github.com/tharuni2503" target="_blank" rel="noreferrer" className="mt-5 block text-cyan-200">View GitHub ↗</a></motion.nav>}</AnimatePresence>
  </>;
}