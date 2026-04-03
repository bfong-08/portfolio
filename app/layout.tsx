import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const schibsted_grotesk = Schibsted_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brandon Fong's Portfolio",
  description: "My education, experience, projects, and passions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${schibsted_grotesk.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
