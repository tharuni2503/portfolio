import { motion } from "framer-motion";
import { FaCode, FaBrain, FaMobileScreenButton, FaLayerGroup } from "react-icons/fa6";

const focus = [
  {number:"01",icon:FaCode,title:"Web engineering",desc:"Building responsive, accessible interfaces with React and modern frontend tooling — with attention to the small details."},
  {number:"02",icon:FaBrain,title:"Applied AI",desc:"Exploring computer vision and machine learning, then translating technical ideas into useful, approachable experiences."},
  {number:"03",icon:FaMobileScreenButton,title:"Cross-platform apps",desc:"Creating app experiences with Flutter and connecting interfaces to services such as Firebase."},
  {number:"04",icon:FaLayerGroup,title:"End-to-end thinking",desc:"Considering the whole product — from the user problem and interface to data, integration, and maintainability."}
];
export default function Services() {
  return <section id="about" className="border-y border-white/[.07] bg-white/[.015] px-5 py-24 sm:px-8 md:py-28">
    <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[.85fr_1.15fr]">
      <motion.div initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
        <p className="font-mono text-xs tracking-[.25em] text-violet-300">01 — ABOUT</p>
        <h2 className="mt-5 text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl">I like solving real problems with <span className="text-slate-500">thoughtful technology.</span></h2>
        <p className="mt-6 leading-8 text-slate-400">I’m Tharuni, a Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at Nalla Narasimha Reddy Educational Society. I learn best by building: testing ideas, understanding trade-offs, and improving a product one detail at a time.</p>
        <p className="mt-4 leading-8 text-slate-400">My work spans frontend development, AI experiments, and cross-platform apps. I’m interested in teams where I can keep learning, contribute with care, and turn a clear problem into a useful product.</p>
        <div className="mt-8 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-white/10 bg-white/[.025] p-4"><p className="font-mono text-xs text-slate-500">EDUCATION</p><p className="mt-2 text-sm font-medium text-white">B.Tech · CSE (AI & ML)</p></div>
          <div className="rounded-xl border border-white/10 bg-white/[.025] p-4"><p className="font-mono text-xs text-slate-500">BASED IN</p><p className="mt-2 text-sm font-medium text-white">Hyderabad, India</p></div>
        </div>
      </motion.div>
      <div className="grid gap-3 sm:grid-cols-2">
        {focus.map((f,i)=>{const Icon=f.icon;return <motion.div key={f.title} initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.07}} className="group rounded-2xl border border-white/10 bg-[#0c101a] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-300/30">
          <div className="flex items-center justify-between"><Icon className="text-xl text-cyan-300"/><span className="font-mono text-xs text-slate-600">{f.number}</span></div><h3 className="mt-6 font-semibold text-white">{f.title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{f.desc}</p>
        </motion.div>})}
      </div>
    </div>
  </section>;
}