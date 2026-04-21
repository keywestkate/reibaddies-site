import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "REI Baddies — Real Stories. Real Deals. Real Community.",
  description: "The #1 show for creative real estate investors. Hosted by Rachel Davis & Kate Baldwin. SubTo, seller finance, novations, co-living and more.",
  openGraph: {
    title: "REI Baddies",
    description: "Real stories. Real deals. Real community.",
    url: "https://reibaddiesshow.com",
    siteName: "REI Baddies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
