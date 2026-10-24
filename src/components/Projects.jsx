import { motion } from "framer-motion";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

const projects = [
  {num:"01",title:"Smart Campus AI Platform",type:"AI · Mobile / Web",description:"A student-focused campus platform designed to bring study resources, an AI study assistant, and career guidance into one place.",stack:["Flutter","Firebase","AI Assistant"],repo:"https://github.com/tharuni2503/Smart-Campus-AI-Platform",accent:"from-violet-500/25 to-indigo-500/5",symbol:"SC"},
  {num:"02",title:"Free-Hand Air Writing",type:"Computer Vision · ML",description:"An interactive character-recognition project exploring how hand movement and computer vision can turn air-written strokes into digital characters.",stack:["Python","OpenCV","MediaPipe","TensorFlow"],repo:"https://github.com/tharuni2503/Free-Hand-Air-Writing-and-Character-Recognition",accent:"from-cyan-500/20 to-blue-500/5",symbol:"CV"},
  {num:"03",title:"TextileHub AI",type:"Marketplace · AI",description:"A textile-focused marketplace concept connecting buyers and suppliers, with AI-assisted price insights as part of the experience.",stack:["React","Tailwind CSS","AI"],repo:"https://github.com/tharuni2503/TextileHubAI",accent:"from-amber-500/20 to-orange-500/5",symbol:"TH"},
  {num:"04",title:"Task Management System",type:"Full-stack Web App",description:"A full-stack task management application built as a practical exercise in frontend flows, APIs, authentication, and data handling.",stack:["Next.js","NestJS","MongoDB"],repo:"https://github.com/tharuni2503/task-management-system",accent:"from-emerald-500/20 to-teal-500/5",symbol:"TM"},
  {num:"05",title:"Restaurant Website",type:"Web Design · Live Demo",description:"A modern restaurant website concept with clear navigation and a customer-friendly digital presence.",stack:["React","Tailwind CSS","Vite"],repo:"https://github.com/tharuni2503/restaurant_demo",live:"https://restaurant-demo-murex-nine.vercel.app/",accent:"from-rose-500/20 to-pink-500/5",symbol:"RB"},
  {num:"06",title:"Smile Care Clinic",type:"Web Design · Live Demo",description:"A welcoming healthcare website concept designed to present services and help visitors find important clinic information.",stack:["React","Responsive UI"],repo:"https://github.com/tharuni2503/SmileCare",live:"https://smile-care-green.vercel.app/",accent:"from-sky-500/20 to-cyan-500/5",symbol:"SC"},
  {num:"07",title:"Fashion Point",type:"Web Design · Live Demo",description:"A fashion boutique website concept with an expressive visual style and a clean browsing experience.",stack:["React","Tailwind CSS"],repo:"https://github.com/tharuni2503/fashion_point",live:"https://fashion-point-chi.vercel.app/",accent:"from-fuchsia-500/20 to-purple-500/5",symbol:"FP"},
  {num:"08",title:"AI-First CRM",type:"Product Concept",description:"An exploration of an AI-first customer relationship management workflow and modern product interface.",stack:["Web Development","AI"],repo:"https://github.com/tharuni2503/AI-First-CRM",accent:"from-indigo-500/20 to-violet-500/5",symbol:"AI"}
];

export default function Projects() {
  return <section id="projects" className="relative px-5 py-24 sm:px-8 md:py-28">
    <div className="mx-auto max-w-6xl">
      <motion.div initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mb-12 max-w-2xl">
        <p className="font-mono text-xs tracking-[.25em] text-cyan-300">SELECTED WORK / 2024—2026</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Things I’ve <span className="text-slate-500">been building.</span></h2>
        <p className="mt-5 leading-7 text-slate-400">A mix of AI experiments, full-stack practice, and websites built around real-world use cases.</p>
      </motion.div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p,i)=><motion.article key={p.num} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{delay:(i%3)*.07}} className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[.025] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[.045]">
          <div className={`relative flex h-44 items-end justify-between overflow-hidden bg-gradient-to-br ${p.accent} p-5`}>
            <div className="absolute -right-8 -top-12 h-40 w-40 rounded-full border border-white/10 transition duration-500 group-hover:scale-125"/><div className="absolute -right-1 top-8 h-28 w-28 rounded-full border border-white/10"/>
            <span className="relative font-mono text-xs text-white/60">{p.num} / PROJECT</span><span className="relative text-5xl font-black tracking-tighter text-white/80">{p.symbol}</span>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <p className="font-mono text-[10px] uppercase tracking-[.16em] text-cyan-300">{p.type}</p>
            <h3 className="mt-3 text-xl font-semibold text-white">{p.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{p.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">{p.stack.map(s=><span key={s} className="rounded-md border border-white/10 bg-white/[.04] px-2.5 py-1 text-[11px] text-slate-300">{s}</span>)}</div>
            <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-4">
              <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"><FaGithub/> Source code</a>
              {p.live&&<a href={p.live} target="_blank" rel="noreferrer" className="ml-auto inline-flex items-center gap-2 text-sm text-cyan-200 transition hover:text-cyan-100">Live demo <FaArrowUpRightFromSquare className="text-xs"/></a>}
            </div>
          </div>
        </motion.article>)}
      </div>
      <div className="mt-9 text-center"><a href="https://github.com/tharuni2503?tab=repositories" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-slate-300 transition hover:border-cyan-300/50 hover:text-cyan-100">Explore all repositories <FaArrowUpRightFromSquare/></a></div>
    </div>
  </section>;
}