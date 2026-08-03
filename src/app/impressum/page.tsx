import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";
import PageHero from "@/components/sections/page/PageHero";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Impressum | IPTV Germany",
  description:
    "Impressum und Anbieterkennzeichnung von IPTV Germany gemäß § 5 TMG und § 18 Abs. 2 MStV.",
  path: "/impressum",
  noIndex: true,
});

/**
 * PLACEHOLDER LEGAL PAGE — do not deploy to production before every
 * [PLATZHALTER] field below is replaced with the real, verified company
 * details. A German commercial website is legally required to publish a
 * complete Impressum (§ 5 TMG) naming the operating entity, a postal address,
 * contact details, and — for editorial/journalistic content — a person
 * responsible under § 18 Abs. 2 MStV. None of this may be invented.
 */
const PlaceholderNotice = () => (
  <div className="mb-10 flex gap-3 rounded-2xl border border-rouge-500/30 bg-rouge-500/10 p-5 text-sm text-blanc-200">
    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-rouge-400" aria-hidden="true" />
    <p>
      Diese Seite enthält Platzhalter. Bitte ersetzen Sie alle mit{" "}
      <strong>[PLATZHALTER]</strong> markierten Angaben durch die echten
      Unternehmensdaten, bevor die Website veröffentlicht wird.
    </p>
  </div>
);

export default function ImpressumPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: "Home", url: "https://iptv-germany.com" },
            { name: "Impressum", url: "https://iptv-germany.com/impressum" },
          ])),
        }}
      />
      <main className="flex-1 bg-france-950">
        <PageHero
          hero={{
            headline: "Impressum",
            subheadline: "Anbieterkennzeichnung gemäß § 5 TMG und § 18 Abs. 2 MStV.",
            cta: { label: "Kontakt aufnehmen", href: "/support/contact" },
            badgeTags: ["Rechtliche Informationen"],
          }}
        >
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Impressum", href: "/impressum" },
            ]}
          />
        </PageHero>

        <section className="py-20">
          <div className="container mx-auto max-w-4xl px-4 text-blanc-50">
            <PlaceholderNotice />

            <div className="glass rounded-2xl p-5 sm:p-8 lg:p-12 space-y-10">
              <section>
                <h2 className="mb-4 text-2xl font-bold text-blanc-50">
                  Angaben gemäß § 5 TMG
                </h2>
                <p className="leading-relaxed text-blanc-300">
                  [PLATZHALTER – Firmenname / Rechtsform]
                  <br />
                  [PLATZHALTER – Straße und Hausnummer]
                  <br />
                  [PLATZHALTER – Postleitzahl und Ort]
                  <br />
                  Deutschland
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-blanc-50">Vertreten durch</h2>
                <p className="leading-relaxed text-blanc-300">
                  [PLATZHALTER – Name der Geschäftsführung / des Inhabers]
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-blanc-50">Kontakt</h2>
                <p className="leading-relaxed text-blanc-300">
                  Telefon: [PLATZHALTER]
                  <br />
                  E-Mail: [PLATZHALTER]
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-blanc-50">
                  Registereintrag
                </h2>
                <p className="leading-relaxed text-blanc-300">
                  Eintragung im Handelsregister.
                  <br />
                  Registergericht: [PLATZHALTER]
                  <br />
                  Registernummer: [PLATZHALTER]
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-blanc-50">
                  Umsatzsteuer-ID
                </h2>
                <p className="leading-relaxed text-blanc-300">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                  <br />
                  [PLATZHALTER – USt-IdNr.]
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-blanc-50">
                  Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
                </h2>
                <p className="leading-relaxed text-blanc-300">
                  [PLATZHALTER – Name, Anschrift]
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-blanc-50">
                  EU-Streitschlichtung
                </h2>
                <p className="leading-relaxed text-blanc-300">
                  Die Europäische Kommission stellt eine Plattform zur
                  Online-Streitbeilegung (OS) bereit:{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-france-400 hover:underline"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                  . Unsere E-Mail-Adresse finden Sie oben. Wir sind nicht
                  verpflichtet und nicht bereit, an Streitbeilegungsverfahren
                  vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
