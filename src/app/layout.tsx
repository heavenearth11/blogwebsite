import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { meta } from "@/data/review-content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blogwebsite-lovat.vercel.app"),
  title: "영은이의 건강일기",
  description: meta.title,
  openGraph: {
    title: "영은이의 건강일기",
    description: meta.title,
    images: ["/images/review/review-01.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "영은이의 건강일기",
    description: meta.title,
    images: ["/images/review/review-01.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
