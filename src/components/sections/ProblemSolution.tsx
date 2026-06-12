"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, Zap } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Mengapa <span className="text-gradient">Nexora</span> Dibuat?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Mengatasi blind spot pada sistem monitoring energi konvensional dengan pendekatan engineering yang presisi.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Problem Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-red-950/20 border border-red-900/50 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-500/20 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-red-200">The Problem</h3>
            </div>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>Meteran konvensional sering mengalami <strong>data loss</strong> atau stuck saat koneksi jaringan tidak stabil.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>Perhitungan energi kumulatif menjadi <strong>tidak akurat</strong>, menyebabkan selisih tagihan dan inefisiensi.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                <span>Tidak ada mekanisme fallback otomatis untuk menjaga integritas data historis.</span>
              </li>
            </ul>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl bg-emerald-950/20 border border-emerald-900/50 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-emerald-500/20 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-emerald-200">The Nexora Solution</h3>
            </div>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Implementasi <strong>Trapezoidal Rule</strong> di backend untuk interpolasi data yang hilang dengan akurasi matematis tinggi.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong>Fallback Mechanism</strong> yang secara otomatis menghitung estimasi berbasis rata-rata beban saat sensor stuck.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Integrasi dua arah dengan <strong>Home Assistant</strong> untuk kontrol relay dan monitoring real-time tanpa delay.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}