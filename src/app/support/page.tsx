"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LifeBuoy, MessageCircle, Mail, Phone, Clock, 
  AlertCircle, CheckCircle2, Send, FileText, 
  Zap, Shield, ChevronRight, BookOpen, X, Loader2
} from "lucide-react";
import Link from "next/link";

const supportChannels = [
  {
    id: "chat",
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat langsung dengan support engineer. Response time rata-rata < 5 menit di jam kerja.",
    availability: "24/7",
    responseTime: "< 5 menit",
    color: "from-emerald-500 to-teal-500",
    cta: "Mulai Chat",
    recommended: true,
  },
  {
    id: "email",
    icon: Mail,
    title: "Email Support",
    description: "Kirim ticket detail dengan screenshot dan log. Cocok untuk masalah kompleks.",
    availability: "24/7",
    responseTime: "< 2 jam",
    color: "from-blue-500 to-cyan-500",
    cta: "Kirim Email",
    recommended: false,
  },
  {
    id: "whatsapp",
    icon: Phone,
    title: "WhatsApp Business",
    description: "Hubungi tim support via WhatsApp untuk konsultasi cepat.",
    availability: "Senin-Jumat, 08:00-20:00",
    responseTime: "< 15 menit",
    color: "from-green-500 to-emerald-500",
    cta: "Chat WhatsApp",
    recommended: false,
  },
  {
    id: "ticket",
    icon: FileText,
    title: "Submit Ticket",
    description: "Form ticket terstruktur untuk tracking issue dengan SLA guarantee.",
    availability: "24/7",
    responseTime: "< 4 jam",
    color: "from-purple-500 to-pink-500",
    cta: "Buat Ticket",
    recommended: false,
  },
];

const selfHelpResources = [
  { icon: BookOpen, title: "Dokumentasi Lengkap", desc: "Panduan instalasi, konfigurasi, dan troubleshooting", href: "/docs", count: "120+ halaman" },
  { icon: MessageCircle, title: "Forum Komunitas", desc: "Tanya jawab dengan engineer lain", href: "/community", count: "2.4K diskusi" },
  { icon: AlertCircle, title: "Knowledge Base", desc: "Solusi untuk error umum dan FAQ teknis", href: "/faq", count: "200+ artikel" },
  { icon: Zap, title: "Video Tutorial", desc: "Panduan visual step-by-step", href: "https://youtube.com", count: "45+ video" },
];

