import type { SixteenSectionContent } from "./types";

const LINK = {
  home: { label: "IPTV Germany", href: "/", description: "Der beste IPTV-Service Deutschlands mit 31.000+ Sendern und 4K." },
  kaufen: { label: "IPTV kaufen", href: "/iptv-kaufen", description: "Kaufen Sie direkt ein IPTV-Abonnement mit sicherer Zahlung." },
  anbieter: { label: "IPTV-Anbieter", href: "/iptv-anbieter", description: "Vergleichen Sie IPTV-Anbieter und entdecken Sie die beste Wahl." },
  deutschland: { label: "IPTV Deutschland", href: "/iptv-deutschland", description: "Alles über IPTV in Deutschland: Sender, Sport und Installation." },
  smarters: { label: "IPTV Smarters Pro", href: "/iptv-smarters-pro", description: "Installationsanleitung für IPTV Smarters Pro auf all Ihren Geräten." },
};

const abonnement: SixteenSectionContent = {
  slug: "iptv-abonnement",
  path: "/iptv-abonnement",
  meta: {
    title: "IPTV-Abonnement ☑ Die beste Wahl in Deutschland",
    description: "Das beste IPTV-Abonnement in Deutschland: 31.000+ Sender, aller Sport & Filme, 4K-Qualität und 24/7-Support. Flexible Laufzeiten ohne Jahresvertrag. Kostenlose Testphase.",
    h1: "IPTV-Abonnement – vergleichen und die beste Wahl treffen",
  },

  // ── Section 1: Hero ─────────────────────────────────────────────────────
  hero: {
    pill: "IPTV-Abonnement · Vergleichen lohnt sich",
    title: "IPTV-Abonnement: das beste IPTV-Abonnement für Ihre Situation",
    subtitle: "Auf der Suche nach einem IPTV-Abonnement? Treffen Sie die richtige Wahl dank unseres übersichtlichen Vergleichs von Diensten, Preisen und Möglichkeiten. Alle Pakete auf Qualität geprüft.",
    bg: "/images/hero-bg.webp",
    ctaPrimary: "Abonnements vergleichen",
    ctaPrimaryHref: "#pakketten",
    ctaSecondary: "Kostenlose Testphase starten",
    ctaSecondaryHref: "#pakketten",
  },

  // ── Section 2: Trust bar ────────────────────────────────────────────────
  trustBar: {
    items: [
      { label: "Abonnementformen", value: "3" },
      { label: "Server nahe Deutschland", value: "99,9%" },
      { label: "Google-Bewertung", value: "4,9/5" },
      { label: "zufriedene Abonnenten", value: "10.000+" },
    ],
  },

  // ── Section 3: Problem ──────────────────────────────────────────────────
  problem: {
    eyebrow: "Bekannte Frustrationen",
    title: "IPTV-Abonnement: warum Ihr aktuelles TV-Abonnement nicht mehr ausreicht",
    subtitle: "Die Art, wie wir fernsehen, hat sich verändert. Trotzdem bieten klassische Anbieter noch immer dasselbe begrenzte Modell.",
    pains: [
      { title: "IPTV-Abonnement: feste Kosten, die weiter steigen", desc: "Jedes Jahr erhöht Ihr TV-Anbieter die Preise, während das Angebot gleich bleibt. Sie zahlen inzwischen 70 Euro oder mehr für Sender, die Sie kaum ansehen." },
      { title: "IPTV-Abonnement: keine Flexibilität bei der Laufzeit", desc: "Ein Abonnement bei einem klassischen Anbieter zwingt Sie zu langfristigen Verträgen. Bei einem Umzug oder veränderten Bedürfnissen zahlen Sie eine hohe Strafe." },
      { title: "IPTV-Abonnement: beschränkt auf nur ein Gerät", desc: "Möchten Sie auf mehreren Fernsehern schauen oder unterwegs auf dem Smartphone? Bei den meisten Anbietern zahlen Sie für jeden zusätzlichen Anschluss extra. Teuer und kompliziert." },
      { title: "IPTV-Abonnement: Sport und Filme fehlen", desc: "Ihr Abonnement deckt nicht die wichtigsten Sportsender oder neue Filme ab. Für jede Erweiterung zahlen Sie ein teures Themenpaket." },
    ],
  },

  // ── Section 4: Solution ─────────────────────────────────────────────────
  solution: {
    eyebrow: "",
    title: "IPTV-Abonnement: ein modernes IPTV-Abonnement löst diese Probleme",
    subtitle: "Ein guter IPTV-Anbieter bietet alles in einem Paket, ohne Ausnahme.",
    points: [
      { title: "IPTV-Abonnement: alles inklusive, keine Themenpakete", desc: "Sport, Filme, 4K, deutsche und internationale Sender — alles im Standardpreis inbegriffen. Keine teuren Aufpreise wie bei Kabelanbietern." },
      { title: "IPTV-Abonnement: jederzeit ohne Strafe kündbar", desc: "Kein Jahresvertrag. Sie entscheiden, ob Sie monatlich, vierteljährlich oder jährlich zahlen. Die Kündigung ist einfach und kostenlos." },
      { title: "IPTV-Abonnement: gleichzeitig auf mehreren Geräten schauen", desc: "Ein IPTV-Abonnement mit 2, 3 oder 4 Verbindungen. Die ganze Familie schaut, wo und wann sie möchte — ohne zusätzliche Anschlusskosten." },
      { title: "IPTV-Abonnement: Tausende Sender ohne versteckte Kosten", desc: "Kein Aufpreis für Sportsender, internationale Sender oder 4K. Ihr Monatsbetrag ist fest und deckt das komplette Angebot ab." },
    ],
  },

  // ── Section 5: Features ─────────────────────────────────────────────────
  features: {
    eyebrow: "Inklusive bei jedem Abonnement",
    title: "Diese Funktionen sind standardmäßig in jedem IPTV-Abonnement enthalten",
    subtitle: "Unabhängig vom gewählten Paket sind diese Vorteile immer inbegriffen.",
    features: [
      { title: "IPTV-Abonnement: 31.000+ Live-TV-Sender", desc: "Vom deutschen Angebot bis zu internationalen Sendern aus mehr als 190 Ländern. Immer etwas zum Anschauen, in jeder Sprache und für jedes Publikum." },
      { title: "IPTV-Abonnement: 140.000+ Filme & Serien (VOD)", desc: "Eine umfangreiche Video-on-Demand-Bibliothek, die täglich erweitert wird. Neueste Veröffentlichungen, Klassiker und komplette Serien — ohne Aufpreis." },
      { title: "IPTV-Abonnement: 4K & Ultra HD-Streams", desc: "Die höchste Bildqualität für Sport, Filme und Dokumentationen. HDR-Unterstützung für realistische Farben und Kontraste." },
      { title: "IPTV-Abonnement: elektronischer Programmführer (EPG)", desc: "Ein übersichtlicher Guide mit Programminformationen zu allen Sendern. Suchen, filtern und entdecken Sie, was jetzt, gleich und morgen läuft." },
      { title: "IPTV-Abonnement: Anti-Freeze & null Unterbrechungen", desc: "Spezielle Software minimiert Unterbrechungen und stabilisiert den Stream. Selbst zu Stoßzeiten und bei Live-Sport schauen Sie ohne Unterbrechung." },
      { title: "IPTV-Abonnement: 24/7-Kundenservice", desc: "Unser Team ist immer über WhatsApp, E-Mail oder Telefon erreichbar. Antwort innerhalb von 5 Minuten, an 7 Tagen die Woche." },
    ],
  },

  // ── Section 6: Why Us ───────────────────────────────────────────────────
  whyUs: {
    eyebrow: "Unser Versprechen",
    title: "Drei Gründe für ein IPTV-Abonnement bei IPTV Germany",
    subtitle: "Warum entscheiden sich immer mehr Haushalte für unser Abonnementmodell?",
    reasons: [
      { title: "IPTV-Abonnement: der niedrigste Preis pro Sender", desc: "Rechnen Sie selbst nach: Für 10 bis 15 Euro im Monat erhalten Sie mehr als 31.000 Sender. Das sind 0,0003 Euro pro Sender. Bei der Konkurrenz zahlen Sie bis zu 1 Euro pro Sender im Monat." },
      { title: "IPTV-Abonnement: kein Unterschied zwischen den Paketen", desc: "Manche Anbieter reservieren Sport oder 4K für teurere Pakete. Bei uns haben Sie alles in jedem Abonnement. Der einzige Unterschied: die Laufzeit und die Anzahl der Verbindungen." },
      { title: "IPTV-Abonnement: immer aktuell", desc: "Ihr IPTV-Abonnement wird täglich mit neuen Sendern, VOD-Ergänzungen und Verbesserungen aktualisiert. Kein Warten und keine manuelle Installation mehr nötig." },
    ],
  },

  // ── Section 7: How It Works ─────────────────────────────────────────────
  how: {
    eyebrow: "Anmeldeprozess",
    title: "IPTV-Abonnement: starten Sie Ihr IPTV-Abonnement in 3 Schritten",
    subtitle: "Von der Anmeldung bis zum Streamen in weniger als 10 Minuten. Keine komplizierte Installation.",
    steps: [
      { step: "01", title: "IPTV-Abonnement: wählen Sie Ihre Laufzeit", desc: "Sehen Sie sich die Abonnements pro Monat, 3 Monate, 6 Monate oder 12 Monate an. Je länger die Laufzeit, desto niedriger der Monatspreis. Sie können jederzeit verlängern oder kündigen." },
      { step: "02", title: "IPTV-Abonnement: Anzahl der Verbindungen wählen", desc: "Wählen Sie zwischen 1, 2, 3 oder 4 gleichzeitigen Streams. Für einen durchschnittlichen Haushalt sind 2 Verbindungen ideal: eine fürs Wohnzimmer, eine fürs Schlafzimmer." },
      { step: "03", title: "IPTV-Abonnement: bezahlen und sofort streamen", desc: "Nach der Zahlung per Kreditkarte, PayPal oder Sofortüberweisung erhalten Sie Ihre Zugangsdaten. Geben Sie den M3U-Link oder die Xtream Codes in Ihre bevorzugte IPTV-App ein und beginnen Sie mit dem Schauen." },
    ],
  },

  // ── Section 8: Device Compatibility ──────────────────────────────────────
  devices: {
    eyebrow: "Nahezu alle Geräte",
    title: "IPTV-Abonnement: Ihr IPTV-Abonnement funktioniert auf all diesen Geräten",
    subtitle: "IPTV-Abonnement: zu Hause oder unterwegs, auf dem Gerät Ihrer Wahl.",
    deviceGroups: [
      { name: "Smart TV", items: ["Samsung Tizen TV", "LG ThinQ webOS", "Sony Android TV", "Philips Smart TV", "Panasonic My Home Screen", "TCL Roku TV"] },
      { name: "Streaming-Geräte", items: ["Fire TV Stick Max", "Apple TV HD/4K", "Nvidia Shield Pro", "Chromecast Gen 4", "Formuler Z11", "MAG 524w2"] },
      { name: "Mobil & Tablet", items: ["iPhone 15/16 Pro", "iPad Air", "Samsung Galaxy S25", "Xiaomi 14T", "Huawei MatePad", "OnePlus 13"] },
      { name: "Software & Apps", items: ["IPTV Smarters Pro", "TiviMate Premium", "VLC Media Player", "Perfect Player", "Kodi Matrix", "IPTV Extreme"] },
    ],
    ctaText: "Vollständige Kompatibilitätsliste",
  },

  // ── Section 9: Channels ─────────────────────────────────────────────────
  channels: {
    eyebrow: "Senderangebot",
    title: "IPTV-Abonnement: welche Sender erhalten Sie mit Ihrem IPTV-Abonnement?",
    subtitle: "Ein Überblick über das umfangreiche Angebot, das in jedem Paket enthalten ist.",
    channelGroups: [
      { name: "Deutsche Sender", items: ["Vollprogramme HD", "Öffentlich-rechtliche Sender HD", "Sportsender", "Fußballsender", "Regionale Sender", "Premium-Kino"] },
      { name: "Sportsender", items: ["Live-Sport", "Fußball", "Internationaler Sport", "Motorsport", "Kampfsport", "Sport auf Abruf"] },
      { name: "Filme & Serien", items: ["Kinosender", "Premium-Serien", "Unterhaltungssender", "Kino auf Abruf", "Aktuelle Filme", "Arthouse-Kino"] },
      { name: "Internationale Sender", items: ["Britische Nachrichten", "Internationale Nachrichten", "Arabische Nachrichten", "Türkische Sender", "Französische Nachrichten", "Österreichische & Schweizer Sender"] },
    ],
  },

  // ── Section 10: Pricing ─────────────────────────────────────────────────
  pricing: {
    pillText: "Unsere Preise",
    title: "IPTV-Abonnement: wählen Sie Ihr IPTV-Abonnement",
    subtitle: "Alle Pakete sind vollständig inklusive. Kein Aufpreis für Sport, 4K oder internationale Sender.",
  },

  // ── Section 11: Comparison ────────────────────────────────────────────────
  comparison: {
    eyebrow: "Kosten & Vergleich",
    title: "IPTV-Abonnement: IPTV Germany im Vergleich zu anderen IPTV-Abonnements",
    subtitle: "Ein objektiver Vergleich zwischen unserem Service und anderen Anbietern.",
    rows: [
      { feature: "Monatspreis (kürzeste Laufzeit)", us: "ab 12,99 €", them: "14,99 € – 29,99 €" },
      { feature: "Monatspreis (längste Laufzeit)", us: "ab 7,99 €", them: "9,99 € – 19,99 €" },
      { feature: "Kostenlose Testphase", us: "Ja, 1 Stunde", them: "Nein / nur kostenpflichtig" },
      { feature: "Serverstandort", us: "Eigene Server DE & AT", them: "Geteilt EU / außerhalb EU" },
      { feature: "Aktualisierungsfrequenz Sender", us: "Täglich", them: "Wöchentlich" },
      { feature: "Kundenservice", us: "24/7 WhatsApp, Telefon", them: "Begrenzt oder auf Englisch" },
      { feature: "Zufriedenheitsgarantie", us: "Ja, bedingungslos", them: "Nein" },
    ],
  },

  // ── Section 12: Testimonials ─────────────────────────────────────────────
  testimonials: {
    eyebrow: "Erfahrungen",
    title: "IPTV-Abonnement: was Abonnenten über ihr IPTV-Abonnement sagen",
    subtitle: "IPTV-Abonnement: Tausende Menschen haben es bereits getan.",
  },

  // ── Section 13: Security & Reliability ────────────────────────────────────
  security: {
    eyebrow: "Ein sicheres Abonnement",
    title: "IPTV-Abonnement: Ihr IPTV-Abonnement vollständig sicher",
    subtitle: "Wir setzen die strengsten Standards in puncto Sicherheit und Zuverlässigkeit ein.",
    items: [
      { title: "IPTV-Abonnement: 99,9% Serververfügbarkeit", desc: "Unsere Server laufen auf einem redundanten Netzwerk mit automatischem Failover. Fällt ein Server aus, werden Sie innerhalb weniger Millisekunden auf einen Backup-Server umgeleitet." },
      { title: "IPTV-Abonnement: sichere Zahlungen", desc: "Wir arbeiten mit Stripe, einem der sichersten Zahlungsdienstleister Europas. Ihre Finanzdaten verlassen niemals die gesicherte Umgebung." },
      { title: "IPTV-Abonnement: kein Tracking oder Profiling", desc: "Wir speichern Ihren Sehverlauf nicht und geben keine Daten an Werbetreibende weiter. Ihre Privatsphäre wird vollständig respektiert." },
      { title: "IPTV-Abonnement: DSGVO-konform", desc: "Wir erfüllen die Vorgaben der Datenschutz-Grundverordnung. Sie haben jederzeit Zugriff auf Ihre Daten und volle Kontrolle darüber." },
    ],
  },

  // ── Section 14: FAQ (exactly 8) ─────────────────────────────────────────
  faq: {
    eyebrow: "Häufig gestellte Fragen",
    title: "Häufig gestellte Fragen zu einem IPTV-Abonnement",
    subtitle: "IPTV-Abonnement: die Antworten auf die häufigsten Fragen.",
    faqs: [
      {
        question: "Was ist das beste IPTV-Abonnement in Deutschland?",
        answer: "Das beste Abonnement hängt von Ihrem Sehverhalten ab. Für einen Fernseher genügt ein Abonnement mit 1 Verbindung. Familien empfehlen wir 2 bis 4 Verbindungen, sodass jeder auf dem eigenen Gerät ohne Unterbrechung schauen kann. Alle Abonnements bieten dasselbe Senderangebot."
      },
      {
        question: "Kann ich ein IPTV-Abonnement ohne Jahresvertrag abschließen?",
        answer: "Ja, bei IPTV Germany haben Sie die Wahl zwischen flexiblen Laufzeiten: kündbar pro Monat, 3 Monate, 6 Monate oder 12 Monate. Je länger die Laufzeit, desto niedriger der Monatspreis. Eine Kündigung ist jederzeit ohne Strafe möglich."
      },
      {
        question: "Wie viel kostet ein IPTV-Abonnement pro Monat im Jahr 2026?",
        answer: "Ein IPTV-Abonnement kostet zwischen 7,99 € und 12,99 € pro Monat, abhängig von der gewählten Laufzeit. Das umfasst alle Sender, Sportsender und die VOD-Bibliothek. Keine versteckten Kosten für 4K oder zusätzliche Geräte."
      },
      {
        question: "Sport inklusive: welche Sportsender enthält das IPTV-Abonnement?",
        answer: "Ja, eine große Auswahl an Sportsendern ist inbegriffen: Fußball, Motorsport, Wintersport, Basketball, Kampfsport und viele weitere Disziplinen sowie internationale Sportsender. Das verfügbare Angebot kann je nach Region variieren."
      },
      {
        question: "Wie kündige ich mein IPTV-Abonnement?",
        answer: "Die Kündigung ist einfach. Senden Sie eine Nachricht über WhatsApp oder eine E-Mail an unser Support-Team. Ihr Abonnement wird sofort gekündigt, und Sie zahlen nichts mehr. Keine Kündigungsfrist oder Strafe. Sie schauen bis zum Ende des bezahlten Zeitraums weiter."
      },
      {
        question: "Kann ich mehrere IPTV-Abonnements auf demselben Gerät nutzen?",
        answer: "Ja, die meisten IPTV-Apps unterstützen mehrere Playlists. Sie wechseln einfach zwischen verschiedenen M3U-Links oder Xtream Codes. Praktisch, wenn Sie zum Beispiel ein separates Abonnement für eine Ferienwohnung haben."
      },
      {
        question: "Was ist der Unterschied zwischen 1, 2, 3 oder 4 Verbindungen?",
        answer: "Die Anzahl der Verbindungen bestimmt, wie viele Geräte gleichzeitig streamen können. Mit 1 Verbindung schauen Sie auf einem Bildschirm. Mit 4 Verbindungen können vier verschiedene Geräte unabhängig voneinander unterschiedliche Sender anschauen."
      },
      {
        question: "Erhalte ich einen Kaufbeleg für mein IPTV-Abonnement?",
        answer: "Ja, Sie erhalten eine Zahlungsbestätigung per E-Mail mit den Details Ihres Kaufs, der gewählten Laufzeit und dem Startdatum. Diese dient zugleich als Garantienachweis."
      },
    ],
  },

  // ── Section 15: Internal Linking Hub ──────────────────────────────────────
  internalLinks: {
    eyebrow: "Entdecken Sie auch",
    title: "IPTV-Abonnement: alles über IPTV und Abonnements",
    subtitle: "Vertiefen Sie sich mit unseren anderen Seiten für ein vollständiges Bild unseres Service.",
    links: [LINK.home, LINK.kaufen, LINK.anbieter, LINK.deutschland, LINK.smarters],
  },

  // ── Section 16: Final CTA ────────────────────────────────────────────────
  finalCta: {
    title: "IPTV-Abonnement: wählen Sie jetzt das Abonnement, das zu Ihnen passt",
    description: "Starten Sie noch heute mit dem besten IPTV-Abonnement Deutschlands. Sofortiger Zugang zu allen Sendern, Sport und Filmen — ohne Jahresvertrag.",
  },
};

export default abonnement;
