import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Theme } from "@radix-ui/themes";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Deepak Sharma | Full Stack Developer Portfolio",
  keywords: [
    "Deepak Sharma",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "NestJS Developer",
    "Flutter Developer",
    "InsurTech engineer",
    "Logistics SaaS developer",
    "Software Developer India",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://linkedin.com/in/dsdsharma"),
  other: {
    linkedin: "https://linkedin.com/in/dsdsharma",
  },
  openGraph: {
    title: "Deepak Sharma | Full Stack Developer Portfolio",
    description:
      "Full Stack Developer skilled in React, Next.js, NestJS & Flutter. Built SaaS platforms for InsurTech & Logistics.",
    url: "https://deepak-sharma-dev.vercel.app",
    siteName: "Deepak Sharma Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  description:
    "Hi, I'm Deepak — a Full Stack Developer experienced in React, Next.js, Flutter, and NestJS. I build fast, functional digital products and end-to-end SaaS platforms for InsurTech and logistics companies. I focus on clean UI, scalable backend architecture, and real business impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
