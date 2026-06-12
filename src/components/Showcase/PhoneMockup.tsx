"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FileText,
  Activity,
  BarChart3,
  Database,
  Clock,
  Shield,
} from "lucide-react";

const screens = [
  {
    id: 1,
    title: "Daily Report",
    icon: FileText,
    color: "text-purple-400",
    content: (
      <div className="space-y-2">
        <div className="h-2 w-full bg-slate-700 rounded" />
        <div className="h-1.5 w-3/4 bg-slate-800 rounded" />
        <div className="mt-3 space-y-1">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-1">
              <div className="h-1 w-8 bg-slate-700 rounded" />
              <div className="h-1 flex-1 bg-slate-800 rounded" />
            </div>
          ))}
        </div>
        <div className="mt-3 pt-2 border-t border-slate-800">
          <div className="h-1.5 w-1/2 bg-emerald-500/30 rounded" />
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Energy Monitoring",
    icon: Activity,
    color: "text-blue-400",
    content: (
      <div className="space-y-2">
        <div className="text-center">
          <div className="text-lg font-bold text-white font-mono">0.0272</div>
          <div className="text-[8px] text-slate-500">kWh</div>
        </div>
        <div className="flex items-end justify-between h-8 gap-0.5">
          {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
            <div
              key={i}
              className="w-full bg-blue-500/40 rounded-t"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between text-[7px] text-slate-600">
          <span>00:00</span>
          <span>23:59</span>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Grafik Monitoring",
    icon: BarChart3,
    color: "text-emerald-400",
    content: (
      <div className="grid grid-cols-2 gap-1">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-slate-800 rounded p-1">
            <div className="h-1 w-8 bg-slate-700 rounded mb-1" />
            <div className="h-6 flex items-end gap-0.5">
              {[30, 60, 45, 75, 50].map((h, j) => (
                <div
                  key={j}
                  className="flex-1 bg-emerald-500/40 rounded-t"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 4,
    title: "Database",
    icon: Database,
    color: "text-amber-400",
    content: (
      <div className="space-y-1">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="flex gap-1 p-1 bg-slate-800 rounded"
            animate={{
              backgroundColor: i === 2 ? ["rgba(59,130,246,0.1)", "rgba(59,130,246,0.2)", "rgba(59,130,246,0.1)"] : "rgba(30,41,59,1)",
            }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          >
            <div className="h-1 w-6 bg-slate-700 rounded" />
            <div className="h-1 flex-1 bg-slate-700 rounded" />
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    id: 5,
    title: "Schedule",
    icon: Clock,
    color: "text-rose-400",
    content: (
      <div className="space-y-2">
        {[
          { name: "Pompa Air", time: "06:00-08:00", active: true },
          { name: "AC Server", time: "24/7", active: true },
          { name: "Lighting", time: "18:00-06:00", active: false },
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between p-1.5 bg-slate-800 rounded">
            <div>
              <div className="text-[8px] font-medium text-white">{item.name}</div>
              <div className="text-[7px] text-slate-500">{item.time}</div>
            </div>
            <div className={`w-5 h-2.5 rounded-full p-0.5 ${item.active ? 'bg-emerald-500' : 'bg-slate-700'}`}>
              <div className={`w-1.5 h-1.5 bg-white rounded-full transition-transform ${item.active ? 'translate-x-2' : ''}`} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 6,
    title: "Protection",
    icon: Shield,
    color: "text-cyan-400",
    content: (
      <div className="space-y-2">
        {[
          { label: "Max Current", value: "63A" },
          { label: "Max Voltage", value: "253V" },
          { label: "Max Power", value: "14.5kW" },
        ].map((item, i) => (
          <div key={i} className="p-1.5 bg-slate-800 rounded">
            <div className="text-[7px] text-slate-500">{item.label}</div>
            <div className="text-[9px] font-bold text-cyan-400 font-mono">{item.value}</div>
          </div>
        ))}
      </div>
    ),
  },
];

export default function PhoneMockup() {
  const [currentScreen, setCurrentScreen] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % screens.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto w-40 h-72 bg-slate-950 rounded-[2.5rem] border-4 border-slate-800 shadow-2xl overflow-hidden">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-800 rounded-b-xl z-20" />

      {/* Screen Content */}
      <div className="pt-8 px-3 pb-3 h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="h-full"
          >
            {/* Screen Header */}
            <div className="flex items-center gap-1.5 mb-3">
              {(() => {
                const Icon = screens[currentScreen].icon;
                return <Icon className={`w-3 h-3 ${screens[currentScreen].color}`} />;
              })()}
              <span className="text-[9px] font-bold text-white">
                {screens[currentScreen].title}
              </span>
            </div>

            {/* Screen Content */}
            <div className="bg-slate-900 rounded-lg p-2 border border-slate-800 h-[calc(100%-2rem)] overflow-hidden">
              {screens[currentScreen].content}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Screen Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {screens.map((_, i) => (
          <div
            key={i}
            className={`w-1 h-1 rounded-full transition-all ${
              i === currentScreen ? "bg-blue-400 w-3" : "bg-slate-700"
            }`}
          />
        ))}
      </div>
    </div>
  );
}