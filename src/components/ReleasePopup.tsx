"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const RELEASE = {
  title: "banale baddie",
  cover: "/images/albums/banale-baddie.jpg",
  link: "https://ffm.to/banalebaddie",
};

const COPY = {
  fr: { kicker: "Nouveau single", out: "disponible maintenant", listen: "Écouter", close: "Fermer" },
  en: { kicker: "New single", out: "out now", listen: "Listen", close: "Close" },
};

export function ReleasePopup() {
  const { lang } = useLanguage();
  const copy = COPY[lang];
  const [open, setOpen] = useState(false);

  // Shown once per visit; closing it keeps it closed until the tab is reopened.
  useEffect(() => {
    let seen = false;
    try {
      seen = window.sessionStorage.getItem("mg-release-seen") === RELEASE.title;
    } catch {}
    if (!seen) setOpen(true);
  }, []);

  const close = () => {
    setOpen(false);
    try {
      window.sessionStorage.setItem("mg-release-seen", RELEASE.title);
    } catch {}
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={RELEASE.title}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-sm bg-paper text-ink"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              aria-label={copy.close}
              className="absolute right-3 top-2 z-10 text-2xl leading-none text-white/90 hover:text-white"
            >
              ×
            </button>
            <div className="relative aspect-square w-full">
              <Image src={RELEASE.cover} alt={RELEASE.title} fill sizes="384px" className="object-cover" />
            </div>
            <div className="px-6 py-6 text-center">
              <p className="text-[0.7rem] tracking-[0.2em] uppercase text-burgundy">{copy.kicker}</p>
              <h2 className="mt-1 font-display text-4xl leading-tight">{RELEASE.title}</h2>
              <p className="font-display text-lg italic text-ink/70">~{copy.out}~</p>
              <a
                href={RELEASE.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block bg-burgundy px-6 py-3 text-xs tracking-[0.2em] uppercase text-white hover:opacity-90"
              >
                {copy.listen}
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
