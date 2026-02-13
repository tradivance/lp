import type { Metadata } from "next";
import { Noto_Sans_JP, Figtree, Montserrat } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KIKI - ホットヨガスタジオ",
  description: "全国450店舗以上展開。80%以上が未経験からスタート。今なら手ぶら体験0円キャンペーン実施中！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${figtree.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
