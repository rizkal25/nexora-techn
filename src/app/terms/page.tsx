import { FileText, AlertTriangle, CheckCircle2, XCircle, Mail } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan - Nexora Techn",
  description: "Syarat dan ketentuan penggunaan layanan Nexora Techn IoT Platform.",
};

export default function TermsPage() {
  const lastUpdated = "10 Juni 2026";

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
            <FileText className="w-4 h-4 text-purple-400" />
            <span className="text-xs text-purple-400 font-semibold tracking-wider">LEGAL AGREEMENT</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Syarat & Ketentuan</h1>
          <p className="text-slate-400 text-lg mb-2">
            Terakhir diperbarui: <span className="text-white font-medium">{lastUpdated}</span>
          </p>
          <p className="text-slate-400 leading-relaxed">
            Dengan menggunakan layanan Nexora Techn, Anda menyetujui syarat dan ketentuan berikut. 
            Harap baca dengan seksama sebelum menggunakan platform kami.
          </p>
        </div>

        {/* Important Notice */}
        <div className="max-w-4xl mx-auto mb-12 p-6 bg-amber-500/10 border border-amber-500/30 rounded-2xl">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Penting untuk Dibaca</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Dokumen ini merupakan perjanjian hukum yang mengikat antara Anda ("Pengguna") dan 
                PT Nexora Techn Indonesia ("Perusahaan"). Dengan mendaftar atau menggunakan layanan kami, 
                Anda menyatakan telah membaca, memahami, dan menyetujui seluruh ketentuan di bawah ini.
              </p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-10">
          
          {[
            {
              num: "1",
              title: "Penerimaan Ketentuan",
              content: [
                "Dengan mengakses atau menggunakan layanan Nexora Techn Platform, Anda setuju untuk terikat dengan Syarat & Ketentuan ini.",
                "Jika Anda tidak setuju dengan bagian manapun dari ketentuan ini, Anda tidak boleh menggunakan layanan kami.",
                "Kami berhak mengubah ketentuan ini kapan saja. Perubahan akan diberitahukan melalui email atau notifikasi dalam aplikasi.",
              ],
            },
            {
              num: "2",
              title: "Deskripsi Layanan",
              content: [
                "Nexora Techn menyediakan platform IoT untuk monitoring dan kontrol device listrik (MCB, switch, sensor) melalui aplikasi web dan mobile.",
                "Layanan mencakup: real-time monitoring, device scheduling, automated reporting, dan analytics.",
                "Kami berhak memodifikasi, menangguhkan, atau menghentikan layanan sebagian atau seluruhnya dengan pemberitahuan yang wajar.",
              ],
            },
            {
              num: "3",
              title: "Akun Pengguna",
              content: [
                "Anda bertanggung jawab menjaga kerahasiaan kredensial akun Anda.",
                "Anda harus berusia minimal 18 tahun atau memiliki persetujuan orang tua/wali untuk menggunakan layanan.",
                "Anda setuju memberikan informasi yang akurat, lengkap, dan terkini saat pendaftaran.",
                "Anda bertanggung jawab atas semua aktivitas yang terjadi di bawah akun Anda.",
                "Kami berhak menangguhkan atau menutup akun yang melanggar ketentuan ini.",
              ],
            },
            {
              num: "4",
              title: "Penggunaan yang Dilarang",
              content: [
                "Menggunakan layanan untuk tujuan ilegal atau tidak sah.",
                "Mencoba mengakses sistem, jaringan, atau data yang tidak diotorisasi.",
                "Mengirim malware, virus, atau kode berbahaya melalui platform.",
                "Melakukan reverse engineering, dekompilasi, atau membongkar source code.",
                "Menggunakan layanan untuk mengganggu atau membebani infrastruktur kami.",
                "Menyalahgunakan data pengguna lain atau data device orang lain.",
                "Menggunakan layanan untuk mengirim spam atau komunikasi yang tidak diminta.",
              ],
              type: "warning",
            },
            {
              num: "5",
              title: "Hak Kekayaan Intelektual",
              content: [
                "Seluruh konten, desain, logo, source code, dan material di platform ini adalah milik Nexora Techn atau pemberi lisensi kami.",
                "Anda tidak boleh menyalin, memodifikasi, mendistribusikan, atau membuat karya turunan tanpa izin tertulis.",
                "Merek dagang, logo, dan nama layanan adalah merek dagang terdaftar dari Nexora Techn.",
                "Feedback, saran, atau ide yang Anda berikan menjadi milik kami dan dapat digunakan tanpa kompensasi.",
              ],
            },
            {
              num: "6",
              title: "Data & Privasi",
              content: [
                "Pengumpulan dan penggunaan data pribadi Anda diatur oleh Kebijakan Privasi kami yang terpisah.",
                "Data device IoT Anda disimpan terenkripsi dan hanya dapat diakses oleh Anda.",
                "Anda bertanggung jawab atas backup data device Anda. Kami tidak menjamin ketersediaan data selamanya.",
                "Kami berhak menghapus data akun yang tidak aktif selama lebih dari 12 bulan.",
              ],
            },
            {
              num: "7",
              title: "Pembayaran & Langganan",
              content: [
                "Layanan berbayar memerlukan langganan dengan periode dan harga yang tertera di halaman pricing.",
                "Pembayaran diproses melalui payment gateway pihak ketiga yang aman.",
                "Langganan akan diperpanjang otomatis kecuali dibatalkan sebelum periode berakhir.",
                "Harga dapat berubah dengan pemberitahuan minimal 30 hari sebelumnya.",
                "Refund dapat diminta dalam 7 hari pertama jika layanan tidak sesuai deskripsi.",
              ],
            },
            {
              num: "8",
              title: "Limitasi Tanggung Jawab",
              content: [
                "Layanan disediakan 'as is' tanpa jaminan apapun, baik tersurat maupun tersirat.",
                "Kami tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau konsekuensial.",
                "Kami tidak menjamin layanan akan selalu tersedia, bebas error, atau aman dari gangguan.",
                "Tanggung jawab maksimum kami terbatas pada jumlah yang Anda bayarkan dalam 12 bulan terakhir.",
                "Kami tidak bertanggung jawab atas kerusakan device fisik yang terhubung ke platform.",
              ],
              type: "warning",
            },
            {
              num: "9",
              title: "Keamanan Device IoT",
              content: [
                "Anda bertanggung jawab memastikan device IoT yang terhubung aman dan terkonfigurasi dengan benar.",
                "Kami tidak bertanggung jawab atas kerentanan keamanan pada device pihak ketiga.",
                "Disarankan untuk mengubah password default device dan mengaktifkan enkripsi jika tersedia.",
                "Kami berhak menangguhkan akses device yang terdeteksi membahayakan platform.",
              ],
            },
            {
              num: "10",
              title: "Penghentian Layanan",
              content: [
                "Anda dapat menghentikan layanan kapan saja dengan menghapus akun melalui pengaturan.",
                "Kami berhak menangguhkan atau menutup akun yang melanggar ketentuan ini.",
                "Setelah penghentian, hak untuk menggunakan layanan akan berakhir segera.",
                "Ketentuan yang secara wajar harus tetap berlaku setelah penghentian akan tetap berlaku.",
              ],
            },
            {
              num: "11",
              title: "Hukum yang Berlaku",
              content: [
                "Syarat & Ketentuan ini diatur oleh hukum Republik Indonesia.",
                "Sengketa akan diselesaikan melalui musyawarah. Jika tidak tercapai, akan dibawa ke Pengadilan Negeri Jakarta Selatan.",
                "Jika ada ketentuan yang tidak berlaku, ketentuan lain tetap berlaku sepenuhnya.",
              ],
            },
            {
              num: "12",
              title: "Hubungi Kami",
              content: [
                "Untuk pertanyaan tentang Syarat & Ketentuan ini, hubungi kami di:",
              ],
              contact: true,
            },
          ].map((section, i) => (
            <section key={i} className="scroll-mt-24">
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white flex-shrink-0 ${
                  section.type === "warning" ? "bg-gradient-to-br from-amber-500 to-orange-500" : "bg-gradient-to-br from-blue-500 to-cyan-500"
                }`}>
                  {section.num}
                </div>
                <h2 className="text-2xl font-bold text-white pt-1.5">{section.title}</h2>
              </div>
              <div className="pl-14 space-y-3">
                {section.content.map((paragraph, j) => (
                  <p key={j} className="text-slate-400 leading-relaxed">
                    {paragraph.startsWith("Menggunakan") || paragraph.startsWith("Mencoba") || 
                     paragraph.startsWith("Mengirim") || paragraph.startsWith("Melakukan") ||
                     paragraph.startsWith("Menggunakan layanan untuk mengganggu") ||
                     paragraph.startsWith("Menyalahgunakan") || paragraph.startsWith("Menggunakan layanan untuk mengirim")
                      ? <span className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" /><span>{paragraph}</span></span>
                      : paragraph}
                  </p>
                ))}
                {section.contact && (
                  <div className="mt-4 p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2 text-slate-300"><Mail className="w-4 h-4 text-blue-400" /> legal@nexora-iot.com</li>
                      <li className="flex items-center gap-2 text-slate-300"><Mail className="w-4 h-4 text-blue-400" /> support@nexora-iot.com</li>
                      <li className="flex items-center gap-2 text-slate-300"><Mail className="w-4 h-4 text-blue-400" /> +62 812 3456 7890</li>
                    </ul>
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>

        {/* Acceptance Box */}
        <div className="max-w-4xl mx-auto mt-16 p-8 bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-3xl text-center">
          <CheckCircle2 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">Dengan Menggunakan Layanan Kami</h3>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Anda menyatakan telah membaca, memahami, dan menyetujui seluruh Syarat & Ketentuan di atas.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all">
            ← Kembali ke Beranda
          </Link>
        </div>
      </div>
    </main>
  );
}