const statusItems = [
  { name: "API Server", uptime: "99.99%" },
  { name: "Web Dashboard", uptime: "99.98%" },
  { name: "MQTT Broker", uptime: "99.99%" },
  { name: "Database Cluster", uptime: "99.97%" },
  { name: "Email Service", uptime: "99.95%" },
];

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    priority: "medium",
    subject: "",
    description: "",
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [ticketNumber, setTicketNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showChatModal, setShowChatModal] = useState(false);

  const handleChannelClick = (channelId: string) => {
    switch (channelId) {
      case "chat":
        setShowChatModal(true);
        break;
      case "email":
        window.location.href = "mailto:support@arvana-iot.com?subject=Support Request";
        break;
      case "whatsapp":
        window.open("https://wa.me/6281234567890?text=Halo%20Arvana%20Support,%20saya%20butuh%20bantuan", "_blank");
        break;
      case "ticket":
        document.getElementById("ticket-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setTicketNumber(result.data.ticketNumber);
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          category: "",
          priority: "medium",
          subject: "",
          description: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Gagal membuat ticket");
      }
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message || "Terjadi kesalahan koneksi");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6">
            <LifeBuoy className="w-4 h-4 text-emerald-400" />
            <span className="text-xs text-emerald-400 font-semibold tracking-wider">PUSAT BANTUAN</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Bagaimana Kami Bisa <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Membantu?</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Tim support kami siap membantu 24/7. Pilih channel yang paling sesuai dengan kebutuhan Anda.
          </p>
        </div>

        {/* System Status */}
        <section className="max-w-5xl mx-auto mb-16">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <h2 className="text-lg font-bold text-white">Status Sistem</h2>
              </div>
              <span className="text-sm font-semibold text-emerald-400">All Systems Operational</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {statusItems.map((item, i) => (
                <div key={i} className="p-3 bg-slate-950/50 border border-slate-800 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span className="text-xs font-medium text-slate-300 truncate">{item.name}</span>
                  </div>
                  <div className="text-[10px] text-slate-500">Uptime: {item.uptime}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="max-w-7xl mx-auto mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Channel Support</h2>
          <p className="text-slate-400 mb-8">Pilih cara tercepat untuk mendapatkan bantuan</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, i) => {
              const Icon = channel.icon;
              return (
                <motion.div
                  key={channel.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative bg-slate-900/50 border rounded-2xl p-6 transition-all ${
                    channel.recommended 
                      ? "border-emerald-500/50 hover:border-emerald-500" 
                      : "border-slate-800 hover:border-slate-700"
                  }`}
                >
                  {channel.recommended && (
                    <div className="absolute -top-3 left-6 px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
                      RECOMMENDED
                    </div>
                  )}

                  <div className={`p-3 bg-gradient-to-br ${channel.color} rounded-xl w-fit mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{channel.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {channel.description}
                  </p>

                  <div className="space-y-2 mb-5 text-xs">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Clock className="w-3 h-3" />
                      <span>{channel.availability}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Zap className="w-3 h-3" />
                      <span>Response: {channel.responseTime}</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => handleChannelClick(channel.id)}
                    className={`w-full py-2.5 rounded-lg font-medium text-sm transition-all flex items-center justify-center gap-2 ${
                      channel.recommended
                        ? "bg-emerald-600 hover:bg-emerald-500 text-white"
                        : "bg-slate-800 hover:bg-slate-700 text-white"
                    }`}
                  >
                    {channel.cta}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Self-Help Resources */}
        <section className="max-w-7xl mx-auto mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Self-Help Resources</h2>
          <p className="text-slate-400 mb-8">Coba cari solusi sendiri terlebih dahulu</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {selfHelpResources.map((resource, i) => {
              const Icon = resource.icon;
              return (
                <Link
                  key={i}
                  href={resource.href}
                  className="group p-5 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-blue-500/30 transition-all"
                >
                  <Icon className="w-8 h-8 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-white mb-1">{resource.title}</h3>
                  <p className="text-sm text-slate-400 mb-3">{resource.desc}</p>
                  <div className="text-xs text-slate-500">{resource.count}</div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Ticket Form */}
        <section id="ticket-form" className="max-w-3xl mx-auto scroll-mt-24">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                <FileText className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Submit Support Ticket</h2>
                <p className="text-sm text-slate-400">Isi form di bawah untuk membuat ticket baru</p>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
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
                  <h3 className="text-2xl font-bold text-white mb-3">Ticket Berhasil Dibuat!</h3>
                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 mb-6 max-w-sm mx-auto">
                    <div className="text-xs text-slate-500 mb-1">ID Ticket Anda:</div>
                    <div className="text-2xl font-mono font-bold text-blue-400">{ticketNumber}</div>
                  </div>
                  <p className="text-slate-400 mb-2 max-w-md mx-auto">
                    Simpan ID ticket ini untuk tracking. Tim support kami akan merespons via email dalam waktu kurang dari 4 jam.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    Buat Ticket Lain
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-5"
                >
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Nama Lengkap *</label>
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
                      <label className="block text-sm font-medium text-slate-300 mb-2">Email *</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="john@example.com"
                        disabled={status === "loading"}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Kategori *</label>
                      <select
                        required
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                        disabled={status === "loading"}
                      >
                        <option value="">Pilih kategori</option>
                        <option value="technical">Masalah Teknis</option>
                        <option value="billing">Billing & Pembayaran</option>
                        <option value="integration">Integrasi (Home Assistant, dll)</option>
                        <option value="hardware">Hardware / Sensor</option>
                        <option value="account">Akun & Keamanan</option>
                        <option value="feature">Feature Request</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Prioritas</label>
                      <select
                        value={formData.priority}
                        onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                        disabled={status === "loading"}
                      >
                        <option value="low">Low - General Inquiry</option>
                        <option value="medium">Medium - Feature tidak bekerja</option>
                        <option value="high">High - Produksi terganggu</option>
                        <option value="critical">Critical - Sistem down</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Subjek *</label>
                    <input
                      required
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Ringkasan singkat masalah Anda"
                      disabled={status === "loading"}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Deskripsi Detail * <span className="text-xs text-slate-500 font-normal">(min. 20 karakter)</span>
                    </label>
                    <textarea
                      required
                      minLength={20}
                      rows={6}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="Jelaskan masalah Anda secara detail."
                      disabled={status === "loading"}
                    />
                    <div className="text-xs text-slate-500 mt-1 text-right">
                      {formData.description.length} / 5000 karakter
                    </div>
                  </div>

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-red-300">
                        <strong>Gagal:</strong> {errorMessage}
                      </div>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-lg transition-all shadow-lg shadow-purple-600/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Memproses...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Ticket
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* SLA Info */}
        <section className="max-w-4xl mx-auto mt-12">
          <div className="bg-gradient-to-br from-slate-900/50 to-slate-950/50 border border-slate-800 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-emerald-400" />
              <h3 className="text-lg font-bold text-white">SLA Guarantee</h3>
            </div>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-emerald-400 mb-1">&lt; 5m</div>
                <div className="text-xs text-slate-500">Critical Issues</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">&lt; 2h</div>
                <div className="text-xs text-slate-500">High Priority</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">&lt; 4h</div>
                <div className="text-xs text-slate-500">Medium Priority</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-400 mb-1">&lt; 24h</div>
                <div className="text-xs text-slate-500">Low Priority</div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Live Chat Modal */}
      <AnimatePresence>
        {showChatModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowChatModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-md overflow-hidden"
            >
              <div className="p-5 bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Live Chat Support</h3>
                  <p className="text-xs text-emerald-100">Online • Response &lt; 5 menit</p>
                </div>
                <button
                  onClick={() => setShowChatModal(false)}
                  className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                    <LifeBuoy className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-slate-800 rounded-2xl rounded-tl-none p-3 text-sm text-slate-200 max-w-[80%]">
                    Halo! 👋 Selamat datang di Arvana Support. Ada yang bisa kami bantu?
                  </div>
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-sm text-slate-400">
                  <p className="mb-3">
                    <strong className="text-white">Demo Mode:</strong> Fitur live chat real-time membutuhkan integrasi dengan layanan seperti Intercom atau Crisp.
                  </p>
                  <p className="mb-3">Untuk saat ini, gunakan alternatif berikut:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                      WhatsApp: <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">+62 812 3456 7890</a>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      Discord: <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Join Server</a>
                    </li>
                  </ul>
                </div>

                <div className="flex gap-2">
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded-lg transition-colors text-center"
                  >
                    Chat WhatsApp
                  </a>
                  <button
                    onClick={() => {
                      setShowChatModal(false);
                      setTimeout(() => {
                        document.getElementById("ticket-form")?.scrollIntoView({ behavior: "smooth" });
                      }, 300);
                    }}
                    className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    Submit Ticket
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
