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
  title: "Fuzhen(Will) Zhan - Portfolio",
  icons: {
    icon: "favicon.ico",
    shortcut: "favicon.ico",
    apple: "favicon.ico",
  },
  description: "Welcome to my portfolio! I'm Fuzhen Zhan, a full-stack & MLE engineer with security. Explore my projects and skills.",
  keywords: [
    "Fuzhen Zhan",
    "Will Zhan",
    "Portfolio",
    "Software Engineer",
    "Full Stack Developer",
    "Web Developer",
    "Software Development",
    "Software Engineering",
    "Web Development",
    "Programming",
    "Computer Science",
    "Technology",
    "Coding",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
