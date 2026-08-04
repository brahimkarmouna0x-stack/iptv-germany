import {
  Download,
  List,
  Play,
  Settings,
  Smartphone,
} from "lucide-react";

const smartersFeatures = [
  {
    title: "Unterstützung für M3U-Playlists",
    desc: "IPTV Smarters Pro lädt jeden M3U-Link direkt. Fügen Sie die URL Ihrer Playlist ein, und alle Sender erscheinen sofort, sortiert in der App.",
  },
  {
    title: "Xtream Codes API",
    desc: "Melden Sie sich mit Ihrem Benutzernamen, Passwort und der Serveradresse von IPTV Germany an. Die App ruft automatisch Ihre Sender, VOD und EPG ab.",
  },
  {
    title: "Live-TV, VOD und Serien",
    desc: "Eine App für alles: Live-Sender, Filme auf Abruf und Serien in getrennten Tabs. Wechseln Sie mühelos zwischen den Inhalten.",
  },
  {
    title: "Elektronischer Programmführer (EPG)",
    desc: "IPTV Smarters Pro zeigt den vollständigen EPG-Guide. Sehen Sie, was jetzt und demnächst auf jedem Sender läuft.",
  },
  {
    title: "Multi-Screen & Kindersicherung",
    desc: "Erstellen Sie mehrere Profile für jedes Familienmitglied, mit eigenen Favoriten und Kindersicherung pro Profil.",
  },
  {
    title: "4K & HDR-Streaming",
    desc: "Die App unterstützt vollständig 4K-UHD- und HDR-Inhalte. Verbinden Sie Ihr IPTV-Germany-Konto für maximale Bildqualität.",
  },
];

export function IptvSmartersAbout() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 680px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-france-400 text-sm font-bold mb-4 uppercase tracking-wider glow-gold">
            Die App erklärt
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-blanc-50">
            Was ist{" "}
            <span className="text-gradient">IPTV Smarters Pro</span>?
          </h2>
          <p className="text-blanc-400 max-w-2xl mx-auto font-medium">
            IPTV Smarters Pro ist eine der beliebtesten IPTV-Apps weltweit.
            Sie funktioniert perfekt mit Ihrem IPTV-Germany-Abonnement auf Android, iOS, Fire TV Stick und mehr.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {smartersFeatures.map((item, idx) => (
            <div
              key={idx}
              className="animate-slide-up glass rounded-2xl p-6 border border-blanc-50/5 hover:border-france-400/20 transition-all duration-300 group"
              style={{ animationDelay: `${0.07 * idx}s` }}
            >
              <h3 className="font-display font-bold text-base mb-2 text-blanc-50">
                {item.title}
              </h3>
              <p className="text-blanc-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const installSteps = [
  {
    step: "01",
    icon: Download,
    title: "IPTV Smarters Pro herunterladen",
    desc: 'Suchen Sie im Google Play Store, im Apple App Store oder im Amazon Appstore nach „IPTV Smarters Pro". Laden Sie die kostenlose App herunter und installieren Sie sie auf Ihrem Gerät.',
    color: "text-france-400",
    gradient: "from-france-600/30 to-france-400/15",
    border: "border-france-500/25",
  },
  {
    step: "02",
    icon: Settings,
    title: "Wählen Sie Ihre Verbindungsmethode",
    desc: 'Öffnen Sie die App und wählen Sie „Login with Xtream Codes API" für die einfachste Konfiguration, oder „Add URL/M3U", wenn Sie einen Playlist-Link von IPTV Germany erhalten haben.',
    color: "text-rouge-400",
    gradient: "from-rouge-600/30 to-rouge-500/15",
    border: "border-rouge-500/25",
  },
  {
    step: "03",
    icon: List,
    title: "Geben Sie Ihre IPTV-Germany-Zugangsdaten ein",
    desc: "Geben Sie Ihren Benutzernamen, Ihr Passwort und die Server-URL ein, die Sie nach dem Kauf per E-Mail erhalten haben. Drücken Sie auf Hinzufügen — die App lädt Ihre Sender automatisch.",
    color: "text-france-400",
    gradient: "from-france-600/30 to-france-400/15",
    border: "border-france-500/25",
  },
  {
    step: "04",
    icon: Smartphone,
    title: "Stellen Sie Ihre Präferenzen ein",
    desc: "Fügen Sie Ihre Lieblingssender hinzu, konfigurieren Sie die EPG für den Programmführer und aktivieren Sie bei Bedarf die Kindersicherung. Die Oberfläche ist auf Englisch, aber intuitiv.",
    color: "text-rouge-400",
    gradient: "from-rouge-600/30 to-rouge-500/15",
    border: "border-rouge-500/25",
  },
  {
    step: "05",
    icon: Play,
    title: "Mit dem Streamen beginnen",
    desc: "Wählen Sie Live-TV, VOD oder Serien und suchen Sie einen Sender oder Film aus. IPTV Smarters Pro verbindet sich sofort mit den Servern von IPTV Germany für einen stabilen 4K-Stream.",
    color: "text-france-400",
    gradient: "from-france-600/30 to-france-400/15",
    border: "border-france-500/25",
  },
];

export function IptvSmartersInstall() {
  return (
    <section
      className="py-24 relative overflow-hidden bg-black/25"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 680px" }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blanc-50/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-blanc-50/10 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-rouge-400 text-sm font-bold mb-4 uppercase tracking-wider glow-red">
            Schritt für Schritt
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-blanc-50">
            Installieren Sie <span className="text-gradient">IPTV Smarters Pro</span> mit
            IPTV Germany
          </h2>
          <p className="text-blanc-400 max-w-2xl mx-auto font-medium">
            Vom Download zum Live-TV in weniger als 5 Minuten — folgen Sie diesen
            einfachen Schritten für IPTV Smarters Pro.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div
            aria-hidden="true"
            className="hidden lg:block absolute left-10 top-10 bottom-10 w-px bg-linear-to-b from-france-500/30 via-rouge-500/20 to-transparent"
          />

          <div className="space-y-6">
            {installSteps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="animate-slide-up glass rounded-3xl p-6 lg:p-7 border border-blanc-50/5 hover:border-france-400/20 transition-all duration-300 flex gap-5 lg:gap-7 items-start group"
                  style={{ animationDelay: `${0.1 * idx}s` }}
                >
                  <div className="relative shrink-0">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-linear-to-br ${item.gradient} flex items-center justify-center border ${item.border} group-hover:scale-105 transition-transform duration-300`}
                    >
                      <Icon
                        size={24}
                        className={item.color}
                        aria-hidden="true"
                      />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-france-500 text-blanc-50 text-[10px] font-black flex items-center justify-center shadow-md">
                      {idx + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-2 text-blanc-50">
                      {item.title}
                    </h3>
                    <p className="text-blanc-400 text-sm leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
