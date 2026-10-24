import { motion } from "framer-motion";
import { FaCode, FaBrain, FaMobileScreenButton, FaLayerGroup } from "react-icons/fa6";

const focus = [
  {icon:FaCode,title:"Web development",desc:"Responsive, thoughtful interfaces using React, JavaScript, and modern CSS tooling."},
  {icon:FaBrain,title:"AI & machine learning",desc:"Exploring computer vision, ML workflows, and ways to make AI features practical."},
  {icon:FaMobileScreenButton,title:"Mobile experiences",desc:"Building cross-platform app experiences and learning how product ideas travel across devices."},
  {icon:FaLayerGroup,title:"Product-minded building",desc:"Connecting UI, backend data, and user needs into projects that solve a clear problem."}
];
export default function Services() {
  return <section id="about" className="border-y border-white/[.07] bg-white/[.015] px-5 py-24 sm:px-8">
    <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[.85fr_1.15fr]">
      <motion.div initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
        <p className="font-mono text-xs tracking-[.25em] text-violet-300">A LITTLE ABOUT ME</p>
        <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">Curious by nature.<br/><span className="text-slate-500">Builder by choice.</span></h2>
        <p className="mt-6 leading-8 text-slate-400">I’m pursuing a B.Tech in Computer Science and Engineering with a specialization in AI & Machine Learning at Nalla Narasimha Reddy Educational Society. I enjoy learning by building — experimenting with ideas, working through technical challenges, and polishing the details that make digital products easier to use.</p>
        <p className="mt-4 leading-8 text-slate-400">My interests sit at the intersection of frontend development, AI, and useful software. I’m looking for opportunities to collaborate, keep improving, and contribute to real products.</p>
        <div className="mt-7 flex flex-wrap gap-2"><span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300">B.Tech · CSE (AI & ML)</span><span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300">Class of 2026</span><span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300">Hyderabad, India</span></div>
      </motion.div>
      <div className="grid gap-4 sm:grid-cols-2">
        {focus.map((f,i)=>{const Icon=f.icon;return <motion.div key={f.title} initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}} className="rounded-2xl border border-white/10 bg-[#0c101a] p-6 transition hover:border-violet-300/30">
          <Icon className="text-2xl text-cyan-300"/><h3 className="mt-5 font-semibold text-white">{f.title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{f.desc}</p>
        </motion.div>})}
      </div>
    </div>
  </section>;
}