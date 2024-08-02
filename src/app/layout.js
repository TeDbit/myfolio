import { Inter } from "next/font/google";
import "./globals.css";
import { NextRequest, NextResponse, userAgent } from "next/server";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TEDs Portfolio",
  description: "Portfolio by Elvis Donkor for Elvis Donkor",
};



export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter}>{children}</body>
    </html>
  );
}
