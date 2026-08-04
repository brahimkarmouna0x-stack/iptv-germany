export interface Trending {
  title: string;
  quality: string;
  genre: string;
  rating: string | number;
  image: string;
  type: "movies" | "series" | "lives" | "sports";
  popularity?: number;
  date?: Date | number;
  id?: number | string;
  overview?: string;
  backdrop?: string;
}

/**
 * Static fallback catalogue for the /popular page (used only if the live TMDB
 * fetch fails) and the home "Films & series" section.
 *
 * NOTE: These entries are deliberately GENERIC content categories — no
 * specific copyrighted film/series titles, no self-hosted poster artwork, and
 * no third-party broadcaster/channel logos. The previous version referenced
 * copyrighted posters (Blade Runner 2049, Peaky Blinders, Better Call Saul,
 * Arcane, …) and broadcaster logos (beIN Sports, BBC, HBO Max, Disney+, …) that
 * were removed for copyright/trademark compliance. Do not reintroduce specific
 * titles or brand logos here without documented licensing.
 */
export const trendingNow: Trending[] = [
  { title: "Action & Abenteuer", quality: "4K", genre: "Filme", rating: "4K", type: "movies", image: "" },
  { title: "Preisgekrönte Dramen", quality: "4K", genre: "Filme", rating: "4K", type: "movies", image: "" },
  { title: "Komödien", quality: "HD", genre: "Filme", rating: "HD", type: "movies", image: "" },
  { title: "Science-Fiction & Fantasy", quality: "4K", genre: "Serien", rating: "4K", type: "series", image: "" },
  { title: "Krimiserien", quality: "4K", genre: "Serien", rating: "4K", type: "series", image: "" },
  { title: "Serien zum Bingewatchen", quality: "HD", genre: "Serien", rating: "HD", type: "series", image: "" },
  { title: "Live-Sport", quality: "LIVE", genre: "Sport", rating: "Live", type: "lives", image: "" },
  { title: "24-Stunden-Nachrichten", quality: "HD", genre: "Nachrichten", rating: "Live", type: "lives", image: "" },
  { title: "Kindersender", quality: "HD", genre: "Familie", rating: "Live", type: "lives", image: "" },
  { title: "Musiksender", quality: "HD", genre: "Musik", rating: "Live", type: "lives", image: "" },
  { title: "Dokumentationen", quality: "4K", genre: "Entdeckung", rating: "Live", type: "lives", image: "" },
  { title: "Internationale Sender", quality: "HD", genre: "Internationaal", rating: "Live", type: "lives", image: "" },
];
