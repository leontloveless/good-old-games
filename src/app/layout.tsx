import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import GoogleAdSenseScript from "@/components/GoogleAdSenseScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Good Old Games",
    default: "Good Old Games - Play Free HTML5 Games Online",
  },
  description:
    "Play thousands of free HTML5 games online at Good Old Games. No login required, just click and play your favorite retro and classic games instantly!",
  metadataBase: new URL("https://good-old-games.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

  return (
    <html lang="en">
      <head>
        <GoogleAdSenseScript />
      </head>
      <body className={`${inter.className} bg-gray-100 font-sans`}>
        {gaId && <GoogleAnalytics gaId={gaId} />}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
