import React from "react";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const roboto = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: {
    template: "%s | Nnamdi Azubuike",
    default: "Nnamdi Azubuike",
  },
  description: "Nnamdi Azubuike is a solution provider (software engineer)",
  manifest: "/manifest.json",
  icons: [
    {
      rel: "icon",
      type: "image/svg",
      url: "./favicon.svg",
    },
    {
      rel: "apple",
      url: "./favicon.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MX6F6VZ3SF"
        ></Script>
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-MX6F6VZ3SF');
         `}
        </Script>
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
