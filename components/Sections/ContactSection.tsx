"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_tn2ow4s",
        "template_1jz4xes",
        form.current,
        "ogu28RvoUbDtQvm0J",
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          alert("Failed to send message");
          console.log(error);
        },
      );
  };

  return (
    <section
      id="Contact"
      className="py-14 sm:py-20 px-4 sm:px-8 max-w-3xl mx-auto scroll-mt-20 sm:scroll-mt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-xl border border-[rgba(255,183,213,0.3)] bg-radial-[at_top_right] from-pink-400/20 p-5 sm:p-8 lg:p-10 shadow-[0_0_30px_rgba(0,0,0,0.8)] backdrop-blur-md"
      >
        <div className="mb-6 sm:mb-8">
          <h2 className="font-[family-name:var(--font-pixel)] text-base sm:text-xl md:text-2xl text-[#ffb7d5] tracking-tight">
            &gt; LET&apos;S CONNECT.
          </h2>
          <p className="font-mono text-[10px] sm:text-xs md:text-sm text-[#8c8c9e] mt-1">
            Have a project in mind or just want to say hi? Send a message.
          </p>
        </div>

        <motion.form
          onSubmit={handleForm}
          ref={form}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-4 sm:space-y-5"
        >
          {/* Name + Email — stack on mobile, side by side on sm+ */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
          >
            <div className="space-y-1.5">
              <label className="block font-[family-name:var(--font-pixel)] text-[9px] sm:text-[10px] text-[#ffb7d5] uppercase tracking-wider">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Jane Doe"
                className="w-full bg-[#0c0c10] border border-[rgba(255,183,213,0.3)] focus:border-[#ffb7d5] text-[#ffb7d5] placeholder-[#505062] rounded px-3 sm:px-3.5 py-2 sm:py-2.5 font-mono text-sm outline-none transition-colors"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block font-[family-name:var(--font-pixel)] text-[9px] sm:text-[10px] text-[#ffb7d5] uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="jane@example.com"
                className="w-full bg-[#0c0c10] border border-[rgba(255,183,213,0.3)] focus:border-[#ffb7d5] text-[#ffb7d5] placeholder-[#505062] rounded px-3 sm:px-3.5 py-2 sm:py-2.5 font-mono text-sm outline-none transition-colors"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-1.5">
            <label className="block font-[family-name:var(--font-pixel)] text-[9px] sm:text-[10px] text-[#ffb7d5] uppercase tracking-wider">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              required
              placeholder="Aa..."
              className="w-full bg-[#0c0c10] border border-[rgba(255,183,213,0.3)] focus:border-[#ffb7d5] text-[#ffb7d5] placeholder-[#505062] rounded px-3 sm:px-3.5 py-2 sm:py-2.5 font-mono text-sm outline-none transition-colors"
            />
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-1.5">
            <label className="block font-[family-name:var(--font-pixel)] text-[9px] sm:text-[10px] text-[#ffb7d5] uppercase tracking-wider">
              Message
            </label>
            <textarea
              rows={5}
              name="message"
              required
              placeholder="Aa..."
              className="w-full bg-[#0c0c10] border border-[rgba(255,183,213,0.3)] focus:border-[#ffb7d5] text-[#ffb7d5] placeholder-[#505062] rounded px-3 sm:px-3.5 py-2 sm:py-2.5 font-mono text-sm outline-none transition-colors resize-none"
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="btn-pixel w-full font-[family-name:var(--font-pixel)] text-[10px] sm:text-xs md:text-sm bg-transparent border-2 border-[#ffb7d5] text-[#ffb7d5] hover:bg-[#ffb7d5] hover:text-[#0c0c0f] py-3.5 sm:py-4 rounded transition-all uppercase tracking-widest font-bold mt-1 sm:mt-2 cursor-pointer"
            >
              SEND MESSAGE
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  );
}
