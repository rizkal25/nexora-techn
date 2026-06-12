import { 
  Zap, Target, Eye, Users, Award, TrendingUp, 
  Heart, Sparkles, Linkedin, Github, Twitter,
  Calendar, MapPin, Briefcase, Shield, Globe, Mail
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami - Nexora Techn",
  description: "Tim ahli di balik revolusi monitoring energi IoT Indonesia. Kenali para founder, engineer, dan visioner kami.",
};

export default function AboutPage() {
  const team = [
    {
      name: "Rizkal Dwi  Prasetyo",
      role: "CEO & Founder",
      avatar: "RP",
      color: "from-blue-500 to-cyan-500",
      bio: "10+ tahun pengalaman di IoT & Embedded Systems. Ex-Engineer di perusahaan Farmasi  dan  Otomotif Nasional",
      location: "Jakarta, ID",
      social: { linkedin: "#", github: "#", twitter: "#" },
    },
    {
      name: "Satrio Aji",
      role: "CCTV & Security Systems Specialist",
      avatar: "BS",
      color: "from-purple-500 to-pink-500",
      bio: "Berpengalaman dalam instalasi, konfigurasi, maintenance, dan troubleshooting sistem CCTV analog maupun IP Camera.",
      location: "Serang, ID",
      social: { linkedin: "#", github: "#", twitter: "#" },
    },
    {
      name: "Zico Pramono Win",
      role: "Lead IoT Architect",
      avatar: "ZP",
      color: "from-emerald-500 to-teal-500",
      bio: "Ahli arsitektur MQTT & Home Assistant. Kontributor open-source untuk proyek smart home Indonesia.",
      location: "Jakarta, ID",
      social: { linkedin: "#", github: "#", twitter: "#" },
    },
    {
      name: "Rudi Hartono",
      role: "Head of Security",
      avatar: "RH",
      color: "from-amber-500 to-orange-500",
      bio: "Certified Ethical Hacker (CEH). Merancang enkripsi AES-256 dan sistem JWT untuk proteksi device.",
      location: "Jakarta, ID",
      social: { linkedin: "#", github: "#", twitter: "#" },
    },
    {
      name: "Heni  Nurlaili  Dyana",
      role: "UX/UI Designer",
      avatar: "HN",
      color: "from-rose-500 to-pink-500",
      bio: "Desainer berpengalaman dengan fokus pada dashboard monitoring. Pencipta desain dark-mode Nexora.",
      location: "Jakarta, ID",
      social: { linkedin: "#", github: "#", twitter: "#" },
    },
    {
      name: "Aji Galih Maulana",
      role: "Backend Engineer",
      avatar: "Ag",
      color: "from-indigo-500 to-blue-500",
      bio: "Full-stack developer dengan expertise di Node.js, PostgreSQL, dan Firebase. Optimis performa API.",
      location: "Jakarta, ID",
      social: { linkedin: "#", github: "#", twitter: "#" },
    },
  ];

  const values = [
    { icon: Target, title: "Presisi", desc: "Setiap pengukuran harus akurat hingga 99.9%. Kami tidak berkompromi dengan kualitas data.", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, title: "Keamanan", desc: "Data pelanggan adalah aset berharga. Enkripsi end-to-end dan audit logging adalah standar kami.", color: "from-purple-500 to-pink-500" },
    { icon: Heart, title: "Keberlanjutan", desc: "Hemat energi = hemat biaya = bumi lebih hijau. Setiap kWh yang termonitor adalah langkah menuju masa depan.", color: "from-emerald-500 to-teal-500" },
    { icon: Sparkles, title: "Inovasi", desc: "Kami terus berinovasi dengan algoritma terbaru dan integrasi platform IoT terdepan.", color: "from-amber-500 to-orange-500" },
  ];

  const milestones = [
    { year: "2024", quarter: "Q1", title: "Konsep Lahir", desc: "Ide monitoring MCB berbasis IoT muncul dari riset kebutuhan industri", icon: Sparkles },
    { year: "2024", quarter: "Q3", title: "Prototipe Pertama", desc: "MCB monitoring pertama berhasil diuji di lab dengan akurasi 95%", icon: Zap },
    { year: "2025", quarter: "Q1", title: "Algoritma Trapezoidal", desc: "Pengembangan algoritma perhitungan energi dengan akurasi 99.9%", icon: Target },
    { year: "2025", quarter: "Q2", title: "MVP Launch", desc: "Rilis versi beta dengan integrasi Home Assistant & Tuya", icon: Rocket },
    { year: "2025", quarter: "Q4", title: "Enterprise Ready", desc: "Sertifikasi IEC 60038 & IEEE 1459 compliance. 100+ klien aktif", icon: Award },
    { year: "2026", quarter: "Q2", title: "Platform v2.0", desc: "Peluncuran dashboard 3D, AI analytics, dan mobile app", icon: TrendingUp },
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Klien Aktif", color: "text-blue-400" },
    { icon: Zap, value: "10K+", label: "Device Terhubung", color: "text-emerald-400" },
    { icon: TrendingUp, value: "99.9%", label: "Uptime SLA", color: "text-purple-400" },
    { icon: Award, value: "15+", label: "Sertifikasi", color: "text-amber-400" },
    { icon: Globe, value: "5", label: "Negara", color: "text-rose-400" },
    { icon: Calendar, value: "2+", label: "Tahun R&D", color: "text-cyan-400" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-24">
      
      {/* HERO SECTION */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs text-blue-400 font-semibold tracking-wider">OUR STORY</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Revolusi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Energi Cerdas</span> untuk Indonesia
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Kami percaya bahwa efisiensi energi dimulai dari pemahaman yang presisi. 
              Nexora Techn hadir untuk menghubungkan setiap kilowatt dengan kecerdasan IoT enterprise-grade, 
              memberdayakan rumah, kantor, dan industri untuk masa depan yang lebih hijau.
            </p>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 bg-slate-900/30 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="text-center p-6 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl hover:border-slate-700 transition-all">
                  <Icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MISSION, VISION, VALUES */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Nilai & Prinsip Kami</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Fondasi yang membentuk setiap keputusan dan inovasi di Nexora Techn
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {values.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity`} />
                  <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 h-full hover:border-slate-700 transition-all">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section id="team" className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4">
              <Users className="w-4 h-4 text-purple-400" />
              <span className="text-xs text-purple-400 font-semibold tracking-wider">OUR TEAM</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Orang-orang di Balik Nexora</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Tim multidisiplin yang menggabungkan keahlian IoT, software engineering, dan desain
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {team.map((member, i) => (
              <div key={i} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity`} />
                <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all">
                  
                  {/* Avatar */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0`}>
                      {member.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-white truncate">{member.name}</h3>
                      <p className={`text-sm font-medium bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                        {member.role}
                      </p>
                      <div className="flex items-center gap-1 mt-1 text-xs text-slate-500">
                        <MapPin className="w-3 h-3" />
                        <span>{member.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-2 pt-4 border-t border-slate-800">
                    <a href={member.social.linkedin} className="flex-1 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-slate-400 hover:text-white transition-all flex items-center justify-center gap-1.5 text-xs">
                      <Linkedin className="w-3.5 h-3.5" />
                      LinkedIn
                    </a>
                    <a href={member.social.github} className="flex-1 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-slate-400 hover:text-white transition-all flex items-center justify-center gap-1.5 text-xs">
                      <Github className="w-3.5 h-3.5" />
                      GitHub
                    </a>
                    <a href={member.social.twitter} className="flex-1 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-slate-400 hover:text-white transition-all flex items-center justify-center gap-1.5 text-xs">
                      <Twitter className="w-3.5 h-3.5" />
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section id="timeline" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-4">
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span className="text-xs text-emerald-400 font-semibold tracking-wider">OUR JOURNEY</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Perjalanan Kami</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Dari ide sederhana hingga platform enterprise-grade yang melayani ratusan klien
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 md:-translate-x-1/2" />
            
            {milestones.map((milestone, i) => {
              const Icon = milestone.icon;
              const isLeft = i % 2 === 0;
              return (
                <div key={i} className={`relative flex items-start mb-12 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950 md:-translate-x-1/2 z-10 mt-6" />
                  
                  {/* Content */}
                  <div className={`flex-1 ml-20 md:ml-0 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all inline-block">
                      <div className={`flex items-center gap-2 mb-3 ${isLeft ? 'md:justify-end' : ''}`}>
                        <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
                          {milestone.year} {milestone.quarter}
                        </span>
                        <Icon className="w-4 h-4 text-slate-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-sm text-slate-400">{milestone.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAREERS CTA */}
      {/* <section id="careers" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-3xl p-8 md:p-12 text-center">
            <Briefcase className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bergabunglah dengan Tim Kami
            </h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Kami selalu mencari talenta terbaik di bidang IoT, software engineering, dan desain. 
              Jika Anda passionate tentang revolusi energi, mari berkarya bersama!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:careers@nexora-iot.com" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/20 inline-flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                Kirim Lamaran
              </a>
              <Link href="/docs" className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-all inline-flex items-center justify-center gap-2">
                Lihat Posisi
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}

// Icon tambahan yang tidak ada di lucide-react
function Rocket(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
  );
}