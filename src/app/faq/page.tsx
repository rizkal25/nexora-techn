"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, ChevronDown, HelpCircle, MessageCircle, 
  Zap, Shield, Cpu, Code, Database, Home, 
  FileText, Lock, Wifi, AlertCircle, Users
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqCategories = [
  { id: "all", name: "Semua", icon: HelpCircle, count: 18 },
  { id: "product", name: "Produk", icon: Zap, count: 4 },
  { id: "technical", name: "Teknis", icon: Cpu, count: 5 },
  { id: "integration", name: "Integrasi", icon: Home, count: 3 },
  { id: "security", name: "Keamanan", icon: Shield, count: 3 },
  { id: "billing", name: "Billing", icon: FileText, count: 3 },
];

const faqData: FAQItem[] = [
  {
    category: "product",
    question: "Apa itu Arvana MCB IoT dan bagaimana cara kerjanya?",
    answer: "Arvana MCB IoT adalah sistem monitoring dan kontrol Miniature Circuit Breaker (MCB) berbasis Internet of Things. Sistem ini menggabungkan sensor energi (PZEM-004T), mikrokontroler (ESP32), dan MCB pintar (Tuya TS0121) yang terintegrasi dengan Home Assistant. Data telemetry (Voltage, Current, Power, Power Factor) dikirim via MQTT ke backend Next.js kami, yang kemudian menerapkan algoritma Trapezoidal Rule untuk menghitung konsumsi energi (kWh) dengan akurasi 99.9%."
  },
  {
    category: "product",
    question: "Apa perbedaan antara versi Basic, Professional, dan Enterprise?",
    answer: "Versi Basic mendukung hingga 5 device dengan monitoring real-time dasar. Versi Professional menambahkan fitur scheduling, cycle timer, dan engineering report otomatis hingga 50 device. Versi Enterprise mencakup semua fitur Professional ditambah multi-tenant, white-label, SLA 99.9%, audit logging, dan dedicated support 24/7 untuk unlimited device."
  },
  {
    category: "product",
    question: "Apakah Arvana mendukung monitoring 3-phase listrik?",
    answer: "Ya, Arvana mendukung single-phase dan 3-phase (tiga fase). Untuk 3-phase, kami menggunakan 3 modul sensor PZEM-004T yang masing-masing membaca fase R, S, dan T. Dashboard akan menampilkan data per-fase dan total agregat, termasuk unbalance analysis dan total power factor."
  },
  {
    category: "product",
    question: "Berapa lama garansi hardware dan apa cakupannya?",
    answer: "Hardware Arvana (sensor + enclosure) memiliki garansi 2 tahun yang mencakup cacat manufaktur dan kerusakan normal. Tidak mencakup kerusakan akibat bencana alam, modifikasi unauthorized, atau penggunaan di luar spesifikasi (misal: melebihi rating arus 63A). Software mendapat update gratis selamanya selama berlangganan aktif."
  },
  {
    category: "technical",
    question: "Bagaimana algoritma Trapezoidal Rule meningkatkan akurasi perhitungan kWh?",
    answer: "Ketika sensor mengalami packet loss atau data stuck, metode konvensional (Riemann Sum) akan menghasilkan error besar. Trapezoidal Rule menginterpolasi data yang hilang dengan menghitung luas area di bawah kurva daya-waktu menggunakan pendekatan trapesium: Energy = (P1 + P2)/2 × Δt. Hasil benchmark kami menunjukkan error rate turun dari 8-12% (Riemann) menjadi <0.1% (Trapezoidal) pada kondisi jaringan tidak stabil."
  },
  {
    category: "technical",
    question: "Apa yang terjadi jika koneksi internet mati?",
    answer: "Sistem kami dirancang dengan prinsip 'local-first'. Jika internet mati, Home Assistant tetap berfungsi lokal via MQTT broker (Mosquitto). Data sensor disimpan di buffer lokal ESP32 (hingga 24 jam) dan di InfluxDB lokal. Saat koneksi pulih, data akan di-sync ke cloud PostgreSQL kami. Kontrol relay tetap berfungsi via automasi lokal Home Assistant."
  },
  {
    category: "technical",
    question: "Berapa latensi dari sensor ke dashboard?",
    answer: "Untuk koneksi lokal (LAN), latensi end-to-end adalah 50-150ms. Untuk koneksi cloud (via internet), latensi rata-rata 200-400ms tergantung lokasi server dan kualitas jaringan. Kami menggunakan WebSocket untuk push notification real-time, sehingga dashboard update tanpa perlu refresh manual."
  },
  {
    category: "technical",
    question: "Apakah saya bisa menggunakan database sendiri?",
    answer: "Ya, untuk versi Enterprise, kami mendukung deployment on-premise dengan database pilihan Anda: PostgreSQL (default), TimescaleDB (untuk time-series optimal), atau InfluxDB. Kami menyediakan Docker Compose dan Helm charts untuk Kubernetes deployment. Tim engineering kami akan membantu migrasi dan setup."
  },
  {
    category: "technical",
    question: "Bagaimana mekanisme fallback saat sensor stuck?",
    answer: "Sistem kami memiliki 3 layer fallback: (1) Interpolasi linear berdasarkan data historis 1 jam terakhir, (2) Penggunaan rata-rata beban pada jam yang sama di hari-hari sebelumnya, (3) Flagging data sebagai 'estimated' di Engineering Report sehingga auditor tahu data tersebut adalah estimasi, bukan pengukuran langsung."
  },
  {
    category: "integration",
    question: "Apakah Arvana kompatibel dengan Home Assistant?",
    answer: "100% kompatibel. Arvana terintegrasi native dengan Home Assistant via MQTT dan REST API. Kami menyediakan custom component HACS (Home Assistant Community Store) yang memudahkan instalasi. Semua entity (sensor, switch, binary_sensor) otomatis ter-discovery dan bisa digunakan di Lovelace dashboard, automations, dan scripts."
  },
  {
    category: "integration",
    question: "Bisa integrasi dengan Google Home atau Alexa?",
    answer: "Ya, melalui Home Assistant. Setelah Arvana terintegrasi dengan Home Assistant, Anda bisa expose entity ke Google Home via Google Cast integration atau ke Alexa via Home Assistant Cloud (Nabu Casa). Anda bisa kontrol relay via voice command: 'Hey Google, turn off server room MCB'."
  },
  {
    category: "integration",
    question: "Apakah ada webhook untuk integrasi dengan sistem lain?",
    answer: "Ya, kami menyediakan webhook untuk event-event kritis: relay ON/OFF, threshold alert (overvoltage, overcurrent), dan daily report generation. Anda bisa konfigurasi webhook URL di dashboard, dan kami akan kirim POST request dengan payload JSON. Dokumentasi lengkap tersedia di /docs/webhooks."
  },
  {
    category: "security",
    question: "Bagaimana keamanan data saya di Arvana?",
    answer: "Kami menerapkan security by design: (1) Semua data dienkripsi AES-256 at-rest dan TLS 1.3 in-transit, (2) Autentikasi menggunakan JWT dengan refresh token rotation, (3) Rate limiting per IP dan per user untuk mencegah brute-force, (4) Input validation ketat dengan Zod di setiap endpoint, (5) Audit logging untuk setiap aksi kritis, (6) Regular penetration testing oleh pihak ketiga."
  },
  {
    category: "security",
    question: "Apakah data saya bisa diakses oleh pihak ketiga?",
    answer: "Tidak. Data Anda adalah milik Anda 100%. Kami tidak menjual, membagikan, atau menggunakan data Anda untuk tujuan apapun selain menyediakan layanan. Server kami berada di region yang Anda pilih (Indonesia/Singapore), dan kami compliant dengan UU PDP (Pelindungan Data Pribadi) Indonesia serta GDPR untuk klien Eropa."
  },
  {
    category: "security",
    question: "Bagaimana jika saya lupa password atau akun di-hack?",
    answer: "Kami menyediakan fitur Self-Service Password Reset via email verifikasi. Jika akun di-hack, segera hubungi support@arvana-iot.com atau WhatsApp darurat +62 812 3456 7890. Tim security kami akan: (1) revoke semua session aktif, (2) force password reset, (3) audit log aktivitas mencurigakan, (4) enable 2FA wajib jika belum aktif."
  },
  {
    category: "billing",
    question: "Apakah ada free trial?",
    answer: "Ya, kami menyediakan free trial 14 hari untuk versi Professional tanpa perlu kartu kredit. Anda mendapat akses penuh ke semua fitur, termasuk engineering report dan scheduling. Setelah trial, Anda bisa downgrade ke versi Basic (gratis selamanya, 5 device) atau upgrade ke Professional/Enterprise."
  },
  {
    category: "billing",
    question: "Metode pembayaran apa yang diterima?",
    answer: "Kami menerima: (1) Transfer Bank (BCA, Mandiri, BNI, BRI), (2) E-wallet (GoPay, OVO, DANA, ShopeePay), (3) Kartu Kredit/Debit (Visa, Mastercard), (4) Virtual Account, (5) QRIS. Untuk klien Enterprise, kami juga mendukung Purchase Order dan invoice dengan termin pembayaran NET 30."
  },
  {
    category: "billing",
    question: "Apakah bisa refund jika tidak puas?",
    answer: "Kami menawarkan money-back guarantee 30 hari. Jika dalam 30 hari pertama Anda tidak puas dengan layanan, hubungi support kami dan kami akan refund 100% tanpa pertanyaan. Setelah 30 hari, refund dilakukan secara pro-rata untuk sisa periode berlangganan yang belum terpakai, dengan biaya admin 10%."
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) => 
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const filteredFAQs = faqData.filter((faq) => {
    const matchCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchSearch = 
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-blue-400" />
            <span className="text-xs text-blue-400 font-semibold tracking-wider">PUSAT BANTUAN</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Pertanyaan yang <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Sering Diajukan</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan umum seputar produk, teknis, integrasi, keamanan, dan billing Arvana IoT.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari pertanyaan... (misal: 'trapezoidal', 'Home Assistant', 'refund')"
              className="w-full pl-12 pr-4 py-4 bg-slate-900 border border-slate-800 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="max-w-5xl mx-auto mb-10 overflow-x-auto">
          <div className="flex gap-2 min-w-max pb-2">
            {faqCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-800"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.name}
                  <span className={`text-xs px-1.5 py-0.5 rounded ${
                    isActive ? "bg-white/20" : "bg-white/5"
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-3">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-16 bg-slate-900/50 border border-slate-800 rounded-2xl">
              <AlertCircle className="w-12 h-12 text-slate-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Tidak ada hasil</h3>
              <p className="text-slate-400 mb-6">
                Coba kata kunci lain atau hubungi tim support kami.
              </p>
              <Link 
                href="/support"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Hubungi Support
              </Link>
            </div>
          ) : (
            filteredFAQs.map((faq, index) => {
              const isOpen = openItems.includes(index);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-colors"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 flex items-start gap-4 text-left group"
                  >
                    <div className={`flex-shrink-0 p-2 rounded-lg transition-colors ${
                      isOpen ? "bg-blue-500/20" : "bg-slate-800 group-hover:bg-slate-700"
                    }`}>
                      <HelpCircle className={`w-5 h-5 transition-colors ${
                        isOpen ? "text-blue-400" : "text-slate-400"
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-base md:text-lg font-semibold transition-colors ${
                        isOpen ? "text-white" : "text-slate-200 group-hover:text-white"
                      }`}>
                        {faq.question}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs px-2 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-400 capitalize">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                    <ChevronDown className={`flex-shrink-0 w-5 h-5 text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-blue-400" : ""
                    }`} />
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pl-[4.5rem]">
                          <div className="pt-4 border-t border-slate-800">
                            <p className="text-slate-300 leading-relaxed">
                              {faq.answer}
                            </p>
                            <div className="mt-4 flex items-center gap-3">
                              <span className="text-xs text-slate-500">Apakah jawaban ini membantu?</span>
                              <button className="text-xs px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full hover:bg-emerald-500/20 transition-colors">
                                👍 Ya
                              </button>
                              <button className="text-xs px-3 py-1 bg-slate-800 border border-slate-700 text-slate-400 rounded-full hover:bg-slate-700 transition-colors">
                                👎 Tidak
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          )}
        </div>

        {/* Still Need Help CTA
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-br from-blue-950/50 to-purple-950/50 border border-blue-500/20 rounded-3xl p-8 md:p-12 text-center">
            <MessageCircle className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Masih Punya Pertanyaan?
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Tim support kami siap membantu 24/7. Response time rata-rata kurang dari 2 jam di hari kerja.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link 
                href="/support"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/20"
              >
                <MessageCircle className="w-4 h-4" />
                Submit Ticket
              </Link>
              <Link 
                href="/community"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 transition-all"
              >
                <Users className="w-4 h-4" />
                Tanya di Community
              </Link>
            </div>
          </div>
        </div> */}

      </div>
    </main>
  );
}
