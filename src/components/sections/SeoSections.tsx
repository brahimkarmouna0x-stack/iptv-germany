import {
  Award,
  ChevronDown,
  Globe2,
  Headphones,
  MessageCircle,
  MonitorPlay,
  Server,
  ShieldCheck,
  Sparkles,
  Tv,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import { faqSchema } from "@/lib/structured-data";

/**
 * The four brand SEO sections for the de-DE homepage:
 *   1. Warum sich für IPTV Germany in Deutschland entscheiden
 *   2. Die Funktionen unseres IPTV Premium-Abonnements
 *   3. Häufig gestellte Fragen zu unserem IPTV-Abonnement (+ FAQPage JSON-LD)
 *   4. Warum deutsche Kunden IPTV Germany vertrauen (Support, Datenschutz, Server)
 *
 * Reuses the existing design system (glass cards, france/rouge palette,
 * gradient headings) so the visual identity stays unchanged.
 */

const whyChoose = [
  {
    icon: Tv,
    title: "Mehr als 31.000 Sender in 4K",
    description:
      "Deutsche und internationale Sender, Filme und Serien in 4K und Full HD — das umfassendste Angebot in einem Abonnement.",
  },
  {
    icon: Zap,
    title: "Sofortige Aktivierung",
    description:
      "Erhalten Sie Ihre Zugangsdaten wenige Minuten nach der Zahlung per E-Mail. Kein Techniker, keine Satellitenschüssel, keine Wartezeit.",
  },
  {
    icon: Server,
    title: "Schnelle & stabile Server",
    description:
      "Eine hochverfügbare Infrastruktur in der Nähe Deutschlands sorgt für einen flüssigen 4K-Stream ohne Unterbrechung, selbst bei großen Sportereignissen.",
  },
  {
    icon: Headphones,
    title: "Deutschsprachiger Support rund um die Uhr",
    description:
      "Unser Team beantwortet Ihre Fragen Tag und Nacht über WhatsApp, mit einer durchschnittlichen Antwortzeit von unter 5 Minuten.",
  },
  {
    icon: Wallet,
    title: "Ohne Verpflichtungen",
    description:
      "Kein fester Vertrag und keine versteckten Kosten. Wählen Sie die Laufzeit, die zu Ihnen passt, und kündigen Sie, wann Sie möchten.",
  },
  {
    icon: ShieldCheck,
    title: "100 % sichere Zahlung",
    description:
      "Bezahlen Sie über eine verschlüsselte Verbindung per SEPA-Lastschrift, Kreditkarte oder PayPal. Ihre Daten sind jederzeit geschützt.",
  },
];

const features = [
  {
    icon: MonitorPlay,
    title: "4K-, Full-HD- & HDR-Qualität",
    description:
      "Ein scharfes, detailreiches Bild auf jedem Gerät, mit automatischer Bitratenanpassung zur Vermeidung von Unterbrechungen.",
  },
  {
    icon: Globe2,
    title: "Sender aus mehr als 190 Ländern",
    description:
      "Deutsche, arabische, türkische, englische und viele weitere internationale Sender an einem Ort.",
  },
  {
    icon: Sparkles,
    title: "Filme & Serien auf Abruf",
    description:
      "Mehr als 140.000 VOD-Titel, von den neuesten Veröffentlichungen bis zu den Klassikern, verfügbar wann immer Sie möchten.",
  },
  {
    icon: Users,
    title: "Bis zu 4 Geräte gleichzeitig",
    description:
      "Die ganze Familie schaut gleichzeitig auf Smart-TV, Smartphone, Tablet, Box oder Computer, ohne Unterbrechung.",
  },
  {
    icon: Award,
    title: "Programmführer (EPG) & Catch-up",
    description:
      "Ein vollständiger EPG und TV-Replay, um Ihre Lieblingssendungen einfach wiederzufinden.",
  },
  {
    icon: Zap,
    title: "Kompatibel mit allen IPTV-Apps",
    description:
      "IPTV Smarters Pro, TiviMate, VLC und viele weitere, über Xtream Codes oder M3U-Playlist.",
  },
];

const faqs = [
  {
    question: "Was ist im IPTV-Abonnement von IPTV Germany enthalten?",
    answer:
      "Jedes Abonnement umfasst mehr als 31.000 Live-Sender, 140.000+ Filme und Serien auf Abruf, 4K/Full-HD-Qualität, einen vollständigen Programmführer sowie Sport- und internationale Sender — ohne versteckte Kosten.",
  },
  {
    question: "Ist die Aktivierung wirklich sofort?",
    answer:
      "Ja. Nach Ihrer Zahlung erhalten Sie Ihre Zugangsdaten und den Aktivierungslink innerhalb weniger Minuten per E-Mail. Sie können noch am selben Abend mit dem Schauen beginnen.",
  },
  {
    question: "Auf welchen Geräten kann ich schauen?",
    answer:
      "Auf Smart-TVs (Samsung, LG, Sony), Android-/iOS-Smartphones und -Tablets, Amazon Fire TV Stick, Android-TV-Boxen, Windows- und Mac-Computern sowie beliebten IPTV-Apps wie IPTV Smarters Pro, TiviMate und VLC.",
  },
  {
    question: "Gibt es eine kostenlose Testphase?",
    answer:
      "Ja, wir bieten eine kostenlose Testphase, damit Sie Qualität und Stabilität testen können, bevor Sie sich für ein Abonnement entscheiden. Kontaktieren Sie unser Team über WhatsApp, um sie zu nutzen.",
  },
  {
    question: "Ist der Kundenservice auf Deutsch verfügbar?",
    answer:
      "Ja. Unser gesamter Support — von der Bestellung bis zur technischen Hilfe — steht Ihnen auf Deutsch zur Verfügung, rund um die Uhr über WhatsApp.",
  },
  {
    question: "Kann ich jederzeit kündigen?",
    answer:
      "Ja. Es gibt keine Verpflichtungen und keine Kündigungsgebühren. Ihr Service bleibt bis zum Ende Ihres aktuellen Zeitraums aktiv.",
  },
];

const germanTrustReasons = [
  {
    icon: MessageCircle,
    title: "Deutschsprachiger Support, 24/7",
    description:
      "Unser Serviceteam beantwortet Ihre Fragen jederzeit auf Deutsch über WhatsApp — mit einer durchschnittlichen Antwortzeit von unter 5 Minuten.",
  },
  {
    icon: ShieldCheck,
    title: "DSGVO-konformer Datenschutz",
    description:
      "Ihre persönlichen Daten werden ausschließlich nach europäischem Datenschutzrecht verarbeitet und niemals an Dritte weitergegeben.",
  },
  {
    icon: Server,
    title: "Schnelle Server für Deutschland",
    description:
      "Eine stabile, latenzarme Infrastruktur sorgt für flüssiges Streaming in ganz Deutschland — auch bei großen Sportereignissen.",
  },
];

function Eyebrow({
  children,
  tone = "gold",
}: {
  children: React.ReactNode;
  tone?: "gold" | "red";
}) {
  return (
    <span
      className={`inline-block px-4 py-1.5 rounded-full glass text-sm font-bold mb-4 uppercase tracking-wider ${
        tone === "red" ? "text-rouge-400 glow-red" : "text-france-400 glow-gold"
      }`}
    >
      {children}
    </span>
  );
}

function IconCard({
  Icon,
  title,
  description,
}: {
  Icon: typeof Tv;
  title: string;
  description: string;
}) {
  return (
    <div className="glass rounded-3xl p-7 group border border-blanc-50/5 hover:border-france-400/25 transition-all duration-300">
      <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-france-600/25 to-france-400/10 flex items-center justify-center mb-5 border border-france-500/20 group-hover:scale-110 transition-transform duration-300 shadow-lg">
        <Icon size={24} className="text-france-400" aria-hidden="true" />
      </div>
      <h3 className="font-display font-bold text-lg mb-3 text-blanc-50">
        {title}
      </h3>
      <p className="text-blanc-400 text-sm leading-relaxed font-medium">
        {description}
      </p>
    </div>
  );
}

const SeoSections = () => {
  return (
    <>
      {/* FAQPage structured data for the section-3 questions (rich result) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(faqs)).replace(/</g, "\\u003c"),
        }}
      />

      {/* ── 1 — Waarom kiezen ─────────────────────────────────────────── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ contentVisibility: "auto", containIntrinsicSize: "auto 760px" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Eyebrow>Die Nr. 1 Wahl in Deutschland</Eyebrow>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 text-blanc-50">
              Warum sich für{" "}
              <span className="text-gradient">IPTV Germany</span> in Deutschland entscheiden&nbsp;?
            </h2>
            <p className="text-blanc-400 max-w-2xl mx-auto font-medium">
              Ein Premium-IPTV-Abonnement für Deutschland: mehr Sender,
              bessere Qualität und deutschsprachiger Service, zu einem fairen Preis.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item) => (
              <IconCard
                key={item.title}
                Icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 2 — Functies ──────────────────────────────────────────── */}
      <section
        className="py-24 relative overflow-hidden bg-black/20"
        style={{ contentVisibility: "auto", containIntrinsicSize: "auto 760px" }}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blanc-50/10 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Eyebrow tone="red">Premium-Funktionen</Eyebrow>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 text-blanc-50">
              Die Funktionen unseres{" "}
              <span className="text-gradient">IPTV-Premium-Abonnements</span>
            </h2>
            <p className="text-blanc-400 max-w-2xl mx-auto font-medium">
              Alles, was Sie für ein vollständiges, flüssiges
              Streaming-Erlebnis ohne Kompromisse brauchen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item) => (
              <IconCard
                key={item.title}
                Icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 3 — FAQ ──────────────────────────────────────────────────────── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ contentVisibility: "auto", containIntrinsicSize: "auto 680px" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 text-blanc-50">
              Häufig gestellte Fragen zu unserem{" "}
              <span className="text-gradient">IPTV-Abonnement</span>
            </h2>
            <p className="text-blanc-400 font-medium">
              Antworten auf die häufigsten Fragen unserer Abonnenten in Deutschland.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group animate-slide-up glass rounded-2xl overflow-hidden border border-blanc-50/5 transition-all duration-300 open:border-france-400/30 open:glow-gold"
                style={{ animationDelay: `${0.08 * idx}s` }}
              >
                <summary className="list-none w-full flex items-center justify-between p-6 text-left cursor-pointer">
                  <span className="font-bold text-blanc-50 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className="text-france-400 transition-transform duration-300 shrink-0 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="text-blanc-400 text-sm leading-relaxed font-medium px-6 pb-6">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4 — Waarom Duitse klanten ons vertrouwen ───────────────── */}
      <section
        className="py-24 relative overflow-hidden bg-black/20"
        style={{ contentVisibility: "auto", containIntrinsicSize: "auto 620px" }}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blanc-50/10 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Eyebrow tone="red">Vertrauen & Datenschutz</Eyebrow>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 text-blanc-50">
              Warum sich deutsche Kunden{" "}
              <span className="text-gradient">für uns entscheiden</span>&nbsp;?
            </h2>
            <p className="text-blanc-400 max-w-2xl mx-auto font-medium">
              Deutschsprachiger Service, DSGVO-konformer Datenschutz und
              schnelle Server — genau das, was deutsche Nutzer von einem
              Premium-IPTV-Anbieter erwarten.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {germanTrustReasons.map((item) => (
              <IconCard
                key={item.title}
                Icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SeoSections;
