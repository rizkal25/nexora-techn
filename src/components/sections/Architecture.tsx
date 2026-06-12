"use client";

import { motion } from "framer-motion";
import { Server, Database, Monitor, Home, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: <Home className="w-8 h-8 text-blue-400" />,
    title: "IoT Edge Device",
    desc: "Sensor MCB mengirimkan telemetry (Voltage, Current, Power) via MQTT ke Home Assistant.",
  },
  {
    icon: <Server className="w-8 h-8 text-purple-400" />,
    title: "Next.js Backend API",
    desc: "Menerima webhook/data, memvalidasi payload dengan Zod, dan menerapkan algoritma Trapezoidal.",
  },
  {
    icon: <Database className="w-8 h-8 text-emerald-400" />,
    title: "PostgreSQL + Prisma",
    desc: "Penyimpanan data time-series yang terstruktur, aman, dan ter-index untuk query laporan yang cepat.",
  },
  {
    icon: <Monitor className="w-8 h-8 text-amber-400" />,
    title: "Frontend Dashboard",
    desc: "Visualisasi real-time dengan Chart.js, kontrol relay ON/OFF, dan generate Engineering Report (PDF).",
  },
];

export default function Architecture() {
  return (
    <section className="py-24 bg-slate-900/50 border-y border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technical <span className="text-gradient">Architecture</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Alur data end-to-end yang dirancang untuk skalabilitas, keandalan, dan latensi rendah.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative group"
            >
              <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 h-full">
                <div className="mb-4 p-3 bg-slate-900 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
              
              {/* Connector Arrow (Hidden on mobile, visible on lg) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10 text-slate-600">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}