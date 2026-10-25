"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useDict, useLanguage } from "@/context/LanguageContext";
import { socialLinks } from "./SocialIcons";

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const dict = useDict();
  const { lang, toggle } = useLanguage();

  const links: { href: string; label: string }[] = [
    { href: "/bio", label: dict.nav.bio },
    { href: "/musique", label: dict.nav.musique },
    { href: "/spectacles", label: dict.nav.spectacles },
    { href: "/video", label: dict.nav.video },
    { href: "/presse", label: dict.nav.presse },
    { href: "/reconnaissance", label: dict.nav.reconnaissance },
    { href: "/ecriture", label: dict.nav.ecriture },
  ];

  const tone = isHome ? "text-white" : "text-ink";

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-8 left-5 sm:left-8 z-40 flex flex-col items-center gap-44 ${tone}`}
      >
        <Link
          href="/"
          className="block font-display text-sm sm:text-base tracking-[0.15em] uppercase [writing-mode:vertical-rl] rotate-180"
        >
          Marie-Gold
        </Link>

        {isHome && (
          <div className="flex flex-col items-center gap-4 sm:gap-[18px]">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="text-[15px] sm:text-base text-white/60 hover:text-white transition-colors"
              >
                <Icon aria-hidden />
              </a>
            ))}
          </div>
        )}
      </motion.div>

      <motion.nav
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-24 right-5 sm:right-8 z-40 hidden md:flex flex-col items-center gap-6 ${tone}`}
      >
        {links.map((l) => {
          const active = pathname === l.href;
          return (
            <Link
              key={l.href}
              href={l.href}
              className={`text-xs tracking-[0.2em] uppercase [writing-mode:vertical-rl] underline-grow ${
                active ? "text-burgundy" : "opacity-70 hover:opacity-100"
              }`}
            >
              {l.label}
            </Link>
          );
        })}
      </motion.nav>

      <motion.button
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        onClick={toggle}
        className={`fixed top-8 right-5 sm:right-8 z-40 text-xs tracking-[0.2em] uppercase ${tone}`}
        aria-label="Switch language"
      >
        <span className={lang === "fr" ? "text-burgundy" : "opacity-60"}>FR</span>
        <span className="opacity-40"> / </span>
        <span className={lang === "en" ? "text-burgundy" : "opacity-60"}>EN</span>
      </motion.button>

      {!isHome && (
        <Link
          href="/"
          className={`fixed top-8 right-24 sm:right-28 z-40 text-xs tracking-[0.2em] uppercase underline-grow md:hidden ${tone}`}
        >
          {dict.nav.close}
        </Link>
      )}
    </>
  );
}
