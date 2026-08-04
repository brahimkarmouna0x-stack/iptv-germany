import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "IPTV kaufen in Deutschland — IPTV Germany";

export default function Image() {
  return renderOgImage({
    eyebrow: "IPTV kaufen",
    title: "IPTV kaufen in Deutschland",
    subtitle: "Sichere Bestellung, sofortige Aktivierung und Streaming in 5 Minuten.",
  });
}
