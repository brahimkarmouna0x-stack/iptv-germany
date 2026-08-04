import { ImageResponse } from "next/og";

/**
 * Shared 1200×630 Open Graph image generator. Used by the per-route
 * `opengraph-image.tsx` files so every key page ships a unique, on-brand
 * social card (German-flag palette, high-contrast title for CTR).
 */
export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = "image/png" as const;

const BADGES = ["31.000+ Sender", "Filme & Serien auf Abruf", "4K / 8K", "Kostenlose Testphase"];

export function renderOgImage({
  title,
  subtitle,
  eyebrow = "Premium IPTV · Deutschland",
}: {
  title: string;
  subtitle: string;
  eyebrow?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          padding: "72px",
          position: "relative",
        }}
      >
        {/* German-flag accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "12px",
            display: "flex",
          }}
        >
          <div style={{ flex: 1, background: "#000000" }} />
          <div style={{ flex: 1, background: "#DD0000" }} />
          <div style={{ flex: 1, background: "#FFCE00" }} />
        </div>

        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "16px",
              background: "#DD0000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "30px",
              fontWeight: 800,
            }}
          >
            ▶
          </div>
          <div style={{ color: "#fff", fontSize: "34px", fontWeight: 800 }}>
            IPTV Germany
          </div>
        </div>

        {/* Headline block */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#FFCE00",
              fontSize: "26px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "3px",
              marginBottom: "18px",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              color: "#fff",
              fontSize: "70px",
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: "1000px",
            }}
          >
            {title}
          </div>
          <div
            style={{
              color: "#C7CDD6",
              fontSize: "30px",
              fontWeight: 500,
              marginTop: "24px",
              maxWidth: "980px",
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Trust badges */}
        <div style={{ display: "flex", gap: "14px" }}>
          {BADGES.map((badge) => (
            <div
              key={badge}
              style={{
                display: "flex",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: "999px",
                padding: "12px 22px",
                color: "#fff",
                fontSize: "23px",
                fontWeight: 600,
              }}
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
