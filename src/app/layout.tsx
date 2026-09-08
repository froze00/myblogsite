import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OJT Journal — My Internship at Aquila Software Corp.",
  description:
    "A week-by-week chronicle of my 8-week On-the-Job Training as a Frontend Developer intern at AQUILA Software Corporation. Real tasks, real bugs, real growth.",
  keywords: [
    "OJT",
    "Internship",
    "Aquila Software Corporation",
    "Frontend Developer",
    "Accomplishment Report",
    "Internship Journal",
    "Lynus Fabroa",
  ],
  authors: [{ name: "Lynus B. Fabroa" }],
  openGraph: {
    title: "OJT Journal — My Internship at Aquila Software Corp.",
    description:
      "A week-by-week chronicle of my 8-week Frontend Developer internship at AQUILA Software Corporation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
