"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Calendar, Clock, Building2, Users, Mail, Phone, 
  MessageSquare, CheckCircle2, AlertCircle, Loader2,
  ArrowLeft, Zap, Shield, TrendingUp, Cpu
} from "lucide-react";
import Link from "next/link";

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    industry: "",
    deviceCount: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const industries = [
    "Smart Home",
    "Commercial Building",
    "Industrial / Factory",
    "Data Center",
    "Hospitality / Hotel",
    "Retail / Mall",
    "Education / Campus",
    "Healthcare",
    "Other",
  ];

  const timeSlots = [
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "13:00 - 14:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Gagal mengirim request demo");
      }
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message || "Terjadi kesalahan koneksi");
    }
  };

  const benefits = [
    { icon: Zap, title: "Live Demo", desc: "Lihat langsung dashboard monitoring real-time" },
    { icon: Shield, title: "Q&A Session", desc: "Tanyakan apapun tentang integrasi & keamanan" },
    { icon: TrendingUp, title: "ROI Analysis", desc: "Hitung penghematan energi untuk bisnis Anda" },
    { icon: Cpu, title: "Technical Deep Dive", desc: "Pelajari arsitektur sistem & algoritma kami" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Beranda
        </Link>

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6"
          >
            <Calendar className="w-4 h-4 text-blue-400" />
            <span className="text-xs text-blue-400 font-semibold tracking-wider">BOOK A DEMO</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Jadwalkan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Demo Personal</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto"
          >
            Dapatkan demo eksklusif 30 menit dengan tim engineering kami. 
            Lihat langsung bagaimana Nexora IoT dapat meningkatkan efisiensi energi bisnis Anda.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto mb-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div key={i} className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                <Icon className="w-6 h-6 text-blue-400 mb-2" />
                <h3 className="text-sm font-bold text-white mb-1">{benefit.title}</h3>
                <p className="text-xs text-slate-400">{benefit.desc}</p>
              </div>
            );
          })}
        </motion.div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-8">
          
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8">
              
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-20 h-20 bg-emerald-500/10 border-2 border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3">Demo Berhasil Dijadwalkan!</h3>
                  <p className="text-slate-400 mb-6 max-w-md mx-auto">
                    Terima kasih! Tim kami akan menghubungi Anda dalam 1x24 jam untuk konfirmasi jadwal demo.
                  </p>
                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 mb-6 max-w-sm mx-auto">
                    <div className="text-xs text-slate-500 mb-2">Detail Demo:</div>
                    <div className="text-sm text-white space-y-1">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Nama:</span>
                        <span className="font-medium">{formData.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Tanggal:</span>
                        <span className="font-medium">{formData.preferredDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Waktu:</span>
                        <span className="font-medium">{formData.preferredTime}</span>
                      </div>
                    </div>
                  </div>
                  <Link 
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    Kembali ke Beranda
                  </Link>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="John Doe"
                        disabled={status === "loading"}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Email *
                      </label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="john@company.com"
                        disabled={status === "loading"}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Perusahaan
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="PT. Contoh Perusahaan"
                        disabled={status === "loading"}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        No. Telepon / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="+62 812 3456 7890"
                        disabled={status === "loading"}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Industri / Sektor
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                      disabled={status === "loading"}
                    >
                      <option value="">Pilih industri</option>
                      {industries.map((ind) => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Jumlah Device yang Diminati
                    </label>
                    <select
                      value={formData.deviceCount}
                      onChange={(e) => setFormData({ ...formData, deviceCount: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                      disabled={status === "loading"}
                    >
                      <option value="">Pilih jumlah</option>
                      <option value="1-10">1 - 10 devices</option>
                      <option value="11-50">11 - 50 devices</option>
                      <option value="51-100">51 - 100 devices</option>
                      <option value="100+">100+ devices</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Tanggal Preferensi *
                      </label>
                      <input
                        required
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                        disabled={status === "loading"}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Waktu Preferensi *
                      </label>
                      <select
                        required
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                        disabled={status === "loading"}
                      >
                        <option value="">Pilih waktu</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time} WIB</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Pesan Tambahan
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="Ceritakan kebutuhan spesifik Anda atau pertanyaan yang ingin dibahas saat demo..."
                      disabled={status === "loading"}
                    />
                  </div>

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-lg"
                    >
                      <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-red-300">{errorMessage}</span>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Mengirim Request...
                      </>
                    ) : (
                      <>
                        <Calendar className="w-4 h-4" />
                        Jadwalkan Demo Sekarang
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    Demo gratis 30 menit via Zoom/Google Meet. Tim kami akan menghubungi Anda untuk konfirmasi.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gradient-to-br from-blue-950/50 to-purple-950/50 border border-blue-500/30 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Apa yang Akan Anda Dapatkan?</h3>
              <ul className="space-y-3">
                {[
                  "Live demo dashboard monitoring",
                  "Penjelasan algoritma Trapezoidal",
                  "Integrasi Home Assistant",
                  "Studi kasus & ROI analysis",
                  "Q&A dengan tim engineering",
                  "Custom quote untuk kebutuhan Anda",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Butuh Bantuan Cepat?</h3>
              <div className="space-y-3">
                <a 
                  href="mailto:hello@nexora-iot.com"
                  className="flex items-center gap-3 p-3 bg-slate-950 border border-slate-800 rounded-lg hover:border-blue-500/30 transition-colors"
                >
                  <Mail className="w-5 h-5 text-blue-400" />
                  <div>
                    <div className="text-xs text-slate-500">Email</div>
                    <div className="text-sm text-white">hello@nexora-iot.com</div>
                  </div>
                </a>
                <a 
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-slate-950 border border-slate-800 rounded-lg hover:border-emerald-500/30 transition-colors"
                >
                  <Phone className="w-5 h-5 text-emerald-400" />
                  <div>
                    <div className="text-xs text-slate-500">WhatsApp</div>
                    <div className="text-sm text-white">+62 812 3456 7890</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}