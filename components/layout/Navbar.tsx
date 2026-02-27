"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

function SearchIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="square"
      strokeLinejoin="miter"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="16.5" y1="16.5" x2="21" y2="21" />
    </svg>
  );
}

function AccountIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="square"
      strokeLinejoin="miter"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="square"
      strokeLinejoin="miter"
    >
      <path d="M6 2L3 6v14h18V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

export default function Navbar() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const lightSections = document.querySelectorAll("[data-theme='light']");
    if (!lightSections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const anyLight = entries.some(
          (entry) => entry.isIntersecting
        );
        setIsLight(anyLight);
      },
      {
        rootMargin: "-1px 0px -95% 0px",
      }
    );

    lightSections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const textColor = isLight ? "#08090A" : "#f9d9c2";

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-5"
      animate={{ color: textColor }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div
        className="absolute inset-0 h-[120%] -z-10 backdrop-blur-[2px] pointer-events-none"
        style={{
          maskImage: "linear-gradient(to bottom, black 20%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 20%, transparent 100%)",
        }}
      />

      <div className="grid grid-cols-3 items-center">
        {/* Left — Hamburger (mobile) / Text links (desktop) */}
        <div className="flex items-center gap-6">
          <button
            type="button"
            aria-label="Menu"
            className="md:hidden flex flex-col justify-center gap-[6px] transition-opacity duration-300 hover:opacity-60"
          >
            <span className="block w-7 h-[1px] bg-current" />
            <span className="block w-7 h-[1px] bg-current" />
          </button>
          <Link
            href="/shop"
            className="hidden md:block text-overline font-bold uppercase transition-opacity duration-300 hover:opacity-60"
            style={{ color: "inherit" }}
          >
            SHOP
          </Link>
          <Link
            href="/culture"
            className="hidden md:block text-overline font-bold uppercase transition-opacity duration-300 hover:opacity-60"
            style={{ color: "inherit" }}
          >
            CULTURE
          </Link>
        </div>

        {/* Center — Logo */}
        <div className="flex justify-center">
          <Link href="/" className="relative w-[44px] md:w-[60px] h-[49px] md:h-[66px]">
            <Image
              src="/images/delaislalogo1.svg"
              alt="De La Isla"
              width={60}
              height={66}
              className="absolute inset-0 w-full h-full transition-opacity duration-400"
              style={{ opacity: isLight ? 0 : 1 }}
              priority
            />
            <Image
              src="/images/delaislalogo-dark.svg"
              alt=""
              width={60}
              height={66}
              aria-hidden="true"
              className="absolute inset-0 w-full h-full transition-opacity duration-400"
              style={{ opacity: isLight ? 1 : 0 }}
            />
          </Link>
        </div>

        {/* Right — Utility Icons */}
        <div className="flex items-center justify-end gap-6">
          <button
            type="button"
            aria-label="Search"
            className="transition-opacity duration-300 hover:opacity-60"
          >
            <SearchIcon />
          </button>
          <button
            type="button"
            aria-label="Account"
            className="hidden md:block transition-opacity duration-300 hover:opacity-60"
          >
            <AccountIcon />
          </button>
          <button
            type="button"
            aria-label="Cart"
            className="transition-opacity duration-300 hover:opacity-60"
          >
            <CartIcon />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
