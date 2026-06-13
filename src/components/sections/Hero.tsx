"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Activity, Zap } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-slate-950 pt-10 pb-20">
      {/* 1. Subtle Grid Background (Ciri khas desain tech enterprise) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* 2. Ambient Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Enterprise Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
            Arvana MCB IoT System v2.0
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
        >
          Monitoring Energi dengan <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500">
            Presisi Algoritma Tinggi
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed"
        >
          Platform kontrol MCB berbasis IoT yang dirancang untuk keandalan industri. 
          Menggabungkan telemetry real-time, otomasi jadwal, dan perhitungan kWh 
          berakurasi 99.9% dengan mekanisme fallback otomatis.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
        <Link href="/demo">
          <button className="group px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40">
            Jadwalkan Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
        </motion.div>

        {/* 3. Dashboard Mockup Placeholder (Memberikan kesan "Produk Software Nyata") */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Glow behind mockup */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl"></div>
          
          {/* Mockup Window */}
          <div className="relative bg-slate-900 rounded-xl border border-slate-800 shadow-2xl overflow-hidden">
            {/* Mockup Header (Browser-like) */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-950 border-b border-slate-800">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="ml-4 flex-1 bg-slate-900 rounded-md h-6 flex items-center px-3 border border-slate-800">
                <Zap className="w-3 h-3 text-blue-500 mr-2" />
                <span className="text-xs text-slate-500 font-mono">app.arvana-iot.com/dashboard</span>
              </div>
            </div>
            
            {/* Mockup Body (Abstract UI) */}
            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-950/80">
              {/* Card 1 */}
              <div className="p-5 rounded-lg bg-slate-900 border border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-slate-400">Total Consumption</span>
                  <Activity className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">1,248.5 <span className="text-lg text-slate-500 font-normal">kWh</span></div>
                <div className="text-xs text-emerald-400 flex items-center gap-1 font-medium">↑ 12% efisiensi bulan ini</div>
              </div>
              
              {/* Card 2 (Spans 2 columns) */}
              <div className="p-5 rounded-lg bg-slate-900 border border-slate-800 md:col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-slate-400">Real-time Power Factor & Load</span>
                  <span className="text-xs px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">Live</span>
                </div>
                <div className="h-20 bg-slate-800/30 rounded flex items-end gap-1 p-2">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 80, 60, 85, 90].map((h, i) => (
                    <div 
                      key={i} 
                      style={{ height: `${h}%` }} 
                      className="flex-1 bg-blue-500/40 rounded-t-sm hover:bg-blue-500 transition-colors duration-300" 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
