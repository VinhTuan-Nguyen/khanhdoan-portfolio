import type { Metadata } from "next";
import "./globals.css";

export const dynamic = "force-static";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
const title = "Khánh Đoan — Performance Marketing & Account Management";
const description =
  "Portfolio Performance Marketing & Account Management của Khánh Đoan — chiến lược paid media, tối ưu funnel, phân tích hiệu suất và điều phối account.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    images: [{ url: `${siteUrl}/og-v2.png`, width: 1734, height: 907, alt: "Khánh Đoan — Performance Marketing & Account Management" }],
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
      <body>{children}</body>
    </html>
  );
}
