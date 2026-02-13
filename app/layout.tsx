import type { Metadata, Viewport } from "next";
import { poppins, pretendard, paperlogy } from "./fonts";
import "./css/globals.scss";
import "./css/normalrize.scss";
import Providers from "./provider";
import ModalProvider from './client';

export const metadata: Metadata = {
  title: "푸푸토이 | 웰니스 무인 성인용품 창업",
  description: "남들 모르게, 매출이 남는 무인 성인 웰니스 매장 | 인건비 걱정 ZERO! | 초보자도 쉽게 가능",
  openGraph: {
    url: "https://brand.puffutoy.com/",
    type: "website",
    title: "푸푸토이 | 웰니스 무인 성인용품 창업",
    description: "남들 모르게, 매출이 남는 무인 성인 웰니스 매장 | 인건비 걱정 ZERO! | 초보자도 쉽게 가능",
    images: "https://brand.puffutoy.com/org-img.png",
  },
  twitter: {
    card: "summary",
    title: "푸푸토이 | 웰니스 무인 성인용품 창업",
    description: "남들 모르게, 매출이 남는 무인 성인 웰니스 매장 | 인건비 걱정 ZERO! | 초보자도 쉽게 가능",
    images: "https://brand.puffutoy.com/org-img.png",
  },
  keywords:
    "푸푸토이, 무인매장 창업, 성인용품 창업, 초보자도 쉽게 가능, 인건비 없는 무인매장",
  icons: "/favicon.ico",
  robots: { index: true, follow: true },
};
export const viewport: Viewport = {
  width: "device-width",
  height: "device-height",
  initialScale: 1,
  userScalable: false,
  minimumScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000" />
      </head>
      <body
        className={`${pretendard.className} ${poppins.variable} ${paperlogy.variable} antialiased`}
      >
        <Providers>
          <ModalProvider>
            {children}
          </ModalProvider>
        </Providers>
      </body>
    </html>
  );
}
