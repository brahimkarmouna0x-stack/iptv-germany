import { Clapperboard, Globe2, Signal, Tv } from "lucide-react";

const stats = [
  { icon: Tv, value: "31.000+", label: "Live-Sender bei IPTV Germany" },
  { icon: Clapperboard, value: "140.000+", label: "Filme & Serien auf Abruf" },
  { icon: Globe2, value: "190+", label: "Länder in unserem Angebot" },
  { icon: Signal, value: "99,9%", label: "Verfügbarkeitsgarantie" },
];

const AboutIPTVStreaming = () => {
  return (
    <section
      id="over-iptv-streaming"
      className="py-24 relative overflow-hidden bg-black/25"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 620px" }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blanc-50/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-blanc-50/10 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-france-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left — text */}
            <div className="animate-fade-in">
              <span className="inline-block px-4 py-1.5 rounded-full glass text-france-400 text-sm font-bold mb-6 uppercase tracking-wider glow-gold">
                Über IPTV Germany
              </span>
              <h2 className="font-display font-bold text-4xl sm:text-5xl mb-6 text-blanc-50 leading-tight">
                Was ist{" "}
                <span className="text-gradient">IPTV Germany</span>?
              </h2>
              <div className="space-y-4 text-blanc-400 font-medium leading-relaxed">
                <p>
                  <strong className="text-blanc-200">IPTV Germany</strong> ist
                  ein Premium-IPTV-Anbieter in Deutschland, der Ihnen Zugang zu
                  mehr als 31.000 Live-Sendern, Filmen und Serien über Ihre
                  Internetverbindung bietet — ohne festen Vertrag oder teures
                  Kabelabonnement.
                </p>
                <p>
                  Mit{" "}
                  <strong className="text-blanc-200">IPTV Germany</strong>
                  {" "}sehen Sie alles, was Sie möchten: von deutschen Sendern
                  bis zu großen Sportereignissen, mit internationalen Sendern
                  aus mehr als 190 Ländern. Alles in atemberaubendem 4K Ultra
                  HD auf dem Gerät Ihrer Wahl.
                </p>
                <p>
                  Wir sind der Meinung, dass hochwertiges IPTV für jeden
                  zugänglich sein sollte. Deshalb bietet{" "}
                  <strong className="text-blanc-200">IPTV Germany</strong>{" "}
                  wettbewerbsfähige Abopreise, eine kostenlose Testphase und
                  persönlichen Kundenservice rund um die Uhr per WhatsApp —
                  damit Sie überall und jederzeit Premium-TV genießen können.
                </p>
              </div>
            </div>

            {/* Right — stat grid */}
            <div className="grid grid-cols-2 gap-4 animate-slide-up">
              {stats.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="glass rounded-3xl p-6 border border-blanc-50/5 hover:border-france-400/25 transition-all duration-300 group"
                    style={{ animationDelay: `${0.1 * idx}s` }}
                  >
                    <div className="w-11 h-11 rounded-xl bg-france-500/15 border border-france-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon
                        size={20}
                        className="text-france-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="text-3xl font-black text-blanc-50 mb-1">
                      {item.value}
                    </div>
                    <p className="text-blanc-500 text-xs font-bold uppercase tracking-wider leading-tight">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIPTVStreaming;
