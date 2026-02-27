"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";

export default function SoulSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "start start"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["circle(0% at 50% 100%)", "circle(150% at 50% 50%)"]
  );

  return (
    <div ref={wrapperRef} className="relative min-h-[200vh]">
      {/* Dark backing — visible while the circle hasn't fully revealed */}
      <div className="sticky top-0 h-screen bg-surface-dark" />

      {/* The "melt" reveal layer */}
      <motion.section
        className="sticky top-0 h-screen overflow-hidden -mt-[100vh]"
        style={{ clipPath }}
        data-theme="light"
      >
        {/* Ivory Sand base */}
        <div className="absolute inset-0 bg-[#F5DDC3]" />

        {/* Video — fixed feel via sticky, blended into background */}
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
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 h-full px-6 md:px-10">
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
          <div className="md:col-start-7 md:col-span-5 flex flex-col justify-end pb-16 md:pb-32">
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
    </div>
  );
}
