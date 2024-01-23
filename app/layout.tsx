import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/page";
import Myprofilepic from "./myprofilepic/page";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simon's Blog App",
  description: "Created by Simon Chan using Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid content-start">

      <Navbar />
      <body className={inter.className}>{children}</body>

    </div>
  );
}
