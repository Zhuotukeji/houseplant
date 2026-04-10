import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Houseplant Care Guide - Plant Problem Finder",
    template: "%s | Houseplant Care Guide",
  },
  description:
    "Your go-to resource for houseplant care guides, plant problem diagnosis, and indoor gardening tips. Learn how to care for your plants and troubleshoot common issues.",
  keywords: [
    "houseplant care",
    "plant care guide",
    "indoor plants",
    "plant problems",
    "yellow leaves",
    "plant watering",
    "houseplant tips",
  ],
  metadataBase: new URL("https://houseplantcare.guide"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Houseplant Care Guide",
    title: "Houseplant Care Guide - Plant Problem Finder",
    description:
      "Practical care guides, problem diagnosis, and expert tips to help your indoor plants thrive.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://houseplantcare.guide",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
