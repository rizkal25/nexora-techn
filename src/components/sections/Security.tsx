"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, FileSearch, Activity } from "lucide-react";

const securityFeatures = [
  {
    icon: <Lock className="w-6 h-6 text-blue-400" />,
    title: "JWT & Encrypted Tokens",
    desc: "Autentikasi stateless dengan JSON Web Tokens yang dienkripsi, memastikan setiap request terverifikasi.",
  },
  {
    icon: <Activity className="w-6 h-6 text-purple-400" />,
    title: "Rate Limiting",
    desc: "Proteksi terhadap brute-force dan DDoS dengan pembatasan request berbasis IP dan user session.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
    title: "Zod Input Validation",
    desc: "Validasi schema yang ketat di setiap endpoint API untuk mencegah SQL Injection dan XSS attacks.",
  },
  {
    icon: <FileSearch className="w-6 h-6 text-amber-400" />,
    title: "Audit Logging",
    desc: "Pencatatan lengkap setiap aksi kontrol (ON/OFF Relay) dengan timestamp dan user ID untuk keperluan forensik.",
  },
];

export default function Security() {
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
            Enterprise-Grade <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Security</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Keamanan bukan fitur tambahan, melainkan fondasi. Sistem ini dirancang dengan prinsip "Security by Design".
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500/30 transition-all duration-300 group"
            >
              <div className="mb-4 p-3 bg-slate-900 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}