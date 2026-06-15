"use client";

import { 
  Zap, Github, Linkedin, Mail, Twitter, Youtube, 
  MapPin, Phone, Send, Shield, Award, Globe,
  Facebook, Instagram, MessageCircle
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Newsletter Section */}
        <div className="mb-16 p-8 bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-3xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Dapatkan Update Terbaru
              </h3>
              <p className="text-slate-400">
                Berlangganan newsletter kami untuk tips IoT, update produk, dan insight industri.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
              >
                <Send className="w-4 h-4" />
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg">
                <Zap className="w-5 h-5 text-white" fill="white" />
              </div>
              <span className="text-xl font-bold text-white">
                ARVANA<span className="text-blue-500"> Digital Nusantara</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              Solusi monitoring dan kontrol MCB berbasis IoT enterprise-grade dengan presisi algoritma tinggi. 
              Dirancang untuk Smart Home, Smart Office, dan Industrial IoT.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-3 mb-6">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-slate-400 hover:text-white transition-all hover:scale-110"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            {/* Status Badge */}
            <div className="flex items-center gap-2 px-3 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg w-fit">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs text-emerald-400 font-medium">All systems operational</span>
            </div>
          </div>

          {/* Produk */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Produk</h4>
            <ul className="space-y-3">
              <li><Link href="/#solusi" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Smart Home</Link></li>
              <li><Link href="/#solusi" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Smart Office</Link></li>
              <li><Link href="/#solusi" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Industrial IoT</Link></li>
              <li><Link href="/#produk" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Hardware</Link></li>
              <li><Link href="/#fitur" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Engineering Report</Link></li>
              <li><Link href="/#fitur" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Real-time Dashboard</Link></li>
            </ul>
          </div>

          {/* Developer */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Developer</h4>
            <ul className="space-y-3">
              <li><Link href="/docs" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Dokumentasi API</Link></li>
              <li><Link href="/docs#sdk" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">SDK & Libraries</Link></li>
              <li><Link href="/docs#webhooks" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Webhooks</Link></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Open Source</a></li>
              <li><Link href="/docs#status" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">API Status</Link></li>
              <li><Link href="/docs#changelog" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Changelog</Link></li>
            </ul>
          </div>

          {/* Resources - SUDAH DIPERBAIKI */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="/blog" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Blog & Artikel</Link></li>
              <li><Link href="/blog" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Case Studies</Link></li>
              <li><Link href="/blog" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Tutorials</Link></li>
              <li><Link href="/faq" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">FAQ</Link></li>
              <li><Link href="/community" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Community</Link></li>
              <li><Link href="/support" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Perusahaan</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Tentang Kami</Link></li>
              <li><Link href="/about#team" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Tim Kami</Link></li>
              <li><Link href="/privacy" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Kebijakan Privasi</Link></li>
              <li><Link href="/terms" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Syarat & Ketentuan</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <MapPin className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <div className="text-xs text-slate-500">Kantor Pusat</div>
              <div className="text-sm text-white font-medium">Jakarta, Indonesia</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Mail className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <div className="text-xs text-slate-500">Email</div>
              <a href="mailto:hello@arvana-iot.com" className="text-sm text-white font-medium hover:text-blue-400 transition-colors">hello@arvana-iot.com</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Phone className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <div className="text-xs text-slate-500">Telepon / WhatsApp</div>
              <a href="tel:+6281221269421" className="text-sm text-white font-medium hover:text-blue-400 transition-colors">+62 812-2126-9421</a>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8 py-6 border-y border-white/5">
          {[
            { icon: Shield, label: "ISO 27001" },
            { icon: Award, label: "IEC 60038" },
            { icon: Globe, label: "IEEE 1459" },
            { icon: Shield, label: "GDPR Ready" },
          ].map((cert, i) => {
            const Icon = cert.icon;
            return (
              <div key={i} className="flex items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors">
                <Icon className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">{cert.label}</span>
              </div>
            );
          })}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 text-center md:text-left">
            © {currentYear} Arvana IoT Systems. All rights reserved. Made with ❤️ in Indonesia.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-slate-500 hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="text-xs text-slate-500 hover:text-white transition-colors">Terms</Link>
            <Link href="/docs" className="text-xs text-slate-500 hover:text-white transition-colors">Docs</Link>
            <span className="text-xs text-slate-600">v2.2.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
