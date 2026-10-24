import { motion } from "framer-motion";
const groups = [
 {title:"Programming",caption:"Core foundations",items:["Python","JavaScript","C","SQL","R","HTML","CSS"]},
 {title:"Frontend & apps",caption:"Interfaces & experience",items:["React","Tailwind CSS","Vite","Flutter"]},
 {title:"AI & data",caption:"Experimentation & insight",items:["Pandas","NumPy","scikit-learn","TensorFlow / Keras","OpenCV","MediaPipe","Matplotlib"]},
 {title:"Tools & platforms",caption:"Build, test & connect",items:["Git & GitHub","Firebase","MySQL","VS Code","Jupyter Notebook"]}
];
export default function WhyChooseMe() {
 return <section id="skills" className="px-5 py-24 sm:px-8 md:py-28">
  <div className="mx-auto max-w-6xl">
   <motion.div initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mb-12 max-w-2xl">
    <p className="font-mono text-xs tracking-[.25em] text-violet-300">02 — EXPERTISE</p>
    <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">A toolkit that keeps <span className="text-slate-500">growing.</span></h2>
    <p className="mt-5 leading-7 text-slate-400">Technologies I’ve worked with across projects and coursework. I choose tools based on the problem and keep building depth through practice.</p>
   </motion.div>
   <div className="grid gap-4 md:grid-cols-2">
    {groups.map((g,i)=><motion.div key={g.title} initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.07}} className="rounded-2xl border border-white/10 bg-white/[.025] p-6 sm:p-7">
      <div className="mb-5 flex items-start justify-between gap-3"><div><h3 className="font-semibold text-white">{g.title}</h3><p className="mt-1 text-xs text-slate-500">{g.caption}</p></div><span className="font-mono text-xs text-cyan-300">0{i+1}</span></div>
      <div className="flex flex-wrap gap-2">{g.items.map(item=><span key={item} className="rounded-lg border border-white/10 bg-white/[.04] px-3 py-2 text-sm text-slate-300 transition hover:border-cyan-300/30 hover:text-cyan-100">{item}</span>)}</div>
    </motion.div>)}
   </div>
  </div>
 </section>;
}