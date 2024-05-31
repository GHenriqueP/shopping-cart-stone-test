import type { Metadata } from "next";
import "./globals.css";
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from "next/font/google";
import AppProvider from "@/context/AppProvider";

export const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });
export const baiJamjuree = BaiJamjuree({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-bai-jamjuree",
});

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Created by Gustavo Henrique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-50 text-gray-700`}
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
