"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { videos, shortFilms, rapBattles, socials } from "@/data/content";
import { useDict } from "@/context/LanguageContext";
import { Reveal } from "./Reveal";

function GroupHeading({ children }: { children: React.ReactNode }) {
  return (
    <Reveal>
      <h3 className="text-xs tracking-[0.3em] uppercase text-burgundy mb-6 pb-3 border-b border-ink/10">
        {children}
      </h3>
    </Reveal>
  );
}

export function VideoSection() {
  const dict = useDict();
  const [active, setActive] = useState<string | null>(null);

  const thumb = (id: string, title: string) => (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="relative aspect-video overflow-hidden bg-ink/5"
    >
      <img
        src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-ink/0 group-hover:bg-ink/20 transition-colors">
        <span className="w-10 h-10 rounded-full bg-paper/90 flex items-center justify-center text-sm translate-x-[1px] opacity-0 group-hover:opacity-100 transition-opacity">
          ▶
        </span>
      </div>
    </motion.div>
  );

  return (
    <section id="video" className="px-6 sm:px-10 py-24 sm:py-32 max-w-5xl mx-auto">
      <Reveal>
        <span className="text-xs tracking-[0.3em] uppercase text-burgundy">{dict.video.label}</span>
        <h2 className="font-display tracking-tight text-3xl sm:text-4xl mt-2 mb-14">
          {dict.video.heading}
        </h2>
      </Reveal>

      {/* Vidéoclips */}
      <GroupHeading>{dict.video.videoclips}</GroupHeading>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 mb-20">
        {videos.map((v, i) => (
          <Reveal key={v.youtubeId} delay={i * 0.04}>
            <button
              onClick={() => setActive(v.youtubeId)}
              className="group block w-full text-left"
            >
              {thumb(v.youtubeId, v.title)}
              <p className="mt-2 text-sm">{v.title}</p>
            </button>
          </Reveal>
        ))}
      </div>

      {/* Rap battles */}
      <GroupHeading>{dict.video.rapBattles}</GroupHeading>
      <div className="grid sm:grid-cols-2 gap-5 sm:gap-8 mb-20">
        {rapBattles.map((v, i) => (
          <Reveal key={v.youtubeId} delay={i * 0.05}>
            <button
              onClick={() => setActive(v.youtubeId)}
              className="group block w-full text-left"
            >
              {thumb(v.youtubeId, v.title)}
              <p className="mt-2 text-sm">{v.title}</p>
            </button>
          </Reveal>
        ))}
      </div>

      {/* Court-métrage / short film - featured */}
      <GroupHeading>{dict.video.shortFilm}</GroupHeading>
      <div className="grid sm:grid-cols-2 gap-6 items-center">
        {shortFilms.map((f) => (
          <Reveal key={f.youtubeId}>
            <button
              onClick={() => setActive(f.youtubeId)}
              className="group block w-full text-left sm:col-span-1"
            >
              {thumb(f.youtubeId, f.title)}
              <p className="mt-3 font-display text-xl sm:text-2xl tracking-tight">{f.title}</p>
              <p className="text-xs text-ink/50 mt-1">{f.subtitle}</p>
            </button>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <a
          href={socials.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-14 text-sm underline-grow text-burgundy"
        >
          {dict.video.channelLink}
        </a>
      </Reveal>

      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 bg-ink/90 flex items-center justify-center p-6 cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl aspect-video"
          >
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${active}?autoplay=1`}
              title="Marie-Gold"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
