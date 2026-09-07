import type { Metadata } from "next";
import "./globals.css";
import { fontVariables } from "@/lib/fonts";

const SITE_URL = "https://dzakialqadrie.my.id";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Dzaki Alqadrie — Frontend AI Engineer",
  description:
    "Frontend AI Engineer who ships AI-native products from idea to live. Currently interning at FlyRank AI, building Langganin.",
  openGraph: {
    title: "Dzaki Alqadrie — Frontend AI Engineer",
    description:
      "I build products that get used — not just demos. See Langganin, my open source app, live.",
    url: SITE_URL,
    siteName: "Dzaki Alqadrie",
    type: "website",
    images: [
      {
        url: "/images/langganin-dashboard.png",
        width: 1900,
        height: 1518,
        alt: "Langganin dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dzaki Alqadrie — Frontend AI Engineer",
    description:
      "I build products that get used — not just demos. See Langganin, my open source app, live.",
    images: ["/images/langganin-dashboard.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fontVariables} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="bg-blob-a" aria-hidden />
        <div className="bg-blob-b" aria-hidden />
        <div className="relative z-10 flex min-h-full flex-1 flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
