"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Zap,
  Lightbulb,
  Wind,
  Home,
  Building2,
  Factory,
  X,
  Activity,
  Thermometer,
  Droplets,
  Wifi,
  Power,
} from "lucide-react";

// Product Data
const products = [
  {
    id: 1,
    name: "Smart MCB WiFi 63A",
    category: "Safety & Protection",
    icon: Zap,
    image: "https://via.placeholder.com/150x150/3B82F6/FFFFFF?text=Smart+MCB",
    specs: {
      voltage: "220-240V",
      current: "63A",
      power: "14.5kW",
      protocol: "WiFi 2.4GHz",
    },
    contexts: ["home", "office", "industrial"],
    defaultStatus: "online",
  },
  {
    id: 2,
    name: "Smart Switch WiFi",
    category: "Lighting Control",
    icon: Lightbulb,
    image: "https://via.placeholder.com/150x150/10B981/FFFFFF?text=Smart+Switch",
    specs: {
      voltage: "100-240V",
      maxLoad: "10A",
      protocol: "WiFi 2.4GHz",
      compatibility: "Alexa, Google",
    },
    contexts: ["home", "office"],
    defaultStatus: "online",
  },
  {
    id: 3,
    name: "Air Quality Monitor",
    category: "Environmental",
    icon: Wind,
    image: "https://via.placeholder.com/150x150/8B5CF6/FFFFFF?text=Air+Quality",
    specs: {
      pm25: "0-500 μg/m³",
      temperature: "-10°C to 50°C",
      humidity: "0-99% RH",
      protocol: "WiFi 2.4GHz",
    },
    contexts: ["office", "industrial"],
    defaultStatus: "online",
  },
];

// Scene Data
const scenes = [
  {
    id: "home",
    name: "Smart Home",
    icon: Home,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    description: "Otomasi rumah pintar dengan monitoring real-time",
    products: [1, 2],
  },
  {
    id: "office",
    name: "Smart Office",
    icon: Building2,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    description: "Efisiensi energi dan kenyamanan kerja optimal",
    products: [1, 2, 3],
  },
  {
    id: "industrial",
    name: "Industrial IoT",
    icon: Factory,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    description: "Monitoring dan proteksi sistem industri",
    products: [1, 3],
  },
];

interface ProductStatus {
  isOnline: boolean;
  isOn: boolean;
  metrics: {
    voltage?: number;
    current?: number;
    power?: number;
    pm25?: number;
    temperature?: number;
    humidity?: number;
  };
}

