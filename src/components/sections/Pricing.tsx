"use client";
import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { PRICING_DATA } from "@/constants/pricing-data";
import { ConnectionSelector } from "./pricing/ConnectionSelector";
import { PlanCard } from "./pricing/PlanCard";
import { PricingHeading } from "./pricing/PricingHeading";
import { Bolt, Gem, Star } from "lucide-react";

const PurchaseModal = dynamic(
  () => import("./pricing/PurchaseModal").then((mod) => mod.PurchaseModal),
  { ssr: false },
);

interface Plan {
  name: string;
  duration: string;
  price?: string;
  devices?: number;
  isFree?: boolean;
}

interface PricingProps {
  pillText?: string;
  title?: React.ReactNode;
  subtitle?: string;
}

const Pricing = ({ pillText, title, subtitle }: PricingProps = {}) => {
  const [connections, setConnections] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  // Ref + Effect pattern to keep latest connections value without
  // writing to ref during render (React 19 compliance).
  const connectionsRef = useRef(connections);
  useEffect(() => {
    connectionsRef.current = connections;
  }, [connections]);

  const currentPrices = PRICING_DATA[connections as keyof typeof PRICING_DATA];

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const handleConnectionsChange = useCallback(
    (n: number) => setConnections(n),
    [],
  );

  const handleBuy = useCallback((plan: Plan) => {
    setSelectedPlan({
      ...plan,
      devices: connectionsRef.current,
    });
    setIsModalOpen(true);
  }, []);

  const monthlyPrices = useMemo(() => {
    const calc = (price: string, months: number) => {
      const num = parseFloat(price.replace(",", "."));
      return (num / months).toLocaleString("de-DE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    };
    return {
      halfYear: calc(currentPrices.halfYear, 6),
      yearly: calc(currentPrices.yearly, 12),
      biyearly: calc(currentPrices.biyearly, 24),
    };
  }, [currentPrices]);

  return (
    <section
      id="pakketten"
      className="py-24 relative overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 900px" }}
    >
      {/* Scroll anchor for the /#prijzen nav link — 1 px block at the section
          top so the IntersectionObserver detects the section entering viewport.
          scroll-mt-24 offsets browser-native hash navigation past the navbar. */}
      <span id="prijzen" className="block h-px scroll-mt-24" aria-hidden="true" />

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-france-400/5 to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <PricingHeading pillText={pillText} title={title} subtitle={subtitle} />

        <div className="scroll-mt-24 text-center mb-16">
          <ConnectionSelector
            active={connections}
            onChange={handleConnectionsChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Free Trial */}
          <PlanCard
            name="Kostenlose Testphase"
            duration="1 Stunde"
            isFree
            connections={1}
            features={[
              "Zugang zu Basissendern",
              "Kundenservice rund um die Uhr",
              "HD- & Full-HD-Qualität",
              "4K verfügbar",
              "Keine Kreditkarte erforderlich",
              "Sofortige Aktivierung",
              "Ohne Verpflichtung",
            ]}
            buttonText="1 Stunde kostenlos testen"
            onBuy={() =>
              handleBuy({
                name: "Kostenlose Testphase",
                duration: "1 Stunde",
                isFree: true,
              })
            }
          />

          {/* 6 Months */}
          <PlanCard
            name="6-Monats-Abo"
            duration="6 Monate"
            price={currentPrices.halfYear}
            connections={connections}
            badge={{
              icon: Bolt,
              text: "40% RABATT",
              className: "text-france-400",
            }}
            savingsLabel={`SPAREN - ${monthlyPrices.halfYear} €/Monat`}
            monthlyPriceLabel={`Nur ${monthlyPrices.halfYear} € pro Monat`}
            features={[
              "Filme & Serien auf Abruf",
              "Kundenservice rund um die Uhr",
              "4K, Full HD, HD & SD",
              "Umfangreiches Senderangebot",
              "Kostenlose Updates",
              "Zufrieden oder Geld zurück – 30 Tage",
            ]}
            buttonText="Bestellen"
            onBuy={() =>
              handleBuy({
                name: "ABO 6 MONATE",
                duration: "6 Monate",
                price: currentPrices.halfYear,
              })
            }
          />

          {/* 12 Months - POPULAR */}
          <PlanCard
            name="1-Jahres-Abo"
            duration="1 Jahr"
            price={currentPrices.yearly}
            isPopular
            connections={connections}
            badge={{
              icon: Star,
              text: "EMPFOHLEN | 50% RABATT",
              className: "text-france-300",
            }}
            savingsLabel={`BELIEBT - ${monthlyPrices.yearly} €/Monat`}
            monthlyPriceLabel={`Nur ${monthlyPrices.yearly} € pro Monat`}
            features={[
              "Filme & Serien auf Abruf",
              "Kundenservice rund um die Uhr",
              "4K, Full HD, HD & SD",
              "Umfangreiches Senderangebot",
              "Kostenlose Updates",
              "Zufrieden oder Geld zurück – 30 Tage",
            ]}
            buttonText="Bestellen"
            onBuy={() =>
              handleBuy({
                name: "ABO 1 JAHR",
                duration: "1 Jahr",
                price: currentPrices.yearly,
              })
            }
          />

          {/* 24 Months - BEST VALUE */}
          <PlanCard
            name="2-Jahres-Abo"
            duration="2 Jahre"
            price={currentPrices.biyearly}
            isBestValue
            connections={connections}
            badge={{
              icon: Gem,
              text: "BESTER PREIS | 60% RABATT",
              className: "text-rouge-500",
            }}
            savingsLabel={`2 JAHRE ERSPARNIS - ${monthlyPrices.biyearly} €/Monat`}
            monthlyPriceLabel={`Nur ${monthlyPrices.biyearly} € pro Monat`}
            features={[
              "Filme & Serien auf Abruf",
              "VIP-Kundenservice rund um die Uhr",
              "4K, Full HD, HD & SD",
              "Umfangreiches Senderangebot",
              "Priorisierte Updates",
              "Zufrieden oder Geld zurück – 30 Tage",
            ]}
            buttonText="Bestellen"
            onBuy={() =>
              handleBuy({
                name: "ABO 2 JAHRE",
                duration: "2 Jahre",
                price: currentPrices.biyearly,
              })
            }
          />
        </div>
      </div>

      <PurchaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        plan={selectedPlan}
      />
    </section>
  );
};

export default Pricing;
