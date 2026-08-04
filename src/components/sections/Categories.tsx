import {
  Baby,
  BookOpen,
  Drama,
  Film,
  Flag,
  Gamepad2,
  Globe2,
  Goal,
  Heart,
  Landmark,
  MicVocal,
  MonitorPlay,
  Music,
  Newspaper,
  Radio,
  Swords,
  Telescope,
  Trophy,
  Tv,
  Volleyball,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Category data                                                      */
/* ------------------------------------------------------------------ */

interface CategoryItem {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  gradient: string;
}

const ROW_A: CategoryItem[] = [
  {
    icon: Tv,
    title: "Deutsche Sender",
    description: "Öffentlich-rechtliche & private Sender in HD",
    href: "/popular?type=lives",
    gradient: "from-france-500/20 to-france-700/10",
  },
  {
    icon: Trophy,
    title: "Live-Sport",
    description: "Fußball, Motorsport, Kampfsport & mehr live",
    href: "/popular?type=sports",
    gradient: "from-rouge-500/20 to-rouge-700/10",
  },
  {
    icon: Film,
    title: "Filme",
    description: "Neueste Veröffentlichungen, Klassiker & Blockbuster",
    href: "/popular?type=movies",
    gradient: "from-france-400/20 to-france-600/10",
  },
  {
    icon: MonitorPlay,
    title: "Serien",
    description: "Beliebte Serien & ganze Staffeln",
    href: "/popular?type=series",
    gradient: "from-rouge-400/20 to-rouge-600/10",
  },
  {
    icon: Heart,
    title: "Familiensender",
    description: "Unterhaltung für die ganze Familie",
    href: "/popular?genre=Famille",
    gradient: "from-pink-500/20 to-pink-700/10",
  },
  {
    icon: Music,
    title: "Musik",
    description: "Musiksender, Konzerte & Charts",
    href: "/popular?genre=Musique",
    gradient: "from-violet-500/20 to-violet-700/10",
  },
  {
    icon: Newspaper,
    title: "Nachrichten",
    description: "24/7 Nachrichten und aktuelle Themen",
    href: "/popular?type=lives",
    gradient: "from-blue-500/20 to-blue-700/10",
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    description: "Livestreams, Turniere & Gaming-News",
    href: "/popular?genre=Gaming",
    gradient: "from-emerald-500/20 to-emerald-700/10",
  },
  {
    icon: BookOpen,
    title: "Dokumentationen",
    description: "Natur-, Wissenschafts- & Geschichtsdokumentationen",
    href: "/popular?type=movies",
    gradient: "from-amber-500/20 to-amber-700/10",
  },
  {
    icon: Baby,
    title: "Kindersender",
    description: "Sichere Inhalte für die Kleinen",
    href: "/popular?genre=Famille",
    gradient: "from-sky-400/20 to-sky-600/10",
  },
];

const ROW_B: CategoryItem[] = [
  {
    icon: Globe2,
    title: "Internationale Sender",
    description: "Sender aus mehr als 190 Ländern weltweit",
    href: "/popular?genre=Internationaal",
    gradient: "from-france-500/20 to-france-700/10",
  },
  {
    icon: Flag,
    title: "Deutsche Sender",
    description: "Öffentlich-rechtliche, private & regionale Sender",
    href: "/popular?type=lives",
    gradient: "from-orange-500/20 to-orange-700/10",
  },
  {
    icon: Landmark,
    title: "Britische Sender",
    description: "Allgemeine & Informationssender aus Großbritannien",
    href: "/popular?type=lives",
    gradient: "from-red-600/20 to-red-800/10",
  },
  {
    icon: Telescope,
    title: "Amerikanische Sender",
    description: "Amerikanische Nachrichten-, Film- & Sportsender",
    href: "/popular?type=lives",
    gradient: "from-blue-600/20 to-blue-800/10",
  },
  {
    icon: Goal,
    title: "Motorsport",
    description: "Auto- & Motorradrennen, Rallye & mehr",
    href: "/popular?type=sports",
    gradient: "from-rouge-500/20 to-rouge-700/10",
  },
  {
    icon: Swords,
    title: "Kampfsport",
    description: "Kampfsportarten, Boxen & Wrestling",
    href: "/popular?type=sports",
    gradient: "from-rose-600/20 to-rose-800/10",
  },
  {
    icon: Volleyball,
    title: "Tennis",
    description: "Grand Slams, ATP & WTA live",
    href: "/popular?type=sports",
    gradient: "from-lime-500/20 to-lime-700/10",
  },
  {
    icon: Drama,
    title: "Basketball",
    description: "Meisterschaften & internationale Wettbewerbe",
    href: "/popular?type=sports",
    gradient: "from-amber-600/20 to-amber-800/10",
  },
  {
    icon: MicVocal,
    title: "Entertainment",
    description: "Talkshows, Reality-TV & Sendungen",
    href: "/popular?type=lives",
    gradient: "from-france-400/20 to-france-600/10",
  },
  {
    icon: Radio,
    title: "Premium TV",
    description: "Exklusive Sender & 4K-Erlebnis",
    href: "/popular?type=lives",
    gradient: "from-france-300/20 to-rouge-500/10",
  },
];

/* Duplicate arrays so the marquee loops seamlessly (2× = 50% offset) */
const MARQUEE_A = [...ROW_A, ...ROW_A];
const MARQUEE_B = [...ROW_B, ...ROW_B];

/* ------------------------------------------------------------------ */
/*  Category card — shared between both rows                           */
/* ------------------------------------------------------------------ */

function CategoryCard({ item, index }: { item: CategoryItem; index: number }) {
  const Icon = item.icon;
  const hue = index % 3;

  return (
    <a
      href={item.href}
      className={`group relative flex w-[220px] shrink-0 flex-col rounded-2xl border border-blanc-50/10 bg-blanc-50/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 sm:w-[250px] sm:p-6 ${hue === 0
          ? "hover:border-france-500/40 hover:shadow-[0_0_30px_-8px_rgba(236,201,75,0.25)]"
          : hue === 1
            ? "hover:border-rouge-500/40 hover:shadow-[0_0_30px_-8px_rgba(218,33,40,0.25)]"
            : "hover:border-blanc-300/30 hover:shadow-[0_0_30px_-8px_rgba(255,255,255,0.12)]"
        }`}
    >
      {/* Subtle gradient overlay on hover */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-linear-to-br ${item.gradient}`}
        aria-hidden="true"
      />

      {/* Icon */}
      <div
        className={`relative mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-blanc-50/10 bg-blanc-50/[0.06] transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg ${hue === 0
            ? "text-france-400 group-hover:shadow-france-500/20"
            : hue === 1
              ? "text-rouge-400 group-hover:shadow-rouge-500/20"
              : "text-blanc-100 group-hover:shadow-blanc-300/15"
          }`}
      >
        <Icon size={20} aria-hidden="true" />
      </div>

      {/* Title */}
      <h3 className="relative text-[15px] font-bold text-blanc-50 transition-colors duration-300 group-hover:text-france-100 sm:text-base">
        {item.title}
      </h3>

      {/* Description */}
      <p className="relative mt-1.5 text-[11px] leading-relaxed text-blanc-500 transition-colors duration-300 group-hover:text-blanc-400 sm:text-xs">
        {item.description}
      </p>

      {/* Bottom accent line */}
      <span
        className={`pointer-events-none absolute bottom-0 left-4 right-4 h-px scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${hue === 0
            ? "bg-france-500/50"
            : hue === 1
              ? "bg-rouge-500/50"
              : "bg-blanc-300/40"
          }`}
        aria-hidden="true"
      />
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

const Categories = () => {
  return (
    <section
      id="categories"
      className="relative overflow-hidden py-16 sm:py-24"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 600px" }}
    >
      {/* Background ambient glow */}
      <div
        className="pointer-events-none absolute left-1/3 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-france-500/5 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-1/4 top-2/3 h-[400px] w-[400px] rounded-full bg-rouge-500/5 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* --- Header --- */}
        <div className="mx-auto mb-12 max-w-7xl px-4 sm:mb-16 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-france-500/20 bg-france-500/15 px-3.5 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-france-100">
                <Tv size={14} aria-hidden="true" />
                Entdecken
              </span>
              <h2 className="mt-4 font-display text-3xl font-black leading-tight text-blanc-50 sm:text-5xl">
                Inhalte für <span className="text-gradient"> jeden Moment</span>
              </h2>
            </div>
            <p className="max-w-xl text-sm font-medium leading-6 text-blanc-400 sm:text-base">
              Sport, Filme, Serien, internationale Sender und exklusive
              Premium-Inhalte — alles in einem Abonnement.
            </p>
          </div>
        </div>

        {/* --- Marquee Row A (leftward) --- */}
        <div className="mask-fade-edges relative mb-6 sm:mb-8">
          <div className="categories-track-1 flex gap-4 pr-4 sm:gap-5">
            {MARQUEE_A.map((item, index) => (
              <CategoryCard key={`a-${item.title}-${index}`} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* --- Marquee Row B (rightward) --- */}
        <div className="mask-fade-edges relative">
          <div className="categories-track-2 flex gap-4 pr-4 sm:gap-5">
            {MARQUEE_B.map((item, index) => (
              <CategoryCard key={`b-${item.title}-${index}`} item={item} index={index + 10} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
