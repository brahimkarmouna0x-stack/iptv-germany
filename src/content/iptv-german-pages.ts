import { absoluteUrl, OG_IMAGE } from "@/lib/seo";

// ═════════════════════════════════════════════════════════════════════════════
//  PHASE 2 — RICH PAGE SCHEMA
//  ---------------------------------------------------------------------------
//  This is the new type system that the rebuilt dynamic route + PageRenderer
//  (Phase 4) and the section component library (Phase 6) consume. It is added
//  ALONGSIDE the legacy `IptvGermanPage`/`Vault*` types so the app keeps
//  compiling during the migration; the legacy types below are removed once the
//  route is switched over to `IPTV_GERMAN_PAGES` of type `IPTVPage[]`.
//
//  Design notes:
//   • `metaTitle` is the FINAL <title> string (keyword-first, brand included,
//     ≤60 chars) and is emitted via `title.absolute` to avoid the root layout's
//     `%s | IPTV Germany` template double-suffixing the brand.
//   • URL-bearing fields (`canonicalUrl`, `ogImage`, hreflang values) are
//     absolute and built from `SITE.url` in `@/lib/seo`.
//   • `sections` is a discriminated union rendered by a switch in PageRenderer;
//     each `type` maps to one lazy-loaded section component.
// ═════════════════════════════════════════════════════════════════════════════

export type PageLanguage = "de" | "en";

/** Search intent — drives the section mix and copy a page receives. */
export type PageIntent =
  | "general" // broad informational ("was ist iptv")
  | "guide" // how-to / informational deep-dive
  | "app" // player / app pages (smarters, tivimate, …)
  | "device" // boxes, smart TV, receivers
  | "subscription" // commercial: abos, prices, buying
  | "provider" // choosing/comparing providers
  | "legal" // legality, fines, risks
  | "playlist" // m3u / playlist / free
  | "quality" // 4K / bitrate / performance
  | "landing"; // high-intent commercial landing

/** schema.org type a page emits as JSON-LD (see Phase 4 `JsonLd`). */
export type StructuredDataType =
  | "FAQPage"
  | "Article"
  | "Product"
  | "BreadcrumbList"
  | "WebPage";

export type Breadcrumb = { label: string; href: string };

export type CTAButton = { label: string; href: string };

export type PageFaq = { question: string; answer: string };

export type InternalLink = {
  label: string;
  href: string;
  description?: string;
};

// ── Section payload sub-types ────────────────────────────────────────────────

/** A single feature card. `icon` is a lucide-react icon name. */
export type Feature = {
  icon?: string;
  title: string;
  description: string;
};

export type PricingTier = {
  name: string;
  price: string; // formatted incl. currency, e.g. "12,99 €"
  period?: string; // e.g. "/ Monat"
  description?: string;
  features: string[];
  cta: CTAButton;
  highlighted?: boolean; // "Beliebteste" tier
  badge?: string;
};

/** A comparison row. Each value lines up with `ComparisonSection.columns`. */
export type ComparisonRow = {
  label: string;
  values: (boolean | string)[];
};

export type DevicePlatform =
  | "android"
  | "ios"
  | "smart-tv"
  | "browser"
  | "box"
  | "windows"
  | "other";

export type DeviceCard = {
  name: string;
  icon?: string;
  platform: DevicePlatform;
  steps: number; // number of setup steps
  href?: string;
};

export type Step = {
  title: string;
  description: string;
};

export type Review = {
  author: string;
  country?: string; // label or emoji flag, e.g. "🇩🇪"
  rating: number; // 1–5
  text: string;
};

export type ChannelCategory = {
  name: string;
  count?: number;
  examples: string[];
};

// ── Discriminated union of renderable sections ───────────────────────────────
export type PageSection =
  | { type: "richText"; heading?: string; html: string }
  | { type: "features"; heading?: string; subheading?: string; items: Feature[] }
  | {
      type: "pricing";
      heading?: string;
      subheading?: string;
      tiers: PricingTier[];
    }
  | {
      type: "comparison";
      heading?: string;
      subheading?: string;
      columns: string[];
      rows: ComparisonRow[];
    }
  | {
      type: "devices";
      heading?: string;
      subheading?: string;
      list: DeviceCard[];
    }
  | { type: "howItWorks"; heading?: string; subheading?: string; steps: Step[] }
  | {
      type: "testimonials";
      heading?: string;
      subheading?: string;
      reviews: Review[];
    }
  | {
      type: "channelList";
      heading?: string;
      subheading?: string;
      categories: ChannelCategory[];
    }
  | { type: "faq"; heading?: string; items: PageFaq[] }
  | {
      type: "cta";
      heading: string;
      text?: string;
      cta: CTAButton;
      variant: "primary" | "secondary";
    };

export type PageSectionType = PageSection["type"];

export type HeroBlock = {
  headline: string; // H1 — contains the exact-match primary keyword
  subheadline: string;
  cta: CTAButton;
  badgeTags: string[]; // 3–4 trust signals, e.g. ["4K/8K", "7-Tage Test"]
  background?: string; // optional hero background image (absolute or /public)
};

/** The rebuilt page model. Replaces the legacy `IptvGermanPage` after Phase 4. */
export type IPTVPage = {
  slug: string;
  keyword: string; // primary keyword (used for search index + labels)
  lang: PageLanguage;
  intent: PageIntent;
  hreflang: { de: string; en?: string };
  metaTitle: string; // final <title>, keyword-first, ≤60 chars
  metaDescription: string; // ≤155 chars, action verb + benefit + CTA
  canonicalUrl: string; // absolute
  ogImage: string; // absolute
  structuredData: StructuredDataType;
  breadcrumbs: Breadcrumb[];
  hero: HeroBlock;
  sections: PageSection[]; // ≥5 per page
  faq: PageFaq[]; // ≥5 per page
  internalLinks: InternalLink[]; // ≥4 per page
  updatedAt: string; // ISO date
};

// ═══════════════════════════════ LEGACY TYPES (pre-migration) ═══════════════════
// Still consumed by the current route + VaultPageTemplate; removed in Phase 4.

export type VaultFaq = {
  question: string;
  answer: string;
};

export type VaultInternalLink = {
  label: string;
  href: string;
  description: string;
};

export type VaultSection = {
  heading: string;
  body: string;
  points: string[];
};

export type IptvGermanPage = {
  slug: string;
  keyword: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  introCopy: string;
  benefits: string[];
  sections: VaultSection[];
  faqs: VaultFaq[];
  internalLinks: VaultInternalLink[];
  language: "nl" | "en" | "fr" | "es" | "de";
  intent:
    | "general"
    | "germany"
    | "app"
    | "device"
    | "subscription"
    | "legal"
    | "playlist"
    | "quality"
    | "provider"
    | "adult";
  isCentered?: boolean;
  heroBg?: string;
};

const basePath = "/iptv-ratgeber";

/**
 * Slugs that have been promoted to dedicated root-level landing pages. Any
 * internal link to one of these must point straight at the canonical root URL
 * so we never emit a 308 redirect hop (`/iptv-ratgeber/x` → `/x`). External/stale
 * inbound links are still caught by the redirects in `next.config.ts`.
 */
export const PROMOTED_TO_ROOT: Record<string, string> = {
  "iptv-abonnement": "/iptv-abonnement",
  "iptv-smarters-pro": "/iptv-smarters-pro",
  "iptv-deutschland": "/iptv-deutschland",
  "iptv-kaufen": "/iptv-kaufen",
  "iptv-anbieter": "/iptv-anbieter",
};

/** Canonical in-app path for a vault slug (root URL for promoted slugs). */
export const iptvPath = (slug: string): string =>
  PROMOTED_TO_ROOT[slug] ?? `${basePath}/${slug}`;

export const IPTV_GERMAN_SLUGS = [
  "iptv",
  "was-ist-iptv",
  "iptv-streaming-dienst",
  "iptv-dienst",
  "iptv-dienstleister",
  "bester-iptv-dienst",
  "iptv-dienste",
  "iptv-smarters-pro",
  "abonnement-iptv",
  "iptv-abonnement",
  "iptv-box-kaufen",
  "iptv-mediaplayer",
  "iptv-smarters",
  "beste-iptv-box",
  "iptv-streaming-player",
  "smart-iptv",
  "iptv-premium",
  "iptv-illegal",
  "iptv-pro",
  "iptv-smarter-pro",
  "bestes-iptv",
  "deutsche-iptv-sender",
  "iptv-smarters-player",
  "iptv-fernsehen",
  "iptv-anwendung",
  "iptv-app",
  "internationale-iptv-sender",
  "iptv-smarter",
  "iptv-smarters-pro-android",
  "iptv-smarters-pro-windows",
  "iron-iptv",
  "iptv-einrichten",
  "xtream-iptv",
  "zen-iptv",
  "atlas-iptv",
  "iptv-abonnement-12-monate",
  "atlas-pro-iptv",
  "hot-iptv",
  "iptv-kostenlos-testen",
  "iptv-legal",
  "iptv-player",
  "lynk-iptv",
  "m3u-iptv",
  "bestes-iptv-abonnement",
  "iptv-senderliste",
  "pure-iptv",
  "set-iptv",
  "smarters-iptv-pro",
  "smartone-iptv",
  "xenon-iptv",
  "iptv-app-installieren",
  "iptv-medienanstalt",
  "iptv-bussgeld",
  "iptv-4k",
  "iptv-recht",
  "iptv-preise",
  "iptv-smart-player-pro",
  "iptv-ss",
  "iptv-programmuebersicht",
  "smarter-iptv",
  "smarters-iptv",
  "iptv-testen",
  "iptv-abo-deutschland",
  "iptv-agentur",
  "iptv-box-amazon",
  "android-iptv-box",
  "iptv-receiver",
  "iptv-anbieter",
  "iptv-atlas",
  "iptv-az",
  "iptv-box",
  "iptv-code",
  "iptv-guenstig",
  "iptv-smarter-player-pro",
  "iptv-smarters-lite",
  "iptv-testphase",
  "iptv-with-4k",
  "king-iptv",
  "ist-iptv-legal",
  "mario-iptv",
  "beste-iptv-app",
  "beste-iptv-anbieter",
  "net-iptv",
] as const;

type RawSlug = (typeof IPTV_GERMAN_SLUGS)[number];

const titleOverrides: Partial<Record<RawSlug, string>> = {
  iptv: "IPTV-Ratgeber für stabiles und sicheres Streaming",
  "iptv-illegal": "Illegales IPTV: Fakten, Risiken und sichere Alternativen",
  "iptv-bussgeld": "IPTV-Bußgelder in Deutschland: was Sie wissen müssen",
};

