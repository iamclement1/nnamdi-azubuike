import React from "react";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import Sidebar from "@/components/common/Sidebar";

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
      <body className={roboto.className}>
        <div className="sm:flex">
          <Sidebar />
          <main className="flex-1 sm:ml-14 p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
