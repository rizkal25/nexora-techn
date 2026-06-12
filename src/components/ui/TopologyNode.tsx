"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { LucideIcon } from "lucide-react";

interface TopologyNodeProps {
  icon: LucideIcon;
  label: string;
  sublabel: string;
  delay: number;
  color?: string;
  tooltip?: string;
  pulseAnimation?: boolean;
  mqttAnimation?: boolean;
  processingAnimation?: boolean;
  dataStreamAnimation?: boolean;
  notificationAnimation?: boolean;
}

export default function TopologyNode({
  icon: Icon,
  label,
  sublabel,
  delay,
  color = "blue",
  tooltip,
  pulseAnimation = false,
  mqttAnimation = false,
  processingAnimation = false,
  dataStreamAnimation = false,
  notificationAnimation = false,
}: TopologyNodeProps) {
  const [isHovered, setIsHovered] = useState(false);

  // FIX: Explicitly type as Record<string, string> to allow indexing with the 'color' string
  const colorClasses: Record<string, string> = {
    blue: "text-blue-400 border-blue-500/50 shadow-blue-500/30",
    emerald: "text-emerald-400 border-emerald-500/50 shadow-emerald-500/30",
    purple: "text-purple-400 border-purple-500/50 shadow-purple-500/30",
    amber: "text-amber-400 border-amber-500/50 shadow-amber-500/30",
    rose: "text-rose-400 border-rose-500/50 shadow-rose-500/30",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, type: "spring", stiffness: 100 }}
      className="relative z-10 flex flex-col items-center text-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip */}
      {tooltip && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          className="absolute -top-16 left-1/2 -translate-x-1/2 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-300 whitespace-nowrap z-50 pointer-events-none"
        >
          {tooltip}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 border-r border-b border-slate-700 rotate-45 -mt-1" />
        </motion.div>
      )}

      {/* Icon Container */}
      <div className="relative">
        {/* Pulse Animation (Smart MCB) */}
        {pulseAnimation && (
          <>
            <motion.div
              className={`absolute inset-0 rounded-2xl border-2 ${colorClasses[color].split(' ')[1]}`}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className={`absolute inset-0 rounded-2xl border-2 ${colorClasses[color].split(' ')[1]}`}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
          </>
        )}

        {/* MQTT Packet Animation (Home Assistant) */}
        {mqttAnimation && (
          <motion.div
            className="absolute -top-2 -right-2 w-3 h-3 bg-emerald-400 rounded-full"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              x: [0, 10, 20],
              y: [0, -10, -20],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
        )}

        {/* Processing Animation (Nexora API) */}
        {processingAnimation && (
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-purple-500/50"
            animate={{
              rotate: 360,
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{
              borderStyle: "dashed",
            }}
          />
        )}

        {/* Data Stream Animation (PostgreSQL) */}
        {dataStreamAnimation && (
          <>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 -left-4 w-2 h-2 bg-blue-400 rounded-full"
                animate={{
                  x: [0, 40],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeOut",
                }}
              />
            ))}
          </>
        )}

        {/* Notification Animation (Control App) */}
        {notificationAnimation && (
          <motion.div
            className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 rounded-full flex items-center justify-center"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[8px] text-white font-bold">3</span>
          </motion.div>
        )}

        {/* Main Icon Box */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className={`w-16 h-16 rounded-2xl bg-slate-900 border-2 border-slate-700 flex items-center justify-center mb-3 group-hover:${colorClasses[color].split(' ')[1]} group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300`}
        >
          <Icon className={`w-8 h-8 ${colorClasses[color].split(' ')[0]}`} />
        </motion.div>
      </div>

      {/* Label */}
      <h4 className="text-sm font-bold text-white mt-2">{label}</h4>
      <p className="text-xs text-slate-500 mt-1">{sublabel}</p>
    </motion.div>
  );
}
