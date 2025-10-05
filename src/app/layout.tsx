import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/components/layout/Header/Header";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "@/app/components/ThemeToggle";

// =======================
// FONT SETUP
// =======================
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// =======================
// METADATA
// =======================
export const metadata: Metadata = {
  title: "JobKu: Platform Lowongan Kerja Terbaik",
  description: "Temukan pekerjaan impian Anda dengan JobKu.",
};

// =======================
// ROOT LAYOUT
// =======================
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          {/* HEADER */}
          <header className="fixed top-0 left-0 w-full z-50">
            <Header />
          </header>

          {/* THEME TOGGLE */}
          <div className="fixed top-5 right-5 z-[100] mt-10 md:mt-0">
            <ThemeToggle />
          </div>

          {/* MAIN CONTENT */}
          <main className="container mx-auto px-4 pt-[100px] md:pt-[120px] min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
