import type { Metadata } from "next";

type Props = {
  params: Promise<{ steamid: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { steamid } = await params;
  return {
    title: `Player: ${steamid}`,
    description: `Detailed legitimacy check for player ${steamid} using Faceit API and other services related to cs2.`,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
