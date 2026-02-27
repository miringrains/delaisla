import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bigBird = localFont({
  src: [
    {
      path: "../fonts/big-bird/TAYBigBirdRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/big-bird/TAYBigBirdRegular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-big-bird",
  display: "swap",
});

const manrope = localFont({
  src: [
    {
      path: "../fonts/manrope/Manrope-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/manrope/Manrope-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/manrope/Manrope-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/manrope/Manrope-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/manrope/Manrope-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "De La Isla — Ancestral Hydration",
  description:
    "Premium ancestral-futurist hydration. Powered by the Sun. Diseñado por latinos.",
  openGraph: {
    title: "De La Isla — Ancestral Hydration",
    description:
      "Premium ancestral-futurist hydration. Powered by the Sun. Diseñado por latinos.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bigBird.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}
