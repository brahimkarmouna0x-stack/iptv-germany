import {
  BadgeCheck,
  HeadphonesIcon,
  MonitorPlay,
  PackageCheck,
  Server,
  Tv2,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: Tv2,
    title: "IPTV Germany bietet das größte Angebot in Deutschland",
    description:
      "Mit mehr als 31.000 Live-Sendern und 140.000+ Filmen und Serien bietet IPTV Germany das umfassendste IPTV-Paket auf dem Markt — von deutschen Sendern bis zu internationalen Nachrichtenkanälen und großen Sportereignissen.",
    color: "text-france-400",
    gradient: "from-france-600/25 to-france-400/10",
    border: "border-france-500/20",
  },
  {
    number: "02",
    icon: Server,
    title: "IPTV Germany garantiert 99,9% Verfügbarkeit",
    description:
      "IPTV Germany läuft auf redundanten Hochverfügbarkeits-Servern, verteilt auf mehrere Rechenzentren. Bei einer Störung schalten wir automatisch um, damit Sie keine Sekunde verpassen.",
    color: "text-rouge-400",
    gradient: "from-rouge-600/25 to-rouge-500/10",
    border: "border-rouge-500/20",
  },
  {
    number: "03",
    icon: MonitorPlay,
    title: "IPTV Germany liefert echte 4K-Qualität",
    description:
      "Keine Kompressionsartefakte und keine verpixelten Kanten. IPTV Germany streamt in echtem 4K Ultra HD mit HDR-Unterstützung, damit jeder Film, jede Serie und jedes Live-Spiel spektakulär aussieht.",
    color: "text-france-400",
    gradient: "from-france-600/25 to-france-400/10",
    border: "border-france-500/20",
  },
  {
    number: "04",
    icon: HeadphonesIcon,
    title: "IPTV Germany hilft Ihnen rund um die Uhr per WhatsApp",
    description:
      "Unser Support-Team ist Tag und Nacht per WhatsApp erreichbar, mit einer durchschnittlichen Antwortzeit von unter 5 Minuten. IPTV Germany sorgt dafür, dass Ihnen immer schnell geholfen wird.",
    color: "text-rouge-400",
    gradient: "from-rouge-600/25 to-rouge-500/10",
    border: "border-rouge-500/20",
  },
  {
    number: "05",
    icon: BadgeCheck,
    title: "IPTV Germany ohne Verpflichtungen oder versteckte Kosten",
    description:
      "Kein Jahresvertrag, keine Installationskosten, keine versteckten Gebühren. IPTV Germany arbeitet mit voller Transparenz: Sie zahlen nur, was Sie nutzen, und kündigen, wann Sie möchten.",
    color: "text-france-400",
    gradient: "from-france-600/25 to-france-400/10",
    border: "border-france-500/20",
  },
  {
    number: "06",
    icon: PackageCheck,
    title: "IPTV Germany ist sofort nach der Bestellung aktiv",
    description:
      "Direkt nach Ihrer Zahlung erhalten Sie Ihre persönlichen Zugangsdaten per E-Mail. Die Aktivierung von IPTV Germany dauert im Schnitt weniger als 5 Minuten — keine Wartezeit, kein Techniker vor Ort.",
    color: "text-rouge-400",
    gradient: "from-rouge-600/25 to-rouge-500/10",
    border: "border-rouge-500/20",
  },
];

const WhyIPTVStreaming = () => {
  return (
    <section
      id="waarom-iptv-streaming"
      className="py-24 relative overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 750px" }}
    >
      <div className="absolute left-0 top-1/3 w-[400px] h-[400px] bg-rouge-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-rouge-400 text-sm font-bold mb-4 uppercase tracking-wider glow-red">
            Warum IPTV Germany
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-blanc-50">
            6 Gründe, sich für{" "}
            <span className="text-gradient">IPTV Germany</span> zu entscheiden
          </h2>
          <p className="text-blanc-400 max-w-2xl mx-auto font-medium">
            IPTV Germany kombiniert ein unvergleichliches Senderangebot,
            4K-Qualität und persönlichen Service — zu einem festen, günstigen
            Preis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="animate-slide-up glass rounded-3xl p-7 group border border-blanc-50/5 hover:border-france-400/20 transition-all duration-300"
                style={{ animationDelay: `${0.08 * idx}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-linear-to-br ${item.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 border ${item.border}`}
                  >
                    <Icon size={22} className={item.color} aria-hidden="true" />
                  </div>
                  <span className="text-4xl font-black text-blanc-50/8 leading-none mt-1 select-none">
                    {item.number}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg mb-3 text-blanc-50 leading-snug">
                  {item.title}
                </h3>
                <p className="text-blanc-400 text-sm leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyIPTVStreaming;
