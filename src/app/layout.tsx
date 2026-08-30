import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { KeyboardNav } from "@/components/keyboard-nav";
import { TabBar } from "@/components/tab-bar";
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
  title: "superset.sh",
  description: "A presentation about superset.sh",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
          <div className="mx-auto flex w-full max-w-5xl items-center gap-6 px-6 py-4">
            <span className="font-mono text-sm font-medium tracking-tight">
              superset.sh
            </span>
            <TabBar />
          </div>
        </header>
        <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">
          {children}
        </main>
        <KeyboardNav />
      </body>
    </html>
  );
}
