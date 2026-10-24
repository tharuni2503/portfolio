import { motion } from "framer-motion";
const groups = [
 {title:"Languages",items:["Python","JavaScript","C","SQL","R","HTML","CSS"]},
 {title:"Frontend & app",items:["React","Tailwind CSS","Vite","Flutter"]},
 {title:"AI / ML",items:["Pandas","NumPy","scikit-learn","TensorFlow / Keras","OpenCV","MediaPipe"]},
 {title:"Tools & platforms",items:["Git & GitHub","Firebase","MySQL","VS Code","Jupyter Notebook"]}
];
export default function WhyChooseMe() {
 return <section id="skills" className="px-5 py-24 sm:px-8">
  <div className="mx-auto max-w-6xl">
   <motion.div initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mb-12">
    <p className="font-mono text-xs tracking-[.25em] text-violet-300">THE TOOLKIT</p>
    <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Tools I use to <span className="text-slate-500">make things.</span></h2>
    <p className="mt-4 max-w-2xl leading-7 text-slate-400">A growing toolkit across software development, data, and applied AI. I keep learning as each project asks me to stretch a little further.</p>
   </motion.div>
   <div className="grid gap-4 md:grid-cols-2">
    {groups.map((g,i)=><motion.div key={g.title} initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.07}} className="rounded-2xl border border-white/10 bg-white/[.025] p-6 sm:p-7">
      <div className="mb-5 flex items-center gap-3"><span className="font-mono text-xs text-cyan-300">0{i+1}</span><h3 className="font-semibold text-white">{g.title}</h3></div>
      <div className="flex flex-wrap gap-2">{g.items.map(item=><span key={item} className="rounded-lg border border-white/10 bg-white/[.04] px-3 py-2 text-sm text-slate-300 transition hover:border-cyan-300/30 hover:text-cyan-100">{item}</span>)}</div>
    </motion.div>)}
   </div>
  </div>
 </section>;
}