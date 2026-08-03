import { Link } from ".";
import {
  getIptvGermanPath,
  IPTV_GERMAN_PAGES,
} from "@/content/iptv-german-pages";

export const NAV_LINKS: Link[] = [
  {
    label: "IPTV Germany",
    href: "/",
  },
  {
    label: "Preise",
    href: "#prijzen",
  },
  {
    label: "IPTV kaufen",
    href: "/iptv-kaufen",
  },
  {
    label: "Abonnement",
    href: "/iptv-abonnement",
  },
  {
    label: "Anbieter",
    href: "/iptv-anbieter",
  },
  {
    label: "IPTV Deutschland",
    href: "/iptv-deutschland",
  },
  {
    label: "IPTV Smarters Pro",
    href: "/iptv-smarters-pro",
  },
  {
    label: "Kontakt",
    href: "/support/contact",
  },
];
export const productsFooterLinks: Link[] = [
  {
    label: "Vorteile",
    href: "/#voordelen",
  },
  {
    label: "Preise",
    href: "/#prijzen",
  },
  {
    label: "Sender",
    href: "/#kanalen",
  },
  {
    label: "Pakete",
    href: "/#pakketten",
  },
];

export const supportFooterLinks: Link[] = [
  {
    label: "Hilfe-Center",
    href: "/support",
  },
  {
    label: "Installationsanleitungen",
    href: "/support/guides",
  },
  {
    label: "Kontakt",
    href: "/support/contact",
  },
  {
    label: "Systemstatus",
    href: "/support/status",
  },
  {
    label: "Über uns",
    href: "/ueber-uns",
  },
];

export const legalFooterLinks: Link[] = [
  {
    label: "Impressum",
    href: "/impressum",
  },
  {
    label: "Datenschutz",
    href: "/datenschutz",
  },
  {
    label: "AGB",
    href: "/agb",
  },
  {
    label: "Cookie-Richtlinie",
    href: "/cookie-richtlinie",
  },
];

export const categories = [
  {
    name: "Sport",
    count: "Hunderte Sportsender",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80&auto=format&fit=crop",
  },
  {
    name: "Filme",
    count: "Tausende Filme",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=82&auto=format&fit=crop&crop=entropy",
  },
  {
    name: "Serien",
    count: "Tausende Serien",
    image:
      "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=1200&q=82&auto=format&fit=crop&crop=entropy",
  },
  {
    name: "Dokumentationen",
    count: "Große Auswahl",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1200&q=82&auto=format&fit=crop&crop=entropy",
  },
  {
    name: "Kindersender",
    count: "Sicher und vielfältig",
    image:
      "https://images.unsplash.com/photo-1607453998774-d533f65dac99?w=1200&q=82&auto=format&fit=crop&crop=entropy",
  },
  {
    name: "Internationale Sender",
    count: "190+ Länder",
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&q=82&auto=format&fit=crop&crop=entropy",
  },
];

export const features = [
  {
    title: "Ultra-HD-4K-Streaming",
    description:
      "Gestochen scharfe 4K-Auflösung mit HDR-Unterstützung. Erleben Sie jedes Bild in atemberaubendem Detail.",
    icon: "tv",
    color: "text-france-400",
    gradient: "from-france-600/30 to-france-400/15",
    hoverBorder: "hover:border-france-500/40",
  },
  {
    title: "Blitzschnelle Server",
    description:
      "Weltweites CDN-Netzwerk mit 99,9 % Verfügbarkeit. Der Inhalt wird vom nächstgelegenen Server gestreamt.",
    icon: "server",
    color: "text-rouge-400",
    gradient: "from-rouge-600/30 to-rouge-500/15",
    hoverBorder: "hover:border-rouge-500/40",
  },
  {
    title: "Keine Unterbrechungen",
    description:
      "Adaptive Streamingtechnologie sorgt für eine flüssige Wiedergabe, selbst bei langsamerer Internetverbindung.",
    icon: "bolt",
    color: "text-france-400",
    gradient: "from-france-600/30 to-france-400/15",
    hoverBorder: "hover:border-france-500/40",
  },
  {
    title: "Mehrere Geräte",
    description:
      "Schauen Sie auf Smart-TV, Smartphone, Tablet oder Laptop. Nahtlose Synchronisierung zwischen all Ihren Geräten.",
    icon: "mobile",
    color: "text-rouge-400",
    gradient: "from-rouge-600/30 to-rouge-500/15",
    hoverBorder: "hover:border-rouge-500/40",
  },
  {
    title: "Sender aus aller Welt",
    description:
      "Zugriff auf Inhalte aus mehr als 190 Ländern. Lokale und internationale Sender an einem Ort gebündelt.",
    icon: "globe",
    color: "text-france-400",
    gradient: "from-france-600/30 to-france-400/15",
    hoverBorder: "hover:border-france-500/40",
  },
  {
    title: "Kundenservice rund um die Uhr",
    description:
      "Fachkundiger Support Tag und Nacht. Durchschnittliche Reaktionszeit von unter 5 Minuten.",
    icon: "headset",
    color: "text-rouge-400",
    gradient: "from-rouge-600/30 to-rouge-500/15",
    hoverBorder: "hover:border-rouge-500/40",
  },
];

