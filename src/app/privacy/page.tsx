import { Shield, Lock, Eye, Database, Mail, Calendar } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi - Arvana",
  description: "Kebijakan privasi Arvana. Pelajari bagaimana kami melindungi data pribadi Anda.",
};

export default function PrivacyPage() {
  const lastUpdated = "10 Juni 2026";

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-xs text-blue-400 font-semibold tracking-wider">LEGAL DOCUMENT</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Kebijakan Privasi</h1>
          <p className="text-slate-400 text-lg mb-2">
            Terakhir diperbarui: <span className="text-white font-medium">{lastUpdated}</span>
          </p>
          <p className="text-slate-400 leading-relaxed">
            Di Arvana, kami berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. 
            Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="max-w-4xl mx-auto mb-12 p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
          <h2 className="text-lg font-bold text-white mb-4">Daftar Isi</h2>
          <div className="grid md:grid-cols-2 gap-2">
            {[
              { id: "info-collect", title: "1. Informasi yang Kami Kumpulkan" },
              { id: "info-use", title: "2. Penggunaan Informasi" },
              { id: "data-sharing", title: "3. Berbagi Data" },
              { id: "data-security", title: "4. Keamanan Data" },
              { id: "data-retention", title: "5. Retensi Data" },
              { id: "your-rights", title: "6. Hak Anda" },
              { id: "cookies", title: "7. Cookies & Tracking" },
              { id: "children", title: "8. Privasi Anak" },
              { id: "changes", title: "9. Perubahan Kebijakan" },
              { id: "contact", title: "10. Hubungi Kami" },
            ].map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-sm text-slate-400 hover:text-blue-400 transition-colors py-1">
                {item.title}
              </a>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          
          <section id="info-collect">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <Database className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">1. Informasi yang Kami Kumpulkan</h2>
            </div>
            <div className="pl-12 space-y-4 text-slate-400 leading-relaxed">
              <p>Kami mengumpulkan beberapa jenis informasi untuk menyediakan dan meningkatkan layanan kami:</p>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">a. Informasi Pribadi</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Nama lengkap dan alamat email</li>
                  <li>Nomor telepon (jika diberikan)</li>
                  <li>Informasi perusahaan (untuk akun bisnis)</li>
                  <li>Data pembayaran (diproses melalui payment gateway terenkripsi)</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">b. Informasi Teknis</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Alamat IP dan lokasi geografis</li>
                  <li>Jenis perangkat dan browser</li>
                  <li>Data penggunaan aplikasi</li>
                  <li>Log aktivitas device IoT yang terhubung</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">c. Data Device IoT</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Reading sensor (voltage, current, power, energy)</li>
                  <li>Status device dan event log</li>
                  <li>Konfigurasi device dan schedule</li>
                  <li>Data ini disimpan terenkripsi dan hanya dapat diakses oleh pemilik akun</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="info-use">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <Eye className="w-5 h-5 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">2. Penggunaan Informasi</h2>
            </div>
            <div className="pl-12 space-y-4 text-slate-400 leading-relaxed">
              <p>Informasi yang kami kumpulkan digunakan untuk:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Menyediakan dan memelihara layanan Arvana IoT Platform</li>
                <li>Memproses transaksi dan mengirim notifikasi terkait akun</li>
                <li>Mengirim update produk, tips, dan informasi promosi (dengan persetujuan)</li>
                <li>Menganalisis penggunaan untuk meningkatkan kualitas layanan</li>
                <li>Memberikan dukungan teknis dan customer service</li>
                <li>Memastikan keamanan platform dan mencegah penyalahgunaan</li>
                <li>Mematuhi kewajiban hukum dan regulasi yang berlaku</li>
              </ul>
            </div>
          </section>

          <section id="data-sharing">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 bg-emerald-500/10 rounded-lg">
                <Shield className="w-5 h-5 text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">3. Berbagi Data</h2>
            </div>
            <div className="pl-12 space-y-4 text-slate-400 leading-relaxed">
              <p>
                Kami <strong className="text-white">TIDAK</strong> menjual data pribadi Anda kepada pihak ketiga. 
                Kami hanya berbagi informasi dalam kondisi berikut:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">Service Providers:</strong> Pihak ketiga tepercaya yang membantu operasional kami (hosting, payment gateway) dengan kontrak kerahasiaan ketat</li>
                <li><strong className="text-white">Kewajiban Hukum:</strong> Jika diwajibkan oleh hukum, peraturan, atau proses hukum</li>
                <li><strong className="text-white">Dengan Persetujuan Anda:</strong> Ketika Anda memberikan persetujuan eksplisit</li>
                <li><strong className="text-white">Transfer Bisnis:</strong> Dalam kasus merger, akuisisi, atau penjualan aset (dengan notifikasi sebelumnya)</li>
              </ul>
            </div>
          </section>

          <section id="data-security">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 bg-amber-500/10 rounded-lg">
                <Lock className="w-5 h-5 text-amber-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">4. Keamanan Data</h2>
            </div>
            <div className="pl-12 space-y-4 text-slate-400 leading-relaxed">
              <p>Kami menerapkan langkah-langkah keamanan tingkat enterprise untuk melindungi data Anda:</p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                {[
                  { title: "Enkripsi End-to-End", desc: "AES-256 untuk data at-rest dan TLS 1.3 untuk data in-transit" },
                  { title: "JWT Authentication", desc: "Token-based auth dengan expiry pendek dan refresh token rotation" },
                  { title: "Rate Limiting", desc: "Proteksi terhadap brute force dan DDoS attacks" },
                  { title: "Audit Logging", desc: "Setiap aksi tercatat dengan timestamp dan IP address" },
                  { title: "Regular Security Audit", desc: "Penetration testing dan vulnerability scanning bulanan" },
                  { title: "GDPR Compliant", desc: "Sesuai dengan standar privasi data internasional" },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                    <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="data-retention">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 bg-cyan-500/10 rounded-lg">
                <Calendar className="w-5 h-5 text-cyan-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">5. Retensi Data</h2>
            </div>
            <div className="pl-12 space-y-4 text-slate-400 leading-relaxed">
              <p>Kami menyimpan data Anda selama diperlukan untuk menyediakan layanan:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">Data Akun:</strong> Selama akun aktif + 30 hari setelah penghapusan</li>
                <li><strong className="text-white">Data Device IoT:</strong> Hingga 2 tahun (dapat diperpanjang atas permintaan)</li>
                <li><strong className="text-white">Log Aktivitas:</strong> 1 tahun untuk keperluan audit dan security</li>
                <li><strong className="text-white">Data Pembayaran:</strong> Disimpan oleh payment gateway sesuai regulasi</li>
              </ul>
              <p>Setelah periode retensi berakhir, data akan dihapus secara permanen atau dianonimkan.</p>
            </div>
          </section>

          <section id="your-rights">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 bg-rose-500/10 rounded-lg">
                <Shield className="w-5 h-5 text-rose-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">6. Hak Anda</h2>
            </div>
            <div className="pl-12 space-y-4 text-slate-400 leading-relaxed">
              <p>Anda memiliki hak-hak berikut terkait data pribadi Anda:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">Hak Akses:</strong> Meminta salinan data pribadi yang kami simpan</li>
                <li><strong className="text-white">Hak Koreksi:</strong> Memperbaiki data yang tidak akurat atau tidak lengkap</li>
                <li><strong className="text-white">Hak Penghapusan:</strong> Meminta penghapusan data ("right to be forgotten")</li>
                <li><strong className="text-white">Hak Portabilitas:</strong> Menerima data dalam format yang dapat dibaca mesin</li>
                <li><strong className="text-white">Hak Membatasi:</strong> Membatasi pemrosesan data dalam kondisi tertentu</li>
                <li><strong className="text-white">Hak Menolak:</strong> Menolak pemrosesan data untuk tujuan tertentu</li>
                <li><strong className="text-white">Hak Menarik Persetujuan:</strong> Menarik persetujuan kapan saja</li>
              </ul>
              <p>Untuk menggunakan hak-hak ini, silakan hubungi kami di <a href="mailto:privacy@arvana-iot.com" className="text-blue-400 hover:underline">privacy@arvana-iot.com</a></p>
            </div>
          </section>

          <section id="cookies">
            <h2 className="text-2xl font-bold text-white mb-4">7. Cookies & Tracking</h2>
            <div className="pl-12 space-y-4 text-slate-400 leading-relaxed">
              <p>Kami menggunakan cookies dan teknologi serupa untuk:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">Essential Cookies:</strong> Diperlukan untuk fungsi dasar website (session, authentication)</li>
                <li><strong className="text-white">Analytics Cookies:</strong> Memahami penggunaan website untuk perbaikan (Google Analytics)</li>
                <li><strong className="text-white">Preference Cookies:</strong> Menyimpan preferensi Anda (bahasa, tema)</li>
              </ul>
              <p>Anda dapat mengelola preferensi cookies melalui pengaturan browser Anda.</p>
            </div>
          </section>

          <section id="children">
            <h2 className="text-2xl font-bold text-white mb-4">8. Privasi Anak</h2>
            <div className="pl-12 space-y-4 text-slate-400 leading-relaxed">
              <p>
                Layanan kami tidak ditujukan untuk anak di bawah usia 13 tahun. Kami tidak dengan sengaja mengumpulkan 
                informasi pribadi dari anak-anak. Jika Anda mengetahui bahwa anak Anda telah memberikan data pribadi kepada kami, 
                silakan hubungi kami dan kami akan menghapus data tersebut.
              </p>
            </div>
          </section>

          <section id="changes">
            <h2 className="text-2xl font-bold text-white mb-4">9. Perubahan Kebijakan</h2>
            <div className="pl-12 space-y-4 text-slate-400 leading-relaxed">
              <p>
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan material akan diberitahukan 
                melalui email atau notifikasi dalam aplikasi 30 hari sebelum berlaku. Kami mendorong Anda untuk meninjau 
                kebijakan ini secara berkala.
              </p>
            </div>
          </section>

          <section id="contact">
            <h2 className="text-2xl font-bold text-white mb-4">10. Hubungi Kami</h2>
            <div className="pl-12 space-y-4 text-slate-400 leading-relaxed">
              <p>Jika Anda memiliki pertanyaan tentang kebijakan privasi ini atau praktik data kami:</p>
              <div className="mt-4 p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
                <p className="text-white font-semibold mb-3">Arvana - Privacy Office</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-blue-400" /> privacy@arvana-iot.com</li>
                  <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-blue-400" /> dpo@arvana-iot.com (Data Protection Officer)</li>
                  <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-blue-400" /> hello@arvana-iot.com</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all">
            ← Kembali ke Beranda
          </Link>
        </div>
      </div>
    </main>
  );
}
