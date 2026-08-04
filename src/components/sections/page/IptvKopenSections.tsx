import { BadgeCheck, CreditCard, Info, ShieldCheck } from "lucide-react";

const checklistItems = [
  {
    icon: ShieldCheck,
    title: "Wählen Sie einen verifizierten Anbieter",
    desc: "Prüfen Sie immer, ob der IPTV-Anbieter verifizierte Bewertungen hat, deutschsprachigen Support bietet und sichere Zahlungsmöglichkeiten wie Kreditkarte oder PayPal akzeptiert, bevor Sie ein IPTV kaufen.",
    color: "text-france-400",
    gradient: "from-france-600/25 to-france-400/10",
    border: "border-france-500/20",
  },
  {
    icon: Info,
    title: "Vergleichen Sie das Senderangebot",
    desc: "Nicht alle IPTV-Pakete enthalten dieselben Sender. Prüfen Sie, ob deutsche und internationale Sender, Sportsender und Ihre favorisierten Sender enthalten sind.",
    color: "text-rouge-400",
    gradient: "from-rouge-600/25 to-rouge-500/10",
    border: "border-rouge-500/20",
  },
  {
    icon: CreditCard,
    title: "Achten Sie auf den Gesamtpreis",
    desc: "Vergleichen Sie den Kauf von IPTV anhand des Monatspreises, nicht nur anhand des Einstiegspreises. Achten Sie auf Aktivierungskosten, einmalige Gebühren und die Bedingungen bei Verlängerung. IPTV Germany bietet stets transparente Tarife.",
    color: "text-france-400",
    gradient: "from-france-600/25 to-france-400/10",
    border: "border-france-500/20",
  },
  {
    icon: BadgeCheck,
    title: "Testen Sie immer zuerst mit einer Testphase",
    desc: "Ein seriöser IPTV-Anbieter bietet eine kostenlose Testphase. Testen Sie Bildqualität, Stabilität zu Stoßzeiten und Benutzerfreundlichkeit, bevor Sie ein volles Paket abschließen.",
    color: "text-rouge-400",
    gradient: "from-rouge-600/25 to-rouge-500/10",
    border: "border-rouge-500/20",
  },
];

export function IptvKopenChecklist() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 600px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-france-400 text-sm font-bold mb-4 uppercase tracking-wider glow-gold">
            IPTV-Kaufchecklist
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-blanc-50">
            Worauf sollten Sie beim{" "}
            <span className="text-gradient">Kauf von IPTV</span> achten?
          </h2>
          <p className="text-blanc-400 max-w-2xl mx-auto font-medium">
            Vermeiden Sie Enttäuschungen: Das sind die vier Punkte, die jeder
            kluge Käufer prüft, bevor er IPTV kauft.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {checklistItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="animate-slide-up glass rounded-3xl p-7 group border border-blanc-50/5 hover:border-france-400/20 transition-all duration-300 flex gap-5"
                style={{ animationDelay: `${0.1 * idx}s` }}
              >
                <div
                  className={`w-12 h-12 rounded-2xl bg-linear-to-br ${item.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 border ${item.border}`}
                >
                  <Icon size={22} className={item.color} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-2 text-blanc-50">
                    {item.title}
                  </h3>
                  <p className="text-blanc-400 text-sm leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const kopenFaqs = [
  {
    q: "Kann ich IPTV ohne Jahresvertrag kaufen?",
    a: "Ja. Bei IPTV Germany wählen Sie die Laufzeit — schon ab 1 Monat. Sie zahlen nur den gewünschten Zeitraum, ohne an einen Jahresvertrag gebunden zu sein. Je länger die Laufzeit, desto niedriger der Monatspreis.",
  },
  {
    q: "Was brauche ich, um IPTV zu kaufen und zu nutzen?",
    a: "Sie benötigen eine stabile Internetverbindung (mindestens 10 Mbit/s für HD) und ein kompatibles Gerät: Smart TV, Smartphone, Tablet, Fire TV Stick oder Computer. Die App zu konfigurieren dauert weniger als 5 Minuten.",
  },
  {
    q: "Ist es sicher, IPTV bei IPTV Germany zu kaufen?",
    a: "Absolut. Ihre Zahlung erfolgt über gesicherte SSL-Verbindungen mit Kreditkarte, PayPal oder Sofortüberweisung. Ihre Daten werden niemals an Dritte weitergegeben. Wir erfüllen die DSGVO (europäisches Datenschutzrecht).",
  },
];

export function IptvKopenFaq() {
  return (
    <section
      className="py-16 relative overflow-hidden bg-black/20"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 420px" }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blanc-50/10 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-rouge-400 text-sm font-bold mb-4 uppercase tracking-wider glow-red">
              IPTV kaufen — Fragen
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-3 text-blanc-50">
              Noch Fragen zum{" "}
              <span className="text-gradient">Kauf von IPTV</span>?
            </h2>
          </div>
          <div className="space-y-4">
            {kopenFaqs.map((item, idx) => (
              <details
                key={idx}
                className="group glass rounded-2xl overflow-hidden border border-blanc-50/5 open:border-france-400/30 transition-all duration-300"
              >
                <summary className="list-none flex items-center justify-between p-5 cursor-pointer">
                  <span className="font-bold text-blanc-50 pr-4 text-sm">
                    {item.q}
                  </span>
                  <span className="text-france-400 text-xl shrink-0 group-open:rotate-45 transition-transform duration-300">
                    +
                  </span>
                </summary>
                <p className="text-blanc-400 text-sm leading-relaxed font-medium px-5 pb-5">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
