"use client";

import { motion } from "framer-motion";
import { 
  BarChart3, 
  FileText, 
  Smartphone, 
  Zap, 
  Shield, 
  Clock,
  Activity,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Wifi,
  Thermometer
} from "lucide-react";

const galleryItems = [
  {
    title: "Real-time Dashboard",
    desc: "Monitoring Voltage, Current, dan Power Factor secara live dengan update setiap 5 detik.",
    icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
    color: "from-blue-500/20 to-cyan-600/5",
    border: "border-blue-500/30",
    preview: "dashboard",
    stats: [
      { label: "Voltage", value: "228.5V", color: "text-blue-400" },
      { label: "Current", value: "0.59A", color: "text-emerald-400" },
      { label: "Power", value: "121W", color: "text-purple-400" },
    ],
  },
  {
    title: "Engineering Report",
    desc: "Generate laporan PDF format A4 dengan standar IEC 60038 & IEEE 1459.",
    icon: <FileText className="w-8 h-8 text-purple-400" />,
    color: "from-purple-500/20 to-pink-600/5",
    border: "border-purple-500/30",
    preview: "report",
    stats: [
      { label: "Pages", value: "3", color: "text-purple-400" },
      { label: "Compliance", value: "100%", color: "text-emerald-400" },
      { label: "Standard", value: "IEC", color: "text-blue-400" },
    ],
  },
  {
    title: "Smart Control UI",
    desc: "Kontrol device IoT dari smartphone dengan visual feedback real-time.",
    icon: <Smartphone className="w-8 h-8 text-emerald-400" />,
    color: "from-emerald-500/20 to-teal-600/5",
    border: "border-emerald-500/30",
    preview: "smartphone",
    stats: [
      { label: "Devices", value: "8", color: "text-emerald-400" },
      { label: "Latency", value: "<50ms", color: "text-blue-400" },
      { label: "Uptime", value: "99.9%", color: "text-purple-400" },
    ],
  },
  {
    title: "Energy Analytics",
    desc: "Analisis konsumsi energi dengan algoritma Trapezoidal untuk akurasi 99.9%.",
    icon: <TrendingUp className="w-8 h-8 text-amber-400" />,
    color: "from-amber-500/20 to-orange-600/5",
    border: "border-amber-500/30",
    preview: "analytics",
    stats: [
      { label: "Accuracy", value: "99.9%", color: "text-amber-400" },
      { label: "Savings", value: "12%", color: "text-emerald-400" },
      { label: "CO₂", value: "0.85kg", color: "text-blue-400" },
    ],
  },
  {
    title: "Security & Protection",
    desc: "Proteksi berlapis dengan JWT, Rate Limiting, dan enkripsi AES-256.",
    icon: <Shield className="w-8 h-8 text-red-400" />,
    color: "from-red-500/20 to-rose-600/5",
    border: "border-red-500/30",
    preview: "security",
    stats: [
      { label: "Encryption", value: "AES-256", color: "text-red-400" },
      { label: "Auth", value: "JWT", color: "text-blue-400" },
      { label: "Audit", value: "100%", color: "text-emerald-400" },
    ],
  },
  {
    title: "Smart Automation",
    desc: "Otomasi berbasis jadwal dan kondisi dengan Cycle Timer & Device Scheduling.",
    icon: <Clock className="w-8 h-8 text-cyan-400" />,
    color: "from-cyan-500/20 to-blue-600/5",
    border: "border-cyan-500/30",
    preview: "automation",
    stats: [
      { label: "Schedules", value: "24/7", color: "text-cyan-400" },
      { label: "Triggers", value: "15+", color: "text-purple-400" },
      { label: "Reliability", value: "99.9%", color: "text-emerald-400" },
    ],
  },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Live Preview & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Gallery</span>
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            Visualisasi interaktif dari setiap fitur critical sistem Arvana MCB IoT
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`relative group rounded-2xl border ${item.border} bg-gradient-to-br ${item.color} p-1 backdrop-blur-xl`}
            >
              <div className="bg-slate-950/90 rounded-xl p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <motion.div 
                    className="p-3 bg-slate-900 rounded-xl border border-slate-800 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                {/* Interactive Preview */}
                <div className="mt-4 flex-1">
                  <PreviewComponent type={item.preview} />
                </div>

                {/* Stats */}
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {item.stats.map((stat, i) => (
                    <div key={i} className="bg-slate-900/50 rounded-lg p-2 text-center border border-slate-800">
                      <div className="text-[9px] text-slate-500 mb-0.5">{stat.label}</div>
                      <div className={`text-xs font-bold font-mono ${stat.color}`}>{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// PREVIEW COMPONENTS
// ==========================================
function PreviewComponent({ type }: { type: string }) {
  switch (type) {
    case "dashboard":
      return <DashboardPreview />;
    case "report":
      return <ReportPreview />;
    case "smartphone":
      return <SmartphonePreview />;
    case "analytics":
      return <AnalyticsPreview />;
    case "security":
      return <SecurityPreview />;
    case "automation":
      return <AutomationPreview />;
    default:
      return null;
  }
}

// 1. Dashboard Preview - Live Chart
function DashboardPreview() {
  return (
    <div className="w-full h-40 bg-slate-900 rounded-lg border border-slate-800 p-3 relative overflow-hidden">
      {/* Mini Chart */}
      <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Grid Lines */}
        {[20, 40, 60, 80].map((y) => (
          <line key={y} x1="0" y1={y} x2="200" y2={y} stroke="#1e293b" strokeWidth="0.5" />
        ))}
        
        {/* Animated Line */}
        <motion.path
          d="M 0 70 Q 20 65, 40 60 T 80 50 T 120 55 T 160 45 T 200 40"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
        />
        
        {/* Fill Area */}
        <motion.path
          d="M 0 70 Q 20 65, 40 60 T 80 50 T 120 55 T 160 45 T 200 40 L 200 100 L 0 100 Z"
          fill="url(#chartGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        {/* Data Points */}
        {[
          { x: 40, y: 60 },
          { x: 80, y: 50 },
          { x: 120, y: 55 },
          { x: 160, y: 45 },
        ].map((point, i) => (
          <motion.circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="3"
            fill="#3b82f6"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          />
        ))}
      </svg>

      {/* Live Indicator */}
      <div className="absolute top-2 right-2 flex items-center gap-1">
        <motion.div
          className="w-2 h-2 bg-emerald-400 rounded-full"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <span className="text-[8px] text-emerald-400 font-mono">LIVE</span>
      </div>
    </div>
  );
}

// 2. Report Preview - A4 Document
function ReportPreview() {
  return (
    <div className="w-full h-40 bg-slate-900 rounded-lg border border-slate-800 p-2 relative overflow-hidden">
      {/* Mini A4 Document */}
      <div className="w-full h-full bg-white rounded shadow-lg p-2 transform scale-95">
        {/* Header */}
        <div className="border-b-2 border-slate-900 pb-1 mb-1">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-[6px] font-bold text-slate-900">Arvana Digital Nusantara</div>
              <div className="text-[5px] text-slate-600">Engineering</div>
            </div>
            <div className="text-right">
              <div className="text-[5px] font-bold text-slate-900">MCB REPORT</div>
              <div className="text-[4px] text-slate-600">IEC 60038</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-1">
          <div className="text-[5px] font-bold text-slate-900">Performance Summary</div>
          
          {/* Mini Table */}
          <div className="border border-slate-300 rounded overflow-hidden">
            <div className="bg-slate-900 text-white text-[4px] px-1 py-0.5 grid grid-cols-4 gap-0.5">
              <span>Device</span>
              <span>V</span>
              <span>I</span>
              <span>Status</span>
            </div>
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-[4px] px-1 py-0.5 grid grid-cols-4 gap-0.5 border-t border-slate-200">
                <span className="font-medium">MCB-{i}</span>
                <span>228.{i}</span>
                <span>0.{i}A</span>
                <span className="text-emerald-600 font-bold">OK</span>
              </div>
            ))}
          </div>

          {/* Signature */}
          <div className="pt-1 border-t border-slate-300">
            <div className="grid grid-cols-2 gap-1 text-[4px]">
              <div>
                <div className="h-2 border-b border-slate-400 mb-0.5" />
                <div className="font-bold">Manager</div>
              </div>
              <div>
                <div className="h-2 border-b border-slate-400 mb-0.5" />
                <div className="font-bold">Director</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Badge */}
      <motion.div
        className="absolute top-2 right-2 bg-emerald-500 text-white px-1.5 py-0.5 rounded-full text-[7px] font-bold flex items-center gap-0.5"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <CheckCircle2 className="w-2 h-2" />
        COMPLIANT
      </motion.div>
    </div>
  );
}

