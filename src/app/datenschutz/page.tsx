import type { Metadata } from "next";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { getPhoneNumber, whatsappUrl } from "@/lib/settings";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Datenschutzerklärung — Schutz Ihrer Daten | IPTV Germany",
  description:
    "Lesen Sie die Datenschutzerklärung von IPTV Germany: welche Daten wir erheben, wie wir sie verwenden und wie wir Ihre Privatsphäre gemäß der DSGVO schützen.",
  path: "/datenschutz",
  noIndex: false,
});

const PrivacyPolicyPage = async () => {
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
            <span className="text-gradient">Datenschutzerklärung</span>
          </h1>
          <p className="text-blanc-400 text-lg">
            Zuletzt aktualisiert: 6. Mai 2026
          </p>
        </div>

        <div className="glass rounded-2xl p-5 sm:p-8 lg:p-12 space-y-10 sm:space-y-12 animate-slide-up">
          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">Einleitung</h2>
            <p className="text-blanc-300 leading-relaxed">
              Bei IPTV Germany nehmen wir Ihre Privatsphäre ernst. Diese Datenschutzerklärung erläutert, wie wir Ihre personenbezogenen Daten erheben, verwenden und schützen, wenn Sie unsere IPTV-Dienste nutzen. Mit der Nutzung von IPTV Germany akzeptieren Sie die Bedingungen dieses Dokuments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">Welche Daten wir erheben</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-blanc-50/5 border border-blanc-50/10">
                <h3 className="text-france-500 font-bold mb-2">Persönliche Daten</h3>
                <p className="text-blanc-400 text-sm">
                  Dazu gehören Ihr Name, Ihre E-Mail-Adresse und Ihre Rechnungsdaten, die während des Bestellvorgangs verwendet werden.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-blanc-50/5 border border-blanc-50/10">
                <h3 className="text-rouge-500 font-bold mb-2">Nutzungsdaten</h3>
                <p className="text-blanc-400 text-sm">
                  Wir erheben Informationen darüber, wie Sie unseren Dienst nutzen, einschließlich Gerätetyp und Ihrer Streaming-Präferenzen.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">Wie wir Ihre Daten verwenden</h2>
            <ul className="space-y-4">
              {[
                "Um unseren Dienst bereitzustellen und zu warten",
                "Um Ihre Zahlungen zu verarbeiten und Abonnements zu verwalten",
                "Um Sie über Änderungen an unserem Dienst zu informieren",
                "Um Kundenservice und technischen Support zu bieten",
                "Um Analysen oder nützliche Informationen zur Verbesserung unseres Dienstes zu erheben"
              ].map((item, index) => (
                <li key={index} className="flex gap-3 text-blanc-300">
                  <CheckCircle2
                    className="mt-1 h-5 w-5 shrink-0 text-france-500"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">Datensicherheit</h2>
            <p className="text-blanc-300 leading-relaxed">
              Wir setzen branchenübliche Sicherheitsmaßnahmen ein, um den Schutz Ihrer personenbezogenen Daten zu gewährleisten. Alle Zahlungstransaktionen laufen über gesicherte Zahlungsportale und werden nicht auf unseren Servern gespeichert. Wir verwenden Verschlüsselung (SSL), um Ihre Daten während der Übertragung zu schützen.
            </p>
          </section>

          <section className="pt-8 border-t border-blanc-50/10 text-center">
            <p className="text-blanc-400 mb-6 font-medium">
              Fragen zu unserer Datenschutzerklärung?
            </p>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-rouge-500 text-blanc-50 font-bold hover:bg-rouge-600 hover:-translate-y-0.5 transition-all glow-red"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Auf WhatsApp chatten
            </a>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
