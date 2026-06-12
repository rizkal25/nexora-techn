"use client";

import { motion } from "framer-motion";
import { Calculator, Shield, Lock, FileCheck } from "lucide-react";

const securityFeatures = [
  {
    icon: Calculator,
    title: "Trapezoidal Engine",
    description: "Fallback saat sensor stuck",
    color: "text-blue-400",
    borderColor: "hover:border-blue-500/50",
  },
  {
    icon: Shield,
    title: "JWT + Rate Limiting",
    description: "Proteksi API berlapis",
    color: "text-emerald-400",
    borderColor: "hover:border-emerald-500/50",
  },
  {
    icon: Lock,
    title: "Encrypted Tokens",
    description: "HA token terenkripsi AES-256",
    color: "text-purple-400",
    borderColor: "hover:border-purple-500/50",
  },
  {
    icon: FileCheck,
    title: "Audit Logging",
    description: "Setiap aksi tercatat",
    color: "text-amber-400",
    borderColor: "hover:border-amber-500/50",
  },
];

export default function SecurityGrid() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {securityFeatures.map((feature, i) => {
        const Icon = feature.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className={`p-4 bg-slate-950 rounded-lg border border-slate-800 ${feature.borderColor} transition-all duration-300 group cursor-pointer`}
          >
            <motion.div
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon className={`w-6 h-6 ${feature.color} mb-2`} />
            </motion.div>
            <h4 className="text-sm font-bold text-white mb-1">{feature.title}</h4>
            <p className="text-xs text-slate-400">{feature.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}