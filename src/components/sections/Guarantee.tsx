import { BadgeCheck, Lock, MessageCircle, RefreshCw } from "lucide-react";

const promises = [
  {
    icon: RefreshCw,
    title: "7 Tage kostenlose Testphase",
    description:
      "Testen Sie unseren Service völlig risikofrei. Nicht zufrieden? Keine Kosten, keine Fragen.",
    color: "text-france-400",
    gradient: "from-france-600/30 to-france-400/15",
    border: "border-france-500/25",
    glow: "hover:border-france-400/30",
  },
  {
    icon: Lock,
    title: "Sicher & verschlüsselt",
    description:
      "Alle Zahlungen erfolgen über sichere SSL-Verbindungen. Ihre Daten werden niemals an Dritte weitergegeben.",
    color: "text-rouge-400",
    gradient: "from-rouge-600/30 to-rouge-500/15",
    border: "border-rouge-500/25",
    glow: "hover:border-rouge-400/30",
  },
  {
    icon: MessageCircle,
    title: "Persönlicher Support rund um die Uhr",
    description:
      "Unser Support-Team ist Tag und Nacht per WhatsApp erreichbar. Durchschnittliche Antwortzeit: unter 5 Minuten.",
    color: "text-france-400",
    gradient: "from-france-600/30 to-france-400/15",
    border: "border-france-500/25",
    glow: "hover:border-france-400/30",
  },
  {
    icon: BadgeCheck,
    title: "Ohne Verpflichtungen",
    description:
      "Kein fester Vertrag und keine versteckten Kosten. Kündigen Sie, wann Sie möchten, ohne Kündigungsgebühren oder Aufwand.",
    color: "text-rouge-400",
    gradient: "from-rouge-600/30 to-rouge-500/15",
    border: "border-rouge-500/25",
    glow: "hover:border-rouge-400/30",
  },
];

const Guarantee = () => {
  return (
    <section
      className="py-24 relative overflow-hidden bg-black/30"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 500px" }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blanc-50/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-blanc-50/10 to-transparent" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-france-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-rouge-400 text-sm font-bold mb-4 uppercase tracking-wider glow-red">
            Unser Versprechen
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-blanc-50">
            Ihre Zufriedenheit, <span className="text-gradient">garantiert</span>
          </h2>
          <p className="text-blanc-400 max-w-2xl mx-auto font-medium">
            Wir stehen voll und ganz hinter unserem Service. Deshalb
            schließen wir jedes Risiko für Sie von Anfang an aus.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {promises.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`animate-slide-up glass rounded-3xl p-8 group border border-blanc-50/5 ${item.glow} transition-all duration-300 text-center`}
                style={{ animationDelay: `${0.1 * idx}s` }}
              >
                <div
                  className={`mx-auto mb-6 w-14 h-14 rounded-2xl bg-linear-to-br ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg border ${item.border}`}
                >
                  <Icon size={24} className={item.color} aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-lg mb-3 text-blanc-50">
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

export default Guarantee;
