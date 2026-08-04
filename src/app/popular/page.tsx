import type { Metadata } from "next";
import PopularContent from "@/components/sections/PopularContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Beliebte Inhalte — Filme & Serien entdecken | IPTV Germany",
  description:
    "Entdecken Sie die aktuell beliebtesten Filme und Serien sowie die Inhaltskategorien von IPTV Germany. Film-/Seriendaten bereitgestellt von TMDB.",
  path: "/popular",
});

export default function PopularPage() {
  return (
    <main className="min-h-screen">
      <PopularContent />
    </main>
  );
}
