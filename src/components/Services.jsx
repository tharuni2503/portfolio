import { motion } from "framer-motion";
import {
  FaUtensils,
  FaClinicMedical,
  FaTshirt,
  FaBriefcase,
  FaUserTie,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: <FaUtensils />,
    title: "Restaurant Websites",
    desc: "Modern websites with menu, gallery, reservations and contact sections.",
  },
  {
    icon: <FaClinicMedical />,
    title: "Clinic Websites",
    desc: "Professional healthcare websites with appointment booking and services.",
  },
  {
    icon: <FaTshirt />,
    title: "Fashion Stores",
    desc: "Elegant online stores that showcase products beautifully.",
  },
  {
    icon: <FaBriefcase />,
    title: "Business Websites",
    desc: "Professional company websites that build trust and attract customers.",
  },
  {
    icon: <FaUserTie />,
    title: "Portfolio Websites",
    desc: "Creative portfolios that highlight your work and personal brand.",
  },
  {
    icon: <FaRocket />,
    title: "Landing Pages",
    desc: "High-converting landing pages designed for marketing campaigns.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#030712] py-24"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-violet-600/10 blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <h2 className="mt-8 text-4xl font-black text-white md:text-5xl">
            Websites Designed
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}For Your Business
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            I create responsive, modern and high-performing websites
            tailored to your business goals.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,.15)]"
            >
              {/* Icon */}

              <div className="mb-8 inline-flex rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 p-5 text-3xl text-white transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-white">
                {service.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                {service.desc}
              </p>

              <motion.button
                whileHover={{
                  x: 6,
                }}
                className="mt-8 flex items-center gap-3 font-semibold text-cyan-400"
              >
                Learn More
                <FaArrowRight />
              </motion.button>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}