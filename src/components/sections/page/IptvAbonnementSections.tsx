import { MonitorPlay, Tv, Users } from "lucide-react";

const profiles = [
  {
    icon: Tv,
    type: "Einzelperson",
    subtitle: "1 Verbindung · 1 Gerät",
    description:
      "Sie schauen allein und haben einen Fernseher oder ein Gerät. Das Basis-IPTV-Abonnement mit 1 gleichzeitiger Verbindung reicht völlig aus. Sie erhalten Zugriff auf 31.000+ Sender und die vollständige VOD-Bibliothek.",
    highlight: "Geeignet für Studierende und Alleinstehende",
    color: "text-france-400",
    gradient: "from-france-600/30 to-france-400/15",
    border: "border-france-500/25",
    glow: "hover:border-france-400/35",
  },
  {
    icon: Users,
    type: "Familie",
    subtitle: "2–4 Verbindungen · mehrere Geräte",
    description:
      "Zu Hause schauen mehrere Personen gleichzeitig auf verschiedenen Geräten. Wählen Sie ein IPTV-Abonnement mit 2 bis 4 gleichzeitigen Verbindungen, damit jeder ohne Unterbrechung sein Lieblingsprogramm sehen kann.",
    highlight: "Das meistgewählte IPTV-Abonnement",
    color: "text-rouge-400",
    gradient: "from-rouge-600/30 to-rouge-500/15",
    border: "border-rouge-500/25",
    glow: "hover:border-rouge-400/35",
  },
  {
    icon: MonitorPlay,
    type: "Sport & Premium",
    subtitle: "Alle Sender · 4K-Qualität",
    description:
      "Sie möchten kein Spiel verpassen und schauen in 4K Ultra HD. Unsere IPTV-Abonnements enthalten ein breites Angebot an Live-Sportsendern, mit umfangreicher Fußball-Berichterstattung und großen Wettbewerben.",
    highlight: "Für Sport- und Filmfans",
    color: "text-france-400",
    gradient: "from-france-600/30 to-france-400/15",
    border: "border-france-500/25",
    glow: "hover:border-france-400/35",
  },
];

export function IptvAbonnementProfiles() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 640px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-france-400 text-sm font-bold mb-4 uppercase tracking-wider glow-gold">
            Welches Abonnement passt zu Ihnen?
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-blanc-50">
            Wählen Sie das richtige{" "}
            <span className="text-gradient">IPTV-Abonnement</span>
          </h2>
          <p className="text-blanc-400 max-w-2xl mx-auto font-medium">
            Jedes IPTV-Abonnement enthält alle Sender. Der einzige Unterschied
            ist die Anzahl der Geräte, die Sie gleichzeitig nutzen können.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {profiles.map((profile, idx) => {
            const Icon = profile.icon;
            return (
              <div
                key={idx}
                className={`animate-slide-up glass rounded-3xl p-8 group border border-blanc-50/5 ${profile.glow} transition-all duration-300 flex flex-col`}
                style={{ animationDelay: `${0.1 * idx}s` }}
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-linear-to-br ${profile.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg border ${profile.border}`}
                >
                  <Icon
                    size={24}
                    className={profile.color}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-display font-bold text-xl mb-1 text-blanc-50">
                  {profile.type}
                </h3>
                <p className="text-xs font-black uppercase tracking-wider text-blanc-500 mb-4">
                  {profile.subtitle}
                </p>
                <p className="text-blanc-400 text-sm leading-relaxed font-medium flex-1 mb-5">
                  {profile.description}
                </p>
                <span
                  className={`inline-block text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full border ${profile.border} bg-linear-to-br ${profile.gradient} ${profile.color}`}
                >
                  {profile.highlight}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const abonnementFaqs = [
  {
    q: "Was ist in jedem IPTV-Abonnement enthalten?",
    a: "Jedes IPTV-Abonnement von IPTV Germany enthält 31.000+ Live-Sender, 140.000+ Filme und Serien auf Abruf, einen EPG-Guide, Catch-up-TV, 4K-Ultra-HD-Streams und Unterstützung für alle IPTV-Apps. Keine versteckten Kosten für Sport oder zusätzliche Sender.",
  },
  {
    q: "Kann ich mein IPTV-Abonnement jederzeit kündigen?",
    a: "Ja. Es gibt keinen festen Vertrag. Sie wählen die Laufzeit und können bei Ablauf kündigen oder verlängern. Laufende Abonnements bleiben bis zum Ende des bezahlten Zeitraums aktiv. Keine Kündigungskosten, keine komplizierten Verfahren.",
  },
  {
    q: "Wie lange dauert es, bis mein IPTV-Abonnement aktiv ist?",
    a: "Nach der Zahlung erhalten Sie Ihre Zugangsdaten innerhalb von 5 Minuten per E-Mail. Keine manuelle Aktivierung nötig. Geben Sie die Daten in Ihre IPTV-App ein, und Sie schauen sofort — Tag und Nacht, auch am Wochenende.",
  },
];

export function IptvAbonnementFaq() {
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
              IPTV-Abonnement — Fragen
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-3 text-blanc-50">
              Fragen zu Ihrem{" "}
              <span className="text-gradient">IPTV-Abonnement</span>
            </h2>
          </div>
          <div className="space-y-4">
            {abonnementFaqs.map((item, idx) => (
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