// German display keywords for slugs whose literal tokens wouldn't read well
// after a plain hyphen-to-space conversion. The URL slug stays untouched
// (SEO-native); only the rendered label/title is curated so every visible
// string on the site reads as natural German.
const KEYWORD_DE_MAP: Partial<Record<string, string>> = {
  "was-ist-iptv": "Was ist IPTV",
  "iptv-streaming-dienst": "IPTV-Streamingdienst",
  "iptv-dienst": "IPTV-Dienst",
  "iptv-dienstleister": "IPTV-Dienstleister",
  "bester-iptv-dienst": "Bester IPTV-Dienst",
  "iptv-dienste": "IPTV-Dienste",
  "iptv-box-kaufen": "IPTV-Box kaufen",
  "iptv-mediaplayer": "IPTV-Mediaplayer",
  "beste-iptv-box": "Beste IPTV-Box",
  "iptv-streaming-player": "IPTV-Streaming-Player",
  "bestes-iptv": "Bestes IPTV",
  "deutsche-iptv-sender": "Deutsche IPTV-Sender",
  "iptv-fernsehen": "IPTV-Fernsehen",
  "iptv-anwendung": "IPTV-Anwendung",
  "internationale-iptv-sender": "Internationale IPTV-Sender",
  "iptv-einrichten": "IPTV einrichten",
  "iptv-abonnement-12-monate": "IPTV-Abonnement für 12 Monate",
  "iptv-kostenlos-testen": "Kostenlose IPTV-Testphase",
  "bestes-iptv-abonnement": "Bestes IPTV-Abonnement",
  "iptv-senderliste": "IPTV-Senderliste",
  "iptv-app-installieren": "IPTV-App installieren",
  "iptv-medienanstalt": "IPTV-Medienrecht",
  "iptv-recht": "IPTV-Recht",
  "iptv-preise": "IPTV-Preise",
  "iptv-programmuebersicht": "IPTV-Programmübersicht",
  "iptv-testen": "IPTV-Test",
  "iptv-abo-deutschland": "IPTV-Abo in Deutschland",
  "iptv-agentur": "IPTV-Agentur",
  "iptv-box-amazon": "IPTV-Box bei Amazon",
  "android-iptv-box": "Android-IPTV-Box",
  "iptv-receiver": "IPTV-Receiver",
  "iptv-anbieter": "IPTV-Anbieter",
  "iptv-guenstig": "Günstiges IPTV",
  "iptv-testphase": "IPTV-Testphase",
  "ist-iptv-legal": "Legalität von IPTV",
  "beste-iptv-app": "Beste IPTV-App",
  "beste-iptv-anbieter": "Beste IPTV-Anbieter",
  "iptv-bussgeld": "IPTV-Bußgeld",
  "iptv-with-4k": "IPTV mit 4K",
};

const formatKeyword = (slug: string): string =>
  KEYWORD_DE_MAP[slug] ??
  slug
    .replace(/-/g, " ")
    .replace(/\biptv\b/gi, "IPTV")
    .replace(/\b4k\b/gi, "4K")
    .replace(/\bm3u\b/gi, "M3U")
    .replace(/\bandroid\b/gi, "Android")
    .replace(/\bwindows\b/gi, "Windows")
    .replace(/\breddit\b/gi, "Reddit")
    .replace(/\bmytvonline\b/gi, "MYTVOnline")
    .replace(/\bswiss\b/gi, "Swiss")
    .replace(/\bosterreich\b/gi, "Österreich")
    .replace(/\batlas\b/gi, "Atlas")
    .replace(/\bking\b/gi, "King")
    .replace(/\bmario\b/gi, "Mario")
    .replace(/\blynk\b/gi, "Lynk")
    .replace(/\biron\b/gi, "Iron")
    .replace(/\bzen\b/gi, "Zen")
    .replace(/\bxenon\b/gi, "Xenon")
    .replace(/\bpure\b/gi, "Pure")
    .replace(/\bhot\b/gi, "Hot")
    .replace(/\bnet\b/gi, "Net")
    .replace(/\bset\b/gi, "Set");

const titleCase = (value: string) =>
  value.replace(/\b[a-z]/g, (letter) => letter.toUpperCase());

const detectLanguage = (slug: string): IptvGermanPage["language"] => {
  if (
    slug.includes("best") ||
    slug.includes("top-rated") ||
    slug.includes("free")
  ) {
    return "en";
  }
  return "de";
};

const detectIntent = (slug: string): IptvGermanPage["intent"] => {
  if (
    slug.includes("illegal") ||
    slug.includes("bussgeld") ||
    slug.includes("recht") ||
    slug.includes("legal")
  )
    return "legal";
  if (slug.includes("porn")) return "adult";
  if (
    slug.includes("playlist") ||
    slug.includes("m3u") ||
    slug.includes("kostenlos") ||
    slug.includes("gratis") ||
    slug.includes("free")
  ) {
    return "playlist";
  }
  if (
    slug.includes("deutschland") ||
    slug.includes("deutsche") ||
    slug.includes("german") ||
    slug.includes("international")
  ) {
    return "germany";
  }
  if (
    slug.includes("app") ||
    slug.includes("anwendung") ||
    slug.includes("player") ||
    slug.includes("smarters") ||
    slug.includes("tivimate") ||
    slug.includes("smartone") ||
    slug.includes("smart-one") ||
    slug.includes("net-iptv") ||
    slug.includes("set-iptv") ||
    slug.includes("ss-iptv") ||
    slug.includes("flix") ||
    slug.includes("xtream")
  ) {
    return "app";
  }
  if (
    slug.includes("box") ||
    slug.includes("receiver") ||
    slug.includes("amiko")
  )
    return "device";
  if (slug.includes("4k")) return "quality";
  if (
    slug.includes("anbieter") ||
    slug.includes("agentur") ||
    slug.includes("dienst") ||
    slug.includes("provider") ||
    slug.includes("suppliers")
  ) {
    return "provider";
  }
  if (
    slug.includes("abonnement") ||
    slug.includes("abo") ||
    slug.includes("kaufen") ||
    slug.includes("test") ||
    slug.includes("preise") ||
    slug.includes("guenstig")
  ) {
    return "subscription";
  }
  return "general";
};

const languageAngle: Record<IptvGermanPage["language"], string> = {
  nl: "für deutschsprachige Zuschauer",
  en: "für internationale Zuschauer",
  fr: "für deutschsprachige Nutzer",
  es: "für deutschsprachige Nutzer",
  de: "für deutschsprachige Nutzer",
};

const intentCopy: Record<
  IptvGermanPage["intent"],
  {
    label: string;
    promise: string;
    benefitSeed: string[];
    setup: string;
    safety: string;
  }
> = {
  general: {
    label: "IPTV-Orientierung",
    promise:
      "eine klare Art, Live-TV, Filme und Serien über das Internet zu verstehen",
    benefitSeed: [
      "übersichtliche Senderstruktur",
      "stabile Wiedergabe",
      "schneller Start auf mehreren Geräten",
    ],
    setup:
      "Beginnen Sie mit Ihrem Gerät, wählen Sie einen zuverlässigen Player und stellen Sie sicher, dass Ihr Netzwerk stabil genug für HD oder 4K ist.",
    safety:
      "Nutzen Sie nur Quellen, für die Sie eine Berechtigung haben, und vermeiden Sie unbekannte Listen, die Rechte oder Ihre Privatsphäre verletzen könnten.",
  },
  germany: {
    label: "Bestes IPTV in Deutschland",
    promise:
      "ein praktischer Leitfaden zu lokalen Sendern, regionalen Inhalten und deutschsprachigem Fernsehen",
    benefitSeed: [
      "Fokus auf deutsche Sender",
      "EPG auf Deutsch",
      "Support, der auf lokale Gewohnheiten abgestimmt ist",
    ],
    setup:
      "Achten Sie auf deutsche Sendergruppen, korrekte Zeitzonen im EPG und Apps, die auf Smart-TV und Android TV zuverlässig laufen.",
    safety:
      "Prüfen Sie stets die Herkunft der Inhalte und wählen Sie transparente Bedingungen statt anonymer Versprechen.",
  },
  app: {
    label: "App & Player",
    promise:
      "ein reibungsloses Erlebnis mit klarer Installation, EPG und Playlists",
    benefitSeed: [
      "Unterstützung für M3U und Xtream",
      "angenehme Navigation",
      "kompatibel mit gängigen Playern",
    ],
    setup:
      "Installieren Sie den Player aus einem vertrauenswürdigen Store, geben Sie Ihre Zugangsdaten sorgfältig ein und testen Sie Zapzeit, EPG und Untertitel.",
    safety:
      "Bewahren Sie Ihre Zugangsdaten sicher auf und laden Sie Apps nur aus vertrauenswürdigen Quellen herunter.",
  },
  device: {
    label: "Gerätekonfiguration",
    promise: "eine praktische Orientierung für Boxen, Receiver und Fernsehgeräte",
    benefitSeed: [
      "optimiert für die Fernbedienung",
      "4K-fähige Hardware",
      "stabile Kabel- oder WLAN-Verbindung",
    ],
    setup:
      "Aktualisieren Sie die Firmware, nutzen Sie wenn möglich Ethernet und wählen Sie einen leichten Player, der zum Prozessor Ihres Geräts passt.",
    safety:
      "Vermeiden Sie vorinstallierte Boxen mit obskuren Listen; das kann gefährlich sein und rechtliche Risiken mit sich bringen.",
  },
  subscription: {
    label: "Abonnementwahl",
    promise:
      "eine praktische Art, Pakete, Testphasen und Erwartungen zu vergleichen",
    benefitSeed: [
      "klare Laufzeit",
      "keine versteckten Bedingungen",
      "Hilfe bei der Aktivierung",
    ],
    setup:
      "Vergleichen Sie Laufzeit, gleichzeitige Verbindungen, Testmöglichkeiten und Support, bevor Sie bezahlen.",
    safety:
      "Wählen Sie Anbieter, die transparent bei Bedingungen, Kontaktmöglichkeiten und verantwortungsvoller Nutzung sind.",
  },
  legal: {
    label: "Rechtlicher Rahmen",
    promise: "neutrale Aufklärung über Risiken, Rechte und verantwortungsvolles Streaming",
    benefitSeed: [
      "sachliche Erklärung",
      "keine illegalen Anleitungen",
      "Fokus auf eine sichere Wahl",
    ],
    setup:
      "Prüfen Sie, ob ein Dienst die Rechte an den Inhalten besitzt, lesen Sie die Bedingungen und seien Sie vorsichtig bei extrem günstigen Angeboten.",
    safety:
      "Diese Seite enthält allgemeine Informationen und ermutigt nicht zum unbefugten Zugriff auf Sender oder Streams.",
  },
  playlist: {
    label: "Playlist-Sicherheit",
    promise:
      "sichere Informationen zu M3U-Listen ohne gehackte Streams oder zweifelhafte Downloads",
    benefitSeed: [
      "Erklärung der Playlist-Formate",
      "datenschutzfreundliche Kontrolle",
      "keine illegalen Streaming-Links",
    ],
    setup:
      "Nutzen Sie M3U nur als Format für legitime Quellen und testen Sie Listen in einem Player, ohne persönliche Daten weiterzugeben.",
    safety:
      "Wir veröffentlichen keine gecrackten Playlists und raten davon ab, unbekannte Streaming-Links zu öffnen.",
  },
  quality: {
    label: "4K-Streaming",
    promise: "Tipps zu Bildqualität, Bitrate und Netzwerkstabilität",
    benefitSeed: [
      "Fokus auf 4K und Full HD",
      "weniger Ruckeln",
      "realistische Geschwindigkeitserwartungen",
    ],
    setup:
      "Nutzen Sie eine schnelle Verbindung, passende HDMI-Kabel und einen Player mit Hardware-Decodierung.",
    safety:
      "Machen Sie Qualität nicht zum einzigen Kriterium; Zuverlässigkeit, Rechte und Support bleiben wichtig.",
  },
  provider: {
    label: "Anbieter-Orientierung",
    promise:
      "ein ausgewogener Ansatz zur Wahl eines Anbieters, ohne Voreingenommenheit oder Marketing",
    benefitSeed: [
      "neutraler Vergleich",
      "Servicekontrolle",
      "Transparenz der Bedingungen",
    ],
    setup:
      "Prüfen Sie die Zuverlässigkeit des Anbieters, Kontaktmöglichkeiten, Support-Verfügbarkeit und Kundenbewertungen, bevor Sie sich anmelden.",
    safety:
      "Seien Sie vorsichtig bei Anbietern ohne Firmeninformationen, Kontaktkanal oder klare Servicebedingungen.",
  },
  adult: {
    label: "Erwachseneninhalte",
    promise:
      "datenschutzfreundliche Informationen zu Filtern, Alterseinstellungen und verantwortungsvollem Fernsehen",
    benefitSeed: [
      "Kindersicherung",
      "Datenschutzeinstellungen",
      "bewusste Senderauswahl",
    ],
    setup:
      "Prüfen Sie, ob Ihr Player Profile, PIN-Schutz und Senderblockierung unterstützt.",
    safety:
      "Stellen Sie sicher, dass die Inhalte legal verfügbar sind, und blockieren Sie Erwachsenenkategorien für Minderjährige.",
  },
};

