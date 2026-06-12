"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Clock, RefreshCw } from "lucide-react";

const schedules = [
  { name: "Pompa Air", time: "06:00 - 08:00", active: true, icon: Clock },
  { name: "AC Ruang Server", time: "24/7 Active", active: true, icon: RefreshCw },
  { name: "Cycle Timer", time: "ON 5m / OFF 10m", active: false, icon: RefreshCw },
];

export default function SmartAutomation() {
  const [countdown, setCountdown] = useState(154); // 2m 34s in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 154));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatCountdown = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs.toString().padStart(2, "0")}s`;
  };

  return (
    <div className="space-y-4">
      {/* Schedule Items */}
      <div className="space-y-3">
        {schedules.map((schedule, i) => {
          const Icon = schedule.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-between p-3 bg-slate-950 rounded-lg border border-slate-800 hover:border-blue-500/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{schedule.name}</div>
                  <div className="text-xs text-slate-500">{schedule.time}</div>
                </div>
              </div>

              {/* Toggle Switch */}
              <motion.div
                className={`w-10 h-5 rounded-full p-1 ${schedule.active ? 'bg-emerald-500' : 'bg-slate-700'}`}
                animate={{
                  backgroundColor: schedule.active ? "rgb(16, 185, 129)" : "rgb(51, 65, 85)",
                }}
              >
                <motion.div
                  className="w-3 h-3 bg-white rounded-full"
                  animate={{ x: schedule.active ? 20 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Countdown Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-2 p-2 bg-blue-500/10 border border-blue-500/20 rounded-lg"
      >
        <Clock className="w-3.5 h-3.5 text-blue-400" />
        <span className="text-xs text-blue-400 font-medium">
          Next Execution:{" "}
          <span className="font-mono font-bold">{formatCountdown(countdown)}</span>
        </span>
      </motion.div>
    </div>
  );
}