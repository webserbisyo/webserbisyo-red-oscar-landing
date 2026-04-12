import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TopNav } from "@/components/layout/top-nav";
import { Footer } from "@/components/layout/footer";
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
  title: {
    template: "%s | Red Oscar Japanese Filipino Food House",
    default: "Red Oscar Japanese Filipino Food House",
  },
  description: "Experience premium Japanese-Filipino fusion cuisine. Spice up your life in every unexpected bite.",
  openGraph: {
    title: "Red Oscar Japanese Filipino Food House",
    description: "Experience premium Japanese-Filipino fusion cuisine.",
    url: "https://redoscar.ph",
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
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased scroll-smooth`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-screen bg-background text-foreground flex flex-col font-sans">
        <TopNav />
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
