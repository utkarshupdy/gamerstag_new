import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { Jost } from "next/font/google";

export const metadata: Metadata = {
  title: "Gamers Tag",
  description: "Gamers Tag",
};

const jost = Jost({ subsets: ["cyrillic"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jost.className}>
      <body className="bg-background">
        <CustomCursor>
          <Navbar />
          {children}
          <Footer />
        </CustomCursor>
      </body>
    </html>
  );
}
