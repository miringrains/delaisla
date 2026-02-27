"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";

export default function SoulSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 0.3"],
  });

  const bgColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#0F0F0F", "#F5DDC3"]
  );

  return (
    <motion.section
      ref={sectionRef}
      style={{ backgroundColor: bgColor }}
      className="relative min-h-screen overflow-hidden"
      data-theme="light"
    >
      {/* Background Video — blended into ivory sand */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-multiply"
      >
        <source src="/videos/delaisla2nd.mp4" type="video/mp4" />
      </video>

      {/* Content grid — above video */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 min-h-screen px-6 md:px-10">
        {/* Top block — cols 2-7 */}
        <div className="md:col-start-2 md:col-span-6 pt-[20vh]">
          <motion.h2
            className="font-display text-display-xl uppercase text-obsidian"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            THE SUN
            <br />
            IS OUR
            <br />
            SOUL.
          </motion.h2>
        </div>

        {/* Bottom block — cols 7-11, anchored to bottom */}
        <div className="md:col-start-7 md:col-span-5 flex flex-col justify-end pb-16 md:pb-32 mt-auto">
          <motion.p
            className="text-body-lg text-obsidian/80 leading-relaxed max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            Where ancient wisdom meets hyper-modern performance. We capture
            community as the core energy&mdash;powered by the sun.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <Link
              href="/story"
              className="mt-8 inline-block bg-obsidian px-8 py-4 text-overline font-bold uppercase text-ivory-sand transition-all duration-300 hover:bg-transparent hover:text-obsidian hover:ring-1 hover:ring-obsidian"
            >
              OUR CUENTO
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
