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
  title: "Madina Tinkory | Software Engineering Student & Full-Stack Developer",
  description:
    "I architect, code, test, and deploy. Portfolio of Madina Tinkory — Software Engineering student at the University of Mauritius building intuitive mobile utilities, modern web applications, and AI-assisted workflows.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-[#E8F3EA] selection:text-[#2E6B4D]">
        {children}
      </body>
    </html>
  );
}
