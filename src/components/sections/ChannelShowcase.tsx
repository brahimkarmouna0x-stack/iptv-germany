// NOTE: These are GENERIC content categories, not named third-party
// broadcasters. The previous version listed specific broadcaster/channel
// trademarks (beIN Sports, Canal+, ESPN, BBC, National Geographic, …) framed as
// included channels. Those were removed for trademark/broadcast-licensing
// compliance. Do not reintroduce named third-party channels as "included"
// without a documented carriage/distribution licence.
const dutchChannels = [
  { name: "Deutsche Sender", tag: "Allgemein" },
  { name: "Öffentlich-rechtliche Sender", tag: "Öffentlich-rechtlich" },
  { name: "Deutsches Entertainment", tag: "Entertainment" },
  { name: "Filme & Serien", tag: "Filme" },
  { name: "Live-Sport", tag: "Sport" },
  { name: "Fußball", tag: "Sport" },
  { name: "Regionale Sender", tag: "Regional" },
  { name: "Unterhaltungssender", tag: "Entertainment" },
  { name: "Lokale Sender", tag: "Lokal" },
  { name: "Sportsender", tag: "Sport" },
];

const internationalChannels = [
  { name: "Nachrichtenkanäle (UK)", tag: "UK" },
  { name: "Internationale Nachrichten", tag: "Nachrichten" },
  { name: "Dokumentationen", tag: "Docu" },
  { name: "Natur & Entdeckung", tag: "Docu" },
  { name: "Internationaler Sport", tag: "Sport" },
  { name: "Kultursender", tag: "Kultur" },
  { name: "Motorsport", tag: "Sport" },
  { name: "Arabische Nachrichtenkanäle", tag: "Nachrichten" },
  { name: "Französischsprachige Sender", tag: "Französisch" },
  { name: "Kampfsport", tag: "Sport" },
  { name: "Filmsender", tag: "Filme" },
  { name: "Schweizer Sender", tag: "Schweiz" },
];

interface ChannelPillProps {
  name: string;
  tag: string;
  variant?: "primary" | "secondary";
}

const ChannelPill = ({ name, tag, variant = "primary" }: ChannelPillProps) => (
  <div
    className={`flex items-center gap-3 rounded-2xl px-4 py-3 border transition-all duration-200 hover:-translate-y-0.5 cursor-default ${
      variant === "primary"
        ? "glass border-france-400/15 hover:border-france-400/30"
        : "glass border-blanc-50/5 hover:border-blanc-50/10"
    }`}
  >
    <div
      className={`w-2 h-2 rounded-full shrink-0 ${
        variant === "primary" ? "bg-france-400" : "bg-blanc-500"
      }`}
    />
    <span className="font-bold text-blanc-50 text-sm whitespace-nowrap">{name}</span>
    <span
      className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
        variant === "primary"
          ? "bg-france-500/15 text-france-300"
          : "bg-blanc-50/5 text-blanc-500"
      }`}
    >
      {tag}
    </span>
  </div>
);

const ChannelShowcase = () => {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 600px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-france-400 text-sm font-bold mb-4 uppercase tracking-wider glow-gold">
            Senderangebot
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-blanc-50">
            <span className="text-gradient">Beliebte</span> Sender
          </h2>
          <p className="text-blanc-400 max-w-2xl mx-auto font-medium">
            Von deutschen Sendern bis zu großen internationalen
            Sportereignissen — alles in einem Abonnement.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px flex-1 bg-blanc-50/5" />
              <span className="text-xs font-black uppercase tracking-widest text-france-400">
                Deutsche &amp; internationale Sender
              </span>
              <span className="h-px flex-1 bg-blanc-50/5" />
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {dutchChannels.map((ch) => (
                <ChannelPill key={ch.name} {...ch} variant="primary" />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px flex-1 bg-blanc-50/5" />
              <span className="text-xs font-black uppercase tracking-widest text-blanc-500">
                Internationale Sender
              </span>
              <span className="h-px flex-1 bg-blanc-50/5" />
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {internationalChannels.map((ch) => (
                <ChannelPill key={ch.name} {...ch} variant="secondary" />
              ))}
            </div>
          </div>

          <p className="text-center text-blanc-500 text-sm font-medium">
            + <span className="text-blanc-300 font-bold">30.976 weitere Sender</span> aus
            mehr als 190 Ländern
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChannelShowcase;
