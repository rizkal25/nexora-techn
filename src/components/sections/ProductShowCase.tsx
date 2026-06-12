"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { 
  Wifi, Shield, Zap, Wind, Thermometer, Droplets, 
  Clock, Gauge, AlertTriangle, CheckCircle2, 
  Smartphone, Home, Building2, Factory,
  Star, Package, Cpu, Lock, Eye, ExternalLink
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "TUYA Air Quality Monitor",
    category: "Environmental Sensor",
    price: "Rp 450.000",
    rating: 4.8,
    reviews: 234,
    gradient: "from-emerald-500 to-teal-600",
    borderColor: "border-emerald-500/30",
    icon: <Wind className="w-8 h-8" />,
    shortDesc: "Monitor kualitas udara real-time dengan sensor PM2.5, suhu, kelembaban, dan CO2",
    image: "/images/products/air-quality.png",
    shopeeLink: "https://shopee.co.id/TUYA-Air-Quality-Monitor-i.41652360.18483647092",
    specs: {
      sensors: ["PM2.5", "PM10", "Temperature", "Humidity", "CO2"],
      connectivity: "WiFi 2.4GHz",
      platform: "Tuya Smart / Smart Life",
      power: "DC 5V / 1A (USB Type-C)",
      features: ["Real-time AQI", "Historical data logging", "App notifications", "Voice control"]
    },
    useCases: ["home", "office"],
  },
  {
    id: 2,
    name: "MCB kWh Meter Timer 1P WiFi",
    category: "Smart Circuit Breaker",
    price: "Rp 380.000",
    rating: 4.7,
    reviews: 189,
    gradient: "from-blue-500 to-cyan-600",
    borderColor: "border-blue-500/30",
    icon: <Zap className="w-8 h-8" />,
    shortDesc: "MCB 1 Phase dengan meter kWh terintegrasi, timer, dan kontrol WiFi Tuya",
    image: "/images/products/mcb-meter.png",
    shopeeLink: "https://shopee.co.id/MCB-kWh-Meter-Timer-Din-Rail-1P-WiFi-Circuit-Breaker-Smart-TUYA-i.1376756456.29091932674",
    specs: {
      electrical: "AC 230V / 50Hz, 6A-40A",
      breakingCapacity: "6kA (IEC 60898-1)",
      metering: "Class 1 (IEC 62053-21)",
      connectivity: "WiFi 2.4GHz",
      features: ["Real-time monitoring", "Energy tracking", "Remote ON/OFF", "Scheduled automation"]
    },
    useCases: ["home", "office"],
  },
  {
    id: 3,
    name: "Taxnele Smart MCB WiFi 63A",
    category: "Smart Protection Device",
    price: "Rp 650.000",
    rating: 4.9,
    reviews: 456,
    gradient: "from-purple-500 to-pink-600",
    borderColor: "border-purple-500/30",
    icon: <Shield className="w-8 h-8" />,
    shortDesc: "Smart MCB 63A dengan proteksi lengkap: overvoltage, undervoltage, leakage, dan kontrol jarak jauh",
    image: "/images/products/smart-mcb.png",
    shopeeLink: "https://shopee.co.id/Taxnele-Protektor-Tegangan-Arus-Pintar-WiFi-63A-Smart-MCB-WiFi-Overvoltage-Undervoltage-Leakage-Kontrol-Jarak-Jauh-via-TUYA-Pantau-Daya-Saklar-Jarak-Jauh-Pelindung-Arus-Berlebih-Kebocoran-i.1255993235.46610558642",
    specs: {
      electrical: "AC 230V/400V, 63A, 10kA",
      protection: "Over/Under Voltage, Leakage, Overheat",
      metering: "Voltage, Current, Power, Energy, PF",
      connectivity: "WiFi 2.4GHz",
      features: ["Multi-protection (6 types)", "Real-time 7 parameters", "Auto-reclose", "Event logging"]
    },
    useCases: ["home", "office", "industrial"],
  },
  {
    id: 4,
    name: "MOES B1 Smart Switch WiFi",
    category: "Smart Lighting Control",
    price: "Rp 185.000",
    rating: 4.6,
    reviews: 892,
    gradient: "from-amber-500 to-orange-600",
    borderColor: "border-amber-500/30",
    icon: <Zap className="w-8 h-8" />,
    shortDesc: "Saklar lampu wireless WiFi dengan kontrol suara Alexa & Google Assistant",
    image: "/images/products/smart-switch.png",
    shopeeLink: "https://shopee.co.id/MALL-MOES-B1-Saklar-Lampu-Wireless-WiFi-Jarak-jauh-Smart-Remote-Tuya-Alexa-Voice-Control-i.1458288562.49856567315",
    specs: {
      electrical: "AC 100-240V, Max 10A / 2200W",
      wiring: "Neutral required",
      connectivity: "WiFi 2.4GHz IEEE 802.11 b/g/n",
      platform: "Tuya Smart, Alexa, Google Assistant",
      features: ["Touch control", "Voice control", "Schedule automation", "Away mode simulation"]
    },
    useCases: ["home", "office"],
  },
];

