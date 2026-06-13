"use client";

import { motion } from "framer-motion";
import { Calculator, FileCode, Shield } from "lucide-react";

const codeSnippet = `// Algoritma Trapezoidal Rule untuk Integrasi Daya (kWh)
// Digunakan saat terjadi gap data atau sensor stuck

function calculateEnergyTrapezoidal(dataPoints: any[]) {
  let totalEnergyKWh = 0;

  for (let i = 1; i < dataPoints.length; i++) {
    const p1 = dataPoints[i - 1];
    const p2 = dataPoints[i];
    
    // Δt dalam jam
    const deltaTimeHours = (p2.timestamp - p1.timestamp) / 3600000; 
    
    // Rumus Trapezoidal: (P1 + P2) / 2 * Δt
    const averagePower = (p1.power + p2.power) / 2;
    const segmentEnergy = averagePower * deltaTimeHours;
    
    totalEnergyKWh += segmentEnergy;
  }

  return totalEnergyKWh;
}`;

export default function DeepDive() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            <Calculator className="w-4 h-4" />
            Deep Dive: The Math
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Presisi dengan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Trapezoidal Rule</span>
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            Ketika data sensor kumulatif mengalami "stuck" atau packet loss, penjumlahan sederhana akan menghasilkan error yang besar. 
            Arvana mengimplementasikan integrasi numerik Trapezoidal untuk menjaga akurasi kWh tetap di atas 99%.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                <FileCode className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Fallback Mechanism</h3>
                <p className="text-slate-400 leading-relaxed">
                  Jika selisih waktu antar data point melebihi threshold, sistem secara otomatis menginterpolasi nilai daya rata-rata, mencegah lonjakan energi yang tidak realistis.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                <Shield className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Kepatuhan Standar (Compliance)</h3>
                <p className="text-slate-400 leading-relaxed">
                  Perhitungan ini memastikan metrik selaras dengan standar <strong>IEC 60038</strong> dan <strong>IEEE 1459</strong>, siap untuk diaudit dalam Engineering Report.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-20"></div>
            <div className="relative bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-950 border-b border-slate-800">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs text-slate-500 font-mono">trapezoidal-calc.ts</span>
              </div>
              <pre className="p-6 overflow-x-auto text-sm font-mono leading-relaxed">
                <code className="text-slate-300">
                  {codeSnippet.split('\n').map((line, i) => (
                    <div key={i} className="table-row">
                      <span className="table-cell text-slate-600 select-none pr-4 text-right w-8">{i + 1}</span>
                      <span className="table-cell">
                        {line.includes('//') ? (
                          <span className="text-slate-500 italic">{line}</span>
                        ) : line.includes('function') || line.includes('return') ? (
                          <span className="text-purple-400">{line}</span>
                        ) : line.includes('let') || line.includes('const') ? (
                          <span className="text-blue-400">{line}</span>
                        ) : (
                          <span>{line}</span>
                        )}
                      </span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