// 3. Smartphone Preview - Control UI
function SmartphonePreview() {
  return (
    <div className="w-full h-40 bg-slate-900 rounded-lg border border-slate-800 p-2 relative overflow-hidden flex items-center justify-center">
      {/* Mini Phone */}
      <div className="w-20 h-32 bg-slate-950 rounded-xl border-2 border-slate-700 relative overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-slate-800 rounded-b z-10" />
        
        {/* Screen */}
        <div className="pt-3 px-1.5 pb-1 h-full bg-gradient-to-br from-slate-950 to-slate-900">
          {/* Header */}
          <div className="text-[5px] font-bold text-white mb-1">Arvana</div>
          
          {/* Device Cards */}
          <div className="space-y-1">
            {[
              { name: "MCB", status: true, color: "bg-blue-500" },
              { name: "Light", status: true, color: "bg-yellow-500" },
              { name: "AC", status: false, color: "bg-slate-700" },
            ].map((device, i) => (
              <motion.div
                key={i}
                className="bg-slate-800/50 rounded p-1 flex items-center justify-between"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="flex items-center gap-1">
                  <div className={`w-2 h-2 rounded ${device.color}`} />
                  <span className="text-[4px] text-white">{device.name}</span>
                </div>
                <div className={`w-4 h-2 rounded-full ${device.status ? 'bg-emerald-500' : 'bg-slate-700'} relative`}>
                  <motion.div
                    className="absolute top-0.5 w-1 h-1 bg-white rounded-full"
                    animate={{ x: device.status ? 8 : 2 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* WiFi Signals */}
      <div className="absolute top-4 right-4">
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Wifi className="w-4 h-4 text-blue-400" />
        </motion.div>
      </div>
    </div>
  );
}

// 4. Analytics Preview - Bar Chart
function AnalyticsPreview() {
  const data = [40, 65, 45, 80, 55, 90, 70, 85, 60, 75];
  
  return (
    <div className="w-full h-40 bg-slate-900 rounded-lg border border-slate-800 p-3 relative overflow-hidden">
      {/* Bar Chart */}
      <div className="flex items-end justify-between h-full gap-1">
        {data.map((height, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-gradient-to-t from-amber-500/40 to-amber-500/20 rounded-t relative group"
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Tooltip on hover */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[7px] px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {height}%
            </div>
            
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-amber-400/20 rounded-t"
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Trend Indicator */}
      <div className="absolute top-2 right-2 flex items-center gap-1">
        <TrendingUp className="w-3 h-3 text-emerald-400" />
        <span className="text-[8px] text-emerald-400 font-mono">+12%</span>
      </div>
    </div>
  );
}

// 5. Security Preview - Shield Animation
function SecurityPreview() {
  return (
    <div className="w-full h-40 bg-slate-900 rounded-lg border border-slate-800 p-3 relative overflow-hidden flex items-center justify-center">
      {/* Shield */}
      <motion.div
        className="relative"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Shield className="w-16 h-16 text-red-400" strokeWidth={1.5} />
        
        {/* Lock Icon */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4 text-white" />
          </div>
        </motion.div>

        {/* Protection Rings */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-red-500/30 rounded-full"
            style={{ width: `${40 + i * 20}px`, height: `${40 + i * 20}px` }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </motion.div>

      {/* Status Indicators */}
      <div className="absolute bottom-2 left-2 right-2 flex justify-between">
        {["JWT", "AES", "2FA"].map((label, i) => (
          <div key={i} className="flex items-center gap-1">
            <motion.div
              className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
            />
            <span className="text-[7px] text-slate-400 font-mono">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// 6. Automation Preview - Timeline
function AutomationPreview() {
  const schedules = [
    { time: "06:00", device: "Lights ON", active: true },
    { time: "08:00", device: "AC Start", active: true },
    { time: "18:00", device: "Lights ON", active: false },
    { time: "22:00", device: "All OFF", active: false },
  ];

  return (
    <div className="w-full h-40 bg-slate-900 rounded-lg border border-slate-800 p-3 relative overflow-hidden">
      {/* Timeline */}
      <div className="relative h-full">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500" />

        {/* Schedule Items */}
        <div className="space-y-2 relative">
          {schedules.map((schedule, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3 pl-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              {/* Timeline Dot */}
              <motion.div
                className={`absolute left-3 w-3 h-3 rounded-full ${
                  schedule.active ? 'bg-cyan-400' : 'bg-slate-600'
                }`}
                animate={schedule.active ? { scale: [1, 1.3, 1] } : {}}
                transition={{ duration: 1, repeat: Infinity }}
              />

              {/* Content */}
              <div className="flex-1 bg-slate-800/50 rounded p-1.5 border border-slate-700">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[8px] font-bold text-white">{schedule.device}</div>
                    <div className="text-[7px] text-slate-400 font-mono">{schedule.time}</div>
                  </div>
                  <div className={`w-6 h-3 rounded-full ${schedule.active ? 'bg-emerald-500' : 'bg-slate-700'} relative`}>
                    <motion.div
                      className="absolute top-0.5 w-2 h-2 bg-white rounded-full"
                      animate={{ x: schedule.active ? 10 : 2 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Clock Icon */}
      <div className="absolute top-2 right-2">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <Clock className="w-4 h-4 text-cyan-400" />
        </motion.div>
      </div>
    </div>
  );
}
