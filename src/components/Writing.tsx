"use client";

import Image from "next/image";
import { writing } from "@/data/content";
import { useDict } from "@/context/LanguageContext";
import { Reveal } from "./Reveal";

const pill =
  "text-sm px-5 py-2.5 rounded-full border border-ink/15 hover:border-burgundy hover:text-burgundy transition-colors underline-grow";

export function Writing() {
  const dict = useDict();

  const strands = [
    {
      n: "01",
      title: dict.writing.poemsTitle,
      body: dict.writing.poemsBody,
      links: [
        { label: dict.writing.readPdf, href: writing.pdfHref },
        { label: dict.writing.githubProject, href: writing.repoHref },
      ],
    },
    {
      n: "02",
      title: dict.writing.storiesTitle,
      body: dict.writing.storiesBody,
      links: [{ label: dict.writing.substack, href: writing.substackHref }],
    },
  ];

  return (
    <section id="ecriture" className="px-6 sm:px-10 py-24 sm:py-32 max-w-4xl mx-auto">
      <Reveal>
        <span className="text-xs tracking-[0.3em] uppercase text-burgundy">{dict.writing.label}</span>
        <h2 className="font-display tracking-tight text-3xl sm:text-4xl mt-2 mb-12">
          {dict.writing.heading}
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-14 items-start">
        <div className="space-y-12">
          {strands.map((s, i) => (
            <Reveal key={s.n} delay={0.05 + i * 0.1}>
              <div className="flex gap-5 sm:gap-7">
                <span className="text-xs tracking-[0.2em] text-burgundy tabular-nums pt-1.5 shrink-0">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-display tracking-tight text-xl sm:text-2xl mb-2">
                    {s.title}
                  </h3>
                  <p className="text-ink/75 leading-relaxed mb-6">{s.body}</p>
                  <div className="flex flex-wrap gap-3">
                    {s.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={pill}
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="relative aspect-[3/4] overflow-hidden shadow-[0_20px_40px_-20px_rgba(26,22,19,0.3)]">
            <Image
              src="/images/press/photo_show.jpg"
              alt="Marie-Gold"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
