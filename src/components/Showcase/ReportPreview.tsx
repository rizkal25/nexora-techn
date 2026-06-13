"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function ReportPreview() {
  return (
    <div className="relative">
      {/* Floating Document */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotateX: 10 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true }}
        animate={{
          y: [0, -10, 0],
          boxShadow: [
            "0 20px 40px rgba(0,0,0,0.3)",
            "0 30px 60px rgba(0,0,0,0.4)",
            "0 20px 40px rgba(0,0,0,0.3)",
          ],
        }}
        transition={{
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative bg-white rounded-lg shadow-2xl p-4 mx-auto max-w-xs"
      >
        {/* Document Header */}
        <div className="border-b-2 border-slate-900 pb-2 mb-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[8px] font-bold text-slate-900">Arvana Digital Nusantara</div>
              <div className="text-[6px] text-slate-600">Engineering Division</div>
            </div>
            <div className="text-right">
              <div className="text-[7px] font-bold text-slate-900">MCB ENGINEERING</div>
              <div className="text-[6px] text-slate-600">PERFORMANCE REPORT</div>
            </div>
          </div>
        </div>

        {/* Document Content */}
        <div className="space-y-2">
          <div className="text-[7px] font-bold text-slate-900">Fleet Performance Summary</div>
          
          {/* Table */}
          <div className="border border-slate-300 rounded overflow-hidden">
            <div className="bg-slate-900 text-white text-[6px] px-1 py-0.5 grid grid-cols-4 gap-1">
              <span>Machine</span>
              <span>V (V)</span>
              <span>I (A)</span>
              <span>Status</span>
            </div>
            {[
              { machine: "MCB-Line-A1", v: "228.5", i: "0.59", status: "OK" },
              { machine: "MCB-Line-B2", v: "229.1", i: "0.61", status: "OK" },
              { machine: "MCB-Line-C3", v: "227.8", i: "0.58", status: "OK" },
            ].map((row, i) => (
              <motion.div
                key={i}
                className="text-[6px] px-1 py-0.5 grid grid-cols-4 gap-1 border-t border-slate-200"
                animate={{
                  backgroundColor: i === 1 ? ["rgba(59,130,246,0.1)", "rgba(59,130,246,0.2)", "rgba(59,130,246,0.1)"] : "white",
                }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              >
                <span className="font-medium">{row.machine}</span>
                <span>{row.v}</span>
                <span>{row.i}</span>
                <span className="text-emerald-600 font-bold">{row.status}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Signature Block */}
        <div className="mt-3 pt-2 border-t border-slate-300">
          <div className="grid grid-cols-2 gap-2 text-[6px]">
            <div>
              <div className="h-4 border-b border-slate-400 mb-1" />
              <div className="font-bold">Engineering Manager</div>
            </div>
            <div>
              <div className="h-4 border-b border-slate-400 mb-1" />
              <div className="font-bold">Plant Director</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Compliant Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        className="absolute -top-2 -right-2 bg-emerald-500 text-white px-2 py-1 rounded-full text-[8px] font-bold flex items-center gap-1 shadow-lg"
      >
        <CheckCircle2 className="w-3 h-3" />
        IEC 60038
      </motion.div>
    </div>
  );
}
