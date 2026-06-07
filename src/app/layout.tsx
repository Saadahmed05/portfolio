import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saad Ahmed | AI/ML Engineer & Builder",
  description:
    "Saad Khazi Ahmed — AI/ML Engineering student at VJIT, Hyderabad. Building real products with LLMs, NLP, and backend systems. Open to internships at AI startups and product-based companies.",
  keywords: [
    "Saad Ahmed",
    "AI engineer",
    "ML intern",
    "LLM developer",
    "NLP engineer",
    "Python developer",
    "VJIT Hyderabad",
    "portfolio",
    "AI startup",
  ],
  authors: [{ name: "Saad Khazi Ahmed" }],
  creator: "Saad Khazi Ahmed",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://saadahmed.dev",
    title: "Saad Ahmed | AI/ML Engineer & Builder",
    description:
      "AI/ML Engineer building LLM-powered products. Currently interning at VISWAM.AI. Open to AI startup & PM roles.",
    siteName: "Saad Ahmed Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saad Ahmed | AI/ML Engineer",
    description:
      "Building real AI products — LLMs, automation, NLP. CS (AI&ML) @ VJIT.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${playfair.variable} ${jetbrains.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
