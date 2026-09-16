"use client";

import { motion } from "framer-motion";
import TextType from '../TextType'
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function HeroSection() {
  return (
    <section
      id="Hero"
      className="min-h-[90vh] sm:min-h-[85vh] flex flex-col items-center justify-center text-center px-4 py-12 sm:py-16 relative overflow-hidden"
    >
      <motion.div
        className="space-y-3 sm:space-y-4 max-w-3xl w-full mx-auto z-10 px-2"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Tagline */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 text-[#ffb7d5] font-[family-name:var(--font-pixel)] text-[10px] sm:text-xs md:text-sm tracking-widest uppercase mb-1 sm:mb-2"
        >
          <span className="animate-pulse">✦</span>
          <span>HI I&apos;M ROZA</span>
          <span className="animate-pulse">✦</span>
        </motion.div>

        {/* Hero heading */}
        <motion.h1
          variants={fadeUp}
          className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-[family-name:var(--font-pixel)] text-[#ffb7d5] tracking-tight pixel-extrusion py-3 sm:py-4 leading-tight"
        >
          <TextType
            text={["Welcome!"]}
            typingSpeed={95}
            pauseDuration={2000}
            showCursor
            cursorCharacter="_"
            cursorBlinkDuration={0.6}
            loop={false}
            variableSpeed={false}
            onSentenceComplete={() => {}}
          />
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="text-sm sm:text-base md:text-xl font-mono text-[#a8a8bb] max-w-xs sm:max-w-xl mx-auto pt-1 sm:pt-2 pb-4 sm:pb-6"
        >
          I like building aesthetic digital experiences.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col xs:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1 sm:pt-2"
        >
          <a
            href="https://drive.google.com/file/d/1kjRz9U9Zetf_AzOYLyHS5fR2lJucIsxO/view?usp=drivesdk"
            target="_blank"
            className="btn-pixel inline-block font-[family-name:var(--font-pixel)] text-[10px] sm:text-xs md:text-sm bg-linear-to-b from-[#ffb7d5]/20  text-[#ffb7d5] border-2 border-[#ffb7d5] px-5 sm:px-6 py-3 sm:py-3.5 uppercase tracking-wider w-full xs:w-auto"
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="btn-pixel inline-block font-[family-name:var(--font-pixel)] text-[10px] sm:text-xs md:text-sm bg-linear-to-b from-[#ffb7d5]/20 text-[#ffb7d5] border-2 border-[#ffb7d5] px-5 sm:px-6 py-3 sm:py-3.5 uppercase tracking-wider font-bold w-full xs:w-auto"
          >
            Get in touch
          </a>
        </motion.div>

        {/* Social dock */}
        <motion.div
          variants={fadeIn}
          className="flex items-center justify-center gap-2 sm:gap-3 pt-8 sm:pt-10"
        >
          {/* Email */}
          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=tahsinroza20@gmail.com"
            target="_blank"
            title="Email"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded border border-[rgba(255,183,213,0.3)] bg-[#14141a] flex items-center justify-center text-[#ffb7d5] hover:border-[#ffb7d5] hover:bg-[rgba(255,183,213,0.1)] transition-colors"
          >
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/tahsin-roza"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded border border-[rgba(255,183,213,0.3)] bg-[#14141a] flex items-center justify-center text-[#ffb7d5] hover:border-[#ffb7d5] hover:bg-[rgba(255,183,213,0.1)] transition-colors"
          >
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://instagram.com/merely_mimosa"
            target="_blank"
            rel="noreferrer"
            title="Instagram"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded border border-[rgba(255,183,213,0.3)] bg-[#14141a] flex items-center justify-center text-[#ffb7d5] hover:border-[#ffb7d5] hover:bg-[rgba(255,183,213,0.1)] transition-colors"
          >
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/roza70"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded border border-[rgba(255,183,213,0.3)] bg-[#14141a] flex items-center justify-center text-[#ffb7d5] hover:border-[#ffb7d5] hover:bg-[rgba(255,183,213,0.1)] transition-colors"
          >
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
