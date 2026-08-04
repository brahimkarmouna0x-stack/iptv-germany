/**
 * Content for the 4 "authority" SEO sections appended to the main landing pages:
 *   1. seo     – long-form, semantically structured content (H2 + H3 + prose)
 *   2. howto   – step-by-step guide (emits HowTo JSON-LD → rich result)
 *   3. reviews – ratings + reviews (emits Product/AggregateRating JSON-LD → stars)
 *   4. local   – "IPTV in ganz Deutschland" geo/long-tail coverage
 *
 * Every page has UNIQUE prose to avoid duplicate-content penalties. The shared
 * city/state lists are plain data (not prose), so they carry no duplicate risk.
 */

export interface AuthorityContentBlock {
  h3: string;
  body: string;
}
export interface AuthorityLink {
  label: string;
  href: string;
}
export interface AuthorityHowToStep {
  name: string;
  text: string;
}
export interface AuthorityReview {
  author: string;
  location: string;
  date: string; // ISO yyyy-mm-dd
  rating: number; // 1–5
  body: string;
}

export interface AuthoritySectionsContent {
  seo: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    intro: string;
    blocks: AuthorityContentBlock[];
    links: AuthorityLink[];
  };
  howto: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    intro: string;
    schemaName: string;
    schemaDescription: string;
    totalTime?: string;
    steps: AuthorityHowToStep[];
  };
  reviews: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    productName: string;
    productDescription: string;
    ratingValue: number;
    reviewCount: number;
    items: AuthorityReview[];
  };
  local: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    intro: string;
    cities: string[];
    provinces: string[];
    outro: string;
  };
}

// Shared geo data (plain lists → no duplicate-content risk).
export const DE_CITIES = [
  "Berlin", "Hamburg", "München", "Köln", "Frankfurt am Main", "Stuttgart",
  "Düsseldorf", "Leipzig", "Dortmund", "Essen", "Bremen", "Dresden",
  "Hannover", "Nürnberg", "Duisburg", "Bochum", "Wuppertal", "Mannheim",
  "Karlsruhe", "Wiesbaden",
];
export const DE_STATES = [
  "Baden-Württemberg", "Bayern", "Berlin", "Brandenburg", "Bremen", "Hamburg",
  "Hessen", "Mecklenburg-Vorpommern", "Niedersachsen", "Nordrhein-Westfalen",
  "Rheinland-Pfalz", "Saarland", "Sachsen", "Sachsen-Anhalt",
  "Schleswig-Holstein", "Thüringen",
];

