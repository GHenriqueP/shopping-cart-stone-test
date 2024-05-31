import type { Metadata } from "next";
import "./globals.css";
import AppProvider from "@/context/AppProvider";
import { Roboto, Inter } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

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
        className={`${roboto.variable} ${inter.variable} font-sans bg-gray-50 text-gray-700`}
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
