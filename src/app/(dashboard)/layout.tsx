import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";


const roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Nnamdi Azubuike",
    default: "Nnamdi Azubuike",
  },
  description: "Nnamdi Azubuike is a solution provider (software engineer)",
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
      <body className={`${roboto.className} bg-black`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
