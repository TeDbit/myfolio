import { Inter } from "next/font/google";
import "./globals.css";
import { NextRequest, NextResponse, userAgent } from "next/server";
const inter = Inter({ subsets: ["greek"] });

export const metadata = {
  title: "TEDs Portfolio",
  description: "Portfolio by Elvis Donkor for Elvis Donkor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

// cyrillic" | "cyrillic-ext" | "greek" | "greek-ext" | "latin" | "latin-ext" | "vietnamese"
