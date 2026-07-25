import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#030712] py-24"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-violet-600/20 blur-[180px]" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[180px]" />

      <div className="relative mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl md:p-16"
        >

          {/* Badge */}

          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
            Let's Work Together
          </span>

          {/* Heading */}

          <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-6xl">
            Ready to Build Your
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Dream Website?
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            Let's work together to build a website that reflects your brand, connects with your audience, and supports your business goals.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap gap-5">

            <motion.a
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: .95,
              }}
              href="https://wa.me/919505810915"
              target="_blank"
              className="flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-xl shadow-cyan-500/20"
            >
              <FaWhatsapp />

              Chat on WhatsApp

              <FaArrowRight />
            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: .95,
              }}
              href="mailto:tharunilodi@gmail.com"
              className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-cyan-400"
            >
              <FaEnvelope />

              Send Email
            </motion.a>

          </div>

          {/* Stats */}

          <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-3">

            <div>

              <h3 className="text-4xl font-black text-cyan-400">
                3+
              </h3>

              <p className="mt-2 text-slate-400">
                Live Projects
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-black text-cyan-400">
                100%
              </h3>

              <p className="mt-2 text-slate-400">
                Responsive Design
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-black text-cyan-400">
                24h
              </h3>

              <p className="mt-2 text-slate-400">
                Average Response Time
              </p>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}