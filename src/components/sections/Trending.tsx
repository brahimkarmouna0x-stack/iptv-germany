import { type ReactNode } from "react";
import {
  PlayCircle,
  Radio,
  Sparkles,
  Popcorn,
  Clapperboard,
  Film,
  Ghost,
  Baby,
  Trophy,
  Newspaper,
  Music,
  Globe2,
  type LucideIcon,
} from "lucide-react";
import { SafeImage } from "@/components/shared/SafeImage";

type GenreCard = { title: string; tag: string; icon: LucideIcon; image?: string };

const CATALOG: GenreCard[] = [
  { title: "Neueste Filme", tag: "Filme 4K", icon: Popcorn, image: "/images/movies/4.webp" },
  { title: "Beliebte Serien", tag: "Ganze Staffeln", icon: Clapperboard, image: "/images/movies/6.webp" },
  { title: "Action & Abenteuer", tag: "Filme", icon: Film, image: "/images/movies/9.webp" },
  { title: "Science-Fiction", tag: "Serien", icon: Ghost, image: "/images/movies/10.webp" },
  { title: "Große Klassiker", tag: "Filmbibliothek", icon: Sparkles, image: "/images/movies/11.webp" },
  { title: "Kindersender", tag: "Familie", icon: Baby, image: "/images/movies/14.webp" },
];

const CHANNELS: GenreCard[] = [
  { title: "Live-Sport", tag: "Live HD", icon: Trophy },
  { title: "24/7-Nachrichten", tag: "Live", icon: Newspaper },
  { title: "Musiksender", tag: "Live", icon: Music },
  { title: "Dokumentationen", tag: "Entdeckung", icon: PlayCircle },
  { title: "Internationale Sender", tag: "190+ Länder", icon: Globe2 },
  { title: "Premium-4K-Sender", tag: "Ultra HD", icon: Radio },
];

