import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Head from "next/head";
import { Zen_Kaku_Gothic_New } from "next/font/google";

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: "400",
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
      <body className={zenKakuGothicNew.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
