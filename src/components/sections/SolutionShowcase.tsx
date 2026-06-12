"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Home,
  Server,
  Database,
  Smartphone,
  FileText,
  Activity,
  Shield,
} from "lucide-react";
import TopologyNode from "../ui/TopologyNode";
import ParticleFlow from "../ui/ParticleFlow";
import PhoneMockup from "../Showcase/PhoneMockup";
import AnimatedEnergyChart from "../Showcase/AnimatedEnergyChart";
import SmartAutomation from "../Showcase/SmartAutomation";
import SecurityGrid from "../Showcase/SecurityGrid";
import ReportPreview from "../Showcase/ReportPreview";
import DatabaseViz from "../Showcase/DatabaseViz";

export default function SolutionShowcase() {
  return (
    <section id="solusi" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Arsitektur{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              End-to-End
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Dari sensor di lapangan hingga laporan di genggaman Anda. Sistem yang terhubung, aman, dan terotomasi.
          </p>
        </motion.div>

        {/* 1. TOPOLOGY ANIMATION */}
        <div className="relative max-w-5xl mx-auto mb-24 py-8">
          <ParticleFlow />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            <TopologyNode
              icon={Cpu}
              label="Smart MCB"
              sublabel="Edge Device"
              delay={0.1}
              color="amber"
              tooltip="Sensor IoT dengan MQTT protocol"
              pulseAnimation
            />
            <TopologyNode
              icon={Home}
              label="Home Assistant"
              sublabel="MQTT Hub"
              delay={0.3}
              color="emerald"
              tooltip="Central hub untuk semua device"
              mqttAnimation
            />
            <TopologyNode
              icon={Server}
              label="Nexora API"
              sublabel="Trapezoidal Calc"
              delay={0.5}
              color="purple"
              tooltip="Backend dengan algoritma Trapezoidal"
              processingAnimation
            />
            <TopologyNode
              icon={Database}
              label="PostgreSQL"
              sublabel="Time-series DB"
              delay={0.7}
              color="blue"
              tooltip="Database optimized untuk time-series"
              dataStreamAnimation
            />
            <TopologyNode
              icon={Smartphone}
              label="Control App"
              sublabel="Dashboard & Report"
              delay={0.9}
              color="rose"
              tooltip="Web app responsive + PWA"
              notificationAnimation
            />
          </div>
        </div>

        {/* 2. BENTO GRID SHOWCASE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Card 1: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center hover:border-blue-500/30 transition-colors"
          >
            <div className="flex items-center gap-2 mb-6 w-full justify-center">
              <FileText className="w-5 h-5 text-purple-400" />
              <h3 className="font-bold text-white">6 Halaman Utama</h3>
            </div>
            <PhoneMockup />
            <p className="text-xs text-slate-500 text-center mt-6">
              Fully Responsive • Auto-carousel
            </p>
          </motion.div>

          {/* Card 2: Energy Monitoring */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-400" />
                <h3 className="font-bold text-white">Real-time Energy Monitoring</h3>
              </div>
              <span className="text-xs px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live
              </span>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Visualisasi daya dengan interpolasi Trapezoidal untuk akurasi 99.9%.
            </p>
            <AnimatedEnergyChart />
          </motion.div>

          {/* Card 3: Smart Automation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition-colors"
          >
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-amber-400" />
              <h3 className="font-bold text-white">Otomasi Cerdas</h3>
            </div>
            <SmartAutomation />
          </motion.div>

          {/* Card 4: Security Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition-colors"
          >
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-emerald-400" />
              <h3 className="font-bold text-white">Enterprise-Grade Security</h3>
            </div>
            <SecurityGrid />
          </motion.div>

          {/* Card 5: Report Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition-colors"
          >
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5 text-purple-400" />
              <h3 className="font-bold text-white">Automated A4 Engineering Report</h3>
            </div>
            <ReportPreview />
          </motion.div>

          {/* Card 6: Database Viz */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2 bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition-colors"
          >
            <div className="flex items-center gap-2 mb-4">
              <Database className="w-5 h-5 text-blue-400" />
              <h3 className="font-bold text-white">High-Performance Data Layer</h3>
            </div>
            <DatabaseViz />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
