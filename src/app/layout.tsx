import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import { WebVitals } from "../components/web-vitals";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MCRP",
  description: "Machine coding round practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body>
        <WebVitals />
        <Header />
        {children}
      </body>
    </html>
  );
}
