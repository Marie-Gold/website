"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useDict } from "@/context/LanguageContext";

export function SectionShell({ children }: { children: ReactNode }) {
  const dict = useDict();
  return (
    <div>
      {children}
      <div className="px-6 sm:px-10 max-w-5xl mx-auto pb-20 -mt-10">
        <Link href="/" className="text-sm underline-grow text-ink/50">
          ← {dict.nav.back}
        </Link>
      </div>
    </div>
  );
}
