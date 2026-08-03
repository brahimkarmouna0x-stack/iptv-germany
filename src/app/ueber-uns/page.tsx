import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";
import PageHero from "@/components/sections/page/PageHero";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Über uns | IPTV Germany — Der IPTV-Anbieter für Deutschland",
  description:
    "Lernen Sie IPTV Germany kennen, den zuverlässigsten Premium-IPTV-Anbieter für Deutschland. Wir bieten 24/7-Support und 99,9 % Verfügbarkeit.",
  path: "/ueber-uns",
});

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: "Home", url: "https://iptv-germany.com" },
            { name: "Über uns", url: "https://iptv-germany.com/ueber-uns" },
          ])),
        }}
      />
      <main className="flex-1 bg-france-950">
      <PageHero
        hero={{
          headline: "Über IPTV Germany",
          subheadline:
            "Der zuverlässigste Premium-IPTV-Anbieter für Deutschland. Wir stehen für Qualität, Stabilität und Kundenzufriedenheit rund um die Uhr.",
          cta: { label: "Abonnements ansehen", href: "/#pakketten" },
          badgeTags: ["Zuverlässig", "Support 24/7", "Premium 4K"],
        }}
      >
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Über uns", href: "/ueber-uns" },
          ]}
        />
      </PageHero>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-blanc-50">
          <div className="prose prose-invert lg:prose-lg mx-auto prose-a:text-france-400 hover:prose-a:text-france-300">
            <h2>Wer wir sind</h2>
            <p>
              Bei <strong>IPTV Germany</strong> setzen wir uns dafür ein, Zuschauern in ganz Deutschland das ultimative TV-Erlebnis zu bieten.
              Als führender IPTV-Anbieter verbinden wir moderne Streaming-Technologie mit unübertroffenem Kundenservice.
            </p>

            <h2>Unsere Mission</h2>
            <p>
              Unsere Mission ist einfach: unbegrenzte Unterhaltung für jeden zugänglich zu machen, ohne Unterbrechungen, ohne versteckte Kosten und mit der höchsten Bildqualität (4K und 8K HDR).
            </p>

            <h2>Warum uns wählen?</h2>
            <ul>
              <li><strong>Zuverlässigkeit:</strong> Unsere Server bieten eine garantierte Verfügbarkeit von 99,9 %.</li>
              <li><strong>Qualität:</strong> Wir bieten Tausende Live-Sender und eine umfangreiche VOD-Bibliothek in gestochen scharfem 4K.</li>
              <li><strong>Kundenservice:</strong> Unser Team steht Ihnen rund um die Uhr per WhatsApp bei Installation und technischen Fragen zur Seite.</li>
            </ul>

            <h2>Kontakt aufnehmen</h2>
            <p>
              Haben Sie Fragen oder möchten Sie mehr über unsere Dienste erfahren? Besuchen Sie unsere <a href="/support">Support-Seite</a> oder kontaktieren Sie uns direkt über WhatsApp.
            </p>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
