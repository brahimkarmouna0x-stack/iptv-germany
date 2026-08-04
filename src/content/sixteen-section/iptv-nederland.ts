import type { SixteenSectionContent } from "./types";

const LINK = {
  home: { label: "Home IPTV Germany", href: "/", description: "Das beste IPTV-Abonnement Deutschlands mit 31.000+ Sendern und 4K." },
  kaufen: { label: "IPTV kaufen", href: "/iptv-kaufen", description: "Kaufen Sie ein IPTV-Angebot mit direkter Aktivierung und kostenloser Testphase." },
  abonnement: { label: "IPTV-Abonnement", href: "/iptv-abonnement", description: "Vergleichen Sie IPTV-Abonnements mit flexiblen Laufzeiten." },
  anbieter: { label: "IPTV-Anbieter", href: "/iptv-anbieter", description: "Vergleichen Sie IPTV-Anbieter und entdecken Sie die beste Wahl." },
  smarters: { label: "IPTV Smarters Pro", href: "/iptv-smarters-pro", description: "Installationsanleitung für IPTV Smarters Pro auf all Ihren Geräten." },
};

const deutschland: SixteenSectionContent = {
  slug: "iptv-deutschland",
  path: "/iptv-deutschland",
  meta: {
    title: "IPTV Deutschland ✓ Kompletter Guide zu Sendern & Sport 2026",
    description: "IPTV Deutschland: alle deutschen und internationalen Sender, Fußball, Motorsport und Live-Sport in 4K. Das beste IPTV mit 31.000+ Sendern. Kostenlose Testphase.",
    h1: "IPTV Deutschland – der ultimative Guide zum TV-Streaming",
  },

  // ── Section 1: Hero ─────────────────────────────────────────────────────
  hero: {
    pill: "IPTV Deutschland · Komplettes Senderangebot",
    title: "IPTV Deutschland: das Beste aus TV, Sport und Filmen",
    subtitle: "Sie suchen ein IPTV-Angebot mit einem kompletten Paket an deutschen und internationalen Sendern, Fußball und allen Sportsendern? Bei IPTV Germany erhalten Sie alles in 4K.",
    bg: "/images/hero-bg.webp",
    ctaPrimary: "Angebot ansehen",
    ctaPrimaryHref: "#pakketten",
    ctaSecondary: "Kostenlose Testphase starten",
    ctaSecondaryHref: "#pakketten",
  },

  // ── Section 2: Trust bar ────────────────────────────────────────────────
  trustBar: {
    items: [
      { label: "Deutsche & int. Sender", value: "200+" },
      { label: "Deutschsprachiges Support-Team", value: "24/7" },
      { label: "Serverstandort", value: "Deutschland" },
      { label: "Zufriedene Kunden", value: "10.000+" },
    ],
  },

  // ── Section 3: Problem ──────────────────────────────────────────────────
  problem: {
    eyebrow: "Was fehlt",
    title: "Warum Zuschauer in Deutschland von ihrem aktuellen TV enttäuscht sind",
    subtitle: "Sie möchten einfach Ihre Sender in bester Qualität sehen. Doch Ihr aktueller Anbieter macht es teuer und kompliziert.",
    pains: [
      { title: "IPTV Deutschland: schlechte Verfügbarkeit im Ausland", desc: "Ausländische IPTV-Anbieter bieten deutsche Sender oft nur lückenhaft oder in schlechter Qualität an. Die großen öffentlich-rechtlichen und privaten Sender fehlen häufig oder laufen nur in niedriger Auflösung." },
      { title: "IPTV Deutschland: Fußball und Sport sind teuer", desc: "Über den klassischen Weg zahlen Sie zusätzlich Dutzende Euro für Sportsender — ein teures Sportpaket obendrauf auf Ihr Basisabonnement." },
      { title: "IPTV Deutschland: kein deutschsprachiger Support", desc: "Bei Problemen müssen Sie auf Englisch ausweichen oder auf eine endlose E-Mail-Korrespondenz warten. Ein deutschsprachiger Kundenservice, der Sie schnell versteht, fehlt." },
      { title: "IPTV Deutschland: Sender im Ausland nicht empfangbar", desc: "Im Ausland oder auf Reisen können Sie Ihre deutschen Lieblingssender und Regionalprogramme oft nicht empfangen." },
    ],
  },

  // ── Section 4: Solution ─────────────────────────────────────────────────
  solution: {
    eyebrow: "Die Lösung für Zuschauer in Deutschland",
    title: "IPTV Deutschland bei IPTV Germany — alle Sender an einem Ort",
    subtitle: "Speziell für Zuschauer in Deutschland, Österreich und der Schweiz. Erhalten Sie alle deutschen, internationalen und Regionalsender ohne Aufwand.",
    points: [
      { title: "IPTV Deutschland: das komplette Senderpaket", desc: "Ein Komplettpaket: deutsche öffentlich-rechtliche, private, Film- und Sportsender sowie internationale und regionale Sender." },
      { title: "IPTV Deutschland: Fußball und Sport in 4K", desc: "Fußball, Motorsport, Wintersport, Basketball und mehr — eine große Auswahl an Sportsendern ist in Ihrem Abonnement inbegriffen. Kein zusätzliches Sportpaket nötig." },
      { title: "IPTV Deutschland: deutschsprachiger Support durch echte Berater", desc: "Unser Team spricht Deutsch und versteht Ihre Fragen. Erreichbar über WhatsApp mit einer maximalen Antwortzeit von 5 Minuten." },
      { title: "IPTV Deutschland: Ihre Sender überall auf der Welt", desc: "Im Urlaub oder auf Reisen? Mit IPTV empfangen Sie Ihre deutschen Sender weltweit. Eine einfache Internetverbindung genügt." },
    ],
  },

  // ── Section 5: Features ─────────────────────────────────────────────────
  features: {
    eyebrow: "Das Angebot im Detail",
    title: "IPTV Deutschland: Funktionen speziell für den deutschen Markt",
    subtitle: "Unser Service ist speziell für Zuschauer in Deutschland konzipiert.",
    features: [
      { title: "IPTV Deutschland: vollständiger Programmführer (EPG)", desc: "Ein elektronischer Programmführer mit Zeiten, Beschreibungen und Genres. Möchten Sie wissen, was auf Ihren Sendern läuft? Der Überblick zeigt es Ihnen." },
      { title: "IPTV Deutschland: Catch-up-TV", desc: "Eine Folge der Tagesschau oder Ihrer Lieblingssendung verpasst? Mit Catch-up sehen Sie Sendungen bis zu 7 Tage zurück — für deutsche und internationale Sender." },
      { title: "IPTV Deutschland: deutsche Untertitel", desc: "Alle unsere VOD-Inhalte und eine Auswahl an Live-Sendern bieten deutsche Untertitel. Filme, Serien und Dokumentationen mit Untertiteln." },
      { title: "IPTV Deutschland: Sport-Stream in 4K", desc: "Fußball, Motorsport, Wintersport und große Meisterschaften in Ultra HD. Speziell für Sportfans optimiert." },
      { title: "IPTV Deutschland: alle deutschen Regionalsender", desc: "Alle Regionalsender: BR, WDR, NDR, MDR, SWR, HR, rbb, SR und viele mehr." },
      { title: "IPTV Deutschland: Themensender", desc: "Deutsche und internationale Themensender: Film, Kochen, Comedy, Musik und mehr. Entdecken Sie neue Lieblingssender." },
    ],
  },

  // ── Section 6: Why Us ────────────────────────────────────────────────────
  whyUs: {
    eyebrow: "Warum wir?",
    title: "Deshalb ist IPTV Germany die beste Wahl für IPTV in Deutschland",
    subtitle: "Unser Service ist speziell auf den deutschen Markt zugeschnitten.",
    reasons: [
      { title: "IPTV Deutschland: nahegelegene Server für flüssiges Streaming", desc: "Unsere Server stehen in Deutschland und Österreich. Die Verbindung ist ultraschnell, Sender starten sofort und Störungen gehören der Vergangenheit an. Optimale Unterstützung für deutsche Internetanbieter." },
      { title: "IPTV Deutschland: alles auf Deutsch", desc: "Website auf Deutsch, Support auf Deutsch, Programmführer auf Deutsch. Keine Übersetzungen und kein internationaler Aufwand. Wir sprechen Ihre Sprache." },
      { title: "IPTV Deutschland: vertraut mit der deutschen TV-Kultur", desc: "Wir wissen, was Zuschauern in Deutschland wichtig ist: Fußball, große Sportevents, deutsche Produktionen und internationaler Sport — alles in hoher Qualität." },
    ],
  },

  // ── Section 7: How It Works ─────────────────────────────────────────────
  how: {
    eyebrow: "Los geht's",
    title: "IPTV Deutschland: in 3 Schritten IPTV in Deutschland sehen",
    subtitle: "Von der Anmeldung bis zum Streamen Ihrer Lieblingssender.",
    steps: [
      { step: "01", title: "IPTV Deutschland: Paket wählen", desc: "Wählen Sie die Anzahl der Verbindungen und die gewünschte Laufzeit. Alle Pakete enthalten das komplette Angebot an deutschen und internationalen Sendern sowie allen Sport ohne Aufpreis." },
      { step: "02", title: "IPTV Deutschland: auf Ihrem Gerät installieren", desc: "Laden Sie IPTV Smarters Pro, TiviMate oder VLC auf Ihrem TV, Smartphone oder Tablet herunter. Geben Sie Ihren M3U-Link oder Ihre Xtream Codes ein, und die Sender erscheinen." },
      { step: "03", title: "IPTV Deutschland: in 4K fernsehen", desc: "Schalten Sie sofort zu Ihren deutschen, internationalen oder Regionalsendern um. Genießen Sie ein gestochen scharfes Bild und flüssige Streams — wo auch immer Sie sind." },
    ],
  },

  // ── Section 8: Device Compatibility ──────────────────────────────────────
  devices: {
    eyebrow: "Gängige Geräte",
    title: "IPTV Deutschland: funktioniert auf allen gängigen Geräten in Deutschland",
    subtitle: "Unser Service ist getestet und optimiert für die beliebtesten Geräte in deutschen Haushalten.",
    deviceGroups: [
      { name: "Beliebte Smart-TVs in Deutschland", items: ["Samsung (Marktführer DE)", "LG OLED", "Philips Ambilight TV", "Sony Bravia", "Panasonic", "Hisense"] },
      { name: "Meistgenutzt in Deutschland", items: ["Amazon Fire TV Stick", "Google Chromecast", "Apple TV 4K", "Nvidia Shield", "Formuler Z11", "Xiaomi Mi Box S"] },
      { name: "Mobil in Deutschland", items: ["Samsung Galaxy S-Serie", "iPhone", "OnePlus", "Google Pixel", "Fairphone", "iPad"] },
      { name: "IPTV-Anwendungen", items: ["IPTV Smarters Pro", "TiviMate", "VLC Media Player", "Kodi", "GSE Smart IPTV", "IPTX"] },
    ],
    ctaText: "Installationsanleitungen für jedes Gerät",
  },

  // ── Section 9: Channels ─────────────────────────────────────────────────
  channels: {
    eyebrow: "Das Senderangebot",
    title: "IPTV Deutschland: das komplette Angebot an deutschen und internationalen Sendern",
    subtitle: "IPTV Deutschland: alle Sender, die Sie erwarten — und noch viele mehr.",
    channelGroups: [
      { name: "Deutsche Sender", items: ["Öffentlich-rechtliche Sender HD", "Private Vollprogramme HD", "Filmsender HD", "Unterhaltungssender HD", "Kultursender HD", "Kindersender HD", "Musiksender HD"] },
      { name: "Internationale Sender", items: ["Öffentliche Sender HD", "Kommerzielle Sender HD", "Unterhaltungssender HD", "Familiensender HD", "Lifestyle-Sender HD", "Regionale Sender HD", "Musiksender HD"] },
      { name: "Live-Sport", items: ["Fußball", "Internationaler Sport", "Große Meisterschaften", "Motorsport", "Wintersport", "Kampfsport", "Tennis", "Basketball"] },
      { name: "Regional & thematisch", items: ["Regionale DE-Sender", "Lokale Nachrichten", "Bundesländer-Sender", "Regionale Nachrichten", "Essen & Lifestyle", "Musik", "Comedy"] },
    ],
  },

  // ── Section 10: Pricing ─────────────────────────────────────────────────
  pricing: {
    pillText: "Preise",
    title: "IPTV Deutschland — wählen Sie Ihr Paket",
    subtitle: "Sehen Sie sich die Preise an. Alle deutschen und internationalen Sender, Sport und Filme inklusive. Keine versteckten Kosten.",
  },

  // ── Section 11: Comparison ────────────────────────────────────────────────
  comparison: {
    eyebrow: "Vergleich",
    title: "IPTV Germany im Vergleich zu klassischen deutschen TV-Anbietern",
    subtitle: "Vodafone, Telekom und o2 gegen IPTV Germany — die Unterschiede sind groß.",
    rows: [
      { feature: "Monatlicher Grundpreis", us: "Ab 7,99 €/Monat", them: "55 € – 80 €/Monat" },
      { feature: "Deutsche & int. Sender", us: "200+ in HD/4K", them: "50-60 in HD" },
      { feature: "Fußball & Meisterschaften", us: "Inklusive", them: "Sportpaket +15-30 €" },
      { feature: "4K-Bildqualität", us: "Standard", them: "Begrenztes HD" },
      { feature: "Regionale Sender", us: "Alle Bundesländer", them: "Nur digitales TV" },
      { feature: "Senderwechsel-Geschwindigkeit", us: "<1 Sekunde", them: "1-3 Sekunden" },
      { feature: "Kündigungsfrist", us: "Keine", them: "1 Monat + Gebühr" },
    ],
  },

  // ── Section 12: Testimonials ─────────────────────────────────────────────
  testimonials: {
    eyebrow: "Erfahrungen",
    title: "Was Zuschauer in Deutschland über IPTV Deutschland sagen",
    subtitle: "Tausende Zuschauer haben ihre Erfahrung geteilt.",
  },

  // ── Section 13: Security & Reliability ────────────────────────────────────
  security: {
    eyebrow: "Sicherheit",
    title: "IPTV Deutschland: sicher IPTV bei uns schauen",
    subtitle: "Wir erfüllen die höchsten deutschen und europäischen Sicherheitsstandards.",
    items: [
      { title: "IPTV Deutschland: Datenschutz (DSGVO)", desc: "Wir erfüllen die Vorgaben der Datenschutz-Grundverordnung. Ihre personenbezogenen Daten werden gemäß deutschem und europäischem Recht verarbeitet." },
      { title: "IPTV Deutschland: Server in Deutschland", desc: "Unsere Server stehen physisch in Deutschland. Ihre Daten bleiben in Deutschland und unterliegen deutschem Recht. Maximale Privatsphäre und Kontrolle." },
      { title: "IPTV Deutschland: europäischer Zahlungsanbieter", desc: "Wir arbeiten mit Stripe und weiteren europäischen Zahlungsdienstleistern. Sie zahlen sicher über Ihre eigene Bank oder Karte, genau wie gewohnt." },
      { title: "IPTV Deutschland: Beschwerdeservice nach deutschen Standards", desc: "Bei einer Beschwerde folgen wir demselben Verfahren wie deutsche Telekommunikationsanbieter. Klare Abwicklung, feste Ansprechpartner und Eskalationsmöglichkeiten." },
    ],
  },

  // ── Section 14: FAQ (exactly 8) ─────────────────────────────────────────
  faq: {
    eyebrow: "Häufig gestellte Fragen",
    title: "Häufig gestellte Fragen zu IPTV in Deutschland",
    subtitle: "IPTV Deutschland: die meistgestellten Fragen unserer Zuschauer.",
    faqs: [
      {
        question: "Was genau ist IPTV in Deutschland?",
        answer: "IPTV (Internet Protocol Television) ist Fernsehen über Ihre Internetverbindung statt über Kabel oder Satellit. Sie streamen live TV, Sport und Filme direkt auf Ihrem Gerät. Für IPTV in Deutschland benötigen Sie nur einen Internetanschluss und ein kompatibles Gerät."
      },
      {
        question: "Welche Sender kann ich mit IPTV in Deutschland empfangen?",
        answer: "Bei IPTV Germany erhalten Sie eine große Auswahl deutscher Sender (öffentlich-rechtlich, privat, Film, Sport) sowie internationale und Regionalsender, in HD und 4K."
      },
      {
        question: "Kann ich live Fußball mit IPTV sehen?",
        answer: "Ja, eine große Auswahl an Live-Sportsendern ist in Ihrem Abonnement enthalten, mit umfangreicher Fußball-Berichterstattung und großen Meisterschaften. Motorsport, Wintersport, Basketball und viele weitere Sportarten sind ebenfalls in 4K verfügbar. Das verfügbare Angebot kann je nach Region variieren."
      },
      {
        question: "Ist IPTV in Deutschland legal?",
        answer: "IPTV ist eine Technologie zur Fernsehübertragung über das Internet. Die Rechtmäßigkeit eines Dienstes hängt von den entsprechenden Senderechten ab. Wir empfehlen Ihnen, stets einen Dienst zu wählen, der über die erforderlichen Rechte verfügt, und die für Ihre Situation geltenden lokalen Vorschriften zu prüfen."
      },
      {
        question: "Brauche ich eine spezielle Internetverbindung für IPTV?",
        answer: "Ein Standard-Internetanschluss mit mindestens 25 Mbit/s genügt für HD-Streams. Für 4K empfehlen wir 50 Mbit/s oder mehr. Die meisten Haushalte verfügen über mehr als genug Geschwindigkeit. Unsere adaptive Bitrate passt sich Ihrer Verbindung an."
      },
      {
        question: "Funktioniert IPTV Deutschland auch im Ausland?",
        answer: "Ja, Sie können Ihre deutschen Sender überall auf der Welt sehen, solange Sie über eine Internetverbindung verfügen. Ideal für den Urlaub. Sport- und Regionalsender sind ebenfalls weltweit verfügbar."
      },
      {
        question: "Wie installiere ich IPTV auf meinem Samsung- oder LG-Fernseher?",
        answer: "Auf Samsung- und LG-Smart-TVs installieren Sie einfach die IPTV-Smarters-Pro-App über den App Store. Geben Sie anschließend Ihren M3U-Link und Ihre Xtream Codes ein. Ihre Sender werden automatisch samt Programmführer geladen. Schritt-für-Schritt-Anleitungen sind verfügbar."
      },
      {
        question: "Kann ich fernsehen ohne Schüssel oder Kabel?",
        answer: "Ja, genau das macht IPTV möglich. Sie benötigen keine Schüssel, keinen Kabelanschluss und kein Koaxialkabel. Nur eine Internetverbindung und ein kompatibles Gerät. Das spart Installationskosten und macht Fernsehen überall möglich."
      },
    ],
  },

  // ── Section 15: Internal Linking Hub ──────────────────────────────────────
  internalLinks: {
    eyebrow: "Mehr über IPTV",
    title: "IPTV Deutschland: vertiefen Sie sich mit unseren anderen Seiten",
    subtitle: "Lesen Sie alles über IPTV, speziell für Zuschauer in Deutschland.",
    links: [LINK.home, LINK.kaufen, LINK.abonnement, LINK.anbieter, LINK.smarters],
  },

  // ── Section 16: Final CTA ────────────────────────────────────────────────
  finalCta: {
    title: "Sehen Sie Ihre Sender, wie es sein sollte — in 4K und ohne Aufwand",
    description: "Schließen Sie sich Tausenden Zuschauern an. Alle Sender, aller Sport, alles inklusive. Ohne Jahresvertrag oder versteckte Kosten.",
  },
};

export default deutschland;
