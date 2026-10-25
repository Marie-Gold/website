"use client";

import { press, pressMentions } from "@/data/content";
import { useDict } from "@/context/LanguageContext";
import { Reveal } from "./Reveal";

export function Press() {
  const dict = useDict();
  return (
    <section id="presse" className="px-6 sm:px-10 py-24 sm:py-32 max-w-4xl mx-auto">
      <Reveal>
        <span className="text-xs tracking-[0.3em] uppercase text-burgundy">{dict.press.label}</span>
        <h2 className="font-display tracking-tight text-3xl sm:text-4xl mt-2 mb-12">
          {dict.press.heading}
        </h2>
      </Reveal>

      <Reveal delay={0.08}>
        <a
          href="/files/presskit-marie-gold.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mb-12 text-sm px-5 py-2.5 rounded-full border border-burgundy/40 text-burgundy hover:bg-burgundy hover:text-paper transition-colors"
        >
          {dict.press.downloadKit}
        </a>
      </Reveal>

      <div className="space-y-10">
        {press.map((p, i) => (
          <Reveal key={p.outlet} delay={i * 0.06}>
            <blockquote className="border-l-2 border-burgundy pl-5 sm:pl-6">
              <p className="font-display tracking-tight text-lg sm:text-xl leading-snug text-ink/90">
                &ldquo;{p.quote}&rdquo;
              </p>
              <cite className="block mt-2 text-xs tracking-widest uppercase not-italic">
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-burgundy underline-grow"
                  >
                    {p.outlet} - {dict.press.readArticle}
                  </a>
                ) : (
                  <span className="text-ink/45">{p.outlet}</span>
                )}
              </cite>
            </blockquote>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <p className="mt-14 text-xs uppercase tracking-widest text-ink/40 mb-3">
          {dict.press.alsoIn}
        </p>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
          {pressMentions.map((m) => (
            <li key={m.name} className="text-sm leading-snug">
              {m.href ? (
                <a
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink/70 hover:text-burgundy transition-colors underline-grow"
                >
                  {m.name} <span className="text-burgundy">↗</span>
                </a>
              ) : (
                <span className="text-ink/45">{m.name}</span>
              )}
            </li>
          ))}
        </ul>
      </Reveal>

    </section>
  );
}
