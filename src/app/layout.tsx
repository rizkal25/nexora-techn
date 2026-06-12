import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingAstronaut from "@/components/FloatingAstronaut";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nexora IoT | Enterprise MCB Monitoring & Control",
  description: "Sistem monitoring dan kontrol MCB berbasis IoT enterprise-grade dengan algoritma Trapezoidal Rule untuk akurasi energi tinggi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-slate-950 text-slate-50 selection:bg-blue-500/30 selection:text-blue-200`}>
        <Navbar />
        <main className="pt-20 min-h-screen">
          {children}
        </main>
        <Footer />
        
        {/* 🧑‍🚀 Floating 3D Astronaut - Muncul di SEMUA halaman */}
        <FloatingAstronaut />
      </body>
    </html>
  );
}