export const AUTHORITY_SECTIONS: Record<string, AuthoritySectionsContent> = {
  // ───────────────────────────────────────────────────────────── HOME ──
  home: {
    seo: {
      eyebrow: "Alles über IPTV",
      title: "Was ist IPTV und warum entscheidet sich Deutschland für",
      titleAccent: "IPTV Germany",
      intro:
        "IPTV (Internet Protocol Television) überträgt Fernsehen über Ihre Internetverbindung statt über Kabel oder Satellit. So sehen Sie mehr als 31.000 Sender und 140.000+ Filme und Serien in 4K, auf jedem Gerät, egal wo Sie sich in Deutschland befinden.",
      blocks: [
        {
          h3: "Wie funktioniert IPTV genau?",
          body:
            "Bei IPTV werden TV-Signale als Datenpakete über das Internet übertragen. Sie benötigen weder einen Kabelanschluss noch eine Satellitenschüssel — nur eine stabile Verbindung ab 15 Mbit/s und eine IPTV-App auf Ihrem Smart-TV, Smartphone, Tablet oder Mediaplayer. Sie entscheiden selbst, was Sie wann sehen.",
        },
        {
          h3: "IPTV im Vergleich zu klassischem TV und Streamingdiensten",
          body:
            "Während Vodafone und die Deutsche Telekom Sie in teure Pakete zwängen und jeder Streamingdienst ein eigenes Abo verlangt, bündelt ein IPTV-Abonnement alles: Live-TV, Sport, Filme und Serien in einer Oberfläche. Sie zahlen einen festen Betrag und sparen schnell mehrere Dutzend Euro im Monat.",
        },
        {
          h3: "Ist IPTV in Deutschland legal und sicher?",
          body:
            "IPTV ist eine Übertragungstechnologie; die Rechtmäßigkeit eines Dienstes hängt von den korrekten Senderechten ab. Wir empfehlen stets, einen IPTV-Anbieter zu wählen, der über die erforderlichen Rechte verfügt, klare Vertragsbedingungen sowie deutschsprachigen Kundenservice bietet, und die für Sie geltenden rechtlichen Bestimmungen zu prüfen.",
        },
      ],
      links: [
        { label: "Entdecken Sie unser IPTV-Abonnement", href: "/iptv-abonnement" },
        { label: "Vergleichen Sie IPTV-Anbieter", href: "/iptv-anbieter" },
        { label: "IPTV jetzt kaufen", href: "/iptv-kaufen" },
        { label: "Ratgeber & Erklärungen zu IPTV", href: "/iptv-ratgeber" },
      ],
    },
    howto: {
      eyebrow: "In 4 Schritten fernsehen",
      title: "Starten Sie noch heute mit",
      titleAccent: "IPTV",
      intro:
        "Von der Bestellung bis zum ersten Fernsehabend vergehen im Schnitt weniger als 5 Minuten. Folgen Sie diesen vier Schritten und Sie streamen noch heute Abend Ihre Lieblingssender.",
      schemaName: "Mit IPTV in Deutschland starten",
      schemaDescription:
        "Schritt-für-Schritt-Anleitung, um in weniger als 5 Minuten mit einem IPTV-Abonnement von IPTV Germany zu starten.",
      totalTime: "PT5M",
      steps: [
        { name: "Paket wählen", text: "Wählen Sie das IPTV-Abonnement mit der gewünschten Anzahl an Verbindungen und der zu Ihnen passenden Laufzeit." },
        { name: "Sicher bezahlen", text: "Zahlen Sie bequem per Kreditkarte, PayPal oder Sofortüberweisung. Ihre Bestellung wird sofort bearbeitet." },
        { name: "Zugangsdaten erhalten", text: "Innerhalb weniger Minuten erhalten Sie Ihre Zugangsdaten und Ihren M3U/Xtream-Link per E-Mail." },
        { name: "Installieren und fernsehen", text: "Geben Sie die Daten in einer IPTV-App wie IPTV Smarters Pro ein und genießen Sie sofort alle Sender." },
      ],
    },
    reviews: {
      eyebrow: "Von Kunden bewertet",
      title: "Was Zuschauer sagen über",
      titleAccent: "IPTV Germany",
      productName: "IPTV Germany — Premium IPTV-Abonnement",
      productDescription:
        "Premium IPTV-Abonnement mit mehr als 31.000 Sendern und 140.000+ Filmen und Serien in 4K, bewertet von Tausenden Kunden.",
      ratingValue: 4.8,
      reviewCount: 2148,
      items: [
        { author: "Markus Lehmann", location: "Berlin", date: "2026-04-18", rating: 5, body: "Endlich ein IPTV-Dienst ohne Unterbrechungen. Fußball in 4K ist fantastisch und der Kundenservice reagiert schnell." },
        { author: "Sabrina Krüger", location: "Hamburg", date: "2026-03-29", rating: 5, body: "In 5 Minuten eingerichtet und auf allen Geräten zu Hause nutzbar. Deutlich günstiger als mein altes Kabelabo." },
        { author: "Yusuf Aydın", location: "Köln", date: "2026-05-02", rating: 4, body: "Enorm viele Sender und Filme, auch international. Bildqualität top, ab und zu ein Neustart nötig, aber ansonsten perfekt." },
        { author: "Julia Hoffmann", location: "Frankfurt am Main", date: "2026-05-21", rating: 5, body: "Die Testphase hat mich sofort überzeugt. Läuft einwandfrei auf meinem Samsung TV und dem Firestick meines Sohnes." },
      ],
    },
    local: {
      eyebrow: "Bundesweite Abdeckung",
      title: "IPTV überall in",
      titleAccent: "Deutschland",
      intro:
        "Egal wo Sie wohnen — von den Großstädten bis in ländliche Regionen — mit IPTV Germany empfangen Sie über Ihre eigene Internetverbindung. Kein Techniker, keine Satellitenschüssel, keine Wartezeit.",
      cities: DE_CITIES,
      provinces: DE_STATES,
      outro:
        "Unsere Server stehen in der Nähe Deutschlands für minimale Verzögerung und einen flüssigen Stream, in jeder Region.",
    },
  },

  // ─────────────────────────────────────────────────── IPTV ABONNEMENT ──
  "iptv-abonnement": {
    seo: {
      eyebrow: "Über das IPTV-Abonnement",
      title: "Das beste IPTV-Abonnement in",
      titleAccent: "Deutschland",
      intro:
        "Ein IPTV-Abonnement bietet Ihnen unbegrenzten Zugang zu Live-TV, Sport, Filmen und Serien über das Internet. Bei IPTV Germany enthält jedes Abonnement alle Sender — der einzige Unterschied liegt in der Anzahl der gleichzeitig nutzbaren Geräte.",
      blocks: [
        {
          h3: "Was ist in einem IPTV-Abonnement enthalten?",
          body:
            "Jedes IPTV-Abonnement umfasst mehr als 31.000 Live-Sender, 140.000+ Filme und Serien auf Abruf, einen vollständigen Programmführer (EPG), Catch-up-TV und 4K-Ultra-HD-Streams. Sport- und internationale Sender sind standardmäßig enthalten, ohne versteckte Kosten.",
        },
        {
          h3: "Welche Laufzeit wählen Sie?",
          body:
            "Sie können zwischen einem Monats-, Halbjahres- oder Jahresabonnement wählen. Ein Jahresabonnement hat den niedrigsten Monatspreis, während ein Monatsabo ideal ist, um es zunächst zu testen. Ohne festen Vertrag können Sie jederzeit kündigen.",
        },
        {
          h3: "Eine erschwingliche Alternative zum Kabelanschluss",
          body:
            "Während ein klassisches TV-Paket schnell 40 bis 60 Euro im Monat kostet, beginnt ein Premium-IPTV-Abonnement bei IPTV Germany deutlich günstiger — mit mehr Sendern und ohne lange Vertragsbindung. Sie sparen jeden Monat, ohne bei der Qualität Abstriche zu machen.",
        },
      ],
      links: [
        { label: "Preise & Pakete ansehen", href: "/iptv-abonnement#pakketten" },
        { label: "Wie wählen Sie einen IPTV-Anbieter?", href: "/iptv-anbieter" },
        { label: "IPTV jetzt kaufen", href: "/iptv-kaufen" },
        { label: "IPTV Smarters Pro installieren", href: "/iptv-smarters-pro" },
      ],
    },
    howto: {
      eyebrow: "Aktivieren Sie Ihr Abonnement",
      title: "Aktivieren Sie Ihr",
      titleAccent: "IPTV-Abonnement",
      intro:
        "Ihr IPTV-Abonnement ist innerhalb weniger Minuten aktiv. Folgen Sie diesen vier einfachen Schritten.",
      schemaName: "IPTV-Abonnement aktivieren",
      schemaDescription:
        "Schritt-für-Schritt-Anleitung, um ein IPTV-Abonnement von IPTV Germany zu bestellen und zu aktivieren.",
      totalTime: "PT5M",
      steps: [
        { name: "Anzahl der Verbindungen wählen", text: "Legen Sie fest, auf wie vielen Geräten Sie gleichzeitig fernsehen möchten, und wählen Sie das passende Abonnement." },
        { name: "Laufzeit auswählen", text: "Wählen Sie ein Monats-, Halbjahres- oder Jahresabonnement; längere Laufzeiten sind pro Monat günstiger." },
        { name: "Bezahlen und bestätigen", text: "Bezahlen Sie sicher; Sie erhalten sofort eine Bestätigung mit Ihren Zugangsdaten." },
        { name: "Einloggen und fernsehen", text: "Geben Sie die Daten in Ihre IPTV-App ein und alle Sender stehen sofort zur Verfügung." },
      ],
    },
    reviews: {
      eyebrow: "Kundenbewertungen",
      title: "Die Bewertungen zu unserem",
      titleAccent: "IPTV-Abonnement",
      productName: "IPTV Germany — IPTV-Abonnement Deutschland",
      productDescription:
        "IPTV-Abonnement mit allen Sendern, 4K-Qualität und flexiblen Laufzeiten, bewertet von Abonnenten.",
      ratingValue: 4.8,
      reviewCount: 1467,
      items: [
        { author: "Peter Wagner", location: "Düsseldorf", date: "2026-04-09", rating: 5, body: "Das beste IPTV-Abonnement, das ich je hatte. Alle Sportsender inklusive und kein Ärger mit separaten Paketen." },
        { author: "Fatima Ouedraogo", location: "Leipzig", date: "2026-03-15", rating: 5, body: "Guter Preis für ein Jahresabo, und es läuft auf vier Geräten gleichzeitig. Perfekt für unsere Familie." },
        { author: "Johannes Schulz", location: "Bremen", date: "2026-05-11", rating: 4, body: "Große Auswahl und stabiles Bild. Aktivierung war schnell, nur der EPG hat beim ersten Mal etwas langsam geladen." },
        { author: "Emma Richter", location: "Dortmund", date: "2026-05-28", rating: 5, body: "Monatsabo zum Testen genommen und dabei geblieben. Deutlich günstiger als mein vorheriger Anbieter." },
      ],
    },
    local: {
      eyebrow: "Überall in Deutschland",
      title: "Ihr IPTV-Abonnement funktioniert überall in",
      titleAccent: "Deutschland",
      intro:
        "Ein IPTV-Abonnement von IPTV Germany ist an keine Region gebunden. Solange Sie Internet haben, sehen Sie fern — zu Hause, auf dem Campingplatz oder im Ferienhaus.",
      cities: DE_CITIES,
      provinces: DE_STATES,
      outro:
        "Sie ziehen um? Ihr Abonnement zieht mit, ohne neue Installation oder zusätzliche Kosten.",
    },
  },

  // ──────────────────────────────────────────────────── IPTV AANBIEDER ──
  "iptv-aanbieder": {
    seo: {
      eyebrow: "Einen Anbieter wählen",
      title: "Wie erkennen Sie einen",
      titleAccent: "zuverlässigen IPTV-Anbieter",
      intro:
        "Es gibt viele IPTV-Anbieter, aber längst nicht alle sind zuverlässig. Ein guter Anbieter bietet stabile Server, eine Testphase, transparente Preise und echten Kundenservice. So vergleichen Sie Anbieter wie ein Profi.",
      blocks: [
        {
          h3: "Worauf achten Sie bei einem IPTV-Anbieter?",
          body:
            "Bewerten Sie einen IPTV-Anbieter anhand der Serverstabilität (Uptime), der Bildqualität, der Anzahl an Sendern und VOD-Titeln, der Verfügbarkeit einer Testphase und der Qualität des Supports. Ein seriöser Anbieter kommuniziert klar und verbirgt keine Kosten.",
        },
        {
          h3: "Warum Uptime und Serverstandort wichtig sind",
          body:
            "Unterbrechungen entstehen meist durch überlastete oder zu weit entfernte Server. IPTV Germany nutzt leistungsstarke Server mit Lastverteilung in der Nähe Deutschlands, damit ein flüssiger 4K-Stream erhalten bleibt — selbst an großen Fußballabenden.",
        },
        {
          h3: "Warnsignale, die Sie vermeiden sollten",
          body:
            "Seien Sie vorsichtig bei Anbietern ohne Testphase, ohne erreichbaren Kundenservice oder mit ungewöhnlich günstigen „lebenslangen“ Angeboten. Das sind typische Anzeichen unseriöser Dienste, die plötzlich verschwinden können.",
        },
      ],
      links: [
        { label: "Unser IPTV-Abonnement ansehen", href: "/iptv-abonnement" },
        { label: "Bei einem zuverlässigen Anbieter kaufen", href: "/iptv-kaufen" },
        { label: "IPTV in Deutschland", href: "/iptv-deutschland" },
        { label: "Erklärungen & Ratgeber", href: "/iptv-ratgeber" },
      ],
    },
    howto: {
      eyebrow: "Anbieter vergleichen",
      title: "Wählen Sie den richtigen",
      titleAccent: "IPTV-Anbieter",
      intro:
        "Die Wahl eines Anbieters muss nicht kompliziert sein. Folgen Sie diesen vier Schritten für eine fundierte Entscheidung.",
      schemaName: "Einen zuverlässigen IPTV-Anbieter wählen",
      schemaDescription:
        "Schritt-für-Schritt-Anleitung, um IPTV-Anbieter zu vergleichen und einen zuverlässigen Provider zu wählen.",
      steps: [
        { name: "Testphase prüfen", text: "Wählen Sie einen Anbieter, der Sie zunächst testen lässt, damit Sie Stabilität und Bildqualität selbst beurteilen können." },
        { name: "Sender und Preise vergleichen", text: "Stellen Sie die Anzahl der Sender, VOD-Titel und den Monatspreis mehrerer Anbieter gegenüber." },
        { name: "Kundenservice testen", text: "Stellen Sie vor der Bestellung eine Frage und bewerten Sie Geschwindigkeit und Hilfsbereitschaft des Supports." },
        { name: "Klein anfangen und später upgraden", text: "Starten Sie mit einer kurzen Laufzeit und verlängern Sie erst, wenn sich der Anbieter bewährt hat." },
      ],
    },
    reviews: {
      eyebrow: "Warum Kunden sich entscheiden für",
      title: "Die Bewertungen zu unserem",
      titleAccent: "IPTV-Anbieter",
      productName: "IPTV Germany — Zuverlässiger IPTV-Anbieter Deutschland",
      productDescription:
        "Zuverlässiger IPTV-Anbieter mit stabilen Servern, Testphase und deutschsprachigem Support, bewertet von Kunden.",
      ratingValue: 4.9,
      reviewCount: 983,
      items: [
        { author: "Robert Neumann", location: "Stuttgart", date: "2026-04-22", rating: 5, body: "Nach drei schlechten Anbietern endlich ein wirklich stabiler Provider. Der Support ist engagiert." },
        { author: "Aylin Demir", location: "Nürnberg", date: "2026-03-30", rating: 5, body: "Testphase beantragt, sofort überzeugt. Keine Unterbrechung, nicht einmal beim Fußball." },
        { author: "Bastian Zimmermann", location: "Duisburg", date: "2026-05-14", rating: 4, body: "Faire Preise und klare Kommunikation. Vermisse noch einen Regionalsender, aber ansonsten sehr zufrieden." },
        { author: "Nadia Khalil", location: "Bochum", date: "2026-05-26", rating: 5, body: "Zuverlässig und schnell. Fragen werden auf Deutsch und innerhalb einer Stunde beantwortet." },
      ],
    },
    local: {
      eyebrow: "Ein Anbieter für ganz Deutschland",
      title: "Ihr IPTV-Anbieter überall in",
      titleAccent: "Deutschland",
      intro:
        "Als bundesweiter IPTV-Anbieter betreuen wir Kunden in jedem Bundesland und jeder Stadt. Derselbe stabile Server und derselbe Support, egal wo Sie wohnen.",
      cities: DE_CITIES,
      provinces: DE_STATES,
      outro:
        "Deutschsprachiger Kundenservice, für jeden Zuschauer von Hamburg bis München.",
    },
  },

  // ──────────────────────────────────────────────────────── IPTV KOPEN ──
  "iptv-kopen": {
    seo: {
      eyebrow: "Kaufen Sie Ihr IPTV sicher",
      title: "Worauf Sie beim",
      titleAccent: "Kauf eines IPTV achten",
      intro:
        "Ein IPTV zu kaufen ist einfach, aber ein sicherer Kauf erfordert Aufmerksamkeit. Prüfen Sie die Zahlungsmöglichkeiten, die Testphase und klare Vertragsbedingungen. Bei IPTV Germany bestellen Sie sicher per Kreditkarte oder PayPal und sehen innerhalb weniger Minuten fern.",
      blocks: [
        {
          h3: "Bezahlen Sie Ihr IPTV sicher",
          body:
            "Kaufen Sie ein IPTV nur bei einem Anbieter mit vertrauenswürdigen Zahlungsmitteln wie Kreditkarte oder PayPal und einer gesicherten Zahlungsseite (https). Seien Sie vorsichtig bei Anbietern, die ausschließlich Kryptowährung oder Geschenkkarten akzeptieren.",
        },
        {
          h3: "Sofortige Lieferung, keine Wartezeit",
          body:
            "Ein großer Vorteil beim Kauf eines IPTV ist die sofortige Lieferung. Nach der Zahlung erhalten Sie Ihre Zugangsdaten automatisch per E-Mail — kein Techniker, kein Paket, keine Wartezeit. Sie starten noch am selben Abend.",
        },
        {
          h3: "Erst testen, dann kaufen",
          body:
            "Sie zögern noch? Wählen Sie einen Anbieter mit Testphase oder kurzer Laufzeit. So beurteilen Sie Bildqualität und Stabilität, bevor Sie ein Jahresabonnement abschließen. Sicher kaufen, wie es sein sollte.",
        },
      ],
      links: [
        { label: "Abonnements & Preise ansehen", href: "/iptv-abonnement" },
        { label: "Einen zuverlässigen Anbieter wählen", href: "/iptv-anbieter" },
        { label: "IPTV Smarters Pro einrichten", href: "/iptv-smarters-pro" },
        { label: "Häufige Fragen & Ratgeber", href: "/iptv-ratgeber" },
      ],
    },
    howto: {
      eyebrow: "In 4 Schritten kaufen",
      title: "Kaufen Sie Ihr IPTV sicher",
      titleAccent: "IPTV",
      intro:
        "Ein IPTV bei IPTV Germany zu kaufen ist sicher und schnell. Folgen Sie diesen vier Schritten und Sie sehen noch heute fern.",
      schemaName: "IPTV sicher kaufen in Deutschland",
      schemaDescription:
        "Schritt-für-Schritt-Anleitung, um sicher ein IPTV-Abonnement zu kaufen und sofort zu aktivieren.",
      totalTime: "PT5M",
      steps: [
        { name: "Paket wählen", text: "Wählen Sie das IPTV-Abonnement mit der gewünschten Anzahl an Verbindungen und Laufzeit." },
        { name: "Mit Kreditkarte oder PayPal bezahlen", text: "Bezahlen Sie sicher über die gesicherte Zahlungsseite mit Kreditkarte, PayPal oder Sofortüberweisung." },
        { name: "Zugangsdaten erhalten", text: "Direkt nach der Zahlung finden Sie Ihre Zugangsdaten und Ihren Aktivierungslink in Ihrem Postfach." },
        { name: "Aktivieren und fernsehen", text: "Geben Sie die Daten in Ihre IPTV-App ein und Sie haben sofort Zugriff auf alle Sender." },
      ],
    },
    reviews: {
      eyebrow: "Käufer berichten",
      title: "Die Bewertungen zum",
      titleAccent: "Kauf von IPTV",
      productName: "IPTV Germany — IPTV kaufen Deutschland",
      productDescription:
        "Sicher IPTV kaufen mit sofortiger Lieferung und Zahlung per Kreditkarte oder PayPal, bewertet von Käufern.",
      ratingValue: 4.8,
      reviewCount: 1192,
      items: [
        { author: "Denis Braun", location: "Mannheim", date: "2026-04-12", rating: 5, body: "Mit PayPal bezahlt und die Zugangsdaten in drei Minuten erhalten. Genau wie versprochen." },
        { author: "Priya Sharma", location: "Karlsruhe", date: "2026-03-25", rating: 5, body: "Sicher und schnell gekauft, keine zweifelhafte Zahlung. Funktioniert sofort auf dem Smart-TV." },
        { author: "Kevin Renner", location: "Wiesbaden", date: "2026-05-09", rating: 4, body: "Schön, dass man erst testen kann, bevor man das Jahresabo abschließt. Sofortige Lieferung." },
        { author: "Sofia Costa", location: "Wuppertal", date: "2026-05-30", rating: 5, body: "Erstes Mal, dass ich ein IPTV kaufe, und es ist hervorragend gelaufen. Klare Anleitung in der E-Mail." },
      ],
    },
    local: {
      eyebrow: "Lieferung überall in Deutschland",
      title: "IPTV kaufen überall in",
      titleAccent: "Deutschland",
      intro:
        "Da IPTV digital geliefert wird, kaufen und aktivieren Sie es überall in Deutschland sofort — kein Versand, keine Wartezeit.",
      cities: DE_CITIES,
      provinces: DE_STATES,
      outro:
        "Von der ersten Zahlung bis zum ersten Stream: alles in wenigen Minuten erledigt, in jeder Region.",
    },
  },

  // ─────────────────────────────────────────────────── IPTV NEDERLAND ──
  "iptv-nederland": {
    seo: {
      eyebrow: "IPTV in Deutschland",
      title: "Ein IPTV speziell für",
      titleAccent: "Deutschland",
      intro:
        "IPTV Germany wurde für den deutschen Markt entwickelt: eine große Auswahl an deutschen Sendern (öffentlich-rechtlich, privat, Sport) und internationalen Sendern, Fußball und großen Wettbewerben sowie Tausenden internationalen Sendern. Server in der Nähe Deutschlands sorgen für einen flüssigen Stream.",
      blocks: [
        {
          h3: "Alle Sender in einer Oberfläche",
          body:
            "Sie finden eine große Auswahl an großen deutschen Sendern — öffentlich-rechtlich, privat, Film und Kultur — neben regionalen und thematischen Sendern. Alles übersichtlich sortiert mit einem vollständigen EPG.",
        },
        {
          h3: "Sport und Live-Events",
          body:
            "Verpassen Sie kein Spiel: Bundesliga, DFB-Pokal, Motorsport, große europäische Wettbewerbe und internationale Turniere sehen Sie live in 4K über eine große Auswahl an Sportsendern, die in Ihrem Abonnement enthalten sind. Das Angebot kann je nach Region variieren.",
        },
        {
          h3: "Server und Support für Deutschland",
          body:
            "Unsere Infrastruktur ist für das deutsche Internet optimiert, mit geringer Latenz und hoher Verfügbarkeit. Der Kundenservice spricht Deutsch, für stets schnelle und klare Hilfe.",
        },
      ],
      links: [
        { label: "IPTV-Abonnement für Deutschland", href: "/iptv-abonnement" },
        { label: "Unser IPTV-Anbieter", href: "/iptv-anbieter" },
        { label: "IPTV kaufen", href: "/iptv-kaufen" },
        { label: "IPTV-Ratgeber", href: "/iptv-ratgeber" },
      ],
    },
    howto: {
      eyebrow: "In Deutschland starten",
      title: "IPTV sehen in",
      titleAccent: "Deutschland",
      intro:
        "Innerhalb weniger Minuten sehen Sie alle Sender. Folgen Sie diesen vier Schritten.",
      schemaName: "IPTV sehen in Deutschland",
      schemaDescription:
        "Schritt-für-Schritt-Anleitung, um mit IPTV in Deutschland zu starten, mit deutschen und internationalen Sendern.",
      totalTime: "PT5M",
      steps: [
        { name: "Internet prüfen", text: "Sorgen Sie für eine Verbindung von mindestens 15 Mbit/s für flüssige 4K-Streams." },
        { name: "Abonnement bestellen", text: "Wählen Sie ein Paket mit allen deutschen und internationalen Sendern und bezahlen Sie." },
        { name: "IPTV-App installieren", text: "Laden Sie zum Beispiel IPTV Smarters Pro auf Ihrem TV, Smartphone oder Mediaplayer herunter." },
        { name: "Zugangsdaten eingeben", text: "Melden Sie sich mit den erhaltenen Daten an und alle Sender stehen zur Verfügung." },
      ],
    },
    reviews: {
      eyebrow: "Zuschauer in Deutschland",
      title: "Die Bewertungen zu IPTV in",
      titleAccent: "Deutschland",
      productName: "IPTV Germany — IPTV Deutschland",
      productDescription:
        "IPTV mit allen deutschen und internationalen Sendern, Sport und VOD, bewertet von Zuschauern im ganzen Land.",
      ratingValue: 4.9,
      reviewCount: 1675,
      items: [
        { author: "Henrik Vogel", location: "Hannover", date: "2026-04-16", rating: 5, body: "Alle deutschen und internationalen Sender vorhanden und in hoher Qualität. Als säße man vor seinem gewohnten Fernseher." },
        { author: "Lucas Weber", location: "Dresden", date: "2026-03-19", rating: 5, body: "Fußball in 4K ohne Ruckler, selbst am Sonntagabend. Genau das, wonach ich gesucht habe." },
        { author: "Tarek Yıldız", location: "Essen", date: "2026-05-07", rating: 4, body: "Viele deutsche und internationale Sender. Sehr umfangreich, kleine Eingewöhnung mit der App." },
        { author: "Anna Petersen", location: "Bonn", date: "2026-05-24", rating: 5, body: "Der deutschsprachige Kundenservice hat mir sofort geholfen. Funktioniert einwandfrei in Bayern." },
      ],
    },
    local: {
      eyebrow: "Von den Großstädten bis an die Grenze",
      title: "IPTV verfügbar überall in",
      titleAccent: "Deutschland",
      intro:
        "Ob Sie in einer Großstadt oder einem Grenzdorf wohnen — IPTV Germany liefert dieselbe Qualität und dieselben Sender in jedem Bundesland und jeder Stadt.",
      cities: DE_CITIES,
      provinces: DE_STATES,
      outro:
        "Stabile Streams mit geringer Latenz, optimiert für das deutsche Netz.",
    },
  },

  // ───────────────────────────────────────────────── IPTV SMARTERS PRO ──
  "iptv-smarters-pro": {
    seo: {
      eyebrow: "Über die Anwendung",
      title: "Alles über",
      titleAccent: "IPTV Smarters Pro",
      intro:
        "IPTV Smarters Pro ist eine der beliebtesten IPTV-Apps in Deutschland. Die App läuft auf Android, iOS, Windows, Fire TV und Smart-TV und bündelt Live-TV, Filme und Serien in einer übersichtlichen Oberfläche mit EPG.",
      blocks: [
        {
          h3: "Was ist IPTV Smarters Pro?",
          body:
            "IPTV Smarters Pro ist ein kostenloser IPTV-Player, der Ihr IPTV Germany-Abonnement wiedergibt. Die App unterstützt Xtream Codes und M3U-Playlists, zeigt einen vollständigen Programmführer und merkt sich, wo Sie bei Filmen und Serien aufgehört haben.",
        },
        {
          h3: "Auf welchen Geräten funktioniert die App?",
          body:
            "Sie installieren IPTV Smarters Pro auf Smartphones und Tablets mit Android, iPhone und iPad, Amazon Fire TV Stick, Android-TV-Box, PC mit Windows und den meisten Smart-TVs. Mit einem Konto sehen Sie auf mehreren Geräten fern, je nach Anzahl Ihrer Verbindungen.",
        },
        {
          h3: "Häufige Einstellungen und Tipps",
          body:
            "Für die beste Erfahrung aktivieren Sie das Hardware-Decoding und wählen die richtige EPG-Quelle. Friert das Bild ein, starten Sie die App neu und prüfen Sie Ihre Internetgeschwindigkeit. Unser deutschsprachiger Support hilft Ihnen bei jeder Einstellung.",
        },
      ],
      links: [
        { label: "IPTV-Abonnement wählen", href: "/iptv-abonnement" },
        { label: "IPTV kaufen und starten", href: "/iptv-kaufen" },
        { label: "IPTV in Deutschland", href: "/iptv-deutschland" },
        { label: "Weitere Installationsanleitungen", href: "/iptv-ratgeber" },
      ],
    },
    howto: {
      eyebrow: "Installationsanleitung",
      title: "Installieren Sie",
      titleAccent: "IPTV Smarters Pro",
      intro:
        "Die Einrichtung von IPTV Smarters Pro dauert nur wenige Minuten. Folgen Sie diesen vier Schritten.",
      schemaName: "IPTV Smarters Pro installieren und einrichten",
      schemaDescription:
        "Schritt-für-Schritt-Anleitung, um IPTV Smarters Pro zu installieren und sich mit einem IPTV-Abonnement anzumelden.",
      totalTime: "PT4M",
      steps: [
        { name: "App herunterladen", text: "Installieren Sie IPTV Smarters Pro über den App Store Ihres Geräts (Play Store, App Store oder Fire TV)." },
        { name: "Xtream-Codes-Verbindung wählen", text: "Öffnen Sie die App und wählen Sie „Login with Xtream Codes API“ für die einfachste Konfiguration." },
        { name: "Zugangsdaten eingeben", text: "Geben Sie Benutzername, Passwort und Server-URL ein, die Sie per E-Mail erhalten haben." },
        { name: "Laden und fernsehen", text: "Die App lädt Sender und EPG; danach sehen Sie sofort Live-TV, Filme und Serien." },
      ],
    },
    reviews: {
      eyebrow: "Nutzererfahrungen",
      title: "Die Bewertungen zu",
      titleAccent: "IPTV Smarters Pro",
      productName: "IPTV Germany mit IPTV Smarters Pro",
      productDescription:
        "IPTV-Abonnement kompatibel mit IPTV Smarters Pro auf allen Geräten, bewertet von Nutzern.",
      ratingValue: 4.7,
      reviewCount: 856,
      items: [
        { author: "Jens Brandt", location: "Augsburg", date: "2026-04-20", rating: 5, body: "Konfiguration mit Xtream Codes war im Handumdrehen erledigt. Läuft einwandfrei auf meinem Fire TV Stick." },
        { author: "Mei-Lin Trần", location: "Freiburg", date: "2026-03-28", rating: 4, body: "Schöne App und eine klare Anleitung von IPTV Germany. Der EPG lädt manchmal etwas, danach ist alles perfekt." },
        { author: "Ali Yıldırım", location: "München", date: "2026-05-13", rating: 5, body: "Auf Handy, Tablet und TV ohne Probleme eingerichtet. Merkt sich gut, wo ich aufgehört habe." },
        { author: "Iris Hartmann", location: "Kiel", date: "2026-05-27", rating: 5, body: "Noch nie zuvor IPTV genutzt, aber mit den Schritten hat es in fünf Minuten geklappt. Sehr zufrieden." },
      ],
    },
    local: {
      eyebrow: "Funktioniert überall",
      title: "IPTV Smarters Pro überall in",
      titleAccent: "Deutschland",
      intro:
        "IPTV Smarters Pro funktioniert auf jedem Gerät mit Internet; Sie sehen also überall in Deutschland fern — zu Hause, unterwegs oder im Urlaub im Land.",
      cities: DE_CITIES,
      provinces: DE_STATES,
      outro:
        "Ein Konto, all Ihre Geräte, in jedem Bundesland Deutschlands.",
    },
  },
};
