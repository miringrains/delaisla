"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/delaislamain.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Grain Texture — looping GIF, multiply blend, below content */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/grain.gif"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover pointer-events-none opacity-[0.06] mix-blend-multiply"
      />

      {/* Content */}
      <div className="absolute bottom-16 left-6 md:bottom-24 md:left-10 z-10 max-w-3xl">
        <motion.h1
          className="font-display text-display-hero text-brand"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          HYDRATED
          <br />
          RHYTHM.
        </motion.h1>

        <motion.p
          className="mt-4 text-body-lg text-brand/70 font-body md:mt-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          Powered by the Sun. Diseñado por latinos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <Link
            href="/shop"
            className="mt-8 inline-block bg-brand px-8 py-4 text-overline font-bold uppercase text-text-inverse transition-all duration-300 hover:bg-transparent hover:text-brand hover:ring-1 hover:ring-brand md:mt-10"
          >
            SHOP THE SUN
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
