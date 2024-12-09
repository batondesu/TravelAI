import type {Metadata} from "next";
import Header from "@/components/home/Header";
export const metadata: Metadata = {
  metadataBase: new URL("https://www.travelai.online"),
  title: {
    default: "Travel  AI - Your Smart Travel ",
    template: "%s | Travel  AI - Your Smart Travel ",
  },
  description:
    "Travel  AI provides intelligent travel suggestions, personalized itineraries, and seamless trip planning. Plan your perfect trip with ease.",
  keywords:
    "travel , AI travel , smart travel, travel suggestions, destination insights, personalized itineraries, trip planning, travel tips, vacation planning",
  openGraph: {
    title: "Travel  AI - Your Smart Travel ",
    description:
      "Travel  AI provides intelligent travel suggestions, personalized itineraries, and seamless trip planning. Plan your perfect trip with ease.",
    url: "https://www.travelai.online",
    type: "website",
    siteName: "TravelAI",
    images: [
      {
        url: "opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Travel  AI",
      },
    ],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Header />
      <main className="flex min-h-[calc(100svh-4rem)] flex-col items-center bg-blue-50/40">
        {children}
      </main>
    </>
  );
}
