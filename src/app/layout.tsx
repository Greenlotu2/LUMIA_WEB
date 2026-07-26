import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/header"; // Importamos tu nuevo Header


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} antialiased min-h-screen bg-white`}>
        {/* El Header se renderiza en la parte superior de toda la app */}
        <Header />
        {children}
        
      </body>
    </html>
  );
}