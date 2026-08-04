import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Ihr zuverlässiger IPTV-Anbieter in Deutschland — IPTV Germany";

export default function Image() {
  return renderOgImage({
    eyebrow: "IPTV-Anbieter",
    title: "Ihr zuverlässiger IPTV-Anbieter",
    subtitle: "99,9% Uptime, 4K-Qualität und deutschsprachiger Support 24/7.",
  });
}
