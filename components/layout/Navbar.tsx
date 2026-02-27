import Image from "next/image";
import Link from "next/link";

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
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-5">
      <div className="grid grid-cols-3 items-center">
        {/* Left — Navigation Links */}
        <div className="flex items-center gap-6">
          <Link
            href="/shop"
            className="text-overline font-bold uppercase text-brand transition-opacity duration-300 hover:opacity-60"
          >
            SHOP
          </Link>
          <Link
            href="/culture"
            className="text-overline font-bold uppercase text-brand transition-opacity duration-300 hover:opacity-60"
          >
            CULTURE
          </Link>
        </div>

        {/* Center — Logo */}
        <div className="flex justify-center">
          <Link href="/">
            <Image
              src="/images/delaislalogo1.svg"
              alt="De La Isla"
              width={60}
              height={66}
              className="w-[44px] md:w-[60px] h-auto"
              priority
            />
          </Link>
        </div>

        {/* Right — Utility Icons */}
        <div className="flex items-center justify-end gap-6 text-brand">
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
    </nav>
  );
}