const buildMetaDescription = (
  keyword: string,
  intent: IptvGermanPage["intent"],
  index: number,
) => {
  const copy = intentCopy[intent];
  return `${keyword}: ${copy.label.toLowerCase()} mit praktischen Hinweisen zu Installation, Sicherheit, Kompatibilität und Bildqualität. IPTV Germany-Ratgeber ${index + 1}.`;
};

const createFaqs = (
  keyword: string,
  intent: IptvGermanPage["intent"],
  _language: IptvGermanPage["language"],
): VaultFaq[] => {
  const copy = intentCopy[intent];
  const localized =
    "Die Installation hängt von Ihrer App, Ihrem Gerät und der Quelle der Inhalte ab.";

  return [
    {
      question: `Worauf sollte ich bei ${keyword} achten?`,
      answer: `${copy.setup} Prüfen Sie außerdem Support, Updates und ob der Dienst zu Ihren täglichen Sehgewohnheiten passt.`,
    },
    {
      question: `Ist ${keyword} für 4K-Streaming geeignet?`,
      answer: `Ja, solange Ihr Gerät, Player und Ihre Internetverbindung dies unterstützen. Für 4K empfehlen wir eine stabile Verbindung und bei festen TV-Installationen vorzugsweise Ethernet.`,
    },
    {
      question: `Wie nutze ich ${keyword} sicher?`,
      answer: `${copy.safety} ${localized}`,
    },
  ];
};

const relatedSlugsFor = (
  slug: string,
  intent: IptvGermanPage["intent"],
) => {
  const preferredByIntent: Record<IptvGermanPage["intent"], RawSlug[]> = {
    general: ["iptv", "bestes-iptv", "abonnement-iptv", "iptv-abonnement"],
    germany: ["deutsche-iptv-sender", "internationale-iptv-sender", "bestes-iptv", "iptv-agentur"],
    app: [
      "iptv-smarters",
      "iptv-smarters-pro",
      "iptv-player",
      "beste-iptv-app",
    ],
    device: ["iptv-box", "beste-iptv-box", "android-iptv-box", "iptv-receiver"],
    subscription: [
      "iptv-abonnement",
      "abonnement-iptv",
      "iptv-preise",
      "iptv-testen",
    ],
    legal: ["iptv-illegal", "iptv-bussgeld", "iptv", "iptv-anbieter"],
    playlist: [
      "m3u-iptv",
      "iptv-smarters-pro",
      "iptv-abonnement",
      "iptv-player",
    ],
    quality: ["iptv-4k", "iptv-with-4k", "bestes-iptv", "iptv-premium"],
    provider: [
      "iptv-anbieter",
      "iptv-agentur",
      "iptv-atlas",
      "bestes-iptv",
    ],
    adult: ["iptv-app", "smart-iptv", "iptv-player", "iptv"],
  };

  return preferredByIntent[intent]
    .filter((relatedSlug) => relatedSlug !== slug)
    .slice(0, 4);
};

const createPage = (
  slug: RawSlug,
  index: number,
): Omit<IptvGermanPage, "internalLinks"> => {
  const keyword = formatKeyword(slug);
  const readableKeyword = titleCase(keyword);
  const language = detectLanguage(slug);
  const intent = detectIntent(slug);
  const copy = intentCopy[intent];
  const title =
    titleOverrides[slug] ?? `${readableKeyword}: praktischer IPTV Germany-Ratgeber`;
  const metaTitle = `${title} | IPTV Germany`;
  const heroHeading =
    slug === "iptv"
      ? "IPTV ohne Umwege: bewusst wählen, stabil streamen"
      : `${readableKeyword} mit dem pragmatischen Ansatz von IPTV Germany`;

  return {
    slug,
    keyword,
    title,
    metaTitle,
    metaDescription: buildMetaDescription(keyword, intent, index),
    heroHeading,
    language,
    intent,
    introCopy: `${readableKeyword} erfordert mehr als nur einen Suchbegriff. Diese Seite hilft Ihnen bei ${copy.promise}, mit besonderem Augenmerk auf Leistung, Geräteauswahl, Datenschutz und verantwortungsvolle Nutzung ${languageAngle[language]}.`,
    benefits: copy.benefitSeed.map(
      (benefit, benefitIndex) =>
        `${benefit} für ${keyword} ${benefitIndex + 1}`,
    ),
    sections: [
      {
        heading: `${readableKeyword} in der Praxis`,
        body: `Bei ${keyword} dreht sich alles um die Kombination aus Inhaltsquelle, Player, Gerät und Netzwerk. IPTV Germany versteht dies als vollständiges Seherlebnis, damit Sie nicht nur starten, sondern auch verstehen, warum die Wiedergabe flüssig oder instabil läuft.`,
        points: [
          "Prüfen Sie die Kompatibilität, bevor Sie ein Paket oder eine App wählen.",
          "Nutzen Sie einen übersichtlichen EPG und logische Sendergruppen.",
          "Testen Sie die Qualität auf dem Gerät, auf dem Sie tatsächlich schauen werden.",
        ],
      },
      {
        heading: `Installations-Checkliste für ${readableKeyword}`,
        body: copy.setup,
        points: [
          "Notieren Sie, welche App, TV-Box oder Smart-TV Sie verwenden.",
          "Prüfen Sie Ihre Internetgeschwindigkeit und WLAN-Abdeckung am Sehplatz.",
          "Bewahren Sie Kontodaten und Playlist an einem sicheren Ort auf.",
        ],
      },
      {
        heading: `Sichere und verantwortungsvolle Nutzung von ${readableKeyword}`,
        body: copy.safety,
        points: [
          "Vermeiden Sie unbekannte Downloads, gecrackte Apps und anonyme Listen.",
          "Teilen Sie keine persönlichen Daten mit zweifelhaften Anbietern.",
          "Wählen Sie Quellen mit klaren Bedingungen und erreichbarem Support.",
        ],
      },
    ],
    faqs: createFaqs(keyword, intent, language),
  };
};

const pagesWithoutLinks = IPTV_GERMAN_SLUGS.map(createPage);

export const IPTV_GERMAN_PAGES: IptvGermanPage[] =
  pagesWithoutLinks.map((page) => {
    const isAbonnement =
      page.slug === "iptv-abonnement" || page.slug === "abonnement-iptv";

    return {
      ...page,
      heroHeading: isAbonnement
        ? "IPTV in Deutschland: entdecken Sie Fernsehen neu"
        : page.heroHeading,
      metaTitle: isAbonnement
        ? "IPTV-Abonnement Deutschland – Live-Streaming, deutsche Sender, 4K/8K, VOD | IPTV Germany"
        : page.metaTitle,
      metaDescription: isAbonnement
        ? "IPTV-Abonnement & Streaming in Deutschland mit 31.000+ Sendern und 140.000+ Filmen & Serien in 4K/8K. Direkte Aktivierung, stabile Server, alle Geräte unterstützt und Premium-IPTV-Abonnements für Deutschland, Österreich und die Schweiz."
        : page.metaDescription,
      heroBg: isAbonnement ? "/images/abonnement-bg.webp" : undefined,
      internalLinks: relatedSlugsFor(page.slug, page.intent).map(
        (relatedSlug) => {
          const related = pagesWithoutLinks.find(
            (candidate) => candidate.slug === relatedSlug,
          );
          const label = related?.keyword ?? formatKeyword(relatedSlug);

          return {
            label,
            href: iptvPath(relatedSlug),
            description: `Mehr über ${label} im IPTV Germany-Ratgeber.`,
          };
        },
      ),
    };
  });

export const IPTV_GERMAN_PAGE_MAP = new Map(
  IPTV_GERMAN_PAGES.map((page) => [page.slug, page]),
);

export const getIptvGermanPage = (slug: string) =>
  IPTV_GERMAN_PAGE_MAP.get(slug);

export const getIptvGermanPath = (slug: string) => iptvPath(slug);

// ═════════════════════════════════════════════════════════════════════════════
//  PHASE 3 — RICH CONTENT ENGINE  (emits IPTVPage[] for all vault slugs)
//  ---------------------------------------------------------------------------
//  Every page gets ≥5 discriminated-union sections, ≥5 FAQs and ≥4 internal
//  links. Content is differentiated by search intent (no near-duplicate copy).
//  Exported under V2 names; Phase 4 switches the route over, after which the
//  legacy block above is removed and these become canonical.
// ═════════════════════════════════════════════════════════════════════════════

const UPDATED_AT = "2026-05-31";
// Primary CTA target across all vault pages — points at the root money page
// directly (no /iptv-ratgeber redirect hop).
const ORDER_HREF = iptvPath("iptv-abonnement");
const OG = OG_IMAGE.url;

