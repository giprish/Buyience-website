import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { CurrencyProvider } from "@/components/CurrencyProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "B2B Commerce Platform with AI Quoting | Buyience Nova Core",
    template: "%s | Buyience",
  },
  description:
    "AI-powered B2B commerce platform for wholesalers & distributors. Customer-specific pricing, real-time inventory, and quote generation. Launch in days.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png" }],
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
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <CurrencyProvider>{children}</CurrencyProvider>
      </body>
    </html>
  );
}
