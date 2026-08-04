import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "IPTV Smarters Pro konfigurieren — IPTV Germany";

export default function Image() {
  return renderOgImage({
    eyebrow: "IPTV Smarters Pro",
    title: "IPTV Smarters Pro konfigurieren",
    subtitle: "Verbindung \u00fcber M3U oder Xtream Codes \u2014 Schritt f\u00fcr Schritt.",
  });
}