const PosterCard = ({ item }: { item: GenreCard }) => {
  const Icon = item.icon;
  return (
    <article
      data-slider-card
      className="group relative flex w-[168px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-2xl border border-blanc-50/10 bg-france-900 p-5 shadow-[0_22px_60px_-42px_rgba(59,130,246,0.6)] transition-[border-color,transform] duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-france-300/40 sm:w-[210px] lg:w-[230px] aspect-[2/3]"
    >
      {item.image ? (
        <SafeImage
          src={item.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 230px, (min-width: 640px) 210px, 168px"
          className="absolute inset-0 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : null}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-france-500/15 via-transparent to-france-950" />
      <span className="absolute left-3 top-3 rounded-full border border-france-300/30 bg-france-500/15 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-france-100">
        {item.tag}
      </span>
      <span className="relative mx-auto grid h-20 w-20 place-items-center rounded-2xl border border-france-300/20 bg-france-500/15 text-france-300 transition-transform duration-300 group-hover:scale-110">
        <Icon size={36} aria-hidden="true" />
      </span>
      <h3 className="relative text-lg font-black leading-[1.1] text-blanc-50">
        {item.title}
      </h3>
    </article>
  );
};

const ChannelCategoryCard = ({ item }: { item: GenreCard }) => {
  const Icon = item.icon;
  return (
    <article
      data-slider-card
      className="group relative flex w-[178px] shrink-0 snap-start flex-col items-center gap-4 overflow-hidden rounded-2xl border border-blanc-50/10 bg-france-900/95 p-4 shadow-[0_20px_55px_-42px_rgba(59,130,246,0.55)] transition-[border-color,transform] duration-300 hover:-translate-y-1.5 hover:border-france-300/35 sm:w-[198px]"
    >
      <div className="absolute inset-x-4 top-0 h-px bg-linear-to-r from-transparent via-france-100/30 to-transparent" />
      <span className="grid h-20 w-20 place-items-center rounded-2xl border border-blanc-50/10 bg-blanc-50/[0.06] text-rouge-200">
        <Icon size={30} aria-hidden="true" />
      </span>
      <h3 className="min-h-[40px] text-center text-sm font-black leading-5 text-blanc-50 sm:text-base">
        {item.title}
      </h3>
      <span className="text-[10px] font-black uppercase tracking-[0.14em] text-france-100/65">
        {item.tag}
      </span>
    </article>
  );
};

const TrendingSection = () => {
  const originalItems = CATALOG;
  const channelItems = CHANNELS;

  return (
    <section
      id="movies"
      className="relative overflow-hidden py-20 sm:py-24"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 700px" }}
    >
      <div className="absolute inset-x-0 top-0 h-72 bg-linear-to-b from-france-500/10 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-france-500/20 bg-france-500/15 px-3.5 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-france-100">
              <Sparkles size={14} aria-hidden="true" />
              VOD-Bibliothek
            </span>
            <h2 className="mt-4 font-display text-4xl font-black leading-tight text-blanc-50 sm:text-5xl">
              Beliebte Filme &amp; Serien
            </h2>
          </div>
          <p className="max-w-xl text-sm font-medium leading-6 text-blanc-400 sm:text-base">
            Entdecken Sie tausende Filme und Serien auf Abruf, kategorisiert
            nach Genre, sowie die neuesten Veröffentlichungen — alles in HD
            und 4K.
          </p>
        </div>

        <div className="space-y-14">
          <div>
            <div className="mb-5 flex items-center justify-between gap-4">
              <h3 className="flex items-center gap-3 text-xl font-black text-blanc-50">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-france-300/20 bg-france-500/15 text-france-300">
                  <PlayCircle size={21} aria-hidden="true" />
                </span>
                Meistgesehene Genres
              </h3>
            </div>

            <SliderFrame>
              <div className="overflow-hidden pb-7 pt-2" aria-label="Film- und Serienkategorien">
                <div className="poster-slider-track flex w-max">
                  <div className="flex gap-4 pr-4 sm:gap-5 sm:pr-5">
                    {originalItems.map((item, index) => (
                      <PosterCard key={`${item.title}-${index}`} item={item} />
                    ))}
                  </div>
                  <div className="flex gap-4 pr-4 sm:gap-5 sm:pr-5" aria-hidden="true">
                    {originalItems.map((item, index) => (
                      <PosterCard key={`${item.title}-loop-${index}`} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            </SliderFrame>
          </div>

          <div>
            <div className="mb-5 flex items-center justify-between gap-4">
              <span className="text-xs font-black uppercase tracking-[0.16em] text-france-100/65">
                Premium-Sender
              </span>
              <h3 className="flex items-center gap-3 text-xl font-black text-blanc-50">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-rouge-300/15 bg-rouge-400/10 text-rouge-200">
                  <Radio size={21} aria-hidden="true" />
                </span>
                Live TV
              </h3>
            </div>

            <SliderFrame compact>
              <div className="overflow-hidden pb-7 pt-2" aria-label="Live-Senderkategorien">
                <div className="channel-slider-track flex w-max">
                  <div className="flex gap-4 pr-4">
                    {channelItems.map((item, index) => (
                      <ChannelCategoryCard key={`${item.title}-${index}`} item={item} />
                    ))}
                  </div>
                  <div className="flex gap-4 pr-4" aria-hidden="true">
                    {channelItems.map((item, index) => (
                      <ChannelCategoryCard key={`${item.title}-loop-${index}`} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            </SliderFrame>
          </div>
        </div>
      </div>
    </section>
  );
};

const SliderFrame = ({
  children,
  compact = false,
}: {
  children: ReactNode;
  compact?: boolean;
}) => (
  <div className="relative -mx-4 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 mask-fade-edges">
    <div
      className={`absolute inset-x-4 top-3 -z-10 rounded-full bg-france-700/10 blur-3xl sm:inset-x-10 ${
        compact ? "h-32" : "h-52"
      }`}
    />
    {children}
  </div>
);

export default TrendingSection;
