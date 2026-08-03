import type { Metadata } from "next";
import { getPhoneNumber, whatsappUrl } from "@/lib/settings";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Cookie-Richtlinie — Transparenter Umgang mit Cookies | IPTV Germany",
  description:
    "Erfahren Sie, wie IPTV Germany Cookies für notwendige Funktionen, Analysen und Präferenzen verwendet. Cookie-Richtlinie gemäß der DSGVO.",
  path: "/cookie-richtlinie",
});

const CookiePolicyPage = async () => {
  const phone = await getPhoneNumber();
  const whatsapp = phone ? whatsappUrl(phone) : "#";
  return (
    <main className="pt-28 sm:pt-32 pb-20 sm:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-france-400 text-sm font-bold mb-4 uppercase tracking-wider glow-gold">
            Rechtliche Informationen
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl mb-6 text-blanc-50 leading-tight">
            Cookie-Richtlinie
          </h1>
          <p className="text-blanc-400 text-lg">
            Zuletzt aktualisiert: 6. Mai 2026
          </p>
        </div>

        <div className="glass rounded-2xl p-5 sm:p-8 lg:p-12 space-y-10 sm:space-y-12 animate-slide-up">
          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">
              Was sind Cookies?
            </h2>
            <p className="text-blanc-300 leading-relaxed">
              Cookies sind kleine Textdateien, die auf Ihrem
              Gerät gespeichert werden, wenn Sie eine Website besuchen. Sie helfen der Seite,
              Ihr Gerät wiederzuerkennen und Informationen über
              Ihren Besuch zu speichern, etwa Ihre bevorzugte Sprache und andere Einstellungen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">
              Wie wir Cookies verwenden
            </h2>
            <p className="text-blanc-300 mb-6">
              Wir verwenden Cookies für folgende Zwecke:
            </p>
            <div className="grid gap-4">
              {[
                {
                  title: "Notwendige Cookies",
                  desc: "Unverzichtbar für die einwandfreie Funktion der Seite, etwa Sitzungsverwaltung und Sicherheit.",
                },
                {
                  title: "Präferenz-Cookies",
                  desc: "Speichern Ihre Einstellungen und Auswahl für ein persönlicheres Erlebnis.",
                },
                {
                  title: "Analyse-Cookies",
                  desc: "Helfen uns zu verstehen, wie Besucher unsere Seite nutzen, indem sie anonyme Daten erheben.",
                },
              ].map((cookie, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-blanc-50/5 border border-blanc-50/10"
                >
                  <h3 className="text-blanc-50 font-bold mb-1">
                    {cookie.title}
                  </h3>
                  <p className="text-blanc-400 text-sm">{cookie.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">
              Cookies verwalten
            </h2>
            <p className="text-blanc-300 leading-relaxed">
              Die meisten Webbrowser erlauben Ihnen, Cookies
              über ihre Einstellungen zu verwalten. Sie können alle Cookies blockieren
              oder nur die von Drittanbietern. Bitte beachten Sie, dass das Deaktivieren notwendiger Cookies
              die Funktion unseres Dienstes beeinträchtigen kann.
            </p>
          </section>

          <section className="pt-8 border-t border-blanc-50/10">
            <h2 className="text-xl font-bold text-blanc-50 mb-4">
              Kontakt aufnehmen
            </h2>
            <p className="text-blanc-300">
              Haben Sie Fragen zu unserer Verwendung von Cookies?
              Kontaktieren Sie uns über{" "}
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-france-500 hover:underline"
              >
                WhatsApp
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default CookiePolicyPage;
