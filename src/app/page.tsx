import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { ReleasePopup } from "@/components/ReleasePopup";

export default function Home() {
  return (
    <>
      <ReleasePopup />
      <Hero />
      <Footer />
    </>
  );
}
