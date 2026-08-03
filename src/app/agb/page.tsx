import type { Metadata } from "next";
import { Info, MessageCircle } from "lucide-react";
import { getPhoneNumber, whatsappUrl } from "@/lib/settings";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Allgemeine Geschäftsbedingungen für das IPTV-Abonnement | IPTV Germany",
  description:
    "Lesen Sie die Allgemeinen Geschäftsbedingungen (AGB) von IPTV Germany für Ihr IPTV-Abonnement. Klare Regeln zu Nutzung, Zahlung und Garantie.",
  path: "/agb",
});

const TermsOfServicePage = async () => {
  const phone = await getPhoneNumber();
  const whatsapp = phone ? whatsappUrl(phone) : "#";
  return (
    <main className="pt-28 sm:pt-32 pb-20 sm:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-rouge-400 text-sm font-bold mb-4 uppercase tracking-wider glow-red">
            Rechtliche Informationen
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl mb-6 text-blanc-50 leading-tight">
            <span className="text-gradient">Allgemeine</span> Geschäftsbedingungen
          </h1>
          <p className="text-blanc-400 text-lg">
            Zuletzt aktualisiert: 6. Mai 2026
          </p>
        </div>

        <div className="glass rounded-2xl p-5 sm:p-8 lg:p-12 space-y-10 sm:space-y-12 animate-slide-up">
          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">1. Annahme der Bedingungen</h2>
            <p className="text-blanc-300 leading-relaxed">
              Durch den Besuch oder die Nutzung von IPTV Germany akzeptieren Sie diese Allgemeinen Geschäftsbedingungen. Wenn Sie nicht alle Bedingungen akzeptieren, dürfen Sie den Dienst nicht nutzen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">2. Beschreibung des Dienstes</h2>
            <p className="text-blanc-300 leading-relaxed">
              IPTV Germany bietet einen IPTV-Abonnementdienst, mit dem Nutzer über das Internet Zugriff auf Live-TV-Sender und Video-on-Demand-Inhalte erhalten. Die Verfügbarkeit von Inhalten kann je nach Region variieren und sich ändern.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">3. Pflichten des Nutzers</h2>
            <ul className="space-y-4">
              {[
                "Sie müssen mindestens 18 Jahre alt sein, um diesen Dienst zu nutzen.",
                "Sie sind für die Vertraulichkeit Ihres Kontos verantwortlich.",
                "Der Dienst ist ausschließlich für den persönlichen, nicht-kommerziellen Gebrauch bestimmt.",
                "Sie dürfen die angebotenen Inhalte nicht senden oder veröffentlichen.",
                "Ein Abonnement gilt nur für die angegebene Anzahl an Geräteverbindungen."
              ].map((item, index) => (
                <li key={index} className="flex gap-3 text-blanc-300">
                  <Info
                    className="mt-1 h-5 w-5 shrink-0 text-rouge-500"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">4. Zahlung und Rückerstattungen</h2>
            <p className="text-blanc-300 leading-relaxed">
              Abonnements werden im Voraus auf wiederkehrender Basis bezahlt. Alle Zahlungen sind nicht erstattungsfähig, sofern gesetzlich nicht anders vorgeschrieben oder in unserer Rückerstattungsrichtlinie festgelegt. Wir behalten uns das Recht vor, unsere Preise jederzeit mit vorheriger Ankündigung zu ändern.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">5. Haftungsbeschränkung</h2>
            <p className="text-blanc-300 leading-relaxed">
              IPTV Germany haftet nicht für indirekte, zufällige, besondere Schäden oder Folgeschäden, die aus der Nutzung oder der Unmöglichkeit der Nutzung des Dienstes entstehen.
            </p>
          </section>

          <section className="pt-8 border-t border-blanc-50/10 text-center">
            <p className="text-blanc-400 mb-6 font-medium">
              Haben Sie eine Frage zu unseren Bedingungen?
            </p>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass text-blanc-50 font-bold hover:bg-blanc-50/10 transition-all border border-blanc-50/10"
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

export default TermsOfServicePage;
