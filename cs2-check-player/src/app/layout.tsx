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

export const metadata: Metadata = {
  title: "Check is player is legit",
  description:
    "Find out if a player is legit or not, using faceit API and more",
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
        <main className="min-h-screen bg-gradient-to-tr from-background via-background to-muted/100 flex flex-col items-center p-4">
          <div className="w-full max-w-lg space-y-6 mt-40 text-center">{children}</div>
        </main>
      </body>
    </html>
  );
}
