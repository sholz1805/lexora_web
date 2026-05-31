import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lexora",
  description: "Legal operations and compliance for regulated businesses in Africa.",
  icons: [
    { rel: "icon", url: "/favicon.svg" },
    { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-surface text-ink">
        <header className="sticky top-0 z-40">
          <TopBar />
          <div className="border-b border-muted bg-paper/95 backdrop-blur-xl">
            <Navbar />
          </div>
        </header>
        <ScrollToTop />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
