"use client";

import Image from "next/image";
import { useDict } from "@/context/LanguageContext";
import { Reveal } from "./Reveal";

export function Biography() {
  const dict = useDict();
  return (
    <section id="bio" className="px-6 sm:px-10 py-24 sm:py-32 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-[1fr_1.3fr] gap-10 md:gap-16 items-start">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden md:sticky md:top-28">
            <Image
              src="/images/press/stage-crowd.jpg"
              alt="Marie-Gold, portrait"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <h2 className="text-xs tracking-[0.3em] uppercase text-burgundy mb-8">{dict.bio.label}</h2>
          </Reveal>
          {dict.bio.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.05}>
              <p className="text-ink/80 leading-relaxed mb-5 text-[0.98rem] sm:text-base">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
