import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import LenisScroller from "@/components/LenisScroller";
import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Digiglobe — Strategy meets scale",
  description: "Turning bold ideas into brands people remember. Strategy, design, and performance — under one roof.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <LenisScroller>
          <CustomCursor />
          <Nav />
          {children}
          <Footer />
        </LenisScroller>
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      </body>
    </html>
  );
}
