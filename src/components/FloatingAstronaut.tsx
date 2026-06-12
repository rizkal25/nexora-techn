"use client";

import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Minimize2, Sparkles } from "lucide-react";
import Astronaut3D from "./Astronaut3D";

export default function FloatingAstronaut() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    // Tampilkan astronaut setelah 1.5 detik agar tidak mengganggu loading awal
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const size = isMobile ? (isExpanded ? 200 : 100) : (isExpanded ? 350 : 160);
  const position = isMobile ? "bottom-4 right-4" : "bottom-8 right-8";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className={`fixed ${position} z-50 group`}
          style={{ width: size, height: size }}
        >
          {/* Glow Effect di belakang */}
          <div 
            className="absolute inset-0 rounded-full blur-3xl opacity-30 pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(59,130,246,0.5) 0%, rgba(168,85,247,0.3) 50%, transparent 70%)" }}
          />

          {/* ✅ PERBAIKAN: Badge dipindah KE LUAR container overflow-hidden agar tidak kepotong */}
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -top-1 -left-1 z-[60] bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1 whitespace-nowrap"
            >
              <Sparkles className="w-3 h-3" /> NEXORA TECH
            </motion.div>
          )}

          {/* Container Lingkaran Utama (dengan overflow-hidden) */}
          <div 
            className={`relative w-full h-full rounded-full overflow-hidden cursor-pointer transition-all duration-500 ${
              isExpanded 
                ? "bg-gradient-to-br from-slate-900/90 to-indigo-950/90 backdrop-blur-xl border-2 border-blue-500/30 shadow-2xl shadow-blue-500/30" 
                : "bg-transparent hover:scale-110"
            }`}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <Canvas camera={{ position: [0, 0, 4], fov: 45 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
              <ambientLight intensity={0.4} />
              <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
              <directionalLight position={[-5, -5, -5]} intensity={0.3} color="#a855f7" />
              <pointLight position={[0, 2, 2]} intensity={0.8} color="#3b82f6" />
              
              <Suspense fallback={null}>
                <Astronaut3D />
                <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={5} blur={2} far={4} color="#3b82f6" />
              </Suspense>

              {isExpanded && (
                <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 1.5} autoRotate autoRotateSpeed={0.5} />
              )}
            </Canvas>

            {/* Toggle Button (Maximize/Minimize) */}
            <button
              onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
              className="absolute top-2 right-2 p-1.5 bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-full text-white hover:bg-slate-800 transition-colors opacity-0 group-hover:opacity-100 z-10"
            >
              {isExpanded ? <Minimize2 className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />}
            </button>

            {/* Close Button (hanya saat expanded) */}
            {isExpanded && (
              <button
                onClick={(e) => { e.stopPropagation(); setIsVisible(false); }}
                className="absolute top-2 left-2 p-1.5 bg-red-500/80 backdrop-blur-sm rounded-full text-white hover:bg-red-600 transition-colors z-10"
              >
                <X className="w-3 h-3" />
              </button>
            )}

            {/* Info Panel saat Expanded */}
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/95 to-transparent p-4 pointer-events-none z-10"
              >
                <div className="text-white text-xs space-y-1 text-center">
                  <div className="font-bold text-sm flex items-center justify-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400" /> Nexora AI Assistant
                  </div>
                  <div className="text-slate-400 text-[10px]">🖱️ Drag untuk rotate • Monitoring smart home 24/7</div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Pulse Ring Animation (saat collapsed) */}
          {!isExpanded && (
            <>
              <motion.div className="absolute inset-0 rounded-full border-2 border-blue-500/50 pointer-events-none" animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
              <motion.div className="absolute inset-0 rounded-full border-2 border-purple-500/50 pointer-events-none" animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}