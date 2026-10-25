import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Nav } from "@/components/Nav";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const garamond = localFont({
  src: "../../public/fonts/ITCGaramondStd-BkNarrow.otf",
  variable: "--font-garamond",
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marie-Gold",
  description:
    "Marie-Gold - music, poetry, arts. Multidisciplinary artist.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${garamond.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <div className="grain" />
        <LanguageProvider>
          <Nav />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
