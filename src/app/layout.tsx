import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/_components/header/Header";
import { ReviewProvider } from "@/providers/ReviewProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "WeRent",
  description: "WeRent Milestone Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} antialiased`}
      >
        <ReviewProvider>
          <Navbar />
          {children}
        </ReviewProvider>
      </body>
    </html>
  );
}
