"use client";

import { motion } from "framer-motion";

export default function ParticleFlow() {
  return (
    <div className="hidden lg:flex absolute top-8 left-0 w-full h-0.5 bg-slate-800 -z-0">
      {/* Main gradient sweep */}
      <motion.div
        className="h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent w-1/3"
        animate={{ x: ["-100%", "400%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />

      {/* Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full"
          animate={{
            x: ["-10%", "110%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}