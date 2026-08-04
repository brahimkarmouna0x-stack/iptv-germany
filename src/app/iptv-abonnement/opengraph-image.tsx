import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Das beste IPTV-Abonnement Deutschlands — IPTV Germany";

export default function Image() {
  return renderOgImage({
    eyebrow: "IPTV-Abonnement",
    title: "Das beste IPTV-Abonnement",
    subtitle: "Flexible Laufzeiten, Tausende Sender und 4K/8K-Qualität.",
  });
}
