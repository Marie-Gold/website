"use client";

import { recognitions } from "@/data/content";
import { useDict, useLanguage } from "@/context/LanguageContext";
import { Reveal } from "./Reveal";

export function Recognition() {
  const dict = useDict();
  const { lang } = useLanguage();

  return (
    <section
      id="reconnaissance"
      className="px-6 sm:px-10 py-24 sm:py-32 max-w-4xl mx-auto"
    >
      <Reveal>
        <span className="text-xs tracking-[0.3em] uppercase text-burgundy">
          {dict.recognition.label}
        </span>
        <h2 className="font-display tracking-tight text-3xl sm:text-4xl mt-2 mb-12">
          {dict.recognition.heading}
        </h2>
      </Reveal>

      <ol className="border-t border-ink/10">
        {[...recognitions]
          .sort((a, b) => Number(b.year) - Number(a.year))
          .map((r, i) => {
            const copy = r[lang];
            const body = (
              <>
                <span className="text-xs tracking-[0.2em] uppercase text-burgundy tabular-nums shrink-0 sm:w-20 pt-1">
                  {r.year || "-"}
                </span>
                <span className="block">
                  <span className="font-display tracking-tight text-lg sm:text-xl leading-snug block">
                    {copy.title}
                  </span>
                  {copy.detail && (
                    <span className="block mt-1 text-sm text-ink/55 leading-relaxed">
                      {copy.detail}
                    </span>
                  )}
                </span>
              </>
            );

            return (
              <li key={r.year + copy.title} className="border-b border-ink/10">
                <Reveal delay={i * 0.05}>
                  {r.href ? (
                    <a
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col sm:flex-row gap-1 sm:gap-8 py-6 group hover:text-burgundy transition-colors"
                    >
                      {body}
                    </a>
                  ) : (
                    <div className="flex flex-col sm:flex-row gap-1 sm:gap-8 py-6">
                      {body}
                    </div>
                  )}
                </Reveal>
              </li>
            );
          })}
      </ol>
    </section>
  );
}
