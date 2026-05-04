import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.agent-bnb.com"),
  title: {
    default: "AgentBNB - AI hospitality operations for short-stay properties",
    template: "%s | AgentBNB",
  },
  description:
    "AgentBNB is a white-label hospitality operations stack for short-stay property owners and managers, with an AI agent, direct booking site, owner dashboard, property system of record, and approval loop.",
  applicationName: "AgentBNB",
  authors: [{ name: "Joe Josue", url: "https://joejosue.com" }],
  creator: "Joe Josue",
  keywords: [
    "AgentBNB",
    "Agent BNB",
    "AI hospitality agent",
    "Airbnb operations software",
    "short stay property automation",
    "vacation rental operations software",
    "property manager operations system",
    "direct booking website",
    "open source hospitality stack",
    "property management AI agent",
    "Gideon hospitality agent",
    "Balay Pansol",
    "Gideon AI agent",
  ],
  openGraph: {
    title: "AgentBNB - AI hospitality operations for short-stay properties",
    description:
      "A white-label operations stack for short-stay properties with an AI agent, direct booking site, owner dashboard, source of record, and approval-gated workflows.",
    url: "https://www.agent-bnb.com",
    siteName: "AgentBNB",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "AgentBNB AI hospitality operations stack",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgentBNB - AI hospitality operations for short-stay properties",
    description:
      "White-label stack for AI-assisted short-stay property operations, built from the Balay Pansol and Gideon workflow.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/brand/agentbnb-icon.png",
    apple: "/brand/agentbnb-icon.png",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
