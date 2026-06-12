"use client";

import { useState, useEffect } from "react";
import {
  Book, Code, Webhook, Terminal, Copy, CheckCircle2,
  Zap, Shield, Clock, AlertCircle, ExternalLink, Github, Lock
} from "lucide-react";
import Link from "next/link";

// Password yang dibutuhkan (sebaiknya simpan di environment variable)
const ACCESS_PASSWORD = "nexora2026";

export default function DocsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Cek apakah sudah login dari session storage
  useEffect(() => {
    const auth = sessionStorage.getItem("nexora_docs_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ACCESS_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("nexora_docs_auth", "true");
      setError("");
    } else {
      setError("Password salah! Silakan coba lagi.");
      setPassword("");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("nexora_docs_auth");
    setPassword("");
  };

  // Loading state
  if (isLoading) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-400"></div>
      </main>
    );
  }

  // Password Gate - Tampilkan form login jika belum autentikasi
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 backdrop-blur-xl shadow-2xl">
            
            {/* Logo & Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl mb-4">
                <Lock className="w-8 h-8 text-emerald-400" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">
                Akses <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Dokumentasi</span>
              </h1>
              <p className="text-sm text-slate-400">
                Masukkan password untuk mengakses API Documentation
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  placeholder="Masukkan password..."
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all font-mono"
                  autoFocus
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-xl">
                  <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <p className="text-xs text-red-400">{error}</p>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40"
              >
                Masuk
              </button>
            </form>

            {/* Footer */}
            <div className="mt-6 pt-6 border-t border-slate-800 text-center">
              <p className="text-xs text-slate-500">
                Butuh akses? Hubungi tim{" "}
                <span className="text-emerald-400 font-medium">Nexora Techn</span>
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Main Content - Tampilkan setelah autentikasi berhasil
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Logout Button */}
        <div className="max-w-7xl mx-auto mb-4 flex justify-end">
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-lg text-xs text-red-400 hover:bg-red-500/20 hover:text-red-300 transition-colors"
          >
            <Lock className="w-3 h-3" />
            Logout
          </button>
        </div>
        
        {/* Header */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6">
            <Code className="w-4 h-4 text-emerald-400" />
            <span className="text-xs text-emerald-400 font-semibold tracking-wider">DEVELOPER DOCS</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            API <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Documentation</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-3xl">
            Bangun integrasi powerful dengan Nexora IoT Platform. Dokumentasi lengkap untuk REST API, 
            SDK, Webhooks, dan contoh implementasi.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "API Version", value: "v2.2.0", color: "text-blue-400" },
              { label: "Uptime", value: "99.9%", color: "text-emerald-400" },
              { label: "Response Time", value: "<50ms", color: "text-purple-400" },
              { label: "Rate Limit", value: "1000/min", color: "text-amber-400" },
            ].map((stat, i) => (
              <div key={i} className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                <div className="text-xs text-slate-500 mb-1">{stat.label}</div>
                <div className={`text-xl font-bold font-mono ${stat.color}`}>{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-8">
          
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <nav className="space-y-1">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Getting Started</h3>
                {[
                  { id: "introduction", label: "Pengenalan" },
                  { id: "authentication", label: "Authentication" },
                  { id: "quickstart", label: "Quick Start" },
                ].map((item) => (
                  <a key={item.id} href={`#${item.id}`} className="block px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                    {item.label}
                  </a>
                ))}

                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 mt-6">API Reference</h3>
                {[
                  { id: "endpoints", label: "Endpoints" },
                  { id: "devices", label: "Devices" },
                  { id: "readings", label: "Readings" },
                  { id: "schedules", label: "Schedules" },
                ].map((item) => (
                  <a key={item.id} href={`#${item.id}`} className="block px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                    {item.label}
                  </a>
                ))}

                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 mt-6">Advanced</h3>
                {[
                  { id: "webhooks", label: "Webhooks" },
                  { id: "sdk", label: "SDK & Libraries" },
                  { id: "rate-limiting", label: "Rate Limiting" },
                  { id: "errors", label: "Error Codes" },
                ].map((item) => (
                  <a key={item.id} href={`#${item.id}`} className="block px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="p-4 bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-xl">
                <Github className="w-5 h-5 text-blue-400 mb-2" />
                <h4 className="text-sm font-bold text-white mb-1">Open Source</h4>
                <p className="text-xs text-slate-400 mb-3">Lihat contoh kode dan kontribusi di GitHub</p>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:text-blue-300 inline-flex items-center gap-1">
                  Kunjungi Repository <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-16">
            
            {/* Introduction */}
            <section id="introduction" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <Book className="w-6 h-6 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Pengenalan</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-400 leading-relaxed mb-4">
                  Nexora IoT Platform menyediakan RESTful API yang memungkinkan Anda mengintegrasikan 
                  monitoring dan kontrol device IoT ke dalam aplikasi Anda sendiri. API kami dirancang 
                  dengan prinsip:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: Zap, title: "Cepat", desc: "Response time <50ms dengan global CDN" },
                    { icon: Shield, title: "Aman", desc: "JWT authentication + TLS 1.3 encryption" },
                    { icon: Clock, title: "Real-time", desc: "WebSocket support untuk live updates" },
                    { icon: Book, title: "Dokumentasi Lengkap", desc: "Contoh kode untuk semua bahasa populer" },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                        <Icon className="w-5 h-5 text-blue-400 mb-2" />
                        <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                        <p className="text-xs text-slate-400">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                  <p className="text-sm text-slate-300">
                    <strong className="text-white">Base URL:</strong>{" "}
                    <code className="bg-slate-900 px-2 py-0.5 rounded text-blue-400 font-mono">https://api.nexora-iot.com/v2</code>
                  </p>
                </div>
              </div>
            </section>

            {/* Authentication */}
            <section id="authentication" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-emerald-400" />
                <h2 className="text-3xl font-bold text-white">Authentication</h2>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Semua request API harus menyertakan JWT token di header <code className="bg-slate-900 px-2 py-0.5 rounded text-blue-400 font-mono">Authorization</code>.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">1. Dapatkan Token</h3>
                <CodeBlock
                  language="bash"
                  code={`curl -X POST https://api.nexora-iot.com/v2/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "yourpassword"
  }'`}
                />

                <h3 className="text-xl font-bold text-white mt-8">2. Gunakan Token</h3>
                <CodeBlock
                  language="bash"
                  code={`curl -X GET https://api.nexora-iot.com/v2/mcb-machines \\
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \\
  -H "Content-Type: application/json"`}
                />

                <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">Catatan Penting</h4>
                    <p className="text-xs text-slate-300">
                      Token memiliki expiry time 15 menit. Gunakan refresh token untuk mendapatkan access token baru 
                      tanpa perlu login ulang. Simpan token dengan aman dan jangan expose di client-side code.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Start */}
            <section id="quickstart" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-amber-400" />
                <h2 className="text-3xl font-bold text-white">Quick Start</h2>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Mulai integrasi dalam 5 menit dengan contoh kode berikut:
              </p>

              <div className="space-y-6">
                <CodeBlock
                  language="javascript"
                  title="Node.js Example"
                  code={`// Install SDK
// npm install @nexora/iot-sdk

const { NexoraClient } = require('@nexora/iot-sdk');

// Initialize client
const client = new NexoraClient({
  apiKey: process.env.NEXORA_API_KEY,
  baseUrl: 'https://api.nexora-iot.com/v2'
});

// Get all MCB machines
async function getMachines() {
  try {
    const machines = await client.mcbMachines.list();
    console.log('Machines:', machines);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Get real-time readings
async function getReadings(machineId) {
  const readings = await client.readings.list(machineId, {
    start: '2026-06-01',
    end: '2026-06-10'
  });
  return readings;
}

// Control device
async function controlDevice(machineId, action) {
  const result = await client.mcbMachines.control(machineId, {
    action: action // 'on' or 'off'
  });
  return result;
}

getMachines();`}
                />

                <CodeBlock
                  language="python"
                  title="Python Example"
                  code={`# Install SDK
# pip install nexora-iot

from nexora import NexoraClient

# Initialize client
client = NexoraClient(
    api_key="YOUR_API_KEY",
    base_url="https://api.nexora-iot.com/v2"
)

# Get all machines
machines = client.mcb_machines.list()
for machine in machines:
    print(f"{machine.name}: {machine.status}")

# Get readings
readings = client.readings.list(
    machine_id="machine_123",
    start="2026-06-01",
    end="2026-06-10"
)

# Control device
result = client.mcb_machines.control("machine_123", action="on")
print(f"Device turned {result.status}")`}
                />
              </div>
            </section>

            {/* Endpoints */}
            <section id="endpoints" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <Terminal className="w-6 h-6 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">API Endpoints</h2>
              </div>

              <div className="space-y-4">
                {[
                  { method: "POST", path: "/auth/login", desc: "Login dan dapatkan JWT token", color: "emerald" },
                  { method: "POST", path: "/auth/register", desc: "Registrasi akun baru", color: "emerald" },
                  { method: "GET", path: "/mcb-machines", desc: "Daftar semua MCB machines", color: "blue" },
                  { method: "POST", path: "/mcb-machines", desc: "Buat MCB machine baru", color: "emerald" },
                  { method: "GET", path: "/mcb-machines/:id", desc: "Detail MCB machine", color: "blue" },
                  { method: "PUT", path: "/mcb-machines/:id", desc: "Update MCB machine", color: "amber" },
                  { method: "DELETE", path: "/mcb-machines/:id", desc: "Hapus MCB machine", color: "red" },
                  { method: "POST", path: "/mcb-machines/:id/status", desc: "Get real-time status", color: "emerald" },
                  { method: "POST", path: "/mcb-machines/:id/control", desc: "Kontrol relay ON/OFF", color: "emerald" },
                  { method: "GET", path: "/mcb-machines/:id/readings", desc: "Historical readings", color: "blue" },
                  { method: "GET", path: "/mcb-machines/:id/schedules", desc: "Daftar schedules", color: "blue" },
                  { method: "POST", path: "/mcb-machines/:id/schedules", desc: "Buat schedule baru", color: "emerald" },
                ].map((endpoint, i) => {
                  const colors = {
                    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
                    blue: "bg-blue-500/10 text-blue-400 border-blue-500/30",
                    amber: "bg-amber-500/10 text-amber-400 border-amber-500/30",
                    red: "bg-red-500/10 text-red-400 border-red-500/30",
                  };
                  return (
                    <div key={i} className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-slate-700 transition-colors">
                      <span className={`px-3 py-1 text-xs font-bold rounded border ${colors[endpoint.color as keyof typeof colors]}`}>
                        {endpoint.method}
                      </span>
                      <code className="text-sm text-white font-mono flex-1">{endpoint.path}</code>
                      <span className="text-xs text-slate-400 hidden md:block">{endpoint.desc}</span>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Webhooks */}
            <section id="webhooks" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <Webhook className="w-6 h-6 text-rose-400" />
                <h2 className="text-3xl font-bold text-white">Webhooks</h2>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Terima notifikasi real-time ketika ada event penting di platform Anda.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Event Types</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { event: "device.online", desc: "Device terhubung ke platform" },
                    { event: "device.offline", desc: "Device terputus dari platform" },
                    { event: "reading.new", desc: "Reading sensor baru tersedia" },
                    { event: "alert.triggered", desc: "Alert threshold terlampaui" },
                    { event: "schedule.executed", desc: "Schedule berhasil dijalankan" },
                    { event: "protection.triggered", desc: "Proteksi MCB aktif" },
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                      <code className="text-sm text-rose-400 font-mono font-bold">{item.event}</code>
                      <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-white mt-8">Webhook Payload</h3>
                <CodeBlock
                  language="json"
                  code={`{
  "event": "reading.new",
  "timestamp": "2026-06-10T10:30:00Z",
  "data": {
    "machine_id": "machine_123",
    "voltage": 228.5,
    "current": 0.59,
    "power": 121.2,
    "energy_kwh": 0.0272
  },
  "signature": "sha256=abc123..."
}`}
                />
              </div>
            </section>

            {/* SDK */}
            <section id="sdk" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-6 h-6 text-cyan-400" />
                <h2 className="text-3xl font-bold text-white">SDK & Libraries</h2>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                SDK resmi untuk berbagai bahasa pemrograman:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { lang: "Node.js", pkg: "npm install @nexora/iot-sdk", color: "from-green-500 to-emerald-500", status: "Stable" },
                  { lang: "Python", pkg: "pip install nexora-iot", color: "from-blue-500 to-cyan-500", status: "Stable" },
                  { lang: "PHP", pkg: "composer require nexora/iot", color: "from-purple-500 to-pink-500", status: "Stable" },
                  { lang: "Go", pkg: "go get github.com/nexora/iot-go", color: "from-cyan-500 to-blue-500", status: "Beta" },
                  { lang: "Java", pkg: "implementation 'com.nexora:iot:2.2.0'", color: "from-orange-500 to-red-500", status: "Beta" },
                  { lang: "Ruby", pkg: "gem install nexora-iot", color: "from-red-500 to-rose-500", status: "Alpha" },
                ].map((sdk, i) => (
                  <div key={i} className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-slate-700 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${sdk.color} flex items-center justify-center text-white font-bold text-sm`}>
                        {sdk.lang.charAt(0)}
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        sdk.status === "Stable" ? "bg-emerald-500/10 text-emerald-400" :
                        sdk.status === "Beta" ? "bg-amber-500/10 text-amber-400" :
                        "bg-rose-500/10 text-rose-400"
                      }`}>
                        {sdk.status}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2">{sdk.lang}</h4>
                    <code className="text-xs text-slate-400 font-mono bg-slate-950 p-2 rounded block overflow-x-auto">
                      {sdk.pkg}
                    </code>
                  </div>
                ))}
              </div>
            </section>

            {/* Rate Limiting */}
            <section id="rate-limiting" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-amber-400" />
                <h2 className="text-3xl font-bold text-white">Rate Limiting</h2>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Untuk menjaga kualitas layanan, kami menerapkan rate limiting pada semua endpoint:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-800">
                      <th className="text-left py-3 px-4 text-slate-400 font-semibold">Plan</th>
                      <th className="text-left py-3 px-4 text-slate-400 font-semibold">Rate Limit</th>
                      <th className="text-left py-3 px-4 text-slate-400 font-semibold">Burst</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { plan: "Free", rate: "100 req/min", burst: "20 req/sec" },
                      { plan: "Pro", rate: "1000 req/min", burst: "100 req/sec" },
                      { plan: "Enterprise", rate: "10000 req/min", burst: "500 req/sec" },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-slate-800/50">
                        <td className="py-3 px-4 text-white font-medium">{row.plan}</td>
                        <td className="py-3 px-4 text-slate-400 font-mono">{row.rate}</td>
                        <td className="py-3 px-4 text-slate-400 font-mono">{row.burst}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Error Codes */}
            <section id="errors" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-6 h-6 text-red-400" />
                <h2 className="text-3xl font-bold text-white">Error Codes</h2>
              </div>
              <div className="space-y-3">
                {[
                  { code: "400", name: "Bad Request", desc: "Request tidak valid atau parameter missing" },
                  { code: "401", name: "Unauthorized", desc: "Token tidak valid atau expired" },
                  { code: "403", name: "Forbidden", desc: "Tidak memiliki akses ke resource" },
                  { code: "404", name: "Not Found", desc: "Resource tidak ditemukan" },
                  { code: "429", name: "Too Many Requests", desc: "Rate limit terlampaui" },
                  { code: "500", name: "Internal Server Error", desc: "Error di sisi server" },
                ].map((err, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                    <span className="px-3 py-1 text-sm font-bold bg-red-500/10 text-red-400 border border-red-500/30 rounded font-mono">
                      {err.code}
                    </span>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-white">{err.name}</h4>
                      <p className="text-xs text-slate-400 mt-1">{err.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}

// Code Block Component
function CodeBlock({ code, language, title }: { code: string; language: string; title?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
          <span className="text-xs text-slate-400 font-medium">{title}</span>
          <span className="text-xs text-slate-500 font-mono">{language}</span>
        </div>
      )}
      <div className="relative">
        <pre className="p-4 overflow-x-auto text-sm">
          <code className="text-slate-300 font-mono">{code}</code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-colors"
        >
          {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}