// File: src/app/page.tsx
import Hero from "@/components/sections/Hero";
import SolutionShowcase from "@/components/sections/SolutionShowcase"; // <-- GANTI INI
import DeepDive from "@/components/sections/DeepDive";
import Security from "@/components/sections/Security";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import IoTProductShowcase from "@/components/showcase/IoTProductShowcase";
import ProductShowcase from "@/components/sections/ProductShowCase";
export default function Home() {  
  return (
    <main className="min-h-screen bg-slate-950">
      <Hero /> {/* Bagian atas / Landing */}
      
      {/* Tambahkan id="solusi" di sini */}
      <div id="solusi">
        <IoTProductShowcase /> 
      </div>

      {/* Tambahkan id="produk" di sini */}
      <div id="produk">
        <ProductShowcase />
      </div>

      {/* Tambahkan id="fitur" di sini */}
      <div id="fitur">
        <DeepDive /> {/* Atau SolutionShowcase */}
      </div>

      {/* Tambahkan id="galeri" di sini */}
      <div id="galeri">
        <Gallery />
      </div>

      {/* Tambahkan id="keamanan" di sini */}
      <div id="keamanan">
        <Security />
      </div>

      {/* Tambahkan id="kontak" di sini */}
      <div id="kontak">
        <Contact />
      </div>
    </main>
  );
}