export const faqs = [
  {
    question: "Was ist ein IPTV-Abonnement genau?",
    answer:
      "Ein IPTV-Abonnement (Internet Protocol Television) gibt Ihnen über Ihre Internetverbindung Zugriff auf Live-TV-Sender, Filme und Serien, anstatt über klassisches Kabel- oder Satellitenfernsehen. Mit IPTV Germany schauen Sie auf jedem Gerät, egal wo Sie sind, mit über 31.000 Sendern und einer umfangreichen VOD-Bibliothek in 4K.",
  },
  {
    question: "Welche Geräte werden unterstützt?",
    answer:
      "IPTV Germany funktioniert auf praktisch jedem modernen Gerät: Smart-TV (Samsung, LG, Sony), Android-Smartphones und -Tablets, iPhone und iPad, Windows- und Mac-Computer, Amazon Fire TV Stick, Android-TV-Box, Chromecast und MAG-Geräte. Wir unterstützen zudem beliebte IPTV-Apps wie IPTV Smarters Pro, TiviMate und VLC.",
  },
  {
    question: "Wie richte ich mein IPTV-Abonnement ein?",
    answer:
      "Die Einrichtung dauert weniger als 5 Minuten. Nach Ihrer Bestellung erhalten Sie sofort eine E-Mail mit Ihrer M3U-Playlist-URL und Ihren Xtream-Codes-API-Zugangsdaten. Geben Sie diese Daten in Ihrer bevorzugten IPTV-App ein und Sie können sofort loslegen. Unser Support-Team begleitet Sie rund um die Uhr bei der Einrichtung.",
  },
  {
    question: "Gibt es eine kostenlose Testphase?",
    answer:
      "Ja! Wir bieten eine kostenlose IPTV-Testphase an, damit Sie unseren Dienst ausprobieren können, bevor Sie sich entscheiden. Die Testphase gewährt vollen Zugriff auf alle Sender und VOD-Inhalte. Kontaktieren Sie unser Support-Team über WhatsApp, um Ihre kostenlose Testphase anzufragen.",
  },
  {
    question: "Kann ich gleichzeitig auf mehreren Geräten schauen?",
    answer:
      "Ja! Je nach Abonnement können Sie gleichzeitig auf 1 bis 4 Geräten streamen. So kann die ganze Familie zeitgleich unterschiedliche Programme auf verschiedenen Geräten ansehen, ohne Unterbrechungen.",
  },
  {
    question: "Welche Internetgeschwindigkeit benötige ich für IPTV?",
    answer:
      "Für optimales Streaming empfehlen wir: SD-Qualität (10 Mbit/s), HD-Qualität (15 Mbit/s) und 4K Ultra HD (25 Mbit/s). Unsere adaptive Streamingtechnologie passt die Qualität automatisch an Ihre Verbindung an, um Unterbrechungen zu vermeiden.",
  },
  {
    question: "Was ist der beste IPTV-Anbieter in Deutschland?",
    answer:
      "Der beste IPTV-Anbieter bietet eine stabile Verbindung, 4K-Qualität, eine breite Auswahl an deutschen und internationalen Sendern, schnelle Server und einen zuverlässigen Kundenservice rund um die Uhr. IPTV Germany vereint all das mit wettbewerbsfähigen Preisen und einer kostenlosen Testphase und zählt damit zu den besten Premium-IPTV-Anbietern in Deutschland.",
  },
  {
    question: "Ist IPTV in Deutschland legal?",
    answer:
      "IPTV ist eine Technologie zur Fernsehübertragung über das Internet. Die Rechtmäßigkeit eines Dienstes hängt davon ab, ob die erforderlichen Senderechte vorliegen. Wir empfehlen Ihnen, stets einen Anbieter zu wählen, der über die notwendigen Rechte verfügt, und die für Sie geltenden lokalen Vorschriften zu prüfen.",
  },
  {
    question: "Welche Sender sind verfügbar?",
    answer:
      "Unser Angebot umfasst eine breite Auswahl beliebter deutscher Sender (öffentlich-rechtlich, privat, Entertainment und Sport) sowie zahlreiche internationale Sender. Zusätzlich haben Sie Zugriff auf Tausende Sender aus mehr als 190 Ländern. Das verfügbare Angebot kann je nach Region variieren.",
  },
  {
    question: "Kann ich Live-Sport über IPTV schauen?",
    answer:
      "Unsere Pakete bieten eine große Auswahl an Live-Sportsendern: Fußball, Motorsport, Tennis und viele weitere Sportarten in HD und 4K. Das Senderangebot kann je nach Region variieren und sich ändern.",
  },
  {
    question: "Was ist der Unterschied zwischen IPTV und klassischem Kabelfernsehen?",
    answer:
      "Beim klassischen Kabelfernsehen zahlen Sie einen festen Betrag über ein Koaxialkabel oder eine Satellitenschüssel. IPTV streamt die Inhalte über das Internet, wodurch Sie deutlich mehr Sender, Filme und Serien zu einem niedrigeren Preis erhalten, ganz ohne festen Vertrag und nutzbar auf all Ihren Geräten.",
  },
  {
    question: "Wie bestelle ich ein IPTV-Abonnement?",
    answer:
      "Wählen Sie einfach ein Paket auf unserer Preisseite, legen Sie die Anzahl der Verbindungen und die Laufzeit fest und schließen Sie die Bestellung ab. Anschließend erhalten Sie Ihre Zugangsdaten per E-Mail. Ein IPTV-Abonnement bei IPTV Germany bestellen Sie in wenigen Minuten.",
  },
  {
    question: "Welchen IPTV-Player oder welche App empfehlt ihr?",
    answer:
      "Beliebte IPTV-Player sind IPTV Smarters Pro, TiviMate und VLC. Auf dem Fire TV Stick funktioniert IPTV Smarters Pro hervorragend, während TiviMate der Favorit auf Android TV ist. Wir stellen Ihnen für jede App eine übersichtliche Anleitung zur Verfügung.",
  },
  {
    question: "Unterstützt ihr 4K- und 8K-Streaming?",
    answer:
      "Ja. Ein Großteil unseres Angebots ist in 4K Ultra HD mit HDR verfügbar, eine Auswahl an Inhalten sogar in 8K. Für 4K empfehlen wir eine Mindest-Internetgeschwindigkeit von 25 Mbit/s für ein flüssiges Erlebnis ohne Unterbrechungen.",
  },
  {
    question: "Ist IPTV Germany ein günstiges IPTV-Abonnement?",
    answer:
      "Wir bieten Premium-IPTV zu wettbewerbsfähigen Preisen an. Je länger die gewählte Laufzeit, desto niedriger die monatlichen Kosten. So bieten wir eines der günstigsten und zuverlässigsten IPTV-Abonnements in Deutschland, ohne Kompromisse bei der Qualität.",
  },
  {
    question: "Wie vergleiche ich verschiedene IPTV-Abonnements?",
    answer:
      "Beim Vergleich von IPTV-Abonnements sollten Sie auf Bildqualität (HD/4K), die Anzahl der Sender, die Serverstabilität, die Anzahl gleichzeitiger Verbindungen, den Kundenservice und den Preis achten. Auf unserer Preisseite finden Sie alles übersichtlich gegenübergestellt.",
  },
  {
    question: "Funktioniert IPTV auch mit einem VPN?",
    answer:
      "Ja, unser Dienst funktioniert hervorragend mit einem VPN. Ein VPN kann sogar nützlich sein, wenn Ihr Internetanbieter bestimmte Streams drosselt. Die Streamingqualität kann je nach gewähltem VPN-Server leicht variieren.",
  },
  {
    question: "Habe ich auch Zugriff auf Filme und Serien auf Abruf (VOD)?",
    answer:
      "Selbstverständlich. Neben Live-TV haben Sie Zugriff auf eine umfangreiche VOD-Bibliothek mit Filmen und Serien, einschließlich der neuesten Veröffentlichungen. Schauen Sie, wann es Ihnen passt, mit Untertiteln, sofern verfügbar.",
  },
  {
    question: "Was passiert, wenn ein Sender nicht funktioniert?",
    answer:
      "Unsere Server werden rund um die Uhr überwacht, und Probleme werden in der Regel innerhalb weniger Minuten behoben. Funktioniert ein Sender dennoch nicht? Kontaktieren Sie uns über WhatsApp oder E-Mail; unser Support-Team ist Tag und Nacht erreichbar.",
  },
  {
    question: "Ist meine Zahlung sicher?",
    answer:
      "Alle Zahlungen laufen über eine gesicherte Verbindung. Wir behandeln Ihre Daten sorgfältig und geben sie niemals an Dritte weiter. Weitere Informationen zum Schutz Ihrer Daten finden Sie in unserer Datenschutzerklärung.",
  },
  {
    question: "Kann ich mein IPTV-Abonnement verlängern oder upgraden?",
    answer:
      "Ja, Sie können Ihr Abonnement jederzeit verlängern oder auf mehr Verbindungen oder eine längere Laufzeit upgraden. Kontaktieren Sie unser Support-Team, und wir erledigen die Änderung ohne Unterbrechung Ihres Dienstes.",
  },
  {
    question: "Wie kündige ich mein Abonnement?",
    answer:
      "Sie können jederzeit kündigen, indem Sie sich an unser Support-Team wenden. Es fallen keine Kündigungsgebühren oder versteckten Kosten an. Ihr Dienst bleibt bis zum Ende Ihres aktuellen Abrechnungszeitraums aktiv.",
  },
];
export const FOOTER_PAGES: Link[] = IPTV_GERMAN_PAGES.map((page) => ({
  label: page.keyword.toLowerCase(),
  href: getIptvGermanPath(page.slug),
}));
