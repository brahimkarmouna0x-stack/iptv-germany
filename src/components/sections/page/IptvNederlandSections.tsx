import { CheckCircle2 } from "lucide-react";

const nlChannelGroups = [
  {
    category: "Deutsche Sender",
    channels: ["Vollprogramme HD", "Öffentlich-rechtliche Sender HD", "Film & Serien HD", "Unterhaltung HD", "Kultur HD", "Regionale Sender DE"],
    color: "text-france-400",
    border: "border-france-500/20",
    bg: "bg-france-500/5",
  },
  {
    category: "Internationale Sender",
    channels: ["Öffentliche Sender HD", "Kommerzielle Sender HD", "Unterhaltung HD", "Familiensender HD", "Lifestyle-Sender HD", "Regionale Sender Int."],
    color: "text-rouge-400",
    border: "border-rouge-500/20",
    bg: "bg-rouge-500/5",
  },
  {
    category: "Sport & Nachrichten",
    channels: ["Live-Sport HD", "Fußball HD", "Motorsport HD", "Nachrichtensender", "Internationale Nachrichten", "24/7-Nachrichten"],
    color: "text-france-400",
    border: "border-france-500/20",
    bg: "bg-france-500/5",
  },
  {
    category: "Regional-TV (DE)",
    channels: ["Regionale Sender HD", "Lokale Nachrichten", "Bundesländer-Sender", "Regionale Nachrichten", "Regionale Kultur", "Regionaler Sport"],
    color: "text-rouge-400",
    border: "border-rouge-500/20",
    bg: "bg-rouge-500/5",
  },
];

export function IptvNederlandZenders() {
  return (
    <section
      className="py-24 relative overflow-hidden bg-black/25"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 660px" }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blanc-50/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-blanc-50/10 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-france-400 text-sm font-bold mb-4 uppercase tracking-wider glow-gold">
            IPTV-Sender Deutschland
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-blanc-50">
            Alle{" "}
            <span className="text-gradient">deutschen & internationalen Sender</span> per IPTV
          </h2>
          <p className="text-blanc-400 max-w-2xl mx-auto font-medium">
            Mit IPTV in Deutschland sehen Sie alle deutschen,
            internationalen, Sport- und Regionalsender in HD- oder 4K-Qualität.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {nlChannelGroups.map((group, idx) => (
            <div
              key={idx}
              className={`animate-slide-up glass rounded-3xl p-6 border ${group.border} ${group.bg} transition-all duration-300`}
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              <h3
                className={`font-display font-bold text-base mb-4 ${group.color} uppercase tracking-wider`}
              >
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.channels.map((ch) => (
                  <li
                    key={ch}
                    className="flex items-center gap-2 text-sm text-blanc-300"
                  >
                    <CheckCircle2
                      size={13}
                      className={`shrink-0 ${group.color}`}
                      aria-hidden="true"
                    />
                    {ch}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-blanc-500 text-sm font-medium mt-8">
          + <span className="text-blanc-300 font-bold">30.900+ weitere Sender</span>{" "}
          aus mehr als 190 Ländern inbegriffen
        </p>
      </div>
    </section>
  );
}

const nlFaqs = [
  {
    q: "Welche Sender sind über IPTV Deutschland verfügbar?",
    a: "Über IPTV in Deutschland sehen Sie ein breites Angebot an deutschen Sendern (Vollprogramm, öffentlich-rechtlich, Film), internationalen Sendern, Sportsendern, Nachrichtensendern und Regionalsendern. Alles in HD oder 4K.",
  },
  {
    q: "Ist IPTV in Deutschland ohne Festnetzanschluss verfügbar?",
    a: "Ja. IPTV funktioniert über Ihre bestehende Internetverbindung: Glasfaser, Kabel oder sogar mobil per 4G/5G. Sie brauchen kein Koaxialkabel, keine Schüssel und keinen Techniker. Anschließen, konfigurieren, fernsehen.",
  },
  {
    q: "Sehe ich live Fußball über IPTV Deutschland?",
    a: "Unsere IPTV-Pakete enthalten Live-Sportsender in HD und 4K, mit umfangreicher Fußball-Berichterstattung und großen Wettbewerben. Verfügbare Inhalte können je nach Region variieren. Schauen Sie auf Smartphone, Tablet und Smart TV.",
  },
];

export function IptvNederlandFaq() {
  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 420px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-rouge-400 text-sm font-bold mb-4 uppercase tracking-wider glow-red">
              IPTV Deutschland — Fragen
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-3 text-blanc-50">
              Häufig gestellte Fragen zu{" "}
              <span className="text-gradient">IPTV Deutschland</span>
            </h2>
          </div>
          <div className="space-y-4">
            {nlFaqs.map((item, idx) => (
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
