"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, ChevronDown, HelpCircle, MessageCircle, 
  Zap, Shield, Cpu, Code, Database, Home, 
  FileText, Lock, Wifi, AlertCircle, Users, Lightbulb, Building2
} from "lucide-react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqCategories = [
  { id: "all", name: "Semua", icon: HelpCircle, count: 21 },
  { id: "product", name: "Produk", icon: Zap, count: 4 },
  { id: "needs", name: "Kebutuhan", icon: Lightbulb, count: 5 },
  { id: "technical", name: "Teknis", icon: Cpu, count: 4 },
  { id: "integration", name: "Integrasi", icon: Home, count: 3 },
  { id: "security", name: "Keamanan", icon: Shield, count: 3 },
  { id: "billing", name: "Billing", icon: FileText, count: 3 },
];

const faqData: FAQItem[] = [
  // ==================== PRODUCT ====================
  {
    category: "product",
    question: "Apa itu Arvana MCB IoT dan bagaimana cara kerjanya?",
    answer: "Arvana MCB IoT adalah sistem monitoring dan kontrol listrik berbasis Internet of Things yang menggunakan Smart MCB dan Smart Switch. Perangkat ini memiliki fitur built-in metering (Class 1) untuk membaca Tegangan (V), Arus (A), Daya (W), dan Energi (kWh) secara real-time. Sistem terintegrasi penuh dengan Home Assistant melalui protokol lokal (LocalTuya), sehingga Anda bisa mengontrol dan memantau listrik dari mana saja tanpa bergantung pada cloud."
  },
  {
    category: "product",
    question: "Apa perbedaan antara versi Basic, Professional, dan Enterprise?",
    answer: "Versi Basic mendukung hingga 5 device dengan monitoring real-time dasar. Versi Professional menambahkan fitur scheduling, cycle timer, dan engineering report otomatis hingga 50 device. Versi Enterprise mencakup semua fitur Professional ditambah multi-tenant, white-label, SLA 99.9%, audit logging, dan dedicated support 24/7 untuk unlimited device."
  },
  {
    category: "product",
    question: "Apakah Arvana mendukung monitoring 3-phase listrik?",
    answer: "Ya, kami menyediakan Smart MCB untuk 1-Phase (hingga 63A) dan 3-Phase. Untuk 3-Phase, dashboard Arvana akan menampilkan data agregat dari ketiga fase secara real-time, termasuk total daya, arus per-fase, dan keseimbangan beban (unbalance analysis)."
  },
  {
    category: "product",
    question: "Berapa lama garansi hardware dan apa cakupannya?",
    answer: "Smart MCB dan Smart Switch memiliki garansi 1 tahun yang mencakup cacat manufaktur dan kerusakan normal. Tidak mencakup kerusakan akibat bencana alam, modifikasi unauthorized, atau penggunaan di luar spesifikasi (misal: melebihi rating arus 63A). Software mendapat update gratis selamanya selama berlangganan aktif."
  },

  // ==================== KEBUTUHAN CUSTOMER ====================
  {
    category: "needs",
    question: "Bagaimana cara menentukan kapasitas MCB yang sesuai untuk rumah/kantor saya?",
    answer: "Untuk rumah tangga standar (1-2 AC, kulkas, TV, lampu), kami merekomendasikan Smart MCB 32A-40A. Untuk kantor kecil atau rumah dengan banyak peralatan elektronik, gunakan 50A-63A. Untuk industri atau gedung komersial dengan beban tinggi, kami menyediakan versi 3-Phase hingga 100A. Tim kami bisa membantu survey beban listrik Anda secara gratis."
  },
  {
    category: "needs",
    question: "Apakah Smart MCB bisa digunakan untuk mengontrol AC, water heater, atau peralatan daya tinggi?",
    answer: "Ya, Smart MCB kami dirancang untuk menangani beban tinggi hingga 63A (sekitar 14.000 Watt pada 220V). Ini cukup untuk mengontrol AC 2 PK, water heater, mesin cuci, hingga server rack. Untuk peralatan dengan starting current tinggi (seperti motor induksi), kami merekomendasikan penggunaan MCB dengan rating 20% lebih tinggi dari beban normal."
  },
  {
    category: "needs",
    question: "Apakah ada fitur untuk monitoring dan penghematan energi?",
    answer: "Ya, Arvana menyediakan fitur lengkap untuk penghematan energi: (1) Real-time monitoring konsumsi daya per-sirkuit, (2) Historical data hingga 1 tahun untuk analisis tren, (3) Engineering Report bulanan yang menunjukkan peralatan paling boros, (4) Fitur scheduling untuk mematikan perangkat otomatis di jam tertentu, (5) Alert jika konsumsi melebihi threshold yang ditentukan."
  },
  {
    category: "needs",
    question: "Apakah sistem ini cocok untuk kost, kontrakan, atau gedung komersial?",
    answer: "Sangat cocok! Untuk kost/kontrakan, Anda bisa memasang Smart MCB di setiap kamar untuk monitoring dan pembatasan daya per-penyewa. Versi Enterprise mendukung multi-tenant, sehingga Anda bisa mengelola ratusan kamar dari satu dashboard. Fitur auto-cut off juga bisa mencegah penyewa menggunakan daya melebihi kapasitas yang ditentukan."
  },
  {
    category: "needs",
    question: "Bagaimana jika saya ingin mengontrol beberapa perangkat sekaligus?",
    answer: "Arvana mendukung kontrol grup (group control). Anda bisa mengelompokkan beberapa Smart MCB/Switch dalam satu grup (misal: 'Lantai 1', 'Ruang Server', 'Semua AC') dan mengontrol mereka bersamaan dengan satu klik. Fitur ini sangat berguna untuk skenario seperti 'Matikan semua lampu saat tidur' atau 'Aktifkan mode hemat energi'."
  },

  // ==================== TECHNICAL ====================
  {
    category: "technical",
    question: "Seberapa akurat pembacaan kWh pada Smart MCB?",
    answer: "Smart MCB yang kami gunakan memiliki sertifikasi Class 1 (IEC 62053-21) untuk metering energi, yang berarti tingkat akurasinya sangat tinggi dengan error < 1%. Karena pembacaan dilakukan langsung oleh chip metering bawaan di dalam MCB (bukan sensor eksternal), data yang ditampilkan di dashboard Arvana adalah data murni dari perangkat dengan latensi yang sangat minim."
  },
  {
    category: "technical",
    question: "Apa yang terjadi jika koneksi internet mati?",
    answer: "Sistem kami dirancang dengan prinsip 'local-first'. Jika internet mati, Home Assistant tetap berfungsi 100% melalui jaringan lokal (LAN) menggunakan integrasi LocalTuya. Semua automasi, kontrol relay, dan pencatatan data ke database lokal tetap berjalan normal. Saat koneksi internet pulih, data akan di-sync ke cloud (jika Anda menggunakan versi cloud)."
  },
  {
    category: "technical",
    question: "Berapa latensi dari perintah di dashboard ke relay MCB?",
    answer: "Karena Arvana menggunakan kontrol lokal (LocalTuya via Home Assistant), latensi untuk perintah ON/OFF relay di jaringan LAN adalah di bawah 100ms. Untuk pembaruan data sensor (Voltage, Current, Power) di dashboard, polling rate dapat dikonfigurasi (default 5-10 detik) untuk menjaga kestabilan jaringan lokal."
  },
  {
    category: "technical",
    question: "Apakah saya bisa menggunakan database sendiri?",
    answer: "Ya, untuk versi Enterprise, kami mendukung deployment on-premise dengan database pilihan Anda: PostgreSQL (default), TimescaleDB (untuk time-series optimal), atau InfluxDB. Kami menyediakan Docker Compose dan Helm charts untuk Kubernetes deployment. Tim engineering kami akan membantu migrasi dan setup."
  },

  // ==================== INTEGRATION ====================
  {
    category: "integration",
    question: "Apakah Arvana kompatibel dengan Home Assistant?",
    answer: "100% kompatibel. Arvana terintegrasi native dengan Home Assistant via LocalTuya dan REST API. Semua entity (sensor, switch, binary_sensor) otomatis ter-discovery dan bisa digunakan di Lovelace dashboard, automations, dan scripts. Kami juga menyediakan dokumentasi lengkap untuk konfigurasi advanced."
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

  // ==================== SECURITY ====================
  {
    category: "security",
    question: "Bagaimana keamanan data saya di Arvana?",
    answer: "Kami menerapkan security by design: (1) Semua data dienkripsi AES-256 at-rest dan TLS 1.3 in-transit, (2) Autentikasi menggunakan JWT dengan refresh token rotation, (3) Rate limiting per IP dan per user untuk mencegah brute-force, (4) Input validation ketat dengan Zod di setiap endpoint, (5) Audit logging untuk setiap aksi kritis, (6) Kontrol lokal berarti data sensitif tidak perlu keluar dari jaringan Anda."
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
            Temukan jawaban untuk pertanyaan umum seputar produk, kebutuhan, teknis, integrasi, keamanan, dan billing Arvana IoT.
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
              placeholder="Cari pertanyaan... (misal: 'kapasitas MCB', 'Home Assistant', 'refund')"
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
      </div>
    </main>
  );
}