export default function IoTProductShowcase() {
  const [activeScene, setActiveScene] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [productStatuses, setProductStatuses] = useState<Record<number, ProductStatus>>(
    products.reduce((acc, product) => {
      acc[product.id] = {
        isOnline: product.defaultStatus === "online",
        isOn: true,
        metrics:
          product.id === 1
            ? { voltage: 228.5, current: 0.59, power: 121.2 }
            : product.id === 2
            ? { voltage: 220, current: 0.5 }
            : { pm25: 35, temperature: 24.5, humidity: 65 },
      };
      return acc;
    }, {} as Record<number, ProductStatus>)
  );

  const toggleProduct = (productId: number) => {
    setProductStatuses((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        isOn: !prev[productId].isOn,
      },
    }));
  };

  const currentScene = scenes.find((s) => s.id === activeScene);
  const sceneProducts = products.filter((p) => p.contexts.includes(activeScene));

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            IoT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Products</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Solusi smart home, smart office, dan industrial IoT dengan monitoring real-time
          </p>
        </motion.div>

        {/* Scene Selector */}
        <div className="flex justify-center gap-4 mb-12">
          {scenes.map((scene) => {
            const Icon = scene.icon;
            return (
              <motion.button
                key={scene.id}
                onClick={() => setActiveScene(scene.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl border-2 transition-all flex items-center gap-2 ${
                  activeScene === scene.id
                    ? `${scene.bgColor} ${scene.borderColor} ${scene.color}`
                    : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-semibold">{scene.name}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Scene Description */}
        <motion.div
          key={activeScene}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <p className="text-slate-400">{currentScene?.description}</p>
        </motion.div>

        {/* Scene Visualization */}
        <div className="relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-12 min-h-[400px]">
          {/* Background Illustration */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            {activeScene === "home" && <Home className="w-64 h-64 text-slate-400" />}
            {activeScene === "office" && <Building2 className="w-64 h-64 text-slate-400" />}
            {activeScene === "industrial" && <Factory className="w-64 h-64 text-slate-400" />}
          </div>

          {/* Product Placement */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {sceneProducts.map((product, index) => {
              const status = productStatuses[product.id];
              const Icon = product.icon;

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedProduct(product.id)}
                  className="relative cursor-pointer group"
                >
                  {/* Connection Line */}
                  {index > 0 && (
                    <div className="hidden md:block absolute top-1/2 -left-6 w-6 h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent" />
                  )}

                  {/* Product Card */}
                  <div
                    className={`relative bg-slate-950 border-2 rounded-xl p-4 transition-all ${
                      status.isOnline ? "border-slate-700 group:border-blue-500/50" : "border-slate-800 opacity-60"
                    }`}
                  >
                    {/* Status Indicator */}
                    <div className="absolute top-2 right-2 flex items-center gap-1">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          status.isOnline ? "bg-emerald-400 animate-pulse" : "bg-red-400"
                        }`}
                      />
                      <span className="text-[10px] text-slate-500">
                        {status.isOnline ? "Online" : "Offline"}
                      </span>
                    </div>

                    {/* Product Image */}
                    <div className="relative mb-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-32 object-contain rounded-lg bg-slate-900"
                      />
                      {/* Glow Effect */}
                      {status.isOn && (
                        <motion.div
                          className="absolute inset-0 rounded-lg bg-blue-500/20 blur-xl"
                          animate={{ opacity: [0.3, 0.6, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4 text-blue-400" />
                      <h3 className="text-sm font-bold text-white">{product.name}</h3>
                    </div>

                    <p className="text-xs text-slate-500 mb-3">{product.category}</p>

                    {/* Live Metrics */}
                    <div className="space-y-1 mb-3">
                      {status.metrics.voltage && (
                        <div className="flex justify-between text-[10px]">
                          <span className="text-slate-500">Voltage</span>
                          <span className="text-blue-400 font-mono">
                            {status.metrics.voltage.toFixed(1)}V
                          </span>
                        </div>
                      )}
                      {status.metrics.current && (
                        <div className="flex justify-between text-[10px]">
                          <span className="text-slate-500">Current</span>
                          <span className="text-emerald-400 font-mono">
                            {status.metrics.current.toFixed(2)}A
                          </span>
                        </div>
                      )}
                      {status.metrics.pm25 && (
                        <div className="flex justify-between text-[10px]">
                          <span className="text-slate-500">PM2.5</span>
                          <span className="text-purple-400 font-mono">
                            {status.metrics.pm25} μg/m³
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Toggle Switch */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleProduct(product.id);
                      }}
                      className={`w-full py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                        status.isOn
                          ? "bg-emerald-500 text-white"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      {status.isOn ? "ON" : "OFF"}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Product Detail Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <ProductModal
              product={products.find((p) => p.id === selectedProduct)!}
              status={productStatuses[selectedProduct]}
              onClose={() => setSelectedProduct(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

// Product Modal Component
function ProductModal({
  product,
  status,
  onClose,
}: {
  product: typeof products[0];
  status: ProductStatus;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-md w-full"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">{product.name}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain rounded-lg bg-slate-950 mb-4"
        />

        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-semibold text-white mb-2">Spesifikasi</h4>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="bg-slate-950 rounded-lg p-2">
                  <div className="text-[10px] text-slate-500 capitalize">{key}</div>
                  <div className="text-xs text-white font-mono">{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-2">Status Real-time</h4>
            <div className="bg-slate-950 rounded-lg p-3 space-y-2">
              {Object.entries(status.metrics).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-xs text-slate-500 capitalize">{key}</span>
                  <span className="text-sm font-mono text-blue-400">
                    {typeof value === "number" ? value.toFixed(2) : value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}