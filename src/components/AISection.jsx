import { motion } from "framer-motion";
import { FaBrain, FaEye, FaWandMagicSparkles, FaArrowUpRightFromSquare } from "react-icons/fa6";

const nodes = [
  {label:"INPUT",detail:"Images · strokes · data",x:"8%",y:"16%",delay:0},
  {label:"PROCESS",detail:"Features · patterns",x:"62%",y:"8%",delay:.15},
  {label:"MODEL",detail:"Learning · inference",x:"48%",y:"58%",delay:.3},
  {label:"INSIGHT",detail:"Useful output",x:"8%",y:"70%",delay:.45}
];

const interests = [
  {icon:FaEye,title:"Computer vision",desc:"Exploring hand tracking and character recognition with OpenCV and MediaPipe.",tag:"AIR-WRITING PROJECT"},
  {icon:FaBrain,title:"Applied machine learning",desc:"Working with data and models to understand patterns and turn them into useful results.",tag:"ML EXPERIMENTS"},
  {icon:FaWandMagicSparkles,title:"AI in everyday products",desc:"Interested in thoughtful AI features that support people instead of adding complexity.",tag:"PRODUCT THINKING"}
];

export default function AISection() {
  return <section id="ai" className="relative overflow-hidden border-y border-white/[.07] bg-[#090d18] px-5 py-24 sm:px-8 md:py-28">
    <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-violet-500/[.08] blur-3xl"/>
    <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-cyan-500/[.07] blur-3xl"/>
    <div className="relative mx-auto max-w-6xl">
      <motion.div initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mb-12 max-w-2xl">
        <p className="font-mono text-xs tracking-[.25em] text-cyan-300">02 — AI, WITH INTENTION</p>
        <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">Beyond the interface.<br/><span className="text-slate-500">Into intelligent experiences.</span></h2>
        <p className="mt-5 leading-7 text-slate-400">I’m interested in the space where software meets intelligence — using computer vision, machine learning, and carefully designed interactions to make technology more useful.</p>
      </motion.div>
      <div className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div initial={{opacity:0,scale:.98}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} className="relative min-h-[350px] overflow-hidden rounded-3xl border border-white/10 bg-[#0b1120] p-5 sm:p-7">
          <div className="flex items-center justify-between"><div><p className="font-mono text-[10px] tracking-[.2em] text-slate-500">CONCEPT / 001</p><h3 className="mt-2 text-lg font-semibold text-white">From signal to insight</h3></div><span className="rounded-full border border-cyan-300/20 bg-cyan-300/[.06] px-3 py-1 text-[10px] text-cyan-200">AI WORKFLOW</span></div>
          <div className="relative mt-6 h-[220px] overflow-hidden rounded-2xl border border-white/[.06] bg-[radial-gradient(circle_at_center,rgba(34,211,238,.07),transparent_60%)]">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 260" fill="none" aria-hidden="true">
              <path d="M80 62 L350 45 L300 175 L80 205 L80 62 M350 45 L520 130 L300 175 M80 62 L520 130 M80 205 L520 130" stroke="rgba(148,163,184,.25)" strokeWidth="1.2" strokeDasharray="5 7"/>
              <path d="M80 62 L350 45 L300 175 L80 205 L80 62 M350 45 L520 130 L300 175" stroke="url(#aiLine)" strokeWidth="1.6" strokeDasharray="8 12" className="ai-flow-line"/>
              <defs><linearGradient id="aiLine" x1="80" y1="45" x2="520" y2="205" gradientUnits="userSpaceOnUse"><stop stopColor="#a78bfa"/><stop offset="1" stopColor="#67e8f9"/></linearGradient></defs>
              {[[80,62],[350,45],[300,175],[80,205],[520,130]].map(([cx,cy],i)=><g key={i}><circle cx={cx} cy={cy} r="13" fill="#0b1120" stroke={i%2?"#a78bfa":"#67e8f9"} strokeOpacity=".85"/><circle cx={cx} cy={cy} r="4" fill={i%2?"#a78bfa":"#67e8f9"}/><circle cx={cx} cy={cy} r="20" stroke={i%2?"#a78bfa":"#67e8f9"} strokeOpacity=".18"/></g>)}
            </svg>
            {nodes.map((node,i)=><motion.div key={node.label} initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:node.delay}} className="absolute max-w-[130px] rounded-lg border border-white/10 bg-[#0b1120]/95 px-2.5 py-2 shadow-xl" style={{left:node.x,top:node.y}}><p className="font-mono text-[9px] tracking-widest text-cyan-200">{node.label}</p><p className="mt-1 text-[9px] leading-4 text-slate-400">{node.detail}</p></motion.div>)}
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-slate-500"><span className="h-1.5 w-1.5 rounded-full bg-cyan-300"/><span>My approach: understand the input, explore patterns, evaluate the result.</span></div>
        </motion.div>
        <div className="grid gap-3">
          {interests.map((item,i)=>{const Icon=item.icon;return <motion.article key={item.title} initial={{opacity:0,x:14}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*.08}} className="rounded-2xl border border-white/10 bg-white/[.025] p-5 transition hover:border-violet-300/30 sm:p-6">
            <div className="flex items-start gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-300/15 bg-violet-300/[.07] text-lg text-violet-200"><Icon/></span><div className="min-w-0"><p className="font-mono text-[9px] tracking-[.18em] text-slate-500">{item.tag}</p><h3 className="mt-2 font-semibold text-white">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{item.desc}</p></div></div>
          </motion.article>})}
        </div>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[.02] px-5 py-4 sm:px-6">
        <p className="text-sm text-slate-400">Curious about the code behind these experiments?</p>
        <a href="https://github.com/tharuni2503/Free-Hand-Air-Writing-and-Character-Recognition" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-white">Explore my computer vision project <FaArrowUpRightFromSquare className="text-xs"/></a>
      </div>
    </div>
  </section>;
}