export default function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [activeTab, setActiveTab] = useState<"overview" | "specs" | "features">("overview");

  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full mb-4">
            <Package className="w-4 h-4 text-blue-400" />
            <span className="text-xs text-blue-400 font-semibold">RECOMMENDED HARDWARE</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-4">
            Smart IoT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Products</span>
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">Perangkat IoT pilihan yang kompatibel penuh dengan sistem Nexora MCB</p>
        </motion.div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-7xl mx-auto">
          {products.map((product, index) => {
            const isSelected = selectedProduct.id === product.id;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedProduct(product)}
                className={`group relative cursor-pointer rounded-2xl border-2 p-3 transition-all ${
                  isSelected
                    ? `${product.borderColor} bg-gradient-to-br ${product.gradient} bg-opacity-10`
                    : "border-slate-800 bg-slate-900/50 hover:border-slate-700"
                }`}
              >
                {isSelected && (
                  <motion.div layoutId="selectedIndicator" className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center z-10">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </motion.div>
                )}

                {/* ✅ FRAME GAMBAR THUMBNAIL: aspect-square memaksa frame jadi kotak sempurna */}
                <div className="relative w-full aspect-square mb-3 rounded-xl overflow-hidden bg-white border border-slate-700">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    // ✅ object-cover memaksa gambar mengisi frame sepenuhnya tanpa gepeng
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>

                <h3 className="text-sm font-bold text-white mb-1 line-clamp-2 min-h-[2.5rem]">{product.name}</h3>
                <p className="text-[10px] text-slate-400 mb-2">{product.category}</p>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span className="text-[10px] text-white font-semibold">{product.rating}</span>
                  </div>
                  <span className="text-xs text-white font-bold">{product.price}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* PRODUCT DETAIL */}
        <motion.div
          key={selectedProduct.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-7xl mx-auto bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 lg:p-8"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Main Product Image */}
            <div className="space-y-6">
              {/* ✅ FRAME GAMBAR UTAMA: aspect-[4/3] agar proporsional, bg-white agar produk terlihat jelas */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-slate-700 flex items-center justify-center p-4 shadow-2xl">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  // ✅ object-contain agar seluruh produk terlihat utuh di dalam frame
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5 border border-slate-700"
                >
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="text-sm font-bold text-white">{selectedProduct.rating}</span>
                  <span className="text-xs text-slate-400">({selectedProduct.reviews})</span>
                </motion.div>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-slate-950/50 rounded-xl p-3 border border-slate-800 text-center">
                  <div className="text-[10px] text-slate-500 mb-1">RATING</div>
                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span className="text-sm font-bold text-white">{selectedProduct.rating}</span>
                  </div>
                </div>
                <div className="bg-slate-950/50 rounded-xl p-3 border border-slate-800 text-center">
                  <div className="text-[10px] text-slate-500 mb-1">PRICE</div>
                  <div className="text-sm font-bold text-white">{selectedProduct.price}</div>
                </div>
                <div className="bg-slate-950/50 rounded-xl p-3 border border-slate-800 text-center">
                  <div className="text-[10px] text-slate-500 mb-1">PLATFORM</div>
                  <div className="text-sm font-bold text-white">Tuya</div>
                </div>
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${selectedProduct.gradient} text-white text-xs font-bold`}>
                    {selectedProduct.category}
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">{selectedProduct.name}</h3>
                <p className="text-slate-400 leading-relaxed">{selectedProduct.shortDesc}</p>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 border-b border-slate-800">
                {["overview", "specs", "features"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`px-4 py-2 text-sm font-semibold capitalize transition-colors ${
                      activeTab === tab ? "text-white border-b-2 border-blue-500" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-[250px]">
                {activeTab === "overview" && <OverviewTab product={selectedProduct} />}
                {activeTab === "specs" && <SpecsTab product={selectedProduct} />}
                {activeTab === "features" && <FeaturesTab product={selectedProduct} />}
              </div>

              {/* CTA */}
              <div className="flex gap-3 pt-4">
                <a
                  href={selectedProduct.shopeeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 py-3 rounded-xl bg-gradient-to-r ${selectedProduct.gradient} text-white font-bold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/20 transition-all`}
                >
                  <Package className="w-4 h-4" />
                  View on Shopee
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ==========================================
// TAB COMPONENTS (Simplified for readability)
// ==========================================
function OverviewTab({ product }: { product: any }) {
  return (
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2"><Home className="w-4 h-4 text-blue-400" /> Use Cases</h4>
        <div className="flex flex-wrap gap-2">
          {product.useCases.map((useCase: string) => (
            <div key={useCase} className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded-lg border border-slate-700">
              {useCase === "home" && <Home className="w-3 h-3 text-emerald-400" />}
              {useCase === "office" && <Building2 className="w-3 h-3 text-blue-400" />}
              {useCase === "industrial" && <Factory className="w-3 h-3 text-purple-400" />}
              <span className="text-xs text-white capitalize">{useCase}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2"><Star className="w-4 h-4 text-amber-400" /> Key Highlights</h4>
        <div className="space-y-2">
          {product.specs.features.slice(0, 4).map((feature: string, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-300">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SpecsTab({ product }: { product: any }) {
  return (
    <div className="space-y-4">
      {Object.entries(product.specs).map(([category, data]) => (
        <div key={category}>
          <h4 className="text-sm font-bold text-white mb-2 capitalize flex items-center gap-2">
            <Cpu className="w-4 h-4 text-blue-400" /> {category}
          </h4>
          <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden p-3">
            {typeof data === "object" && !Array.isArray(data) ? (
              Object.entries(data).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center py-1.5 border-b border-slate-700 last:border-b-0">
                  <span className="text-xs text-slate-400 capitalize">{key}</span>
                  <span className="text-xs text-white font-mono text-right">{value as string}</span>
                </div>
              ))
            ) : Array.isArray(data) ? (
              <div className="flex flex-wrap gap-1">
                {data.map((item: string, i: number) => (
                  <span key={i} className="text-xs px-2 py-1 bg-slate-900 rounded border border-slate-700 text-slate-300">{item}</span>
                ))}
              </div>
            ) : (
              <div className="text-xs text-white font-mono">{data as string}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function FeaturesTab({ product }: { product: any }) {
  return (
    <div className="space-y-3">
      {product.specs.features.map((feature: string, i: number) => (
        <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} className="flex items-start gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700">
          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${product.gradient} flex items-center justify-center flex-shrink-0`}>
            <span className="text-xs font-bold text-white">{i + 1}</span>
          </div>
          <div className="flex-1 pt-1">
            <div className="text-sm text-white font-medium">{feature}</div>
          </div>
          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
        </motion.div>
      ))}
    </div>
  );
}