import { 
  BookOpen, Calendar, User, Clock, ArrowRight, 
  Tag, TrendingUp, Zap, Shield, Cpu, BarChart3
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Artikel - Nexora Techn",
  description: "Artikel, tutorial, case study, dan insight terbaru seputar IoT, smart home, dan monitoring energi.",
};

export default function BlogPage() {
  const featuredPost = {
    title: "Revolusi Monitoring Energi: Bagaimana Algoritma Trapezoidal Meningkatkan Akurasi hingga 99.9%",
    excerpt: "Pelajari bagaimana kami mengembangkan algoritma perhitungan energi yang mengatasi keterbatasan sensor konvensional, memberikan akurasi setara meteran kelas industri dengan harga terjangkau.",
    author: "Ahmad Fauzi",
    date: "8 Juni 2026",
    readTime: "12 min read",
    category: "Engineering",
    tags: ["Algoritma", "Energy", "IoT"],
    gradient: "from-blue-500 to-purple-500",
  };

  const posts = [
    {
      title: "Smart Home vs Smart Office: Perbedaan Arsitektur IoT yang Perlu Anda Ketahui",
      excerpt: "Meskipun sama-sama menggunakan IoT, kebutuhan dan implementasi smart home dan smart office sangat berbeda. Artikel ini mengupas tuntas perbedaannya.",
      author: "Siti Nurhaliza",
      date: "5 Juni 2026",
      readTime: "8 min read",
      category: "Tutorial",
      tags: ["Smart Home", "Architecture"],
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "Keamanan IoT: 7 Praktik Terbaik untuk Melindungi Device Anda dari Serangan Cyber",
      excerpt: "Device IoT sering menjadi target serangan cyber. Pelajari 7 praktik terbaik yang kami terapkan di Nexora untuk menjaga keamanan data Anda.",
      author: "Rudi Hartono",
      date: "2 Juni 2026",
      readTime: "10 min read",
      category: "Security",
      tags: ["Security", "Best Practices"],
      gradient: "from-red-500 to-orange-500",
    },
    {
      title: "Case Study: Penghematan 30% Energi di Gedung Perkantoran dengan Nexora IoT",
      excerpt: "Bagaimana sebuah perusahaan di Jakarta berhasil menghemat 30% konsumsi energi setelah mengimplementasikan sistem monitoring Nexora.",
      author: "Budi Santoso",
      date: "28 Mei 2026",
      readTime: "15 min read",
      category: "Case Study",
      tags: ["Case Study", "Energy Saving"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Memahami Power Factor: Mengapa Penting dan Bagaimana Memperbaikinya",
      excerpt: "Power factor yang rendah berarti pemborosan energi. Pelajari cara membaca, menganalisis, dan meningkatkan power factor di instalasi listrik Anda.",
      author: "Andi Wijaya",
      date: "25 Mei 2026",
      readTime: "7 min read",
      category: "Tutorial",
      tags: ["Power Factor", "Tutorial"],
      gradient: "from-amber-500 to-orange-500",
    },
    {
      title: "Integrasi Home Assistant dengan Nexora: Panduan Lengkap untuk Pemula",
      excerpt: "Langkah demi langkah menghubungkan device Nexora Anda dengan Home Assistant untuk otomasi yang lebih powerful dan fleksibel.",
      author: "Siti Nurhaliza",
      date: "20 Mei 2026",
      readTime: "11 min read",
      category: "Tutorial",
      tags: ["Home Assistant", "Integration"],
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Masa Depan Smart Grid di Indonesia: Peluang dan Tantangan",
      excerpt: "Analisis mendalam tentang perkembangan smart grid di Indonesia, regulasi terbaru, dan bagaimana IoT berperan dalam transformasi energi nasional.",
      author: "Ahmad Fauzi",
      date: "15 Mei 2026",
      readTime: "13 min read",
      category: "Industry",
      tags: ["Smart Grid", "Indonesia"],
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  const categories = [
    { name: "Semua", count: 24, active: true },
    { name: "Tutorial", count: 8, active: false },
    { name: "Case Study", count: 5, active: false },
    { name: "Engineering", count: 6, active: false },
    { name: "Security", count: 3, active: false },
    { name: "Industry", count: 2, active: false },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
            <BookOpen className="w-4 h-4 text-purple-400" />
            <span className="text-xs text-purple-400 font-semibold tracking-wider">BLOG & INSIGHTS</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Blog & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Artikel</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-3xl">
            Tutorial, case study, dan insight terbaru seputar IoT, smart home, monitoring energi, 
            dan teknologi terkini dari tim Nexora Techn.
          </p>
        </div>

        {/* Featured Post */}
        <section className="max-w-7xl mx-auto mb-16">
          <Link href="#" className="group block">
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-700 transition-all">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Content */}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${featuredPost.gradient} text-white`}>
                      ⭐ FEATURED
                    </span>
                    <span className="px-3 py-1 text-xs font-semibold bg-white/5 border border-white/10 rounded-full text-slate-300">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {featuredPost.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded text-slate-400">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className={`relative h-64 md:h-auto bg-gradient-to-br ${featuredPost.gradient} rounded-2xl overflow-hidden flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10 text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center">
                      <TrendingUp className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-white/80 text-sm font-medium">Engineering Deep Dive</div>
                    <div className="text-white text-2xl font-bold mt-1">99.9% Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* Categories Filter */}
        <section className="max-w-7xl mx-auto mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <button
                key={i}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  cat.active
                    ? "bg-blue-600 text-white"
                    : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {cat.name}
                <span className={`ml-2 text-xs ${cat.active ? 'text-blue-200' : 'text-slate-500'}`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Posts Grid */}
        <section className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <Link key={i} href="#" className="group block">
                <article className="h-full bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all">
                  {/* Thumbnail */}
                  <div className={`relative h-40 bg-gradient-to-br ${post.gradient} overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10 h-full flex items-center justify-center">
                      {post.category === "Tutorial" && <Cpu className="w-12 h-12 text-white/80" />}
                      {post.category === "Security" && <Shield className="w-12 h-12 text-white/80" />}
                      {post.category === "Case Study" && <BarChart3 className="w-12 h-12 text-white/80" />}
                      {post.category === "Engineering" && <Zap className="w-12 h-12 text-white/80" />}
                      {post.category === "Industry" && <TrendingUp className="w-12 h-12 text-white/80" />}
                    </div>
                    <span className="absolute top-3 right-3 px-2 py-1 text-xs font-semibold bg-black/40 backdrop-blur-sm rounded text-white">
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors leading-tight line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                      <div className="flex items-center gap-1.5">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag, j) => (
                          <span key={j} className="px-2 py-0.5 text-[10px] bg-white/5 border border-white/10 rounded text-slate-400">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section id="newsletter" className="max-w-4xl mx-auto mt-20">
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-3xl p-8 md:p-12 text-center">
            <BookOpen className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Jangan Lewatkan Update Terbaru
            </h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Berlangganan newsletter kami untuk mendapatkan artikel, tutorial, dan insight IoT langsung di inbox Anda.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/20"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-slate-500 mt-4">
              Gratis. Tanpa spam. Unsubscribe kapan saja.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}