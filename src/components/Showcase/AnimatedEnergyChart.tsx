"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedEnergyChart() {
  const [metrics, setMetrics] = useState({
    voltage: 228.5,
    current: 0.59,
    power: 121.2,
  });

  // Simulate live metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        voltage: 228 + Math.random() * 2,
        current: 0.58 + Math.random() * 0.02,
        power: 120 + Math.random() * 3,
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Generate oscilloscope-style data points
  const dataPoints = Array.from({ length: 50 }, (_, i) => {
    const base = 50 + Math.sin(i * 0.3) * 20;
    const noise = Math.random() * 10;
    return base + noise;
  });

  // Create SVG path
  const pathData = dataPoints
    .map((point, i) => {
      const x = (i / (dataPoints.length - 1)) * 100;
      const y = 100 - point;
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  // Create fill path
  const fillPathData = `${pathData} L 100 100 L 0 100 Z`;

  return (
    <div className="space-y-4">
      {/* Chart */}
      <div className="relative h-32 bg-slate-950 rounded-lg border border-slate-800 overflow-hidden">
        {/* Grid lines */}
        <div className="absolute inset-0 grid grid-cols-5 grid-rows-4">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="border border-slate-900/50" />
          ))}
        </div>

        {/* SVG Chart */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Gradient fill */}
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Fill area */}
          <motion.path
            d={fillPathData}
            fill="url(#chartGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Line */}
          <motion.path
            d={pathData}
            fill="none"
            stroke="rgb(59, 130, 246)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Animated scanning line */}
          <motion.line
            x1="0"
            y1="0"
            x2="0"
            y2="100"
            stroke="rgb(59, 130, 246)"
            strokeWidth="0.3"
            strokeOpacity="0.5"
            animate={{ x1: [0, 100], x2: [0, 100] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      {/* Live Metrics */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Voltage", value: metrics.voltage.toFixed(1), unit: "V", color: "text-blue-400" },
          { label: "Current", value: metrics.current.toFixed(2), unit: "A", color: "text-emerald-400" },
          { label: "Power", value: metrics.power.toFixed(1), unit: "W", color: "text-purple-400" },
        ].map((metric, i) => (
          <motion.div
            key={i}
            className="bg-slate-950 rounded-lg p-2 border border-slate-800 text-center"
            animate={{
              borderColor: ["rgba(30,41,59,1)", "rgba(59,130,246,0.3)", "rgba(30,41,59,1)"],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          >
            <div className="text-[9px] text-slate-500 mb-1">{metric.label}</div>
            <div className={`text-sm font-bold font-mono ${metric.color}`}>
              {metric.value}
              <span className="text-[8px] text-slate-600 ml-0.5">{metric.unit}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Formula */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="inline-block px-3 py-1.5 bg-slate-950 rounded-lg border border-slate-800">
          <span className="text-[10px] text-slate-400 font-mono">
            E = ∫ P(t) dt ≈ Σ [(P<sub>i</sub> + P<sub>i+1</sub>)/2] × Δt
          </span>
        </div>
      </motion.div>
    </div>
  );
}