import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "Modimal | Online Shop",
    template: "%s | Modimal",
  },
  description: "women clothing online shop",
  icons: [
    {
      url: "./favicon.ico",
      sizes: "300*300",
    },
  ],
  openGraph: {
    type: "website",
    title: "Modimal | Online Shop",
    url: "http://localhost:3000",
    siteName: "Modimal",
    images: [{ url: "./Logo.png", width: 300, height: 300 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="./favicon.ico"
          type="image/png"
          sizes="300*300"
        />
        <link rel="shortcut icon" href="./favicon.ico" type="image/png" />
      </head>
      <body className={`${montserrat.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