/** Truncate to a hard max length, appending an ellipsis at a word boundary. */
const clamp = (value: string, max: number): string => {
  if (value.length <= max) return value;
  const cut = value.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).trimEnd()}…`;
};

// ── Intent detection (German-market focused) ──────────────────────────────
const detectIntentV2 = (slug: string): PageIntent => {
  const has = (...keys: string[]) => keys.some((k) => slug.includes(k));
  if (has("illegal", "legal", "bussgeld", "recht", "medienanstalt", "strafe", "abmahn"))
    return "legal";
  if (has("beste", "bester", "anbieter", "agentur", "dienst", "provider", "atlas", "king", "mario", "lynk", "iron", "zen", "xenon", "pure"))
    return "provider";
  if (has("playlist", "m3u", "gratis", "kostenlos", "code", "free"))
    return "playlist";
  if (has("4k", "8k", "uhd"))
    return "quality";
  if (has("box", "receiver", "stick", "mag"))
    return "device";
  if (has("smarters", "smarter", "smart-player", "smart-iptv", "tivimate", "smartone", "smart-one", "net-iptv", "set-iptv", "ss-iptv", "iptv-ss", "flix", "xtream", "player", "anwendung", "app", "smart"))
    return "app";
  if (has("abonnement", "abbonement", "abo", "kaufen", "preise", "guenstig", "premium", "test", "trial", "12-monate"))
    return "subscription";
  if (has("deutsche", "international", "german", "germany", "swiss", "osterreich"))
    return "landing";
  if (has("programm", "senderliste", "einrichten", "was-ist", "guide"))
    return "guide";
  return "general";
};

// ── Shared content blocks (reused across pages) ──────────────────────────────
const PRICING_TIERS: PricingTier[] = [
  {
    name: "1 Monat",
    price: "12,99 €",
    period: "/ Monat",
    description: "Flexibel zum Ausprobieren",
    features: [
      "31.000+ Live-Sender",
      "140.000+ Filme & Serien",
      "Full HD & 4K",
      "1 Gerät gleichzeitig",
      "Kundenservice 24/7",
    ],
    cta: { label: "Bestellen", href: ORDER_HREF },
  },
  {
    name: "3 Monate",
    price: "29,99 €",
    period: "/ 3 Monate",
    description: "Bestes Preis-Leistungs-Verhältnis",
    features: [
      "Alles aus dem Monatspaket",
      "Streaming in 4K / 8K",
      "2 Geräte gleichzeitig",
      "Unterbrechungsfreie Server",
      "Vollständiger VOD-Zugang",
    ],
    cta: { label: "Beliebtestes Paket", href: ORDER_HREF },
    highlighted: true,
    badge: "Am beliebtesten",
  },
  {
    name: "12 Monate",
    price: "79,99 €",
    period: "/ Jahr",
    description: "Nur 6,66 € pro Monat",
    features: [
      "Alles aus dem 3-Monats-Paket",
      "Bis zu 5 Geräte",
      "Prioritäts-Kundenservice",
      "Kostenlose Updates",
      "Ohne Vertragsbindung",
    ],
    cta: { label: "Jahrespaket wählen", href: ORDER_HREF },
  },
];

const COMPARISON_COLUMNS = ["IPTV Germany", "Andere Anbieter", "Kabel & Satellit"];
const COMPARISON_ROWS: ComparisonRow[] = [
  { label: "Live-Sender", values: ["31.000+", "einige Tausend", "100–300"] },
  { label: "Filme & Serien (VOD)", values: ["140.000+", "begrenzt", false] },
  { label: "Qualität 4K / 8K", values: [true, "teilweise", false] },
  { label: "Gleichzeitige Geräte", values: ["bis zu 5", "1–2", "1"] },
  { label: "Vertragsbindung", values: ["keine", "oft 24 Monate", "12–24 Monate"] },
  { label: "Kostenlose Testphase", values: [true, false, false] },
  { label: "Preis pro Monat ab", values: ["6,66 €", "15–30 €", "ab 40 €"] },
  { label: "Kundenservice 24/7", values: [true, "wechselnd", "Telefonleitung"] },
];

const DEVICE_CARDS: DeviceCard[] = [
  { name: "Amazon Fire TV Stick", platform: "box", steps: 4, icon: "Tv" },
  { name: "Android TV & Box", platform: "android", steps: 4, icon: "MonitorSmartphone" },
  { name: "Smart TV Samsung & LG", platform: "smart-tv", steps: 5, icon: "Tv" },
  { name: "iPhone & iPad", platform: "ios", steps: 4, icon: "Smartphone" },
  { name: "MAG Box", platform: "box", steps: 3, icon: "Box" },
  { name: "Windows PC", platform: "windows", steps: 3, icon: "Monitor" },
  { name: "Apple TV", platform: "box", steps: 4, icon: "Tv" },
  { name: "Webbrowser", platform: "browser", steps: 2, icon: "Globe" },
];

const TESTIMONIAL_REVIEWS: Review[] = [
  { author: "Julian M.", country: "🇩🇪", rating: 5, text: "Endlich keine Unterbrechungen mehr. Fußball wird in 4K vollständig flüssig dargestellt – die Installation auf dem Fire TV Stick hat nur 5 Minuten gedauert." },
  { author: "Katharina L.", country: "🇩🇪", rating: 5, text: "Ein enormes Angebot an Filmen und Serien, dazu ein Kundenservice, der wirklich innerhalb von Minuten reagiert. Ich kann es nur empfehlen." },
  { author: "Thomas B.", country: "🇦🇹", rating: 4, text: "Sehr stabil und faire Preise ohne Vertragsbindung. Die kostenlose Testphase hat mich überzeugt – ich nutze jetzt das Jahrespaket." },
  { author: "Sophie K.", country: "🇨🇭", rating: 5, text: "Läuft gleichzeitig auf Smart TV, Handy und Tablet. Der EPG ist gut auf Deutsch und die Sender sind perfekt sortiert." },
];

const CHANNEL_CATEGORIES: ChannelCategory[] = [
  { name: "Sport", count: 1200, examples: ["Fußball", "Motorsport", "Europäische Wettbewerbe", "Kampfsport"] },
  { name: "Filme & Serien", count: 140000, examples: ["Blockbuster", "Boxsets", "Neuheiten", "Klassiker"] },
  { name: "Nachrichten", count: 800, examples: ["Deutsche Nachrichten", "Internationale Nachrichten", "24/7-Nachrichten", "Britische Nachrichten"] },
  { name: "Kinder", count: 500, examples: ["Zeichentrickfilme", "Kindersender", "Bildungsprogramme", "Familienfilme"] },
  { name: "International", count: 20000, examples: ["🇹🇷 Türkçe", "🇬🇧 UK", "🇮🇹 IT", "🇪🇸 ES"] },
  { name: "4K / UHD", count: 600, examples: ["4K Live", "UHD VOD", "HDR", "8K Demo"] },
];

const HOW_STEPS: Step[] = [
  { title: "Paket wählen", description: "Wählen Sie die gewünschte Laufzeit (1, 3 oder 12 Monate) – vollständig ohne Vertragsbindung." },
  { title: "Zugangsdaten erhalten", description: "Direkt nach Ihrer Bestellung erhalten Sie automatisch per E-Mail Ihre Zugangsdaten oder M3U-/Xtream-Daten." },
  { title: "App installieren", description: "Installieren Sie einen kompatiblen Player auf Ihrem Smart TV, Fire TV Stick, Smartphone oder PC." },
  { title: "Anmelden & streamen", description: "Geben Sie die Zugangsdaten ein, der EPG lädt automatisch – und Sie streamen sofort in 4K." },
];

// ── Per-intent profile (label, hero copy, feature cards, deep-dive text) ──────
type IntentProfile = {
  label: string;
  headline: (kw: string) => string;
  subheadline: string;
  badgeTags: string[];
  ctaLabel: string;
  structuredData: StructuredDataType;
  features: Feature[];
  intro: (kw: string) => string;
  deepDive: (kw: string) => { heading: string; html: string };
  metaDescription: (kw: string) => string;
  extraFaqs: (kw: string) => PageFaq[];
};

const F = (icon: string, title: string, description: string): Feature => ({ icon, title, description });

const INTENT_PROFILE: Record<PageIntent, IntentProfile> = {
  general: {
    label: "Die Grundlagen von IPTV",
    headline: (kw) => `${kw} einfach erklärt`,
    subheadline: "Live-TV, Filme und Serien über das Internet – einfach, stabil und in 4K/8K.",
    badgeTags: ["Klar erklärt", "Praktisch", "Aktualisiert 2026"],
    ctaLabel: "Pakete ansehen",
    structuredData: "Article",
    features: [
      F("Tv", "31.000+ Live-Sender", "Komplettes Angebot deutscher und internationaler Sender plus Programme an einem Ort."),
      F("Film", "140.000+ VOD-Titel", "Filme und Serien auf Abruf – jederzeit pausieren, fortsetzen oder neu beginnen."),
      F("Wifi", "Stabil & flüssig", "Optimierte, unterbrechungsfreie Server sorgen für zuverlässiges Bild ohne Ruckeln."),
      F("MonitorSmartphone", "Alle Geräte", "Smart TV, Fire TV Stick, Smartphone, Tablet, Box oder PC – ein Zugang für alles."),
    ],
    intro: (kw) =>
      `<p><strong>${kw}</strong> steht für Fernsehen über das Internet: Statt über Kabel, Satellit oder Antenne werden Sender und Inhalte als Datenstream übertragen. Das ermöglicht riesige Senderbibliotheken und ein umfangreiches VOD-Angebot, zeitversetztes Fernsehen und die Nutzung auf praktisch allen Geräten.</p><p>Dieser Ratgeber erklärt verständlich, wie ${kw} funktioniert, worauf es bei Qualität und Sicherheit ankommt, und wie Sie in wenigen Minuten startklar sind.</p>`,
    deepDive: (kw) => ({
      heading: `Was bei ${kw} wirklich zählt`,
      html: `<p>Drei Faktoren bestimmen ein gutes Erlebnis: die <strong>Quelle</strong> der Inhalte, der <strong>Player</strong> und Ihr <strong>Netzwerk</strong>. Eine zuverlässige Quelle mit gut gepflegtem EPG, ein leichter, kompatibler Player und eine stabile Verbindung (vorzugsweise per LAN) sorgen gemeinsam für flüssiges Bild – selbst in 4K.</p>`,
    }),
    metaDescription: (kw) =>
      `Was ist ${kw}? Verständlich erklärt: 31.000+ Sender, 140.000+ Filme & Serien, 4K/8K, alle Geräte. Entdecken Sie IPTV Germany und testen Sie 7 Tage kostenlos.`,
    extraFaqs: (kw) => [
      { question: "Was ist der Unterschied zwischen IPTV und klassischem Fernsehen?", answer: `Bei ${kw} werden Inhalte über das Internet statt über Kabel, Satellit oder Antenne übertragen. Das ermöglicht deutlich größere Sender- und VOD-Bibliotheken, zeitversetztes Fernsehen und die Nutzung auf mehreren Geräten gleichzeitig.` },
      { question: `Brauche ich spezielle Geräte für ${kw}?`, answer: "Nein, ein vorhandenes Gerät wie ein Fire TV Stick, Smart TV oder Smartphone reicht meist aus. Eine stabile Internetverbindung ist wichtiger als teure Hardware." },
    ],
  },
  guide: {
    label: "IPTV-Ratgeber",
    headline: (kw) => `${kw}: der vollständige Ratgeber`,
    subheadline: "Alles, was Sie für einen einfachen Start brauchen – klar und praxisnah.",
    badgeTags: ["Schritt für Schritt", "Praktisch", "Aktualisiert 2026"],
    ctaLabel: "Jetzt starten",
    structuredData: "Article",
    features: [
      F("ListChecks", "Klare Schritte", "Von der Installation bis zum ersten Sender – erklärt ohne Fachjargon."),
      F("Settings", "Optimale Einstellungen", "Puffer, EPG, Untertitel und Bildqualität richtig einstellen."),
      F("ShieldCheck", "Sicherheit an erster Stelle", "Worauf Sie für zuverlässiges und legales Streaming achten sollten."),
      F("Headphones", "Hilfe bei Problemen", "Häufige Fehler und schnelle Lösungen in einer Übersicht."),
    ],
    intro: (kw) =>
      `<p>Dieser Ratgeber begleitet Sie Schritt für Schritt bei <strong>${kw}</strong> – von der Wahl des richtigen Players über die Installation mit M3U oder Xtream Codes bis zur Feinabstimmung von Bildqualität und EPG.</p>`,
    deepDive: (kw) => ({
      heading: `Häufige Fehler bei ${kw} vermeiden`,
      html: `<p>Die meisten Probleme entstehen durch instabiles WLAN, falsche Puffereinstellungen oder unzuverlässige Quellen. Nutzen Sie wo möglich LAN, halten Sie die App aktuell und wählen Sie einen Anbieter mit transparenten Bedingungen und Support.</p>`,
    }),
    metaDescription: (kw) =>
      `${kw} Schritt für Schritt einrichten – mit Checkliste, Gerätetipps und Sicherheitshinweisen. Lesen Sie weiter, starten Sie mit IPTV Germany und testen Sie 7 Tage kostenlos.`,
    extraFaqs: (kw) => [
      { question: `Wie lange dauert die Installation von ${kw}?`, answer: "Meist nur wenige Minuten. Nach Erhalt Ihrer Zugangsdaten geben Sie diese in Ihrem Player ein, der EPG lädt automatisch und Sie können sofort streamen." },
      { question: "Was tun, wenn ein Sender nicht lädt?", answer: "Prüfen Sie Ihre Internetverbindung, starten Sie die App neu und löschen Sie bei Bedarf den Cache. Bleibt das Problem bestehen, hilft Ihnen der 24/7-Support von IPTV Germany schnell weiter." },
    ],
  },
  app: {
    label: "App & Player",
    headline: (kw) => `${kw} optimal einrichten & nutzen`,
    subheadline: "Installation, EPG und Playlists ohne Frust – kompatibel mit allen gängigen Geräten.",
    badgeTags: ["Einfache Installation", "M3U & Xtream", "Alle Geräte", "Support 24/7"],
    ctaLabel: "Zugang erhalten",
    structuredData: "Article",
    features: [
      F("Download", "M3U & Xtream", "Vollständige Unterstützung für M3U-Playlists und Xtream Codes – schnelle Konfiguration."),
      F("CalendarClock", "Übersichtlicher EPG", "Programmführer auf Deutsch mit korrekten Zeitzonen und Logos."),
      F("PlayCircle", "Flüssiges Zappen", "Kurze Umschaltzeiten und stabile Wiedergabe durch optimierte Server."),
      F("MonitorSmartphone", "Auf allen Geräten", "Einmal einrichten, nutzen auf Smart TV, Box, Handy und PC."),
    ],
    intro: (kw) =>
      `<p><strong>${kw}</strong> ist ein beliebter Player zum Abspielen von IPTV-Inhalten. Dieser Ratgeber zeigt, wie Sie ${kw} installieren, mit M3U oder Xtream Codes verbinden und Bild, EPG und Untertitel optimal einstellen.</p>`,
    deepDive: (kw) => ({
      heading: `${kw} korrekt einrichten`,
      html: `<p>Geben Sie Ihre Zugangsdaten sorgfältig ein (Server, Benutzername, Passwort oder M3U-URL). Aktivieren Sie die Hardware-Decodierung, passen Sie die Puffergröße an Ihr Netzwerk an und laden Sie den EPG für eine vollständige Programmübersicht.</p>`,
    }),
    metaDescription: (kw) =>
      `${kw} installieren & einrichten: M3U/Xtream, EPG und alle Geräte. IPTV Germany-Ratgeber – jetzt starten und 7 Tage kostenlos testen.`,
    extraFaqs: (kw) => [
      { question: `Wie richte ich ${kw} mit M3U oder Xtream ein?`, answer: "Öffnen Sie die App, wählen Sie 'Playlist hinzufügen' und geben Sie die M3U-URL oder Ihre Xtream-Codes ein (Server, Benutzername, Passwort). Der EPG lädt anschließend automatisch." },
      { question: `Warum unterbricht ${kw} manchmal?`, answer: "Häufige Ursachen sind WLAN-Schwankungen, ein überlastetes Gerät oder ein zu kleiner Puffer. Nutzen Sie LAN, schließen Sie Apps im Hintergrund und erhöhen Sie die Puffergröße in den Einstellungen." },
    ],
  },
  device: {
    label: "Geräte & Installation",
    headline: (kw) => `${kw} in wenigen Minuten eingerichtet`,
    subheadline: "So bringen Sie Ihr Gerät in wenigen Schritten ans Laufen – stabil und in bester Qualität.",
    badgeTags: ["Einfache Installation", "Alle Geräte", "4K-fähig", "Support 24/7"],
    ctaLabel: "Zugang erhalten",
    structuredData: "Article",
    features: [
      F("Box", "Plug & Play", "Kompatibel mit Fire TV Stick, MAG, Android-Box und Smart TV."),
      F("Wifi", "Stabil per LAN", "Ethernet-Empfehlung für unterbrechungsfreies 4K bei festen Installationen."),
      F("Cpu", "Hardware-Decodierung", "Flüssige Wiedergabe abgestimmt auf die Leistung Ihres Geräts."),
      F("RefreshCw", "Immer aktuell", "Firmware- und App-Updates halten die Wiedergabe schnell und sicher."),
    ],
    intro: (kw) =>
      `<p>Mit <strong>${kw}</strong> wird Ihr Fernseher zur echten Streaming-Zentrale. Wir zeigen, welche Einstellungen für ein flüssiges Bild sorgen und wie Sie das Gerät in wenigen Schritten konfigurieren.</p>`,
    deepDive: (kw) => ({
      heading: `Optimale Einstellungen für ${kw}`,
      html: `<p>Aktualisieren Sie zunächst die Firmware, verbinden Sie das Gerät wenn möglich per Ethernet und wählen Sie einen leichten Player. Aktivieren Sie die Hardware-Decodierung und stellen Sie die Auflösung passend zu Ihrem Fernseher ein.</p>`,
    }),
    metaDescription: (kw) =>
      `${kw} in wenigen Minuten einrichten: Schritt-für-Schritt-Anleitung, Tipps & Support. Streamen Sie jetzt stabil in 4K mit IPTV Germany.`,
    extraFaqs: (kw) => [
      { question: `Welche Einstellungen sind optimal für ${kw}?`, answer: "Aktualisieren Sie die Firmware, nutzen Sie wenn möglich Ethernet, aktivieren Sie die Hardware-Decodierung und wählen Sie einen leichten Player passend zur Leistung Ihres Geräts." },
      { question: `Brauche ich schnelles Internet für ${kw}?`, answer: "Für Full HD reichen etwa 16 Mbit/s aus; für 4K empfehlen wir 25 Mbit/s oder mehr. Wichtiger als die Bruttogeschwindigkeit ist eine stabile Verbindung mit niedriger Latenz – LAN ist gegenüber WLAN zu bevorzugen." },
    ],
  },
  subscription: {
    label: "Abonnement & Preise",
    headline: (kw) => `${kw} – Pakete, Preise & Testphase`,
    subheadline: "Transparente Pakete ohne Vertragsbindung – mit direkter Aktivierung und kostenloser Testphase.",
    badgeTags: ["Ab 6,66 €/Monat", "Kostenlose Testphase", "Ohne Vertragsbindung", "Direkt aktiv"],
    ctaLabel: "Kostenlos testen",
    structuredData: "Product",
    features: [
      F("CreditCard", "Faire Preise", "Klare Pakete ab 6,66 €/Monat – ohne versteckte Kosten oder Verpflichtungen."),
      F("Zap", "Direkt aktiv", "Aktivierung meist innerhalb weniger Minuten nach der Bestellung."),
      F("ShieldCheck", "Kostenlose Testphase", "Testen Sie in Ruhe Stabilität, Sender und Bildqualität, bevor Sie sich entscheiden."),
      F("Server", "Premium-Server", "Eine unterbrechungsfreie Infrastruktur für flüssiges Bild auch zu Stoßzeiten."),
    ],
    intro: (kw) =>
      `<p>Bei <strong>${kw}</strong> zählt alles: die Laufzeit, die Anzahl gleichzeitiger Geräte, Bildqualität, Stabilität und Support. IPTV Germany bietet transparente Pakete ohne Vertragsbindung und mit direkter Aktivierung.</p>`,
    deepDive: (kw) => ({
      heading: `${kw}: richtig vergleichen`,
      html: `<p>Achten Sie nicht nur auf den Preis, sondern auf die Anzahl der Sender und VOD-Titel, gleichzeitige Verbindungen, Serverqualität und die Verfügbarkeit von Support. Eine Testphase ist der beste Weg, die Qualität vor dem Kauf zu beurteilen.</p>`,
    }),
    metaDescription: () =>
      `IPTV-Abonnement ab 6,66 €: 31.000+ Sender, 140.000+ VOD, 4K/8K, ohne Vertragsbindung. Paket wählen, direkt aktivieren und 7 Tage kostenlos testen.`,
    extraFaqs: (kw) => [
      { question: `Ist ${kw} mit einer Vertragsbindung verbunden?`, answer: "Nein. Sie wählen flexible Laufzeiten (1, 3 oder 12 Monate) ohne automatische Verlängerung oder Kündigungsfrist." },
      { question: `Kann ich ${kw} vorher testen?`, answer: "Ja, eine kostenlose Testphase ermöglicht es Ihnen, Stabilität, Sender und Bildqualität in Ruhe zu prüfen, bevor Sie sich entscheiden." },
      { question: "Wie schnell wird mein Zugang aktiviert?", answer: "Die Aktivierung erfolgt meist sofort, innerhalb weniger Minuten nach der Zahlung – die Zugangsdaten kommen automatisch per E-Mail." },
    ],
  },
  provider: {
    label: "Anbietervergleich",
    headline: (kw) => `${kw} im Vergleich`,
    subheadline: "Ein neutraler Blick auf Sender, Preise, Qualität und Service – für eine gut überlegte Wahl.",
    badgeTags: ["Neutraler Vergleich", "Transparent", "Kostenlose Testphase"],
    ctaLabel: "IPTV Germany testen",
    structuredData: "Article",
    features: [
      F("Scale", "Neutraler Vergleich", "Sender, Preise, Qualität und Support sachlich gegenübergestellt."),
      F("BadgeCheck", "Zuverlässigkeit prüfen", "Transparente Bedingungen, erreichbarer Support und echte Bewertungen."),
      F("Wallet", "Faire Bedingungen", "Klare Preise ohne zweifelhafte 'lebenslange' Versprechen."),
      F("Star", "Bewährte Qualität", "Stabile Server und ein sorgfältiges Angebot statt leerer Marketingversprechen."),
    ],
    intro: (kw) =>
      `<p>Bei der Suche nach <strong>${kw}</strong> lohnt sich ein genauer Vergleich. Wir zeigen, welche Kriterien wirklich zählen und wie Sie einen zuverlässigen Dienst erkennen – ohne Marketingfloskeln.</p>`,
    deepDive: (kw) => ({
      heading: `${kw}: worauf Sie achten sollten`,
      html: `<p>Zuverlässige Anbieter zeigen transparente Preise, bieten erreichbaren Support und eine Testphase und machen keine unrealistischen Versprechen. Seien Sie vorsichtig bei extrem günstigen 'lebenslangen' Angeboten ohne Firmeninformationen oder Kontaktdaten.</p>`,
    }),
    metaDescription: (kw) =>
      `${kw} neutral verglichen: Sender, Preise, Qualität & Support. Finden Sie den richtigen Anbieter und testen Sie IPTV Germany 7 Tage kostenlos.`,
    extraFaqs: () => [
      { question: "Wie erkenne ich einen zuverlässigen IPTV-Anbieter?", answer: "Achten Sie auf transparente Preise, erreichbaren Support, klare Bedingungen, eine Testphase und echte Kundenbewertungen. Seien Sie vorsichtig bei extrem günstigen 'lebenslangen' Angeboten." },
      { question: "Was kostet ein guter IPTV-Dienst?", answer: "Zuverlässige Dienste kosten in der Regel zwischen 7 und 13 € pro Monat, mit Rabatt bei längeren Laufzeiten. Ungewöhnlich günstige Angebote sind oft instabil oder rechtlich bedenklich." },
    ],
  },
  legal: {
    label: "Rechtlicher Rahmen",
    headline: (kw) => `${kw}: was ist erlaubt?`,
    subheadline: "Sachliche Informationen zu Recht und Risiken – plus sichere und legale Alternativen.",
    badgeTags: ["Sachlich & neutral", "Legale Alternativen", "Datenschutz"],
    ctaLabel: "Legale Alternative ansehen",
    structuredData: "Article",
    features: [
      F("Scale", "Rechtliche Klarheit", "IPTV als Technologie ist legal – entscheidend ist die Lizenz der Quelle."),
      F("ShieldAlert", "Risiken kennen", "Abmahnungen und Bußgelder drohen nur bei eindeutig illegalen Streams."),
      F("Lock", "Datenschutz", "Keine zweifelhaften Apps, keine Weitergabe persönlicher Daten."),
      F("CheckCircle2", "Sichere Wahl", "Lizenzierte und transparente Dienste statt anonymer Angebote."),
    ],
    intro: (kw) =>
      `<p>Rund um das Thema <strong>${kw}</strong> herrscht viel Unsicherheit. Wichtig: Die IPTV-Technologie selbst ist völlig legal. Die Legalität eines Anbieters hängt ausschließlich davon ab, ob er die notwendigen Lizenzen für die angebotenen Inhalte besitzt.</p>`,
    deepDive: () => ({
      heading: "Legal streamen – völlig sicher",
      html: `<p>Wählen Sie Dienste mit transparenten Bedingungen, Firmeninformationen und erreichbarem Support. Extrem günstige Angebote mit Tausenden Premium-Sendern für wenige Euro sind ein Warnsignal. Im Zweifel: wählen Sie einen zuverlässigen und lizenzierten Anbieter.</p>`,
    }),
    metaDescription: (kw) =>
      `${kw}: sachliche Informationen zu Recht, Risiken & sicheren Alternativen in Deutschland. Informieren Sie sich und streamen Sie legal mit IPTV Germany.`,
    extraFaqs: (kw) => [
      { question: `Ist ${kw} in Deutschland legal?`, answer: "IPTV als Technologie ist legal. Entscheidend ist die Quelle: Nur Anbieter mit den notwendigen Lizenzen sind legal. Wir raten ausdrücklich von Piraterie oder anonymen Streams ab." },
      { question: "Drohen bei illegalem IPTV Bußgelder?", answer: "Die Nutzung eindeutig illegaler Streams kann zu Abmahnungen und Bußgeldern führen. Wählen Sie transparente und lizenzierte Dienste, um auf der sicheren Seite zu bleiben." },
    ],
  },
  playlist: {
    label: "Playlists & M3U",
    headline: (kw) => `${kw} sicher nutzen`,
    subheadline: "Playlists richtig verstehen und sicher nutzen – ohne Downloads oder zweifelhafte Links.",
    badgeTags: ["Sicher & zuverlässig", "M3U / Xtream", "Keine zweifelhaften Links"],
    ctaLabel: "Sichere Quelle ansehen",
    structuredData: "Article",
    features: [
      F("FileCode", "M3U & Xtream", "Klare Erklärung der Playlist-Formate und ihrer Installation."),
      F("Lock", "Datenschutzfreundlich", "Keine Weitergabe persönlicher Daten, keine zweifelhaften Downloads."),
      F("ShieldCheck", "Zuverlässige Quellen", "Worauf Sie achten sollten, um Malware und Probleme zu vermeiden."),
      F("PlayCircle", "Sofort nutzbar", "Testen Sie Listen direkt im Player – schnell und einfach."),
    ],
    intro: (kw) =>
      `<p>Eine <strong>${kw}</strong> ist letztlich nur ein Format (meist M3U oder Xtream), das Sender und Streams gruppiert. Dieser Ratgeber erklärt, wie Playlists funktionieren und wie Sie sie sicher und zuverlässig nutzen.</p>`,
    deepDive: () => ({
      heading: "Vorsicht bei kostenlosen Listen",
      html: `<p>Kostenlose Listen aus unbekannten Quellen sind oft veraltet, instabil oder rechtlich bedenklich und können Malware enthalten. Sicherer: ein lizenzierter Dienst mit eigenem, sorgfältig gepflegtem Angebot und Support.</p>`,
    }),
    metaDescription: (kw) =>
      `${kw} verstehen & sicher nutzen – ohne zweifelhafte Links. M3U/Xtream richtig einrichten. Lesen Sie weiter und streamen Sie sicher mit IPTV Germany.`,
    extraFaqs: (kw) => [
      { question: `Sind kostenlose ${kw}-Listen sicher?`, answer: "Kostenlose Listen aus unbekannten Quellen sind oft instabil, veraltet oder rechtlich bedenklich und können Malware enthalten. Sicherer: ein lizenzierter Dienst mit sorgfältig gepflegtem Angebot." },
      { question: "Wie füge ich eine M3U-Playlist im Player hinzu?", answer: "Wählen Sie in Ihrem Player 'Playlist hinzufügen', geben Sie die M3U-URL ein und warten Sie, bis Sender und EPG geladen sind. Bei Xtream-Codes geben Sie stattdessen Server, Benutzername und Passwort ein." },
    ],
  },
  quality: {
    label: "Bildqualität & 4K",
    headline: (kw) => `${kw} in 4K & 8K`,
    subheadline: "Gestochen scharfes Bild ohne Unterbrechung – mit den richtigen Einstellungen für 4K und 8K.",
    badgeTags: ["4K / 8K", "Unterbrechungsfrei", "Hohe Geschwindigkeit"],
    ctaLabel: "In 4K streamen",
    structuredData: "Article",
    features: [
      F("Sparkles", "Gestochen scharfes Bild", "Native 4K- und 8K-Streams mit hoher Bitrate für maximale Schärfe."),
      F("Gauge", "Kaum Unterbrechungen", "Optimierte Server und gute Einstellungen reduzieren Ruckeln."),
      F("Wifi", "Netzwerktipps", "So stellen Sie WLAN und LAN für stabiles Streaming in hoher Qualität ein."),
      F("Cpu", "Passende Hardware", "Geräte mit Hardware-Decodierung für unterbrechungsfreie UHD-Wiedergabe."),
    ],
    intro: (kw) =>
      `<p>Bei <strong>${kw}</strong> dreht sich alles um die Balance zwischen Bandbreite, Hardware und Quelle. Wir zeigen, welche Werte Sie brauchen und wie Sie Unterbrechungen vermeiden.</p>`,
    deepDive: () => ({
      heading: "Bandbreite, Geschwindigkeit & Stabilität",
      html: `<p>Als Richtwert: etwa 16 Mbit/s für Full HD, 25 Mbit/s für 4K und mehr für 8K. Wichtiger als die Bruttogeschwindigkeit ist eine stabile Verbindung mit niedriger Latenz. Für feste TV-Installationen ist Ethernet die beste Wahl.</p>`,
    }),
    metaDescription: (kw) =>
      `${kw}: gestochen scharf streamen ohne Unterbrechung – Geschwindigkeit, Hardware & Netzwerk richtig einstellen. Starten Sie mit IPTV Germany in 4K/8K.`,
    extraFaqs: (kw) => [
      { question: `Welche Internetgeschwindigkeit brauche ich für ${kw}?`, answer: "Als Richtwert: ca. 16 Mbit/s für Full HD, 25 Mbit/s für 4K und mehr für 8K. Wichtiger als die Bruttogeschwindigkeit ist eine stabile Verbindung mit niedriger Latenz." },
      { question: "Warum gibt es Unterbrechungen trotz schnellem Internet?", answer: "Oft liegt es an WLAN-Schwankungen, einem überlasteten Gerät oder einem zu kleinen Puffer. Nutzen Sie LAN, aktivieren Sie die Hardware-Decodierung und erhöhen Sie die Puffergröße." },
    ],
  },
  landing: {
    label: "Premium-IPTV",
    headline: (kw) => `${kw}: Premium-Streaming ohne Einschränkungen`,
    subheadline: "31.000+ Sender, 140.000+ Filme & Serien, 4K/8K – auf allen Geräten, ohne Vertragsbindung.",
    badgeTags: ["31.000+ Sender", "4K / 8K", "Kostenlose Testphase", "Ohne Vertragsbindung"],
    ctaLabel: "7 Tage testen",
    structuredData: "Product",
    features: [
      F("Tv", "31.000+ Sender", "Komplettes Angebot deutscher und internationaler Sender plus Programme."),
      F("Film", "140.000+ VOD", "Ein riesiges Angebot an Filmen und Serien auf Abruf, jederzeit verfügbar."),
      F("Sparkles", "4K / 8K", "Gestochen scharfes Bild durch hohe Geschwindigkeit und Premium-Server."),
      F("MonitorSmartphone", "Alle Geräte", "Smart TV, Fire TV Stick, Handy, Tablet, Box und PC – ein Zugang."),
    ],
    intro: (kw) =>
      `<p><strong>${kw}</strong> steht für Premium-Streaming ohne Kompromisse: ein riesiges Angebot an Sendern und VOD, brillante 4K/8K-Qualität und stabile Server – alles ohne Vertragsbindung und mit direkter Aktivierung.</p>`,
    deepDive: () => ({
      heading: "Warum IPTV Germany?",
      html: `<p>Wir kombinieren ein sorgfältig gepflegtes Angebot mit einer unterbrechungsfreien Infrastruktur, einem EPG auf Deutsch und schnellem Support. Dank der kostenlosen Testphase erleben Sie die Qualität selbst, bevor Sie sich entscheiden.</p>`,
    }),
    metaDescription: (kw) =>
      `${kw}: Premium-IPTV mit 31.000+ Sendern, 140.000+ Filmen & Serien in 4K/8K. Ohne Vertragsbindung. Jetzt 7 Tage kostenlos testen!`,
    extraFaqs: () => [
      { question: "Was macht IPTV Germany besser als andere Anbieter?", answer: "Ein sorgfältig gepflegtes Angebot mit 31.000+ Sendern, unterbrechungsfreie Server, ein EPG auf Deutsch, faire Preise ohne Vertragsbindung und eine kostenlose Testphase, um alles risikofrei zu testen." },
      { question: "Gibt es eine Vertragsbindung oder Testphase?", answer: "Es gibt keine Vertragsbindung – Sie wählen flexible Laufzeiten. Eine kostenlose Testphase ermöglicht es, Stabilität, Sender und Bildqualität vorab zu testen." },
    ],
  },
};

// ── Why Choose Us — trust-signal features per intent ─────────────────────────
const WHY_CHOOSE_US_FEATURES: Record<PageIntent, Feature[]> = {
  general: [
    F("BadgeCheck", "Jahrelange Erfahrung", "Seit Jahren auf dem IPTV-Markt aktiv, mit Tausenden zufriedenen Kunden in Deutschland, Österreich und der Schweiz."),
    F("Eye", "Transparente Arbeitsweise", "Keine versteckten Kosten, klare Informationen und faire Bedingungen – von A bis Z."),
    F("Server", "Premium-Server", "Eine unterbrechungsfreie Infrastruktur für ein stabiles Erlebnis, 24/7."),
    F("Headphones", "Persönlicher Support", "Unser Kundenservice ist 24/7 erreichbar – schnell, freundlich und auf Deutsch."),
  ],
  guide: [
    F("BookOpen", "Expertise", "Jahrelange Erfahrung, gebündelt in klaren und praxisnahen Ratgebern, ohne Fachjargon."),
    F("ListChecks", "Schritt für Schritt", "Klare Erklärungen, abgestimmt auf Einsteiger, mit Blick fürs Detail."),
    F("RefreshCw", "Immer aktuell", "Aktuelle Informationen zu den neuesten Apps, Geräten und Techniken."),
    F("Wrench", "Problemlösung", "Häufige Fehler und ihre Lösungen direkt anwendbar in einer Übersicht."),
  ],
  app: [
    F("Download", "Einfache Installation", "In 5 Minuten fertig, mit klaren Anleitungen für jede App und jeden Player."),
    F("AppWindow", "Alle Player unterstützt", "M3U, Xtream Codes – kompatibel mit Smarters Pro, TiviMate, XCIPTV und mehr."),
    F("RotateCcw", "Regelmäßige Updates", "Immer die neuesten Funktionen, Leistung und Sicherheitsupdates."),
    F("Navigation", "Einfach zu bedienen", "EPG auf Deutsch, intuitive Navigation und logische Sendergruppen."),
  ],
  device: [
    F("MonitorSmartphone", "Breiteste Kompatibilität", "Fire TV Stick, Smart TV, MAG, Android TV, Apple TV – alles wird unterstützt."),
    F("Zap", "Optimiert", "Hardware-Decodierung für flüssige 4K-Wiedergabe, abgestimmt auf Ihr Gerät."),
    F("Settings", "Einfach zu konfigurieren", "Eine Schritt-für-Schritt-Anleitung für jede Plattform – keine Fachkenntnisse nötig."),
    F("Wifi", "LAN und WLAN", "Stabiles Streaming per Ethernet oder optimale WLAN-Tipps für drahtlose Installationen."),
  ],
  subscription: [
    F("BadgeEuro", "Bestes Preis-Leistungs-Verhältnis", "Premium-IPTV ab nur 6,66 € pro Monat, ohne versteckte Kosten."),
    F("Zap", "Direkte Aktivierung", "Direkter Zugang nach Ihrer Bestellung – keine Installationskosten, kein Aufwand."),
    F("Gift", "Kostenlose Testphase", "7 Tage risikofrei testen, bevor Sie sich entscheiden."),
    F("FileX", "Ohne Vertragsbindung", "Flexible Laufzeiten ohne automatische Verlängerung oder Kündigungsfrist."),
  ],
  provider: [
    F("Star", "Bewährte Zuverlässigkeit", "Tausende Kunden bewerten uns mit durchschnittlich 4,9 Sternen."),
    F("Scale", "Fair verglichen", "Keine Marketingfloskeln, sondern sachliche Informationen zum Anbietervergleich."),
    F("ShieldCheck", "Service garantiert", "Zufrieden oder Geld zurück innerhalb von 30 Tagen – Ihre Zufriedenheit steht an erster Stelle."),
    F("MessageCircle", "Immer erreichbar", "Per WhatsApp, E-Mail und Telefon – 24/7 auf Deutsch verfügbar."),
  ],
  legal: [
    F("Scale", "Vollständig legal", "Wir arbeiten ausschließlich mit lizenzierten Inhalten und transparenten Quellen."),
    F("Lock", "Datenschutz an erster Stelle", "Ihre Daten sind sicher und werden niemals an Dritte weitergegeben."),
    F("ShieldCheck", "Ohne Risiko", "Keine Abmahnungen oder Bußgelder – Sie wählen einen legalen und sicheren Dienst."),
    F("Lightbulb", "Klare Ratschläge", "Ehrliche Informationen zu Rechten, Risiken und verantwortungsvollem Streaming."),
  ],
  playlist: [
    F("FileCheck", "Zuverlässige Listen", "Stabile M3U- und Xtream-Playlists ohne tote Links oder Malware."),
    F("RefreshCw", "Immer aktuell", "Playlists werden regelmäßig erneuert für ein optimales Erlebnis."),
    F("ShieldCheck", "Sichere Nutzung", "Keine zweifelhaften Quellen, keine versteckten Skripte, kein Risiko für Ihre Privatsphäre."),
    F("MessageCircle", "Schneller Support", "Hilfe bei der Installation Ihrer Playlist in jedem gängigen Player."),
  ],
  quality: [
    F("Sparkles", "Gestochen scharfes Bild", "Native 4K- und 8K-Streams mit hoher Bitrate für maximale Schärfe."),
    F("Gauge", "Minimale Unterbrechungen", "Unterbrechungsfreie Premium-Server für flüssiges Bild, auch zu Stoßzeiten."),
    F("SlidersHorizontal", "Optimale Abstimmung", "Tipps zu Geschwindigkeit, Hardware und Netzwerk für das beste Ergebnis."),
    F("Sun", "HDR-Unterstützung", "HDR10 und Dolby Vision auf kompatiblen Geräten und Inhalten."),
  ],
  landing: [
    F("Gem", "Alles in einem", "Premium-IPTV mit Sendern, VOD, 4K/8K und Support in einem kompletten Paket."),
    F("Flag", "Auf Deutsch", "EPG auf Deutsch, Support in Ihrer Sprache und lokal abgestimmte Dienste."),
    F("Star", "Bewährte Qualität", "12.000+ zufriedene Kunden und eine durchschnittliche Bewertung von 4,9 Sternen."),
    F("Gift", "Risikofrei testen", "7 Tage kostenlose Testphase, Sie zahlen erst danach – völlig risikofrei."),
  ],
};

// ── IPTV Benefits — cost-savings & convenience features per intent ────────────
const IPTV_BENEFITS_FEATURES: Record<PageIntent, Feature[]> = {
  general: [
    F("Wallet", "Sparen Sie bei den TV-Kosten", "IPTV ist deutlich günstiger als ein herkömmliches Kabel- oder Satellitenabonnement."),
    F("Tv", "Riesiges Senderangebot", "31.000+ lokale und internationale Sender – Sport, Nachrichten, Filme, Serien und mehr."),
    F("MonitorSmartphone", "Schauen Sie auf Ihrem Gerät", "Smart TV, Smartphone, Tablet, Laptop oder Box – Sie entscheiden, wo und wann."),
    F("Sparkles", "In hoher Qualität streamen", "Full HD, 4K und sogar 8K – abhängig von Ihrem Gerät und Ihrer Internetverbindung."),
  ],
  guide: [
    F("BookOpen", "Lernen Sie in Ihrem Tempo", "Klar erklärt mit Beispielen, Schritten und praktischen Tipps."),
    F("Lightbulb", "Verstehen Sie die Technologie", "Kein kompliziertes Fachjargon, sondern klare Erklärungen, die Sie direkt anwenden können."),
    F("ShieldCheck", "Fehler vermeiden", "Lernen Sie aus häufigen Fehlern, sparen Sie Zeit und vermeiden Sie Frust."),
    F("Zap", "Mit Vertrauen streamen", "Nach dem Lesen dieses Ratgebers wissen Sie genau, wie alles funktioniert."),
  ],
  app: [
    F("AppWindow", "Nutzen Sie jeden Player", "Kompatibel mit Smarters Pro, TiviMate, IPTV Smarters, XCIPTV und vielen weiteren."),
    F("MonitorSmartphone", "Ein Konto, alles verfügbar", "Einmal einrichten und überall schauen – auf allen Geräten gleichzeitig."),
    F("CalendarClock", "EPG auf Deutsch", "Programmführer auf Deutsch mit korrekten Zeitzonen und klaren Infos."),
    F("Zap", "Schnell umschalten", "Kurze Umschaltzeiten und flüssige Wiedergabe all Ihrer Sender."),
  ],
  device: [
    F("MonitorSmartphone", "Ein Gerät, endloser Sehgenuss", "Smart TV, Fire TV Stick, Android-Box, Apple TV – alle Plattformen werden unterstützt."),
    F("Sparkles", "Immer das beste Bild", "Automatische Anpassung an Ihr Gerät, bis zu 4K und HDR."),
    F("Wallet", "Keine teure Hardware", "Ihr vorhandenes Gerät reicht meist aus – keine zusätzliche Investition nötig."),
    F("Smartphone", "Auch unterwegs", "Schauen Sie mobil auf Smartphone und Tablet, wo Sie auch sind."),
  ],
  subscription: [
    F("Wallet", "Keine versteckten Kosten", "Alles inklusive ab 6,66 € pro Monat – keine Installationskosten oder Überraschungen."),
    F("FileX", "Flexibel kündbar", "Keine langfristige Vertragsbindung, keine Kündigungsfrist, volle Freiheit."),
    F("Sparkles", "Premium-Qualität", "Unterbrechungsfreie Server, 4K/8K-Bild, 140.000+ VOD-Titel und 31.000+ Sender."),
    F("MonitorSmartphone", "Mehrere Geräte", "Streamen Sie auf bis zu 5 Geräten gleichzeitig, je nach Paket."),
  ],
  provider: [
    F("Scale", "Fundiert vergleichen", "Erhalten Sie ein klares Bild von Sendern, Preisen, Qualität und echtem Service."),
    F("Server", "Echte Leistung", "Keine leeren Marketingversprechen, sondern echte Server und bewährte Bildqualität."),
    F("BadgeCheck", "Transparenz an erster Stelle", "Klare Bedingungen, faire Preise und sichtbare Kundenbewertungen."),
    F("Gift", "Testen, bevor Sie kaufen", "Eine kostenlose Testphase, um alles in Ruhe und risikofrei zu beurteilen."),
  ],
  legal: [
    F("ShieldCheck", "Mit gutem Gewissen streamen", "Legales IPTV bedeutet kein Risiko für Bußgelder oder rechtliche Probleme."),
    F("Server", "Stabil und zuverlässig", "Die Qualität einer lizenzierten Quelle mit klaren Rechten."),
    F("Lock", "Datenschutz geschützt", "Keine Datensammlung durch zweifelhafte Anbieter, kein Tracking."),
    F("Wallet", "Zahlen für Qualität", "Ein fairer Preis für einen fairen Dienst mit echtem Support."),
  ],
  playlist: [
    F("List", "Organisiert fernsehen", "M3U-Playlists mit logischen Sendergruppen und vollständiger EPG-Unterstützung."),
    F("Settings", "Selbst verwalten", "Organisieren Sie Ihre Playlist, gruppieren Sie Sender und legen Sie Favoriten fest."),
    F("Zap", "Keine toten Links", "Ein zuverlässiger Dienst mit aktuellen und funktionierenden Streams – ohne Aufwand."),
    F("ShieldCheck", "Sicher und übersichtlich", "Keine Malware, kein Phishing – ausschließlich sichere und funktionierende Sender."),
  ],
  quality: [
    F("Sparkles", "4K, wie es sein soll", "Echte 4K-Streams mit hoher Bitrate, ohne hochskaliertes Bild."),
    F("Gauge", "Kein Ruckeln", "Unterbrechungsfreie Server für flüssige Wiedergabe, auch zu Stoßzeiten."),
    F("Sun", "HDR10 und Dolby Vision", "Unterstützung der neuesten HDR-Standards auf kompatiblen Geräten."),
    F("Cpu", "Bereit für die Zukunft", "Über 4K hinaus, auch bereit für 8K auf den neuesten Fernsehern und Bildschirmen."),
  ],
  landing: [
    F("Tv", "Ein vollständiges TV-Erlebnis", "31.000+ Sender, 140.000+ Filme & Serien und 4K/8K – alles in einem Abonnement."),
    F("Wallet", "Deutliche Ersparnis", "Bis zu 80% günstiger als ein herkömmliches Kabelabonnement."),
    F("MonitorSmartphone", "Überall und jederzeit", "Schauen Sie zu Hause auf Ihrem Fernseher oder unterwegs auf Ihrem Handy – wo Sie auch sind."),
    F("Gift", "Kostenlos testen", "7 Tage kostenlos, Sie zahlen erst danach – völlig risikofrei."),
  ],
};

// ── Internal-link hubs per intent (all targets exist in IPTV_GERMAN_SLUGS) ────
const INTENT_LINKS: Record<PageIntent, RawSlug[]> = {
  general: ["was-ist-iptv", "iptv-abonnement", "iptv-smarters-pro", "iptv-box", "m3u-iptv", "iptv-illegal"],
  guide: ["iptv", "iptv-smarters-pro", "iptv-player", "m3u-iptv", "iptv-testen", "iptv-illegal"],
  app: ["iptv-smarters-pro", "iptv-player", "smart-iptv", "iptv-box", "m3u-iptv", "iptv-abonnement"],
  device: ["iptv-box", "iptv-smarters-pro", "smart-iptv", "iptv-abonnement", "iptv-4k", "iptv-player"],
  subscription: ["iptv-abonnement", "was-ist-iptv", "iptv-4k", "iptv-testen", "iptv-smarters-pro", "iptv-anbieter"],
  provider: ["iptv-anbieter", "bestes-iptv", "iptv-abonnement", "was-ist-iptv", "iptv-testen", "iptv-illegal"],
  legal: ["iptv-illegal", "iptv-bussgeld", "iptv", "iptv-abonnement", "iptv-anbieter", "iptv-testen"],
  playlist: ["m3u-iptv", "iptv-player", "iptv-smarters-pro", "iptv-4k", "iptv-testen", "iptv-abonnement"],
  quality: ["iptv-4k", "iptv-with-4k", "iptv-abonnement", "iptv-box", "was-ist-iptv", "iptv-smarters-pro"],
  landing: ["was-ist-iptv", "iptv-abonnement", "iptv-smarters-pro", "iptv-box", "iptv-4k", "iptv-testen"],
};

// ── Section builders ─────────────────────────────────────────────────────────
const featuresSection = (profile: IntentProfile): PageSection => ({
  type: "features",
  heading: "Was IPTV Germany auszeichnet",
  subheading: profile.label,
  items: profile.features,
});

const howSection = (): PageSection => ({
  type: "howItWorks",
  heading: "In 4 Schritten startklar",
  subheading: "So einfach ist es",
  steps: HOW_STEPS,
});

const pricingSection = (): PageSection => ({
  type: "pricing",
  heading: "Pakete & Preise",
  subheading: "Flexibel, fair und ohne Vertragsbindung",
  tiers: PRICING_TIERS,
});

const comparisonSection = (): PageSection => ({
  type: "comparison",
  heading: "IPTV Germany im Vergleich",
  subheading: "So schneidet Premium-IPTV im Vergleich zu Alternativen ab",
  columns: COMPARISON_COLUMNS,
  rows: COMPARISON_ROWS,
});

const devicesSection = (): PageSection => ({
  type: "devices",
  heading: "Auf allen Ihren Geräten",
  subheading: "Kompatibel mit den beliebtesten Plattformen",
  list: DEVICE_CARDS,
});

const testimonialsSection = (): PageSection => ({
  type: "testimonials",
  heading: "Was unsere Kunden sagen",
  subheading: "Mehr als 12.000 zufriedene Zuschauer",
  reviews: TESTIMONIAL_REVIEWS,
});

const channelSection = (): PageSection => ({
  type: "channelList",
  heading: "31.000+ Sender & 140.000+ VOD",
  subheading: "Ein Überblick über das Angebot",
  categories: CHANNEL_CATEGORIES,
});

const ctaSection = (kw: string): PageSection => ({
  type: "cta",
  heading: `Bereit für ${kw} ohne Kompromisse?`,
  text: "Starten Sie noch heute mit IPTV Germany – 31.000+ Sender, 4K/8K und vollständiger Support auf allen Geräten.",
  cta: { label: "7 Tage testen", href: ORDER_HREF },
  variant: "primary",
});

const richIntro = (profile: IntentProfile, kw: string): PageSection => ({
  type: "richText",
  heading: `${kw} – das Wichtigste in Kürze`,
  html: profile.intro(kw),
});

const richDeep = (profile: IntentProfile, kw: string): PageSection => {
  const { heading, html } = profile.deepDive(kw);
  return { type: "richText", heading, html };
};

const whyChooseUsSection = (intent: PageIntent, _kw: string): PageSection => ({
  type: "features",
  heading: "Warum IPTV Germany wählen?",
  subheading: INTENT_PROFILE[intent].label,
  items: WHY_CHOOSE_US_FEATURES[intent],
});

const iptvBenefitsSection = (intent: PageIntent, _kw: string): PageSection => ({
  type: "features",
  heading: "Die Vorteile von IPTV",
  subheading: INTENT_PROFILE[intent].label,
  items: IPTV_BENEFITS_FEATURES[intent],
});

/** Every page gets the full conversion-optimised section flow:
 *  richIntro → features → testimonials → whyChooseUs → iptvBenefits →
 *  devices → howItWorks → [intent-specific extras] → pricing → cta.
 *  No sections are removed from the original intent profiles — the extras
 *  (comparison, channelList, richDeep) are preserved after the core flow.
 */
const buildSectionsFor = (intent: PageIntent, kw: string): PageSection[] => {
  const p = INTENT_PROFILE[intent];

  // ── Core sections (every page gets these in a fixed order) ────────────────
  const sections: PageSection[] = [
    richIntro(p, kw),
    featuresSection(p),
    testimonialsSection(),
    whyChooseUsSection(intent, kw),
    iptvBenefitsSection(intent, kw),
    devicesSection(),
    howSection(),
  ];

  // ── Intent-specific extras (preserves all original differentiating content) ─
  switch (intent) {
    case "subscription":
      sections.push(comparisonSection(), pricingSection(), channelSection());
      break;
    case "landing":
      sections.push(comparisonSection(), channelSection(), pricingSection());
      break;
    case "provider":
      sections.push(comparisonSection(), pricingSection(), richDeep(p, kw));
      break;
    case "device":
      sections.push(comparisonSection(), pricingSection());
      break;
    case "app":
      sections.push(comparisonSection(), pricingSection());
      break;
    case "playlist":
      sections.push(richDeep(p, kw), pricingSection());
      break;
    case "quality":
      sections.push(comparisonSection(), pricingSection());
      break;
    case "legal":
      sections.push(richDeep(p, kw), comparisonSection(), pricingSection());
      break;
    case "guide":
      sections.push(richDeep(p, kw), comparisonSection(), pricingSection());
      break;
    case "general":
    default:
      sections.push(channelSection(), comparisonSection(), pricingSection());
      break;
  }

  // ── Always close with a CTA ──────────────────────────────────────────────
  sections.push(ctaSection(kw));

  return sections;
};

/** Base FAQs shared by every page, plus intent-specific extras (total ≥5). */
const buildFaqsFor = (intent: PageIntent, kw: string): PageFaq[] => {
  const base: PageFaq[] = [
    { question: `Was brauche ich, um ${kw} zu nutzen?`, answer: "Sie benötigen ein Gerät mit Internetverbindung (Smart TV, Fire TV Stick, Smartphone, Box oder PC), eine stabile Verbindung (min. 16 Mbit/s für Full HD, 25+ Mbit/s für 4K) und einen kompatiblen Player. Sie erhalten Ihre Zugangsdaten direkt per E-Mail nach Ihrer Bestellung." },
    { question: `Ist ${kw} für 4K- und 8K-Streaming geeignet?`, answer: `Ja. Mit ausreichender Bandbreite und einem leistungsfähigen Gerät funktioniert ${kw} in 4K und teilweise in 8K. Für feste Installationen empfehlen wir LAN/Ethernet statt WLAN, um Unterbrechungen zu vermeiden.` },
    { question: `Funktioniert ${kw} auf allen Geräten?`, answer: "In der Regel ja – Android, Android TV, Fire TV, Smart TV Samsung & LG, iPhone/iPad, MAG-Box und Windows werden unterstützt. Die Anzahl gleichzeitiger Streams hängt vom gewählten Paket ab." },
  ];
  return [...base, ...INTENT_PROFILE[intent].extraFaqs(kw)];
};

// These three root money pages must appear on every vault page to concentrate
// crawl authority. They are not in IPTV_GERMAN_SLUGS, so they are injected
// as explicit InternalLink objects rather than going through iptvPath().
const MONEY_PAGE_LINKS: InternalLink[] = [
  {
    label: "IPTV kaufen",
    href: "/iptv-kaufen",
    description: "IPTV in 4 Schritten kaufen: Paket wählen, bezahlen und innerhalb von 5 Minuten streamen.",
  },
  {
    label: "IPTV-Abonnement",
    href: "/iptv-abonnement",
    description: "Vergleichen Sie alle IPTV-Abonnements mit 31.000+ Sendern und 4K-Qualität.",
  },
  {
    label: "IPTV-Anbieter",
    href: "/iptv-anbieter",
    description: "Entdecken Sie, warum IPTV Germany der beste IPTV-Anbieter für Deutschland ist.",
  },
];

/** ≥4 contextual internal links — always includes the 3 root money pages. */
const buildLinksFor = (slug: string, intent: PageIntent): InternalLink[] => {
  const fallback: RawSlug[] = ["iptv", "was-ist-iptv", "iptv-smarters-pro", "iptv-box", "m3u-iptv"];
  const targets = [...INTENT_LINKS[intent], ...fallback]
    .filter((s, i, arr) => s !== slug && arr.indexOf(s) === i)
    .slice(0, 3);
  const vaultLinks: InternalLink[] = targets.map((target) => {
    const label = titleCase(formatKeyword(target));
    return {
      label,
      href: iptvPath(target),
      description: `Mehr über ${label} im IPTV Germany-Ratgeber.`,
    };
  });
  // Money pages first; deduplicate by href so vault links that resolve to the
  // same root path (e.g. iptv-abonnement → /iptv-abonnement) don't appear twice.
  const seen = new Set<string>();
  return [...MONEY_PAGE_LINKS, ...vaultLinks]
    .filter((l) => !seen.has(l.href) && seen.add(l.href) as unknown as boolean)
    .slice(0, 6);
};

// ── Per-page bespoke overrides for the highest-value pages ────────────────────
const PAGE_OVERRIDES: Partial<Record<RawSlug, Partial<IPTVPage>>> = {
  "iptv-abonnement": {
    metaTitle: "IPTV-Abonnement Deutschland ab 6,66 € | IPTV Germany",
    metaDescription: "IPTV-Abonnement Deutschland: 31.000+ Sender, 140.000+ Filme & Serien in 4K/8K, ohne Vertragsbindung, direkt aktiv. Jetzt 7 Tage kostenlos testen!",
    hero: {
      headline: "IPTV-Abonnement Deutschland: entdecken Sie Fernsehen neu",
      subheadline: "31.000+ Sender, 140.000+ Filme & Serien in 4K/8K – ohne Vertragsbindung, direkt aktiviert und auf jedem Gerät.",
      cta: { label: "7 Tage testen", href: ORDER_HREF },
      badgeTags: ["31.000+ Sender", "4K / 8K", "Ohne Vertragsbindung", "Direkt aktiv"],
      background: "/images/abonnement-bg.webp",
    },
  },
  "abonnement-iptv": {
    metaTitle: "IPTV-Abonnement kaufen – Premium | IPTV Germany",
    hero: {
      headline: "IPTV-Abonnement: Premium-Streaming für Deutschland",
      subheadline: "Flexible Pakete ab 6,66 €/Monat mit 31.000+ Sendern, 4K/8K und direkter Aktivierung – vollständig ohne Vertragsbindung.",
      cta: { label: "7 Tage testen", href: ORDER_HREF },
      badgeTags: ["Ab 6,66 €/Monat", "Kostenlose Testphase", "Ohne Vertragsbindung", "4K / 8K"],
      background: "/images/abonnement-bg.webp",
    },
  },
  "was-ist-iptv": {
    metaTitle: "Was ist IPTV? Der Grundlagen-Ratgeber | IPTV Germany",
    metaDescription: "Was ist IPTV und wie funktioniert Fernsehen über das Internet? Alles zu Sendern, Geräten, Installation und Sicherheit – verständlich erklärt für Deutschland.",
    hero: {
      headline: "Was ist IPTV? Fernsehen über das Internet, einfach erklärt",
      subheadline: "Live-TV, Filme und Serien über Ihre Internetverbindung – wir erklären die Grundlagen, bevor Sie sich für einen Anbieter entscheiden.",
      cta: { label: "Pakete ansehen", href: ORDER_HREF },
      badgeTags: ["Grundlagen-Ratgeber", "Für Deutschland", "Unabhängig erklärt"],
    },
  },
  iptv: {
    metaTitle: "Was ist IPTV? Ratgeber für stabiles Streamen | IPTV Germany",
    metaDescription: "IPTV einfach erklärt: wie Fernsehen über das Internet funktioniert – Geräte, Installation, Sicherheit & 4K. Verstehen Sie es und starten Sie mit IPTV Germany.",
  },
  "iptv-smarters-pro": {
    metaTitle: "IPTV Smarters Pro einrichten (Anleitung) | IPTV Germany",
    metaDescription: "IPTV Smarters Pro installieren & einrichten: M3U/Xtream, EPG, Untertitel auf allen Geräten. Schritt-für-Schritt-Anleitung von IPTV Germany.",
  },
};

// ── Assemble one IPTVPage from a slug ────────────────────────────────────────
const buildIptvPage = (slug: RawSlug): IPTVPage => {
  const keyword = formatKeyword(slug);
  const kw = titleCase(keyword);
  const intent = detectIntentV2(slug);
  const profile = INTENT_PROFILE[intent];
  // Promoted slugs use their root-level canonical path (no /iptv-ratgeber/ prefix)
  // so Google never indexes a 308 redirect page as canonical.
  const path = iptvPath(slug);
  const canonicalUrl = absoluteUrl(path);
  const lang: PageLanguage = "de";

  const metaTitle = clamp(`${kw} | IPTV Germany`, 60);

  const base: IPTVPage = {
    slug,
    keyword,
    lang,
    intent,
    hreflang: { de: canonicalUrl },
    metaTitle,
    metaDescription: clamp(profile.metaDescription(kw), 155),
    canonicalUrl,
    ogImage: OG,
    structuredData: profile.structuredData,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "IPTV-Ratgeber", href: basePath },
      { label: kw, href: path },
    ],
    hero: {
      headline: profile.headline(kw),
      subheadline: profile.subheadline,
      cta: { label: profile.ctaLabel, href: ORDER_HREF },
      badgeTags: profile.badgeTags,
    },
    sections: buildSectionsFor(intent, kw),
    faq: buildFaqsFor(intent, kw),
    internalLinks: buildLinksFor(slug, intent),
    updatedAt: UPDATED_AT,
  };

  const override = PAGE_OVERRIDES[slug];
  if (!override) return base;
  return {
    ...base,
    ...override,
    hero: { ...base.hero, ...(override.hero ?? {}) },
  };
};

export const IPTV_GERMAN_PAGES_V2: IPTVPage[] = IPTV_GERMAN_SLUGS.map(buildIptvPage);

export const IPTV_GERMAN_PAGE_MAP_V2 = new Map(
  IPTV_GERMAN_PAGES_V2.map((page) => [page.slug, page]),
);

export const getIptvGermanPageV2 = (slug: string): IPTVPage | undefined =>
  IPTV_GERMAN_PAGE_MAP_V2.get(slug);
