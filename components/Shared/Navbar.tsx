"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("");
  const clickSound = useRef<HTMLAudioElement | null>(null);
  const handleClick = () => {
    if (!clickSound.current) {
      clickSound.current = new Audio("/audio/click.mp3");
    }
    clickSound.current.volume = 0.4;
    clickSound.current.currentTime = 0;
    clickSound.current.play();
  };

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-3 sm:px-4  pointer-events-none">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="floating-nav-pill bg-radial-[at_top_right] from-pink-400/20 backdrop-blur-2xl pointer-events-auto rounded-full px-2.5 py-1.5 sm:px-4 sm:py-2.5 flex items-center justify-between gap-2 sm:gap-4 max-w-4xl w-/6 min-w-0"
      >
        {/* Logo */}
        <a
          href="#Hero"
          className="flex items-center gap-2 group pl-0.5 shrink-0"
        >
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#ffb7d5] flex items-center justify-center text-[#121117] font-[family-name:var(--font-pixel)] text-sm sm:text-base font-bold shadow-[0_7_12px_rgba(255,183,213,0.5)] shrink-0"
          >
            R
          </motion.div>
          <span
            className="font-[family-name:var(--font-pixel)] text-[10px] sm:text-[11px] text-[#ffb7d5] hidden lg:inline tracking-wider group-hover:text-white transition-colors"
            onClick={() => {
              handleClick();
              setActive("");
            }}
          >
            ROZA.DEV
          </span>
        </a>

        {/* Center links */}
        <div className="grid grid-cols-4 text-center items-center gap-0.5 sm:gap-3 md:gap-6 min-w-0">
          {["About", "Skills", "Projects", "Contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`relative px-1.5 sm:px-2.5 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs md:text-sm font-medium text-[#c0c0d2] hover:bg-[rgba(255,183,213,0.1)] transition-all whitespace-nowrap ${active == section && "text-[#ffb7d5]"}`}
              onClick={() => {
                handleClick();
                setActive(section);
              }}
            >
              {active === section && (
                <>
                  {/* moving gradient */}
                  <motion.div
                    layoutId="nav-bg"
                    className="absolute inset-0 rounded-t-2xl bg-linear-to-b from-[#ffc2d1]/40 to-transparent "
                  />

                  {/* Moving Pill */}
                  <motion.div
                    layoutId="pill"
                    className="absolute -top-4 md:-top-4.5 left-1/2 -translate-x-1/2 w-10 h-2 bg-[#ddcbd2] rounded-full shadow-[0_2px_10px_rgba(255,183,213,0.8)]"
                  />
                </>
              )}
              <span className="relative z-10">
                {/* {section.charAt(0).toUpperCase() + section.slice(1)} */}
                {section}
              </span>
            </a>
          ))}
        </div>

        {/* CTA — full email on sm+, icon-only on mobile */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=tahsinroza20@gmail.com"
          target="_blank"
          className="nav-cta-pill rounded-full shrink-0 flex items-center justify-center gap-1.5 transition-all
            w-8 h-8 sm:w-auto sm:h-auto sm:px-4 sm:py-2 md:px-5"
          title="Email me"
        >
          {/* Icon always visible */}
          <svg
            className="w-3.5 h-3.5 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          {/* Text hidden on mobile, visible sm+ */}
          <span
            className="hidden sm:inline text-xs sm:text-sm font-semibold tracking-wide truncate max-w-[130px] md:max-w-none"
            onClick={handleClick}
          >
            tahsinroza20@gmail.com
          </span>
        </a>
      </motion.nav>
    </header>
  );
}
