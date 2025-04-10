import "./globals.css";
import type { Metadata } from "next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Head from "next/head";
import { Noto_Sans_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-0804.vercel.app/"),
  title: {
    template: "%s | hayato portfolio",
    default: "hayato portfolio",
  },
  description: "エンジニア志望の専門学生が作ったポートフォリオサイトです。",
  openGraph: {
    title: "hayato portfolio",
    description: "エンジニア志望の専門学生が作ったポートフォリオサイトです。",
    images: ["/ogp.png"],
  },
  alternates: {
    canonical: "https://portfolio-0804.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
