import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const projects = [
  {num:"01",title:"Smart Campus AI Platform",type:"AI & Mobile",category:"AI / ML",description:"A student-focused campus experience bringing study resources, an AI study assistant, and career guidance into one connected platform.",stack:["Flutter","Firebase","AI Assistant"],repo:"https://github.com/tharuni2503/Smart-Campus-AI-Platform",accent:"from-violet-500/25 to-indigo-500/5",symbol:"SC"},
  {num:"02",title:"Free-Hand Air Writing",type:"Computer Vision",category:"AI / ML",description:"An interactive character-recognition project exploring how hand tracking and computer vision can translate air-written strokes into digital characters.",stack:["Python","OpenCV","MediaPipe","TensorFlow"],repo:"https://github.com/tharuni2503/Free-Hand-Air-Writing-and-Character-Recognition",accent:"from-cyan-500/20 to-blue-500/5",symbol:"CV"},
  {num:"03",title:"TextileHub AI",type:"Marketplace concept",category:"AI / ML",description:"A textile marketplace concept connecting buyers and suppliers, with AI-assisted price insights built into the product direction.",stack:["React","Tailwind CSS","AI"],repo:"https://github.com/tharuni2503/TextileHubAI",live:"https://textile-hub-ai.vercel.app/",accent:"from-amber-500/20 to-orange-500/5",symbol:"TH"},
  {num:"05",title:"Restaurant Website",type:"Business website",category:"Web",description:"A modern restaurant website demo designed to give a food business a clear, welcoming, mobile-friendly online presence.",stack:["React","Tailwind CSS","Vite"],repo:"https://github.com/tharuni2503/restaurant_demo",live:"https://restaurant-demo-murex-nine.vercel.app/",accent:"from-rose-500/20 to-pink-500/5",symbol:"RB"},
  {num:"06",title:"Smile Care Clinic",type:"Healthcare website",category:"Web",description:"A responsive clinic website concept presenting services and essential visitor information in a calm, approachable interface.",stack:["React","Tailwind CSS"],repo:"https://github.com/tharuni2503/SmileCare",live:"https://smile-care-green.vercel.app/",accent:"from-sky-500/20 to-cyan-500/5",symbol:"SC"},
  {num:"07",title:"Fashion Point",type:"Retail website",category:"Web",description:"A fashion boutique website demo built around a visual-first layout and a clean browsing experience.",stack:["React","Tailwind CSS"],repo:"https://github.com/tharuni2503/fashion_point",live:"https://fashion-point-chi.vercel.app/",accent:"from-fuchsia-500/20 to-purple-500/5",symbol:"FP"},
  {num:"08",title:"AI-First CRM",type:"Product exploration",category:"Full-stack",description:"An exploration of customer relationship management workflows and an AI-first product direction.",stack:["Web Development","AI"],repo:"https://github.com/tharuni2503/AI-First-CRM",accent:"from-indigo-500/20 to-violet-500/5",symbol:"AI"}
];
const filters = ["All work","AI / ML","Full-stack","Web"];

export default function Projects() {
  const [filter,setFilter] = useState("All work");
  const visible = useMemo(()=>filter==="All work"?projects:projects.filter(p=>p.category===filter),[filter]);
  return <section id="projects" className="relative px-5 py-24 sm:px-8 md:py-28">
    <div className="mx-auto max-w-6xl">
      <motion.div initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl"><p className="font-mono text-[10px] tracking-[.26em] text-cyan-300">SELECTED WORK / 2024—2026</p><h2 className="mt-4 text-3xl font-semibold tracking-[-.04em] text-white sm:text-5xl">Projects with a <span className="text-slate-500">purpose.</span></h2><p className="mt-5 leading-7 text-slate-400">A collection of experiments and practical builds across AI, full-stack development, and digital experiences.</p></div>
        <span className="font-mono text-xs text-slate-500">{String(visible.length).padStart(2,"0")} PROJECTS</span>
      </motion.div>
      <div className="mb-7 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {filters.map(f=><button key={f} onClick={()=>setFilter(f)} aria-pressed={filter===f} className={`rounded-full border px-4 py-2 text-xs transition ${filter===f?"border-white bg-white text-slate-950":"border-white/10 bg-white/[.025] text-slate-400 hover:border-white/25 hover:text-white"}`}>{f}</button>)}
      </div>
      <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
        {visible.map((p,i)=><motion.article layout key={p.num} initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} exit={{opacity:0,scale:.97}} transition={{duration:.22,delay:i*.025}} className="group flex flex-col overflow-hidden rounded-2xl border border-white/[.09] bg-[#0b101a] transition-colors hover:border-white/20">
          <div className={`relative flex h-40 items-end justify-between overflow-hidden bg-gradient-to-br ${p.accent} p-5`}>
            <div className="absolute -right-8 -top-12 h-40 w-40 rounded-full border border-white/10 transition duration-500 group-hover:scale-125"/><div className="absolute right-3 top-4 h-28 w-28 rounded-full border border-white/10"/><div className="absolute right-12 top-14 h-12 w-12 rounded-full border border-white/10"/>
            <span className="relative font-mono text-[10px] tracking-widest text-white/60">{p.num} / SELECTED WORK</span><span className="relative text-5xl font-semibold tracking-[-.08em] text-white/85">{p.symbol}</span>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <p className="font-mono text-[10px] uppercase tracking-[.16em] text-cyan-300">{p.type}</p><h3 className="mt-3 text-lg font-semibold tracking-tight text-white">{p.title}</h3><p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{p.description}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">{p.stack.map(s=><span key={s} className="rounded-md border border-white/[.08] bg-white/[.025] px-2 py-1 text-[10px] text-slate-400">{s}</span>)}</div>
            <div className="mt-5 flex min-h-10 items-center border-t border-white/[.08] pt-4">{p.live ? <a href={p.live} target="_blank" rel="noreferrer" aria-label={`Open live demo for ${p.title}`} className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[.06] px-3.5 py-2 text-xs text-cyan-200 transition hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:text-white">View live demo <FaArrowUpRightFromSquare/></a> : <span className="font-mono text-[10px] uppercase tracking-wider text-slate-600">Live demo coming soon</span>}</div>
          </div>
        </motion.article>)}
        </AnimatePresence>
      </motion.div>
      <p className="mt-8 text-center text-xs text-slate-500">Explore the live builds above — more project demos are on the way.</p>
    </div>
  </section>;
}