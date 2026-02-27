"use client";

import Image from "next/image";
import { motion } from "motion/react";

const PILLARS = [
  {
    prefix: "TU",
    word: "RITMO",
    icon: "/images/pillars/ritmo.svg",
    color: "#F8CA56",
    description: "Work, travel, and the daily hustle.",
  },
  {
    prefix: "TU",
    word: "FUEGO",
    icon: "/images/pillars/fuego.svg",
    color: "#E13754",
    description: "Engineered for training and peak performance.",
  },
  {
    prefix: "TU",
    word: "MOMENTO",
    icon: "/images/pillars/momento.svg",
    color: "#FAE8AC",
    description: "Built for performers and rapid recovery.",
  },
  {
    prefix: "TU",
    word: "NOCHE",
    icon: "/images/pillars/noche.svg",
    color: "#43EAF1",
    description: "Designed for late nights, festivals, and sustained hydration.",
  },
] as const;

export default function Manifesto() {
  return (
    <section className="bg-surface-dark py-32 md:py-48 px-6 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
        {/* Left — Sticky headline block (cols 1-5) */}
        <div className="md:col-span-5 mb-16 md:mb-0">
          <div className="md:sticky md:top-24 flex flex-col justify-between h-auto md:h-[calc(100vh-12rem)]">
            <motion.h2
              className="font-display text-display-xl text-brand"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              EL
              <br />
              MOVIMIENTO
              <br />
              LLEGÓ.
            </motion.h2>

            <motion.p
              className="mt-8 md:mt-0 max-w-sm text-body-sm text-brand/70 tracking-wide leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              A hydration stick brand that blends molecular hydrogen with a
              clean electrolyte system. Zero sugar, zero calorie, non-GMO.
            </motion.p>
          </div>
        </div>

        {/* Void — col 6 */}
        <div className="hidden md:block md:col-span-1" />

        {/* Right — Pillars (cols 7-12) */}
        <div className="md:col-span-6">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.word}
              className="flex flex-col sm:flex-row items-start gap-4 sm:gap-0 border-t border-brand/20 py-8 md:py-10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <div className="sm:w-[35%] shrink-0 flex items-center gap-4">
                <Image
                  src={pillar.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="w-10 h-10 md:w-12 md:h-12"
                />
                <h3
                  className="font-display text-display-sm"
                  style={{ color: pillar.color }}
                >
                  {pillar.prefix}
                  <br />
                  {pillar.word}
                </h3>
              </div>
              <p className="text-heading-md text-brand leading-snug sm:pt-1">
                {pillar.description}
              </p>
            </motion.div>
          ))}
          {/* Bottom border to close the last row */}
          <div className="border-t border-brand/20" />
        </div>
      </div>
    </section>
  );
}
