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
  metadataBase: new URL("https://agent-bnb.com"),
  title: {
    default: "AgentBNB - property-aware AI operations for short-stay rentals",
    template: "%s | AgentBNB",
  },
  description:
    "AgentBNB gives vacation rental owners and property managers a property-aware operating system for inquiries, approvals, staff handoffs, direct booking, pricing context, and AI-assisted decisions.",
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
    "owner approval workflow",
    "staff handoff workflow",
    "direct booking website",
    "open source hospitality stack",
    "property management AI agent",
    "Gideon hospitality agent",
    "Balay Pansol",
    "Gideon AI agent",
  ],
  openGraph: {
    title: "AgentBNB - property-aware AI operations for short-stay rentals",
    description:
      "A property-aware operations system for short-stay rentals: inquiries, owner approvals, staff handoffs, direct booking, pricing context, and AI-assisted decisions.",
    url: "https://agent-bnb.com",
    siteName: "AgentBNB",
    images: [
      {
        url: "/screenshots/agent-recommendation.jpg",
        width: 960,
        height: 600,
        alt: "AgentBNB agent recommendation workflow",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgentBNB - property-aware AI operations for short-stay rentals",
    description:
      "Property-aware AI operations for rental owners and managers, born from the Balay Pansol and Gideon workflow.",
    images: ["/screenshots/agent-recommendation.jpg"],
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
