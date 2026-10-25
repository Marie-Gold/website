"use client";

import Image from "next/image";
import { partners } from "@/data/content";

export function Footer() {
  return (
    <footer>
      <div className="border-t border-ink/10 px-6 sm:px-10 py-14">
        <ul className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-14">
          {partners.map((p) => (
            <li key={p.name}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block opacity-60 hover:opacity-100 transition-opacity"
              >
                <Image
                  src={p.src}
                  alt={p.name}
                  width={p.w}
                  height={p.h}
                  className="h-8 sm:h-10 w-auto object-contain invert"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
