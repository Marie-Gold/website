"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { t } from "@/data/translations";

export type Lang = "fr" | "en";

const LanguageContext = createContext<{
  lang: Lang;
  toggle: () => void;
}>({ lang: "en", toggle: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("mg-lang");
    if (stored === "fr" || stored === "en") setLang(stored);
  }, []);

  const toggle = () => {
    setLang((prev) => {
      const next = prev === "fr" ? "en" : "fr";
      try {
        window.localStorage.setItem("mg-lang", next);
      } catch {}
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useDict() {
  const { lang } = useLanguage();
  return t[lang];
}
