"use client";

import { motion } from "framer-motion";
import { 
  Users, MessageCircle, Github, Calendar, Award, 
  TrendingUp, BookOpen, Video, Mic, Code2, 
  ArrowRight, Star, Zap, Globe, Heart
} from "lucide-react";
import Link from "next/link";

const channels = [
  {
    icon: MessageCircle,
    name: "Discord Server",
    members: "2,847",
    description: "Diskusi real-time dengan engineer dan pengguna Nexora. Channel khusus untuk troubleshooting, feature request, dan networking.",
    color: "from-indigo-500 to-purple-500",
    cta: "Join Discord",
    href: "https://discord.com",
    badge: "Most Active",
  },
  {
    icon: Github,
    name: "GitHub Discussions",
    members: "1,234",
    description: "Diskusi teknis mendalam, bug reports, dan kontribusi open source. Tempat terbaik untuk berkolaborasi dengan tim engineering.",
    color: "from-slate-600 to-slate-800",
    cta: "View on GitHub",
    href: "https://github.com",
    badge: "Open Source",
  },
  {
    icon: Users,
    name: "LinkedIn Group",
    members: "3,521",
    description: "Komunitas profesional untuk networking, sharing case study, dan update industri IoT & smart energy di Indonesia.",
    color: "from-blue-600 to-blue-700",
    cta: "Join Group",
    href: "https://linkedin.com",
    badge: "Professional",
  },
  {
    icon: Video,
    name: "YouTube Community",
    members: "5,102",
    description: "Tutorial video, webinar recording, dan live demo fitur terbaru. Subscribe untuk notifikasi konten baru setiap minggu.",
    color: "from-red-500 to-red-600",
    cta: "Subscribe",
    href: "https://youtube.com",
    badge: null,
  },
];

const events = [
  {
    title: "Nexora Tech Talk: Deep Dive Trapezoidal Algorithm",
    date: "15 Juni 2026",
    time: "19:00 WIB",
    type: "Webinar",
    speaker: "Rizkal Dwi Prasetyo",
    attendees: 128,
    isLive: false,
  },
  {
    title: "Workshop: Integrasi Home Assistant + MCB Tuya",
    date: "22 Juni 2026",
    time: "14:00 WIB",
    type: "Workshop",
    speaker: "Ahmad Fauzi",
    attendees: 85,
    isLive: false,
  },
  {
    title: "Monthly Meetup: IoT Engineers Jakarta",
    date: "Setiap Bulan Terakhir",
    time: "18:30 WIB",
    type: "Meetup",
    speaker: "Community Lead",
    attendees: 45,
    isLive: true,
  },
];

const topContributors = [
  { name: "Rizkal Dwi Prasetyo", role: "Core Maintainer", contributions: 342, avatar: "RP" },
  { name: "Ahmad Fauzi", role: "Documentation Lead", contributions: 218, avatar: "AF" },
  { name: "Budi Santoso", role: "Community Moderator", contributions: 187, avatar: "BS" },
  { name: "Siti Nurhaliza", role: "Tutorial Author", contributions: 156, avatar: "SN" },
  { name: "Andi Wijaya", role: "Bug Hunter", contributions: 134, avatar: "AW" },
];

