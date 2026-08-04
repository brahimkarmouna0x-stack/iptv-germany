export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
  border: string;
  time: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Jonas Hoffmann",
    role: "Premium-Nutzer",
    content: "Wirklich großartig! Anfangs war ich skeptisch gegenüber IPTV, aber es funktioniert einwandfrei. Keine Unterbrechungen beim Live-Fußball, das war für mich das Wichtigste. Die Installation auf meinem Apple TV hat 5 Minuten gedauert.",
    time: "vor 2 Tagen",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
    border: "border-france-400/30",
  },
  {
    name: "Laura Schneider",
    role: "Verifizierter Kunde",
    content: "Endlich ein Anbieter, der alle Sender ohne das geringste Problem bereitstellt. Die Qualität der Filme ist wirklich unglaublich. Die Suchfunktion ist auf meinem alten Samsung TV manchmal etwas langsam, aber sonst gibt es nichts zu bemängeln.",
    time: "vor 1 Woche",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 4.5,
    border: "border-rouge-500/30",
  },
  {
    name: "Thomas Becker",
    role: "Sportfan",
    content: "Ausgezeichneter Service. Ich hatte eine Frage zur Zahlung und bekam fast sofort eine Antwort über WhatsApp. Ich nutze es jetzt seit einem Monat und bin restlos überzeugt. Mein altes TV-Abo habe ich inzwischen gekündigt.",
    time: "vor 3 Wochen",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    rating: 5,
    border: "border-france-400/30",
  },
  {
    name: "Sophie Wagner",
    role: "Verifizierter Kunde",
    content: "Mein Mann schaut Fußball und ich meine Serien — ideal, um gleichzeitig auf zwei Bildschirmen fernzusehen. Die Installation erforderte für eine Anfängerin wie mich etwas Nachdenken, aber die Anleitung hat mir sehr geholfen.",
    time: "vor 1 Monat",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 4.5,
    border: "border-france-400/30",
  },
  {
    name: "Maximilian Krüger",
    role: "Premium-Abonnent",
    content: "Die beste Qualität, die ich bisher gesehen habe. Ich habe viele andere Anbieter ausprobiert, aber das hier ist der erste, der wirklich durchgehend 4K ohne Unterbrechungen liefert. Empfehlenswert für alle Sportfans.",
    time: "vor 2 Monaten",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 5,
    border: "border-rouge-500/30",
  },
  {
    name: "Lea Fischer",
    role: "Verifizierter Kunde",
    content: "Was für eine Freude, jetzt, wo ich im Ausland lebe, wieder alle Sender zu finden. Es funktioniert einwandfrei auf iPad und PC. Großartig!",
    time: "vor 3 Monaten",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    rating: 5,
    border: "border-rouge-500/35",
  },
  {
    name: "Niklas Berger",
    role: "Verifizierter Kunde",
    content: "Der Kundenservice ist wirklich Gold wert. Man hat mir spätabends bei der Installation auf meiner Formuler-Box geholfen. Das Umschalten der Sender geht super schnell, fast wie normales Kabelfernsehen.",
    time: "vor 4 Monaten",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80",
    rating: 5,
    border: "border-france-400/30",
  },
];
