import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const publicDomain = process.env.NEXT_PUBLIC_DOMAIN;
if (!publicDomain) {
  throw new Error("NEXT_PUBLIC_DOMAIN is not set");
}

export const metadata: Metadata = {
  title: "Check if player is legit",
  keywords: [
    "steam",
    "player",
    "legit",
    "check",
    "verify cs2 player",
    "faceit",
    "cs2",
    "csgo",
    "counter strike",
    "counter strike global offensive",
    "counter strike 2",
    "scope.gg",
    "leetify",
    "csstats",
    "steamiduk",
    "allstars",
    "faceitstats",
    "faceit level checker",
    "steamid",
    "steamcommunity",
  ],
  description:
    "Find out if a player is legit or not, using faceit API and more other services.",
  metadataBase: new URL(publicDomain),
  openGraph: {
    type: "website",
    url: publicDomain,
    title: "Check if player is legit",
    description:
      "Find out if a player is legit or not, using faceit API and more other services.",
    images: [
      {
        url: `${publicDomain}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Og image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: publicDomain,
    creator: "cs addicted",
    images: [
      {
        url: `${publicDomain}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Og image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
