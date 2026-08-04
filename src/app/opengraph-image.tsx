import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "IPTV Germany — Premium IPTV-Abonnement in Deutschland";

export default function Image() {
  return renderOgImage({
    eyebrow: "Premium IPTV \u00b7 Deutschland",
    title: "IPTV-Abonnement Deutschland — 31.000+ Sender in 4K",
    subtitle: "Tausende Sender & Filme in 4K/8K. Sofortige Aktivierung.",
  });
}
