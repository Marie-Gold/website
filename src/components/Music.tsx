"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { albums, socials } from "@/data/content";
import { useDict } from "@/context/LanguageContext";
import { Reveal } from "./Reveal";

const streamLinks = [
  { label: "Spotify", href: socials.spotify },
  { label: "Bandcamp", href: socials.bandcamp },
  { label: "Apple Music", href: socials.appleMusic },
];

export function Music() {
  const dict = useDict();

  return (
    <section id="musique" className="px-6 sm:px-10 py-24 sm:py-32 max-w-5xl mx-auto">
      <Reveal>
        <span className="text-xs tracking-[0.3em] uppercase text-burgundy">{dict.music.label}</span>
        <h2 className="font-display tracking-tight text-3xl sm:text-4xl mt-2 mb-10">
          {dict.music.heading}
        </h2>
      </Reveal>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
        {albums.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.05}>
            <a href={a.href} target="_blank" rel="noopener noreferrer" className="group block">
              <motion.div
                whileHover={{ scale: 1.03, rotate: -0.5 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-square overflow-hidden shadow-[0_15px_35px_-15px_rgba(26,22,19,0.3)]"
              >
                <Image
                  src={a.cover}
                  alt={a.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 45vw, 30vw"
                />
              </motion.div>
              <p className="mt-3 text-sm font-medium">{a.title}</p>
              <p className="text-xs text-ink/50">
                {a.type} · {a.year}
              </p>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-14 flex flex-wrap gap-4">
          {streamLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-grow text-sm px-5 py-2.5 rounded-full border border-ink/15 hover:border-burgundy hover:text-burgundy transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </Reveal>

    </section>
  );
}
