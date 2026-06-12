"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Database, Zap } from "lucide-react";

export default function DatabaseViz() {
  const [count, setCount] = useState(10847);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const queryTimes = [35, 42, 28, 45, 38, 32, 40, 36];

  return (
    <div className="space-y-4">
      {/* Database Icon with Animation */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Database className="w-12 h-12 text-blue-400" />
          </motion.div>

          {/* Query particles */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 -right-4 w-2 h-2 bg-emerald-400 rounded-full"
              animate={{
                x: [0, 20],
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
        </div>
      </div>

      {/* Counter */}
      <div className="text-center">
        <motion.div
          key={count}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-white font-mono"
        >
          {count.toLocaleString()}
        </motion.div>
        <div className="text-xs text-slate-500">readings stored</div>
      </div>

      {/* Query Response Time */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-slate-400">Query Response Time</span>
          <span className="text-xs text-emerald-400 font-mono font-bold">&lt;50ms</span>
        </div>
        <div className="flex items-end justify-between h-12 gap-1">
          {queryTimes.map((time, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-gradient-to-t from-emerald-500/40 to-emerald-500/20 rounded-t"
              initial={{ height: 0 }}
              whileInView={{ height: `${(time / 50) * 100}%` }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            />
          ))}
        </div>
      </div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-2 p-2 bg-purple-500/10 border border-purple-500/20 rounded-lg"
      >
        <Zap className="w-3.5 h-3.5 text-purple-400" />
        <span className="text-xs text-purple-400 font-medium">Time-Series Optimized</span>
      </motion.div>
    </div>
  );
}