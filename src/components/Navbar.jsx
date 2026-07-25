import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const links = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Why Me", href: "#why-me" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#030712]/80 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          {/* Logo */}

          <a href="#home" className="flex items-center gap-3">

            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: .8 }}
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-sm font-black text-white"
            >
              {"</>"}
            </motion.div>

            <div>
              <h2 className="font-black tracking-wide text-white">
                THARUNI
              </h2>

              <p className="text-xs text-slate-400">
                Web Developer
              </p>
            </div>

          </a>

          {/* Desktop */}

          <nav className="hidden items-center gap-10 lg:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative font-medium text-slate-300 transition hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Button */}

          <motion.a
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{
              scale: .95,
            }}
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-xl shadow-cyan-500/20 lg:block"
          >
            Start Project
          </motion.a>

          {/* Mobile */}

          <button
            onClick={() => setOpen(!open)}
            className="text-3xl text-white lg:hidden"
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>

        </div>
      </motion.header>

      {/* Mobile Menu */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            className="fixed inset-0 z-40 bg-[#030712]/95 backdrop-blur-2xl lg:hidden"
          >

            <div className="flex h-full flex-col items-center justify-center gap-10">

              {links.map((item) => (

                <motion.a
                  key={item.name}
                  whileHover={{ scale: 1.08 }}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-bold text-white"
                >
                  {item.name}
                </motion.a>

              ))}

              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-semibold text-white"
              >
                Start Project
              </motion.a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}