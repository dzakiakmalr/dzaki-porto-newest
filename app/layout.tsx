import type { Metadata } from "next";
import "./globals.css";
import { fontVariables } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Dzaki Alqadrie — Frontend AI Engineer",
  description:
    "Frontend AI Engineer who ships AI-native products from idea to live. Currently interning at FlyRank AI, building Langganin.",
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