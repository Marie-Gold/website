"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pastShows } from "@/data/content";
import { useDict } from "@/context/LanguageContext";
import { Reveal } from "./Reveal";

const INITIAL_COUNT = 8;

export function Shows() {
  const dict = useDict();
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? pastShows : pastShows.slice(0, INITIAL_COUNT);

  return (
    <section id="spectacles" className="px-6 sm:px-10 py-24 sm:py-32 max-w-4xl mx-auto">
      <Reveal>
        <span className="text-xs tracking-[0.3em] uppercase text-burgundy">{dict.shows.label}</span>
        <h2 className="font-display tracking-tight text-3xl sm:text-4xl mt-2 mb-4">
          {dict.shows.upcomingHeading}
        </h2>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="text-ink/60 text-sm mb-14 border-l-2 border-burgundy-soft pl-4">
          {dict.shows.upcomingEmpty}{" "}
          <a
            href="https://instagram.com/marie.goldgold"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-grow text-burgundy"
          >
            @marie.goldgold
          </a>
          .
        </p>
      </Reveal>

      <Reveal>
        <h3 className="font-display tracking-tight text-2xl mb-6">{dict.shows.pastHeading}</h3>
      </Reveal>

      <ul className="divide-y divide-line">
        <AnimatePresence initial={false}>
          {visible.map((s, i) => (
            <motion.li
              key={s.date + s.venue}
              initial={i >= INITIAL_COUNT ? { opacity: 0, height: 0 } : false}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.35 }}
              className="py-4 flex flex-col sm:flex-row sm:items-baseline sm:gap-6 overflow-hidden"
            >
              <span className="text-sm text-ink/50 sm:w-40 shrink-0">
                {s.date}
              </span>
              {s.link ? (
                <a
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-grow text-sm sm:text-base"
                >
                  {s.venue}
                </a>
              ) : (
                <span className="text-sm sm:text-base">{s.venue}</span>
              )}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {pastShows.length > INITIAL_COUNT && (
        <button
          onClick={() => setExpanded((e) => !e)}
          className="mt-8 text-sm underline-grow text-burgundy"
        >
          {expanded
            ? dict.shows.showLess
            : dict.shows.showMore(pastShows.length - INITIAL_COUNT)}
        </button>
      )}
    </section>
  );
}
