import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AccentPulse from "@/components/AccentPulse";
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
  title: "Taeg Dayley | Portfolio",
  description:
    "Explore interactive web experiences and full-stack projects by Taeg Dayley.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AccentPulse />
        {children}
      </body>
    </html>
  );
}
