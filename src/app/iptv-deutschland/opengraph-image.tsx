import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "IPTV Deutschland — alle Sender, Sport & 4K — IPTV Germany";

export default function Image() {
  return renderOgImage({
    eyebrow: "IPTV Deutschland",
    title: "IPTV Deutschland",
    subtitle: "Alle deutschen & internationalen Sender, Fußball und Sport in 4K.",
  });
}
