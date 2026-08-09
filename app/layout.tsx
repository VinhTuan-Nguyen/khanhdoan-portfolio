import type { Metadata } from "next";
import { Bodoni_Moda, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const dynamic = "force-static";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  style: ["normal", "italic"],
});

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
const title = "Khánh Đoan — Full-stack Marketer & Chuyên gia Performance Ads";
const description =
  "Portfolio của Khánh Đoan — full-stack marketer với 3 năm kinh nghiệm, chuyên sâu Performance Ads và quản lý hơn 600 triệu đồng ngân sách quảng cáo mỗi tháng.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    images: [{ url: `${siteUrl}/og-v2.png`, width: 1736, height: 875, alt: "Khánh Đoan — Full-stack Marketer" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteUrl}/og-v2.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${geistSans.variable} ${geistMono.variable} ${bodoni.variable}`}>
        {children}
      </body>
    </html>
  );
}
