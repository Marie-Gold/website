"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useDict } from "@/context/LanguageContext";

const HERO_IMAGE = "/images/hero/marie-gold-gen-crop.jpg";

export function Hero() {
  const dict = useDict();

  const menu = [
    { href: "/bio", label: dict.nav.bio },
    { href: "/musique", label: dict.nav.musique },
    { href: "/spectacles", label: dict.nav.spectacles },
    { href: "/video", label: dict.nav.video },
    { href: "/presse", label: dict.nav.presse },
    { href: "/reconnaissance", label: dict.nav.reconnaissance },
    { href: "/ecriture", label: dict.nav.ecriture },
  ];

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col items-center justify-end pb-16 sm:pb-20 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={HERO_IMAGE}
          alt="Marie-Gold"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-black/80" />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="font-display tracking-tight text-[16vw] sm:text-[9vw] md:text-[7rem] leading-[0.95] text-center text-white"
      >
        Marie-Gold
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-4 text-center max-w-md text-sm sm:text-base text-white/80 tracking-wide"
      >
        {dict.hero.tagline}
      </motion.p>

      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.65 }}
        className="mt-10 flex flex-wrap justify-center gap-x-7 gap-y-3"
      >
        {menu.map((m) => (
          <Link
            key={m.href}
            href={m.href}
            className="text-xs tracking-[0.2em] uppercase text-white/80 underline-grow hover:text-white"
          >
            {m.label}
          </Link>
        ))}
      </motion.nav>
    </section>
  );
}
