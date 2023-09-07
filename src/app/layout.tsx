import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Satoru",
  description:
    "Satoru is a cutting-edge synthetics platform for Starknet, taking inspiration from the modular design of GMX V2.",
  openGraph: {
    images: ["https://www.satoru.run/satoru_meta_image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.satoru.run/satoru_meta_image.png"],
  },
};

const agenorFont = localFont({
  src: [
    {
      path: "../font/Agenor/Agenor-Bold.ttf",
      style: "normal",
      weight: "700",
    },
    {
      path: "../font/Agenor/AgenorNeue-Regular.otf",
      style: "normal",
      weight: "400",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-black ${agenorFont.className} font-normal`}>
        {children}
      </body>
    </html>
  );
}

//
