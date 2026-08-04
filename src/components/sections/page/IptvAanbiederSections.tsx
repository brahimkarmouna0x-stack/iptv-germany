import { BadgeCheck, Globe2, Headphones, Server, ShieldCheck, Zap } from "lucide-react";

const criteria = [
  {
    icon: Server,
    title: "Stabile Server mit hoher Verfügbarkeit",
    desc: "Ein guter IPTV-Anbieter arbeitet mit einer professionellen Serverinfrastruktur mit mindestens 99,5% Verfügbarkeit. IPTV Germany garantiert 99,9% dank einer redundanten Rechenzentrumsarchitektur.",
    color: "text-france-400",
    gradient: "from-france-600/25 to-france-400/10",
    border: "border-france-500/20",
  },
  {
    icon: Globe2,
    title: "Ein umfangreiches und aktuelles Senderangebot",
    desc: "Der beste IPTV-Anbieter in Deutschland bietet mehr als 31.000 Sender, darunter alle deutschen Sender, internationalen Sport und Regionalsender — ein Angebot, das täglich aktualisiert wird.",
    color: "text-rouge-400",
    gradient: "from-rouge-600/25 to-rouge-500/10",
    border: "border-rouge-500/20",
  },
  {
    icon: Headphones,
    title: "Deutschsprachiger Kundenservice",
    desc: "Ein zuverlässiger IPTV-Anbieter in Deutschland bietet Support auf Deutsch, über WhatsApp oder Chat, mit kurzer Reaktionszeit. Keine englischen Skripte oder tagelanges Warten.",
    color: "text-france-400",
    gradient: "from-france-600/25 to-france-400/10",
    border: "border-france-500/20",
  },
  {
    icon: ShieldCheck,
    title: "Sicher und transparent bezahlen",
    desc: "Zuverlässige IPTV-Anbieter akzeptieren Kreditkarte, PayPal oder Sofortüberweisung über eine gesicherte Verbindung. Keine undurchsichtigen Zahlungsmittel, keine Krypto- oder Überweisungspflicht.",
    color: "text-rouge-400",
    gradient: "from-rouge-600/25 to-rouge-500/10",
    border: "border-rouge-500/20",
  },
  {
    icon: Zap,
    title: "4K-Qualität ohne Unterbrechung",
    desc: "Ein Premium-IPTV-Anbieter liefert echte 4K-UHD-Streams mit adaptiver Bitrate. Kein Qualitätsverlust bei hoher Auslastung — selbst nicht bei großen Fußballspielen oder Autorennen.",
    color: "text-france-400",
    gradient: "from-france-600/25 to-france-400/10",
    border: "border-france-500/20",
  },
  {
    icon: BadgeCheck,
    title: "Risikofreie kostenlose Testphase",
    desc: "Die besten IPTV-Anbieter untermauern ihren Dienst mit einer kostenlosen Testphase. Testen Sie alle Sender und Funktionen, bevor Sie bezahlen — ein seriöser Anbieter scheut keine ehrliche Bewertung.",
    color: "text-rouge-400",
    gradient: "from-rouge-600/25 to-rouge-500/10",
    border: "border-rouge-500/20",
  },
];

export function IptvAanbiederCriteria() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 700px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-france-400 text-sm font-bold mb-4 uppercase tracking-wider glow-gold">
            Bewerten Sie Ihren Anbieter
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-blanc-50">
            6 Kriterien für den besten{" "}
            <span className="text-gradient">IPTV-Anbieter</span>
          </h2>
          <p className="text-blanc-400 max-w-2xl mx-auto font-medium">
            Nutzen Sie diese Kriterien, um IPTV-Anbieter zu vergleichen und die
            zuverlässigste Wahl für Ihre Situation zu treffen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {criteria.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="animate-slide-up glass rounded-3xl p-7 group border border-blanc-50/5 hover:border-france-400/20 transition-all duration-300"
                style={{ animationDelay: `${0.08 * idx}s` }}
              >
                <div
                  className={`w-12 h-12 rounded-2xl bg-linear-to-br ${item.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border ${item.border}`}
                >
                  <Icon size={22} className={item.color} aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-lg mb-3 text-blanc-50">
                  {item.title}
                </h3>
                <p className="text-blanc-400 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const aanbiederFaqs = [
  {
    q: "Wie wähle ich den besten IPTV-Anbieter in Deutschland?",
    a: "Vergleichen Sie IPTV-Anbieter anhand von Verfügbarkeit (mindestens 99%), Senderangebot (31.000+), Kundenservice (deutschsprachig, schnell) und sicherem Bezahlen. Testen Sie immer zuerst über eine kostenlose Testphase. IPTV Germany ist bei allen Kriterien die beste Wahl.",
  },
  {
    q: "Was macht IPTV Germany besser als andere Anbieter?",
    a: "IPTV Germany kombiniert das größte Senderangebot (31.000+), 4K-Qualität, 99,9% Verfügbarkeit und 24/7-WhatsApp-Support auf Deutsch — alles zu einem wettbewerbsfähigen Preis. Kein anderer Anbieter bietet dieses vollständige Paket.",
  },
  {
    q: "Ist IPTV Germany ein legaler IPTV-Anbieter?",
    a: "IPTV Germany bietet einen technischen Streamingdienst an. Bitte prüfen Sie die für Ihre Situation geltenden lokalen Vorschriften. Unsere Plattform ist technisch darauf ausgelegt, Nutzern das beste Seherlebnis zu bieten.",
  },
];

export function IptvAanbiederFaq() {
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
              IPTV-Anbieter — Fragen
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-3 text-blanc-50">
              Fragen zum{" "}
              <span className="text-gradient">IPTV-Anbieter</span>
            </h2>
          </div>
          <div className="space-y-4">
            {aanbiederFaqs.map((item, idx) => (
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