const resources = [
  { icon: BookOpen, title: "Getting Started Guide", desc: "Panduan lengkap untuk pemula", href: "/docs" },
  { icon: Code2, title: "Code Examples", desc: "Snippet siap pakai", href: "/docs#examples" },
  { icon: Video, title: "Video Tutorials", desc: "20+ jam konten video", href: "https://youtube.com" },
  { icon: Mic, title: "Podcast IoT Indonesia", desc: "Wawancara expert mingguan", href: "#" },
];

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
            <Users className="w-4 h-4 text-purple-400" />
            <span className="text-xs text-purple-400 font-semibold tracking-wider">KOMUNITAS GLOBAL</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Bergabung dengan <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">12,000+ Engineer</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Komunitas terbesar untuk IoT engineers, smart home enthusiasts, dan energy monitoring professionals di Indonesia.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-3xl mx-auto">
            {[
              { value: "12K+", label: "Members" },
              { value: "850+", label: "Contributors" },
              { value: "2.4K", label: "Discussions" },
              { value: "45", label: "Countries" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl"
              >
                <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Channels */}
        <section className="max-w-7xl mx-auto mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Platform Komunitas</h2>
              <p className="text-slate-400">Pilih platform yang paling sesuai dengan gaya kolaborasi Anda</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {channels.map((channel, i) => {
              const Icon = channel.icon;
              return (
                <motion.a
                  key={i}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${channel.color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 bg-gradient-to-br ${channel.color} rounded-xl`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      {channel.badge && (
                        <span className="px-2.5 py-1 text-xs font-semibold bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-full">
                          {channel.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {channel.name}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                      {channel.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Users className="w-4 h-4" />
                        <span>{channel.members} members</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm font-medium text-blue-400 group-hover:gap-2 transition-all">
                        {channel.cta}
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </section>

        {/* Events */}
        <section className="max-w-7xl mx-auto mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Event Mendatang</h2>
              <p className="text-slate-400">Webinar, workshop, dan meetup rutin untuk upgrade skill Anda</p>
            </div>
            <Link href="#" className="hidden md:flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors">
              Lihat Semua Event
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {events.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">{event.type}</span>
                  {event.isLive && (
                    <span className="ml-auto flex items-center gap-1 px-2 py-0.5 bg-red-500/10 border border-red-500/30 rounded-full">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-xs text-red-400 font-medium">Recurring</span>
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                  {event.title}
                </h3>

                <div className="space-y-2 text-sm text-slate-400 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 flex items-center justify-center text-xs">⏰</span>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5" />
                    <span>Speaker: {event.speaker}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <Users className="w-3 h-3" />
                    <span>{event.attendees} registered</span>
                  </div>
                  <button className="text-xs px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors">
                    Register
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Top Contributors */}
        <section className="max-w-7xl mx-auto mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center gap-3">
                <Award className="w-7 h-7 text-amber-400" />
                Top Contributors
              </h2>
              <p className="text-slate-400">Apresiasi untuk anggota komunitas paling aktif bulan ini</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-950/20 to-orange-950/20 border border-amber-500/20 rounded-2xl p-6 md:p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {topContributors.map((contributor, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative p-4 rounded-xl transition-all ${
                    i === 0 
                      ? "bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30" 
                      : "bg-slate-900/50 border border-slate-800 hover:border-slate-700"
                  }`}
                >
                  {i === 0 && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                      <Star className="w-3 h-3 text-white" fill="white" />
                    </div>
                  )}
                  
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white mb-3 ${
                    i === 0 ? "bg-gradient-to-br from-amber-500 to-orange-500" :
                    i === 1 ? "bg-gradient-to-br from-slate-400 to-slate-600" :
                    i === 2 ? "bg-gradient-to-br from-orange-600 to-orange-800" :
                    "bg-gradient-to-br from-blue-500 to-purple-500"
                  }`}>
                    {contributor.avatar}
                  </div>
                  
                  <div className="text-sm font-semibold text-white truncate">{contributor.name}</div>
                  <div className="text-xs text-slate-500 mb-2">{contributor.role}</div>
                  
                  <div className="flex items-center gap-1 text-xs">
                    <Zap className="w-3 h-3 text-amber-400" />
                    <span className="text-amber-400 font-semibold">{contributor.contributions}</span>
                    <span className="text-slate-500">contributions</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="max-w-7xl mx-auto mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Resources Komunitas</h2>
          <p className="text-slate-400 mb-8">Materi belajar dan referensi untuk upgrade skill Anda</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {resources.map((resource, i) => {
              const Icon = resource.icon;
              return (
                <Link
                  key={i}
                  href={resource.href}
                  className="group p-5 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-blue-500/30 transition-all"
                >
                  <Icon className="w-8 h-8 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-white mb-1">{resource.title}</h3>
                  <p className="text-sm text-slate-400">{resource.desc}</p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-950/50 to-pink-950/50 border border-purple-500/20 rounded-3xl p-8 md:p-12 text-center">
            <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Siap Bergabung dengan Komunitas?
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Gratis selamanya. Dapatkan akses ke semua channel, event, resources, dan networking dengan engineer dari seluruh Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link 
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-purple-600/20"
              >
                <MessageCircle className="w-4 h-4" />
                Join Discord (Gratis)
              </Link>
              <Link 
                href="/support"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 transition-all"
              >
                Butuh Bantuan?
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}