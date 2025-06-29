import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {Inter} from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets:["latin"]
});

const poppins = Poppins({
  weight:["400", "600", "700"],
  subsets:["latin"],
  variable: "--font-poppins",
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PragatiERP",
  description: "ERP portal for college students and teachers using next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={"font-sans"}>
        {children}
      </body>
    </html>
  );
}
