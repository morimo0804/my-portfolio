import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Head from "next/head";
import { Noto_Sans_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/the-new-css-reset/css/reset.min.css"
        />
      </Head>
      <body className={notoSansJP.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
