import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Navbar from "@/app/tutorial2/navbar/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next tutorials",
  description: "I'm learning next.js",
};

export default function RootLayout({children} : Readonly<{children : React.ReactNode;}>) {
  return (
    <html lang="en">
      <head>

      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {/* <Navbar/> */}
        {children}
      </body>
    </html>
  );
}
