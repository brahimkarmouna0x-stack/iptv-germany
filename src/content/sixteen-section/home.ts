import type { SixteenSectionContent } from "./types";

const LINK = {
  kaufen: { label: "IPTV kaufen", href: "/iptv-kaufen", description: "Kaufen Sie IPTV direkt mit sicherer Zahlung und Aktivierung in 5 Minuten." },
  abonnement: { label: "IPTV-Abonnement", href: "/iptv-abonnement", description: "Vergleichen Sie alle IPTV-Abonnements mit flexiblen Laufzeiten und 4K-Qualität." },
  anbieter: { label: "IPTV-Anbieter", href: "/iptv-anbieter", description: "Entdecken Sie, warum IPTV Germany der beste IPTV-Anbieter Deutschlands ist." },
  deutschland: { label: "IPTV Deutschland", href: "/iptv-deutschland", description: "Alle deutschen Sender, Fußball und Live-Sport in 4K." },
  smarters: { label: "IPTV Smarters Pro", href: "/iptv-smarters-pro", description: "Konfigurieren Sie IPTV Smarters Pro mit M3U oder Xtream Codes — Schritt für Schritt." },
};

const home: SixteenSectionContent = {
  slug: "",
  path: "/",
  meta: {
    title: "IPTV Germany – Das beste IPTV-Abonnement in Deutschland",
    description: "Wählen Sie den besten IPTV-Anbieter. IPTV Germany bietet 31.000+ Sender und VOD in 4K. Ein zuverlässiger IPTV-Service ohne Unterbrechungen. Jetzt starten!",
    h1: "IPTV Germany – Das Premium-IPTV-Abonnement",
  },

  // ── Section 1: Hero ─────────────────────────────────────────────────────
  hero: {
    pill: "IPTV Germany · Premium Streaming",
    title: "Der Premium-IPTV-Service für Deutschland, Österreich und die Schweiz",
    subtitle: "Möchten Sie ein zuverlässiges IPTV abonnieren? Tausende Zuschauer entscheiden sich täglich für unseren stabilen IPTV-Service. Genießen Sie alle Sender und 4K-Qualität auf jedem Gerät.",
    bg: "/images/hero-bg.webp",
    ctaPrimary: "Kostenlose Testphase starten",
    ctaPrimaryHref: "#pakketten",
    ctaSecondary: "Pakete ansehen",
    ctaSecondaryHref: "#pakketten",
  },

  // ── Section 2: Trust bar ────────────────────────────────────────────────
  trustBar: {
    items: [
      { label: "zufriedene Zuschauer", value: "10.000+" },
      { label: "Live-Sender", value: "31.000+" },
      { label: "Filme & Serien", value: "140.000+" },
      { label: "Streaming-Qualität", value: "99,9%" },
      { label: "Google-Bewertung", value: "4,9/5" },
    ],
  },

  // ── Section 3: Problem ──────────────────────────────────────────────────
  problem: {
    eyebrow: "Kommt Ihnen das bekannt vor?",
    title: "Genug von den Frustrationen mit Ihrem aktuellen TV-Anbieter",
    subtitle: "Sie sind nicht die Einzigen, die noch am klassischen Fernsehen festhängen. Das sind die häufigsten Ärgernisse.",
    pains: [
      { title: "Zu hohe monatliche Kosten", desc: "Sie zahlen 50 bis 80 Euro im Monat für ein Standard-TV-Paket, sehen davon aber nur einen Bruchteil der Sender. Und die Preise steigen Jahr für Jahr." },
      { title: "Feste Jahresverträge", desc: "Sie sind an lange Vertragslaufzeiten mit teuren Kündigungsgebühren gebunden. Bei einem Umzug oder veränderten Bedürfnissen kostet Sie das schnell viel Geld." },
      { title: "Begrenztes Senderangebot", desc: "Ausgerechnet die Sender, die Sie sehen möchten, fehlen. Sport, internationale Sender oder Filme sind oft nicht verfügbar oder kosten Aufpreis." },
      { title: "Unterbrechungen und Aussetzer", desc: "Mitten im spannenden Spiel oder Ihrer Lieblingsserie bleibt das Bild hängen oder lädt endlos. Der Ärger darüber ist groß." },
    ],
  },

  // ── Section 4: Solution ─────────────────────────────────────────────────
  solution: {
    eyebrow: "Die Lösung",
    title: "IPTV Germany: mehr Sender, günstiger",
    subtitle: "Wir lösen Ihre TV-Frustrationen mit unserem Premium-IPTV-Service. Kein Vertrag, keine Unterbrechungen — dafür das Erlebnis des besten IPTV-Anbieters.",
    points: [
      { title: "Weniger als die Hälfte zahlen", desc: "Für einen Bruchteil des Kabelfernsehpreises erhalten Sie Tausende Sender, Filme und Serien in 4K. Schon ab wenigen Euro im Monat." },
      { title: "Ohne Vertrag, volle Freiheit", desc: "Kein Jahresvertrag und keine Kündigungsgebühr. Ihr Abonnement endet, wann Sie möchten. Sie bleiben völlig flexibel." },
      { title: "Alles inklusive, keine Zusatzkosten", desc: "Sport, Filme, 4K, deutsche und internationale Sender — alles in einem Abonnement, ganz ohne versteckte Kosten." },
      { title: "Stabile 4K-Streams ohne Unterbrechung", desc: "Unsere Server in der Nähe Deutschlands sorgen für ein flüssiges Bild, selbst zu Spitzenzeiten. Aussetzer während Ihrer Lieblingssendung gehören der Vergangenheit an." },
    ],
  },

  // ── Section 5: Features ─────────────────────────────────────────────────
  features: {
    eyebrow: "Das erhalten Sie",
    title: "Ein Premium-IPTV mit einzigartigen Vorteilen",
    subtitle: "Jedes Abonnement enthält diese Merkmale — ganz ohne Aufpreis.",
    features: [
      { title: "4K & 8K Ultra HD", desc: "Ein gestochen scharfes Bild mit HDR. Streamen Sie Filme, Sport und Serien in höchster Auflösung, ohne Aussetzer." },
      { title: "Null Unterbrechungen garantiert", desc: "Adaptive Streaming-Technologie passt die Qualität automatisch an Ihre Verbindung an. Keine Unterbrechungen mehr bei Sport oder Filmen." },
      { title: "Alle deutschen & internationalen Sender", desc: "Eine große Auswahl deutscher Sender (öffentlich-rechtlich, privat, Sport) sowie internationale und Regionalsender, in HD und 4K." },
      { title: "Funktioniert auf jedem Gerät", desc: "Smart TV, Fire TV Stick, Android TV, Apple TV, iPhone, iPad, Windows, Mac und MAG-Box. Ein Abonnement, alle Ihre Bildschirme." },
      { title: "Vollständige VOD-Bibliothek", desc: "140.000+ Filme und Serien auf Abruf, mit Untertiteln. Immer etwas Neues zu entdecken, ohne Aufpreis." },
      { title: "Kostenlose Testphase", desc: "Testen Sie den vollen Service eine Stunde lang kostenlos — ohne Kreditkarte, ohne Risiko. Entdecken Sie, warum IPTV Germany die beste Wahl ist." },
    ],
  },

  // ── Section 6: Why Us ───────────────────────────────────────────────────
  whyUs: {
    eyebrow: "Warum IPTV Germany",
    title: "Warum wir der beste IPTV-Anbieter sind",
    subtitle: "Als führender IPTV-Anbieter für IPTV in Deutschland machen wir es anders. Das ist unser Unterschied.",
    reasons: [
      { title: "Unsere eigenen Server nahe Deutschland", desc: "Keine geteilte ausländische Infrastruktur. Unsere Server stehen in Deutschland und Österreich — für die niedrigste Latenz, die schnellsten Senderwechsel und maximale Stabilität." },
      { title: "Deutschsprachiger Support, 24/7", desc: "Keine Chatbots und kein gebrochenes Englisch. Unser Team ist Tag und Nacht über WhatsApp erreichbar, mit einer Antwortzeit unter 5 Minuten. Von echten Menschen, nicht von Robotern." },
      { title: "Immer aktuell und vollständig", desc: "Tausende Sender aus mehr als 190 Ländern, täglich aktualisiert. Neue Sender und VOD-Inhalte kommen laufend hinzu, ganz ohne Ihr Zutun." },
    ],
  },

  // ── Section 7: How It Works ─────────────────────────────────────────────
  how: {
    eyebrow: "Los geht's",
    title: "In 3 Schritten mit dem Streamen beginnen",
    subtitle: "Von der Entdeckung bis zum Zuschauen in weniger als 10 Minuten. Keine Installationskosten oder Fachkenntnisse erforderlich.",
    steps: [
      { step: "01", title: "Kostenlose Testphase anfragen", desc: "Kontaktieren Sie uns über WhatsApp und erhalten Sie sofort eine Stunde kostenlose Testphase. Testen Sie alle Sender, Bildqualität und Stabilität auf Ihrem eigenen Gerät." },
      { step: "02", title: "Ihr ideales Abonnement wählen", desc: "Wählen Sie die Laufzeit und die Anzahl der Verbindungen. Je länger die Laufzeit, desto niedriger der Monatspreis — ganz ohne versteckte Kosten." },
      { step: "03", title: "Unbegrenzt in 4K streamen", desc: "Nach der Zahlung erhalten Sie innerhalb von 5 Minuten Ihren M3U-Link und Ihre Xtream Codes. Geben Sie diese in Ihre IPTV-App ein und streamen Sie sofort Tausende Sender." },
    ],
  },

  // ── Section 8: Device Compatibility ──────────────────────────────────────
  devices: {
    eyebrow: "Überall nutzbar",
    title: "Funktioniert auf nahezu jedem Gerät",
    subtitle: "Ob Smart TV, Smartphone, Tablet oder Computer — unser IPTV-Abonnement funktioniert auf all Ihren Geräten.",
    deviceGroups: [
      { name: "Smart TV", items: ["Samsung Smart TV", "LG webOS", "Sony Android TV", "Philips Android TV", "Panasonic", "Hisense", "TCL"] },
      { name: "Streaming-Geräte", items: ["Amazon Fire TV Stick", "Chromecast with Google TV", "Nvidia Shield", "Apple TV 4K", "Roku", "Formuler Z11"] },
      { name: "Mobil & Tablet", items: ["iPhone", "iPad", "Samsung Galaxy", "Google Pixel", "Huawei", "OnePlus", "Xiaomi"] },
      { name: "Computer", items: ["PC Windows", "MacBook & iMac", "Linux", "VLC Media Player", "IPTV Smarters Pro", "TiviMate"] },
    ],
    ctaText: "Vollständige Liste ansehen",
  },

  // ── Section 9: Channels ─────────────────────────────────────────────────
  channels: {
    eyebrow: "Das Angebot",
    title: "31.000+ Sender aus mehr als 190 Ländern",
    subtitle: "Vom besten deutschen Senderangebot bis zu internationalem Sport — alle Premium-Sender an einem Ort.",
    channelGroups: [
      { name: "Deutsches Angebot", items: ["Öffentlich-rechtliche Sender", "Private Vollprogramme", "Sportsender", "Regionale Sender", "Nachrichtensender", "Kultur- und Dokusender", "Musik- und Unterhaltungssender"] },
      { name: "Live-Sport", items: ["Fußball", "Europapokal-Wettbewerbe", "Motorsport", "Wintersport", "Kampfsport", "Basketball & US-Sport", "Tennis"] },
      { name: "Internationale Sender", items: ["Internationale Nachrichtensender", "Film & Dokumentationen", "Kindersender", "Englische & spanische Sender", "Arabische & türkische Sender", "Afrikanische & asiatische Sender"] },
      { name: "Filme & Serien (VOD)", items: ["Neueste Kinofilme", "Exklusive Originals", "Komplette Serien-Boxsets", "IMDb Top 250", "Dokumentationen", "Kinderfilme"] },
    ],
  },

  // ── Section 10: Pricing (uses existing component) ─────────────────────────
  pricing: {
    pillText: "Unsere Tarife",
    title: "Wählen Sie das IPTV-Abonnement, das zu Ihnen passt",
    subtitle: "Je länger die Laufzeit, desto günstiger Ihr IPTV-Abonnement. Alle Pakete unseres IPTV-Service enthalten Sport, 4K und deutsche sowie internationale Sender.",
  },

  // ── Section 11: Comparison vs Competitors ────────────────────────────────
  comparison: {
    eyebrow: "Vergleich",
    title: "IPTV Germany vs. traditionelle TV-Anbieter",
    subtitle: "Selbst bei den Stärken der Anbieter legen wir noch eine Schippe drauf. Deshalb wechseln immer mehr Haushalte zu uns.",
    rows: [
      { feature: "Monatspreis", us: "Ab 7,99 €/Monat", them: "50 € – 80 €/Monat" },
      { feature: "Anzahl der Sender", us: "31.000+", them: "50 – 100" },
      { feature: "4K & 8K-Qualität", us: "Standardmäßig inklusive", them: "Nicht verfügbar oder Aufpreis" },
      { feature: "VOD-Bibliothek", us: "140.000+ Titel", them: "Begrenzt oder nicht vorhanden" },
      { feature: "Jahresvertrag", us: "Nicht erforderlich", them: "Verpflichtend, 1–2 Jahre" },
      { feature: "Kündigungsgebühr", us: "Keine", them: "Bis zu 150 €" },
      { feature: "Internationale Sender", us: "190+ Länder", them: "Nur lokal" },
      { feature: "24/7-Support", us: "Deutschsprachig", them: "Begrenzt / Englisch" },
      { feature: "Kostenlose Testphase", us: "Ja, 1 Stunde", them: "Nein" },
    ],
  },

  // ── Section 12: Testimonials ─────────────────────────────────────────────
  testimonials: {
    eyebrow: "Was Kunden sagen",
    title: "4,9/5 bei Google — bewertet von Tausenden",
    subtitle: "Unsere Kunden bewerten uns als den bestbewerteten IPTV-Anbieter in Deutschland.",
  },

  // ── Section 13: Security & Reliability ────────────────────────────────────
  security: {
    eyebrow: "Sicher & zuverlässig",
    title: "Ihre Privatsphäre und Stabilität haben für uns Priorität",
    subtitle: "Wir nehmen Sicherheit und Zuverlässigkeit ernst — ausnahmslos.",
    items: [
      { title: "SSL-verschlüsselte Zahlungen", desc: "Alle Transaktionen laufen über gesicherte Verbindungen mit anerkannten Zahlungsdienstleistern wie Stripe. Ihre Zahlungsdaten werden niemals gespeichert." },
      { title: "99,9% Serververfügbarkeit", desc: "Unsere Server werden rund um die Uhr mit redundanten Systemen überwacht. Störungen werden automatisch erkannt und innerhalb weniger Sekunden umgeleitet." },
      { title: "Privacy by Design", desc: "Wir wenden strenge Datenschutzstandards an und geben Ihre Daten niemals an Dritte weiter. Ihr Sehverhalten wird weder verfolgt noch verkauft." },
      { title: "Anti-Freeze-Technologie", desc: "Intelligentes Lastmanagement hält die Streams flüssig, selbst zu Spitzenzeiten. Speziell für den deutschen Markt entwickelt." },
    ],
  },

  // ── Section 14: FAQ (exactly 8) ─────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    title: "Häufig gestellte Fragen zu IPTV Germany",
    subtitle: "Alles, was Sie über unseren Service wissen müssen.",
    faqs: [
      {
        question: "Was genau ist IPTV Germany?",
        answer: "IPTV Germany ist ein Premium-IPTV-Service, der live Fernsehen, Sport, Filme und Serien über Ihre Internetverbindung streamt. Kein Kabel, keine Schüssel. Sie streamen auf jedem Gerät Tausende Sender in 4K, zu einem festen Monatspreis ohne Jahresvertrag."
      },
      {
        question: "Was unterscheidet IPTV Germany von anderen Anbietern?",
        answer: "Wir unterscheiden uns durch eine eigene Serverinfrastruktur nahe Deutschland, deutschsprachigen 24/7-Support (ohne Chatbots), ein täglich aktualisiertes Senderangebot und eine Zufrieden-oder-Geld-zurück-Garantie. Unsere Bewertung von 4,9/5 bei Google bestätigt unsere Qualität."
      },
      {
        question: "Auf welchen Geräten funktioniert IPTV Germany?",
        answer: "Auf nahezu jedem modernen Gerät: Samsung-, LG- und Sony-Smart-TVs, Amazon Fire TV Stick, Android-TV-Boxen, Apple TV, iPhone, iPad, Android-Smartphones, Windows- und Mac-Computer sowie MAG-/Formuler-Boxen. Ihr Abonnement funktioniert auf mehreren Geräten."
      },
      {
        question: "Kann ich kostenlos testen, bevor ich ein Abonnement abschließe?",
        answer: "Ja, Sie erhalten eine Stunde kostenlose Testphase mit vollem Zugriff auf alle Sender, Sport und die VOD-Bibliothek. Fordern Sie Ihre Testphase über WhatsApp an und überzeugen Sie sich selbst von der Qualität auf Ihrem eigenen Gerät — ohne Risiko."
      },
      {
        question: "Welche deutschen und internationalen Sportsender kann ich sehen?",
        answer: "Eine große Auswahl an beliebten deutschen Sendern (öffentlich-rechtlich, privat) und internationalen Sendern sowie Regionalsendern. Dazu Fußball, Motorsport, Basketball, Tennis und mehr — in HD und 4K. Das verfügbare Angebot kann je nach Region variieren."
      },
      {
        question: "Ist IPTV Germany sicher und zuverlässig?",
        answer: "Absolut. Wir setzen auf höchste Sicherheitsstandards mit SSL-verschlüsselten Zahlungen und strengen Datenschutzregeln. Unsere Server erreichen eine Verfügbarkeit von 99,9% und werden rund um die Uhr überwacht. Ihre Daten werden niemals an Dritte weitergegeben."
      },
      {
        question: "Welche Zahlungsmethoden werden akzeptiert?",
        answer: "Sie können sicher mit Kreditkarte (Visa, Mastercard), PayPal und SEPA-Überweisung bezahlen. Alle Zahlungen laufen über eine gesicherte und verschlüsselte Umgebung. Nach Zahlungseingang wird Ihr Konto innerhalb weniger Minuten aktiviert."
      },
      {
        question: "Kann ich mein Abonnement kündigen oder ändern?",
        answer: "Ja, Sie können jederzeit auf mehr Verbindungen oder eine längere Laufzeit upgraden. Die Kündigung ist über unser Support-Team einfach möglich — ohne Kosten oder Strafen. Ihr Service bleibt bis zum Ende des bezahlten Zeitraums aktiv."
      },
    ],
  },

  // ── Section 15: Internal Linking Hub ──────────────────────────────────────
  internalLinks: {
    eyebrow: "Mehr entdecken",
    title: "Alles über IPTV in Deutschland",
    subtitle: "Vertiefen Sie sich in die verschiedenen Aspekte unseres Service.",
    links: [LINK.kaufen, LINK.abonnement, LINK.anbieter, LINK.deutschland, LINK.smarters],
  },

  // ── Section 16: Final CTA ────────────────────────────────────────────────
  finalCta: {
    title: "Beginnen Sie noch heute mit IPTV Germany",
    description: "Schließen Sie sich Tausenden zufriedenen Zuschauern in Deutschland an. Erhalten Sie sofortigen Zugang zu allen Sendern, Sport und Filmen — oder starten Sie mit einer kostenlosen Testphase.",
  },
};

export default home;
