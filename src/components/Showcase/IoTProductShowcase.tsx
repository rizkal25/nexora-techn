"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
  OrbitControls, Environment, ContactShadows, Html, 
  Line, Grid, Edges, RoundedBox, Text
} from "@react-three/drei";
import { 
  Home, Building2, Factory, Wifi, Zap, Lightbulb, 
  Wind, Settings, AlertTriangle, Tv, Refrigerator, Lock, 
  Camera, Monitor, Printer, Users, Thermometer, Gauge, 
  Fan, Server, Plug, Warehouse, Cog, Layers, Box, Eye, 
  Ruler, Grid3x3, Maximize2, RotateCcw
} from "lucide-react";
import * as THREE from "three";

const scenes = [
  { id: "home", name: "Smart Home", icon: Home, gradient: "from-blue-500 to-cyan-500", description: "Residential IoT Architecture" },
  { id: "office", name: "Smart Office", icon: Building2, gradient: "from-emerald-500 to-teal-500", description: "Commercial Building Systems" },
  { id: "industrial", name: "Industrial Plant", icon: Factory, gradient: "from-purple-500 to-pink-500", description: "Manufacturing Facility" },
];

export default function IoTSceneShowcase() {
  const [activeScene, setActiveScene] = useState("home");
  const [viewMode, setViewMode] = useState<"solid" | "xray" | "wireframe">("xray");
  const [showGrid, setShowGrid] = useState(true);
  const [showDimensions, setShowDimensions] = useState(true);
  const [activeFloor, setActiveFloor] = useState<number | null>(null);
  
  const [deviceStates, setDeviceStates] = useState({
    mcb: true, light1: true, light2: false, ac: true, tv: false, fridge: true, doorLock: true, camera: true,
    hvac: true, lighting: true, projector: false, printer: true, accessControl: true, server: true,
    mainPower: true, motor1: true, motor2: false, conveyor: true, compressor: false, safety: true, generator: false,
  });

  const toggleDevice = (device: keyof typeof deviceStates) => {
    setDeviceStates(prev => ({ ...prev, [device]: !prev[device] }));
  };

  return (
    <section className="py-16 bg-[#0a0e1a] relative overflow-hidden min-h-screen">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 mb-4">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-mono text-blue-300 tracking-wider">DIGITAL TWIN · BIM VIEWER</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-3 tracking-tight">
            Smart IoT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Ecosystem</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Architectural-grade visualization with real-time device monitoring</p>
        </motion.div>

        {/* Scene Selector */}
        <div className="flex justify-center gap-3 mb-6 flex-wrap">
          {scenes.map((scene) => {
            const Icon = scene.icon;
            const isActive = activeScene === scene.id;
            return (
              <motion.button
                key={scene.id}
                onClick={() => setActiveScene(scene.id)}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`relative px-6 py-3 rounded-xl font-semibold transition-all overflow-hidden border ${
                  isActive 
                    ? "text-white border-cyan-400/50 bg-gradient-to-br from-slate-800 to-slate-900 shadow-lg shadow-cyan-500/20" 
                    : "bg-slate-900/50 text-slate-400 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div className="relative flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-cyan-400' : ''}`} />
                  <div className="text-left">
                    <div className="text-sm">{scene.name}</div>
                    <div className="text-[10px] text-slate-500 font-normal">{scene.description}</div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Toolbar */}
        <div className="max-w-7xl mx-auto mb-4 flex flex-wrap items-center justify-between gap-3 px-2">
          <div className="flex items-center gap-2">
            {/* View Mode */}
            <div className="flex bg-slate-900/80 border border-slate-800 rounded-lg p-1">
              {[
                { id: "solid", icon: Box, label: "Solid" },
                { id: "xray", icon: Eye, label: "X-Ray" },
                { id: "wireframe", icon: Grid3x3, label: "Wire" },
              ].map((mode) => {
                const Icon = mode.icon;
                return (
                  <button
                    key={mode.id}
                    onClick={() => setViewMode(mode.id as any)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-all ${
                      viewMode === mode.id 
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30" 
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {mode.label}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setShowGrid(!showGrid)}
              className={`px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-1.5 border transition-all ${
                showGrid 
                  ? "bg-blue-500/20 text-blue-300 border-blue-500/30" 
                  : "bg-slate-900/80 text-slate-400 border-slate-800"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              Grid
            </button>

            <button
              onClick={() => setShowDimensions(!showDimensions)}
              className={`px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-1.5 border transition-all ${
                showDimensions 
                  ? "bg-blue-500/20 text-blue-300 border-blue-500/30" 
                  : "bg-slate-900/80 text-slate-400 border-slate-800"
              }`}
            >
              <Ruler className="w-3.5 h-3.5" />
              Dimensions
            </button>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500">
            <span className="px-2 py-1 bg-slate-900/80 border border-slate-800 rounded">SCALE 1:100</span>
            <span className="px-2 py-1 bg-slate-900/80 border border-slate-800 rounded">UNIT: METERS</span>
          </div>
        </div>

        {/* Main Content */}
        <motion.div key={activeScene} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {/* 3D Viewport */}
            <div className="lg:col-span-2">
              <div className="relative bg-gradient-to-br from-slate-900/90 to-[#0a0e1a] backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                {/* Viewport Header */}
                <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-slate-950/50">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 ml-2">
                      viewport://scene/{activeScene}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-[10px] font-mono text-slate-500">
                    <span>● REC</span>
                    <span>60 FPS</span>
                  </div>
                </div>

                {/* Canvas */}
                <div className="relative w-full h-[650px]">
                  <Suspense fallback={
                    <div className="w-full h-full flex items-center justify-center bg-slate-950">
                      <div className="text-cyan-400 font-mono text-sm animate-pulse">Loading BIM Model...</div>
                    </div>
                  }>
                    {activeScene === "home" && <SmartHomeBIM deviceStates={deviceStates} onToggleDevice={toggleDevice} viewMode={viewMode} showGrid={showGrid} showDimensions={showDimensions} />}
                    {activeScene === "office" && <SmartOfficeBIM deviceStates={deviceStates} onToggleDevice={toggleDevice} viewMode={viewMode} showGrid={showGrid} showDimensions={showDimensions} activeFloor={activeFloor} />}
                    {activeScene === "industrial" && <IndustrialBIM deviceStates={deviceStates} onToggleDevice={toggleDevice} viewMode={viewMode} showGrid={showGrid} showDimensions={showDimensions} />}
                  </Suspense>

                  {/* Corner Coordinates */}
                  <div className="absolute bottom-3 left-3 font-mono text-[10px] text-cyan-400/70 bg-slate-950/80 px-2 py-1 rounded border border-cyan-500/20">
                    X: 0.00 · Y: 0.00 · Z: 0.00
                  </div>
                  <div className="absolute bottom-3 right-3 font-mono text-[10px] text-slate-500 bg-slate-950/80 px-2 py-1 rounded border border-slate-700">
                    ORBIT · ZOOM · PAN
                  </div>
                </div>
              </div>

              {/* Floor Selector for Office */}
              {activeScene === "office" && (
                <div className="mt-4 bg-slate-900/80 border border-slate-800 rounded-xl p-3">
                  <div className="text-[10px] font-mono text-slate-500 mb-2">FLOOR SELECTOR</div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveFloor(null)}
                      className={`flex-1 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                        activeFloor === null 
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" 
                          : "bg-slate-800/50 text-slate-400 border border-slate-700"
                      }`}
                    >
                      All Floors
                    </button>
                    {["GF", "1F", "2F", "3F", "RF"].map((floor, i) => (
                      <button
                        key={floor}
                        onClick={() => setActiveFloor(i)}
                        className={`flex-1 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                          activeFloor === i 
                            ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" 
                            : "bg-slate-800/50 text-slate-400 border border-slate-700"
                        }`}
                      >
                        {floor}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Smartphone Mockup */}
            <div className="lg:col-span-1">
              <SmartphoneMockup scene={activeScene} deviceStates={deviceStates} onToggleDevice={toggleDevice} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ==========================================
// MATERIALS FACTORY - Professional BIM Materials
// ==========================================
function useMaterials(viewMode: string) {
  return useMemo(() => {
    const opacity = viewMode === "xray" ? 0.25 : 1;
    const wireframe = viewMode === "wireframe";
    
    return {
      concrete: new THREE.MeshStandardMaterial({ 
        color: "#64748b", 
        roughness: 0.9, 
        metalness: 0.05,
        transparent: viewMode !== "solid",
        opacity,
        wireframe
      }),
      concreteLight: new THREE.MeshStandardMaterial({ 
        color: "#94a3b8", 
        roughness: 0.85, 
        metalness: 0.05,
        transparent: viewMode !== "solid",
        opacity,
        wireframe
      }),
      glass: new THREE.MeshPhysicalMaterial({ 
        color: "#0891b2", 
        roughness: 0.05, 
        metalness: 0.1,
        transmission: 0.9,
        transparent: true,
        opacity: viewMode === "wireframe" ? 0 : 0.35,
        wireframe,
        ior: 1.5,
      }),
      steel: new THREE.MeshStandardMaterial({ 
        color: "#475569", 
        roughness: 0.3, 
        metalness: 0.9,
        transparent: viewMode !== "solid",
        opacity,
        wireframe
      }),
      steelDark: new THREE.MeshStandardMaterial({ 
        color: "#1e293b", 
        roughness: 0.4, 
        metalness: 0.85,
        transparent: viewMode !== "solid",
        opacity,
        wireframe
      }),
      wood: new THREE.MeshStandardMaterial({ 
        color: "#78350f", 
        roughness: 0.8, 
        metalness: 0,
        transparent: viewMode !== "solid",
        opacity,
        wireframe
      }),
      accent: new THREE.MeshStandardMaterial({ 
        color: "#06b6d4", 
        roughness: 0.3, 
        metalness: 0.5,
        emissive: "#06b6d4",
        emissiveIntensity: 0.3,
      }),
    };
  }, [viewMode]);
}

// ==========================================
// Blueprint Grid Floor
// ==========================================
function BlueprintGrid({ showGrid, size = 40 }: { showGrid: boolean; size?: number }) {
  if (!showGrid) return null;
  return (
    <group position={[0, 0.01, 0]}>
      <Grid
        args={[size, size]}
        cellSize={1}
        cellThickness={0.5}
        cellColor="#1e40af"
        sectionSize={5}
        sectionThickness={1}
        sectionColor="#3b82f6"
        fadeDistance={50}
        fadeStrength={1}
        infiniteGrid
      />
    </group>
  );
}

// ==========================================
// Dimension Line Component
// ==========================================
function DimensionLine({ start, end, label, offset = [0, 0, 0], color = "#06b6d4" }: any) {
  const startV = new THREE.Vector3(...start);
  const endV = new THREE.Vector3(...end);
  const offsetV = new THREE.Vector3(...offset);
  
  const s = startV.clone().add(offsetV);
  const e = endV.clone().add(offsetV);
  
  const distance = startV.distanceTo(endV).toFixed(2);
  const mid = s.clone().add(e).multiplyScalar(0.5);
  
  return (
    <group>
      <Line points={[s, e]} color={color} lineWidth={1} dashed dashSize={0.1} gapSize={0.05} />
      {/* End markers */}
      <Line points={[s.clone().add(new THREE.Vector3(0, 0, 0.2)), s.clone().add(new THREE.Vector3(0, 0, -0.2))]} color={color} lineWidth={1.5} />
      <Line points={[e.clone().add(new THREE.Vector3(0, 0, 0.2)), e.clone().add(new THREE.Vector3(0, 0, -0.2))]} color={color} lineWidth={1.5} />
      <Html position={mid} center distanceFactor={15}>
        <div className="px-2 py-0.5 bg-[#0a0e1a]/90 border border-cyan-500/40 rounded text-[9px] font-mono text-cyan-300 whitespace-nowrap backdrop-blur-sm">
          {label || `${distance}m`}
        </div>
      </Html>
    </group>
  );
}

// ==========================================
// Device Marker (3D Label)
// ==========================================
function DeviceMarker({ position, label, status, color = "#06b6d4", onClick, pulse = true }: any) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <group position={position}>
      {/* Connection line */}
      <Line points={[[0, 0, 0], [0, -0.5, 0]]} color={color} lineWidth={1} />
      
      {/* Marker sphere */}
      <mesh onClick={onClick} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial 
          color={status ? color : "#64748b"}
          emissive={status ? color : "#000"}
          emissiveIntensity={status ? 1.5 : 0}
        />
      </mesh>
      
      {/* Pulse ring */}
      {status && pulse && (
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.15, 0.2, 32]} />
          <meshBasicMaterial color={color} transparent opacity={0.5} side={THREE.DoubleSide} />
        </mesh>
      )}
      
      {/* Label */}
      <Html position={[0, 0.3, 0]} center distanceFactor={12}>
        <div 
          className={`cursor-pointer select-none whitespace-nowrap px-2.5 py-1 rounded-md text-[9px] font-mono font-bold transition-all border backdrop-blur-md ${
            hovered ? 'scale-110' : ''
          }`}
          style={{
            backgroundColor: status ? `${color}20` : '#1e293b80',
            borderColor: status ? `${color}80` : '#47556980',
            color: status ? color : '#94a3b8',
          }}
          onClick={onClick}
        >
          <span className="flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${status ? 'animate-pulse' : ''}`} 
              style={{ backgroundColor: status ? color : '#64748b' }} />
            {label}
          </span>
        </div>
      </Html>
    </group>
  );
}

// ==========================================
// Rotating Device Helper
// ==========================================
function Rotator({ children, speed = 1, active = true, axis = 'y' }: any) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current && active) {
      if (axis === 'y') ref.current.rotation.y += delta * speed;
      if (axis === 'x') ref.current.rotation.x += delta * speed;
      if (axis === 'z') ref.current.rotation.z += delta * speed;
    }
  });
  return <group ref={ref}>{children}</group>;
}

// ==========================================
// 1. SMART HOME BIM - Modern Architecture
// ==========================================
function SmartHomeBIM({ deviceStates, onToggleDevice, viewMode, showGrid, showDimensions }: any) {
  const materials = useMaterials(viewMode);
  
  return (
    <Canvas shadows camera={{ position: [14, 10, 14], fov: 40 }} className="w-full h-full">
      <color attach="background" args={["#0a0e1a"]} />
      <fog attach="fog" args={["#0a0e1a", 25, 50]} />
      
      {/* Professional Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight 
        position={[15, 20, 10]} 
        intensity={1.2} 
        castShadow 
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
      <directionalLight position={[-10, 10, -10]} intensity={0.3} color="#3b82f6" />
      <pointLight position={[0, 8, 0]} intensity={0.5} color="#06b6d4" />
      
      <BlueprintGrid showGrid={showGrid} size={40} />
      
      <group position={[0, 0, 0]}>
        {/* Ground plane */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
          <planeGeometry args={[40, 40]} />
          <meshStandardMaterial color="#0f172a" roughness={1} />
        </mesh>

        {/* Property boundary */}
        <Line 
          points={[[-9, 0.02, -7], [9, 0.02, -7], [9, 0.02, 9], [-9, 0.02, 9], [-9, 0.02, -7]]} 
          color="#3b82f6" 
          lineWidth={1} 
          dashed 
          dashSize={0.3} 
          gapSize={0.15} 
        />

        {/* ============ FOUNDATION ============ */}
        <mesh position={[0, 0.1, 0]} receiveShadow castShadow>
          <boxGeometry args={[11, 0.2, 9]} />
          <meshStandardMaterial color="#334155" roughness={0.9} />
        </mesh>

        {/* ============ MAIN STRUCTURE - Modern Minimalist ============ */}
        {/* Left wing */}
        <mesh position={[-3, 2, 0]} castShadow receiveShadow>
          <boxGeometry args={[5, 3.8, 8]} />
          <primitive object={materials.concrete} attach="material" />
        </mesh>
        <Edges scale={1} threshold={15} linewidth={1.5}>
          <mesh position={[-3, 2, 0]}>
            <boxGeometry args={[5, 3.8, 8]} />
          </mesh>
        </Edges>

        {/* Right wing (taller) */}
        <mesh position={[3, 2.5, 0]} castShadow receiveShadow>
          <boxGeometry args={[5, 4.8, 8]} />
          <primitive object={materials.concreteLight} attach="material" />
        </mesh>
        <Edges scale={1} threshold={15} linewidth={1.5}>
          <mesh position={[3, 2.5, 0]}>
            <boxGeometry args={[5, 4.8, 8]} />
          </mesh>
        </Edges>

        {/* ============ FLAT ROOF WITH PARAPET ============ */}
        {/* Left roof */}
        <mesh position={[-3, 3.95, 0]} castShadow>
          <boxGeometry args={[5.2, 0.15, 8.2]} />
          <primitive object={materials.steelDark} attach="material" />
        </mesh>
        {/* Parapet left */}
        <mesh position={[-3, 4.15, 4.05]}>
          <boxGeometry args={[5.2, 0.3, 0.1]} />
          <primitive object={materials.steel} attach="material" />
        </mesh>
        <mesh position={[-3, 4.15, -4.05]}>
          <boxGeometry args={[5.2, 0.3, 0.1]} />
          <primitive object={materials.steel} attach="material" />
        </mesh>

        {/* Right roof (higher) */}
        <mesh position={[3, 4.95, 0]} castShadow>
          <boxGeometry args={[5.2, 0.15, 8.2]} />
          <primitive object={materials.steelDark} attach="material" />
        </mesh>
        {/* Parapet right */}
        <mesh position={[3, 5.15, 4.05]}>
          <boxGeometry args={[5.2, 0.3, 0.1]} />
          <primitive object={materials.steel} attach="material" />
        </mesh>
        <mesh position={[3, 5.15, -4.05]}>
          <boxGeometry args={[5.2, 0.3, 0.1]} />
          <primitive object={materials.steel} attach="material" />
        </mesh>

        {/* ============ LARGE GLASS WINDOWS ============ */}
        {/* Front facade - Left wing */}
        <mesh position={[-3, 2, 4.01]}>
          <planeGeometry args={[4.2, 3]} />
          <primitive object={materials.glass} attach="material" />
        </mesh>
        {/* Window frames */}
        {[-4.1, -3, -1.9].map((x, i) => (
          <mesh key={`lf-${i}`} position={[x, 2, 4.02]}>
            <boxGeometry args={[0.08, 3, 0.05]} />
            <primitive object={materials.steelDark} attach="material" />
          </mesh>
        ))}
        <mesh position={[-3, 2, 4.02]}>
          <boxGeometry args={[4.2, 0.08, 0.05]} />
          <primitive object={materials.steelDark} attach="material" />
        </mesh>

        {/* Front facade - Right wing (floor-to-ceiling) */}
        <mesh position={[3, 2.5, 4.01]}>
          <planeGeometry args={[4.2, 4]} />
          <primitive object={materials.glass} attach="material" />
        </mesh>
        {[-0.1, 1.95, 4, 6.05].map((x, i) => (
          <mesh key={`rf-${i}`} position={[x, 2.5, 4.02]}>
            <boxGeometry args={[0.08, 4, 0.05]} />
            <primitive object={materials.steelDark} attach="material" />
          </mesh>
        ))}
        {[1, 2.5, 4].map((y, i) => (
          <mesh key={`rh-${i}`} position={[3, y, 4.02]}>
            <boxGeometry args={[4.2, 0.08, 0.05]} />
            <primitive object={materials.steelDark} attach="material" />
          </mesh>
        ))}

        {/* Side windows */}
        <mesh position={[-5.51, 2.2, 0]} rotation={[0, Math.PI / 2, 0]}>
          <planeGeometry args={[3, 2.5]} />
          <primitive object={materials.glass} attach="material" />
        </mesh>
        <mesh position={[5.51, 2.8, 0]} rotation={[0, Math.PI / 2, 0]}>
          <planeGeometry args={[3, 3]} />
          <primitive object={materials.glass} attach="material" />
        </mesh>

        {/* ============ FRONT DOOR ============ */}
        <group position={[0, 1.3, 4.02]} onClick={() => onToggleDevice('doorLock')}>
          <mesh>
            <boxGeometry args={[1.2, 2.4, 0.1]} />
            <meshStandardMaterial 
              color="#1e293b" 
              roughness={0.3} 
              metalness={0.7}
            />
          </mesh>
          <mesh position={[0.4, 0, 0.06]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.3, 16]}  />
            <meshStandardMaterial 
              color={deviceStates.doorLock ? "#10b981" : "#ef4444"}
              emissive={deviceStates.doorLock ? "#10b981" : "#ef4444"}
              emissiveIntensity={2}
              metalness={0.8}
            />
          </mesh>
        </group>

        {/* ============ INTERIOR FURNITURE (visible in x-ray) ============ */}
        {/* Living room - Sofa */}
        <group position={[-3.5, 0.4, 2.5]}>
          <mesh castShadow>
            <boxGeometry args={[2, 0.6, 0.8]} />
            <meshStandardMaterial color="#7c3aed" roughness={0.7} transparent opacity={viewMode === "xray" ? 0.8 : 1} />
          </mesh>
          <mesh position={[0, 0.5, -0.3]} castShadow>
            <boxGeometry args={[2, 0.6, 0.2]} />
            <meshStandardMaterial color="#7c3aed" roughness={0.7} transparent opacity={viewMode === "xray" ? 0.8 : 1} />
          </mesh>
        </group>

        {/* Coffee table */}
        <mesh position={[-3.5, 0.3, 1.3]} castShadow>
          <boxGeometry args={[1.2, 0.4, 0.6]} />
          <primitive object={materials.wood} attach="material" />
        </mesh>

        {/* TV on wall */}
        <group position={[-3.5, 2, -0.5]} onClick={() => onToggleDevice('tv')}>
          <mesh>
            <boxGeometry args={[1.8, 1, 0.08]} />
            <meshStandardMaterial color="#0f172a" roughness={0.2} metalness={0.5} />
          </mesh>
          {deviceStates.tv && (
            <mesh position={[0, 0, 0.05]}>
              <planeGeometry args={[1.7, 0.9]} />
              <meshStandardMaterial 
                color="#3b82f6" 
                emissive="#3b82f6" 
                emissiveIntensity={1.5}
              />
            </mesh>
          )}
        </group>

        {/* Kitchen island */}
        <mesh position={[3, 0.5, 2]} castShadow>
          <boxGeometry args={[2, 1, 1]} />
          <meshStandardMaterial color="#e2e8f0" roughness={0.4} metalness={0.2} />
        </mesh>

        {/* Refrigerator */}
        <group position={[4.5, 1, -2.5]} onClick={() => onToggleDevice('fridge')}>
          <mesh castShadow>
            <boxGeometry args={[0.9, 2, 0.8]} />
            <meshStandardMaterial 
              color="#cbd5e1" 
              roughness={0.2} 
              metalness={0.8}
            />
          </mesh>
          <mesh position={[0, 0.5, 0.41]}>
            <sphereGeometry args={[0.04, 16, 16]} />
            <meshStandardMaterial 
              color={deviceStates.fridge ? "#10b981" : "#64748b"}
              emissive={deviceStates.fridge ? "#10b981" : "#000"}
              emissiveIntensity={deviceStates.fridge ? 2 : 0}
            />
          </mesh>
          <mesh position={[0, 0, 0.41]}>
            <boxGeometry args={[0.85, 0.02, 0.02]} />
            <primitive object={materials.steelDark} attach="material" />
          </mesh>
        </group>

        {/* Bed in right wing */}
        <group position={[3, 0.3, -2]}>
          <mesh castShadow>
            <boxGeometry args={[2, 0.5, 2.5]} />
            <meshStandardMaterial color="#f1f5f9" roughness={0.8} />
          </mesh>
          <mesh position={[0, 0.3, -1]} castShadow>
            <boxGeometry args={[2, 0.3, 0.4]} />
            <meshStandardMaterial color="#e2e8f0" roughness={0.8} />
          </mesh>
        </group>

        {/* ============ SMART DEVICES ============ */}
        {/* MCB Panel - Exterior wall */}
        <group position={[-5.51, 1.5, -2]} rotation={[0, Math.PI / 2, 0]} onClick={() => onToggleDevice('mcb')}>
          <mesh castShadow>
            <boxGeometry args={[0.6, 0.8, 0.15]} />
            <meshStandardMaterial color="#1e3a8a" roughness={0.4} metalness={0.5} />
          </mesh>
          <mesh position={[0, 0.2, 0.08]}>
            <sphereGeometry args={[0.04, 16, 16]} />
            <meshStandardMaterial 
              color={deviceStates.mcb ? "#10b981" : "#ef4444"}
              emissive={deviceStates.mcb ? "#10b981" : "#ef4444"}
              emissiveIntensity={3}
            />
          </mesh>
        </group>

        {/* AC Unit - Exterior */}
        <group position={[5.51, 2.5, 2]} rotation={[0, -Math.PI / 2, 0]} onClick={() => onToggleDevice('ac')}>
          <mesh castShadow>
            <boxGeometry args={[1, 0.4, 0.3]} />
            <meshStandardMaterial color="#e2e8f0" roughness={0.3} metalness={0.4} />
          </mesh>
          <Rotator speed={8} active={deviceStates.ac} axis="z">
            <mesh position={[0, 0, 0.16]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.15, 0.15, 0.05, 16]}  />
              <meshStandardMaterial color="#1e293b" metalness={0.7} />
            </mesh>
          </Rotator>
        </group>

        {/* Security Camera - Roof corner */}
        <group position={[5, 5.2, 3.5]} onClick={() => onToggleDevice('camera')}>
          <mesh>
            <cylinderGeometry args={[0.03, 0.03, 0.4, 8]} />
            <primitive object={materials.steel} attach="material" />
          </mesh>
          <Rotator speed={0.8} active={deviceStates.camera} axis="y">
            <group position={[0, -0.25, 0.15]} rotation={[0.3, 0, 0]}>
              <mesh>
                <boxGeometry args={[0.15, 0.12, 0.25]} />
                <meshStandardMaterial color="#0f172a" metalness={0.6} roughness={0.3} />
              </mesh>
              <mesh position={[0, 0, 0.15]}>
                <sphereGeometry args={[0.05, 16, 16]} />
                <meshStandardMaterial 
                  color={deviceStates.camera ? "#ef4444" : "#64748b"}
                  emissive={deviceStates.camera ? "#ef4444" : "#000"}
                  emissiveIntensity={deviceStates.camera ? 3 : 0}
                />
              </mesh>
            </group>
          </Rotator>
        </group>

        {/* Smart lights (glow from windows) */}
        {deviceStates.light1 && (
          <pointLight position={[-3, 2, 2]} intensity={1.5} color="#fbbf24" distance={6} />
        )}
        {deviceStates.light2 && (
          <pointLight position={[3, 2.5, -2]} intensity={1.5} color="#fbbf24" distance={6} />
        )}

        {/* ============ LANDSCAPING ============ */}
        {/* Driveway */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 7]} receiveShadow>
          <planeGeometry args={[3, 6]} />
          <meshStandardMaterial color="#1e293b" roughness={0.95} />
        </mesh>

        {/* Trees */}
        {[[-7, 0, 5], [7, 0, 5], [-7, 0, -5], [7, 0, -5]].map((pos, i) => (
          <group key={i} position={pos as [number, number, number]}>
            <mesh position={[0, 0.8, 0]} castShadow>
              <cylinderGeometry args={[0.1, 0.15, 1.6, 8]} />
              <meshStandardMaterial color="#422c1a" roughness={0.9} />
            </mesh>
            <mesh position={[0, 2, 0]} castShadow>
              <sphereGeometry args={[0.9, 16, 16]} />
              <meshStandardMaterial color="#14532d" roughness={0.9} />
            </mesh>
          </group>
        ))}

        {/* ============ DIMENSIONS ============ */}
        {showDimensions && (
          <>
            <DimensionLine start={[-5.5, 0, 4.5]} end={[5.5, 0, 4.5]} offset={[0, 0, 1.5]} label="11.00m" />
            <DimensionLine start={[-6, 0, -4]} end={[-6, 0, 4]} offset={[-1, 0, 0]} label="8.00m" />
            <DimensionLine start={[-5.5, 4, 4]} end={[-5.5, 0, 4]} offset={[0, 0, 0.5]} label="3.80m" color="#a855f7" />
            <DimensionLine start={[5.5, 5, 4]} end={[5.5, 0, 4]} offset={[0, 0, 0.5]} label="4.80m" color="#a855f7" />
          </>
        )}

        {/* ============ DEVICE MARKERS ============ */}
        <DeviceMarker position={[-5.5, 3, -2]} label="SMART MCB" status={deviceStates.mcb} color="#3b82f6" onClick={() => onToggleDevice('mcb')} />
        <DeviceMarker position={[5.5, 4, 2]} label="SMART AC" status={deviceStates.ac} color="#10b981" onClick={() => onToggleDevice('ac')} />
        <DeviceMarker position={[-3, 4.5, 2]} label="LIVING ROOM" status={deviceStates.light1} color="#f59e0b" onClick={() => onToggleDevice('light1')} />
        <DeviceMarker position={[3, 5.5, -2]} label="BEDROOM" status={deviceStates.light2} color="#f59e0b" onClick={() => onToggleDevice('light2')} />
        <DeviceMarker position={[-3.5, 3.5, -0.5]} label="SMART TV" status={deviceStates.tv} color="#3b82f6" onClick={() => onToggleDevice('tv')} />
        <DeviceMarker position={[4.5, 3, -2.5]} label="REFRIGERATOR" status={deviceStates.fridge} color="#10b981" onClick={() => onToggleDevice('fridge')} />
        <DeviceMarker position={[5, 6.5, 3.5]} label="CCTV CAMERA" status={deviceStates.camera} color="#ef4444" onClick={() => onToggleDevice('camera')} />
        <DeviceMarker position={[0, 3, 4.5]} label="SMART LOCK" status={deviceStates.doorLock} color="#10b981" onClick={() => onToggleDevice('doorLock')} />
      </group>

      <ContactShadows position={[0, 0, 0]} opacity={0.5} scale={30} blur={2.5} far={10} />
      <Environment preset="city" />
      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={10}
        maxDistance={30}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2.1}
        autoRotate
        autoRotateSpeed={0.3}
        target={[0, 2, 0]}
      />
    </Canvas>
  );
}

// ==========================================
// 2. SMART OFFICE BIM - Multi-Story Building
// ==========================================
function SmartOfficeBIM({ deviceStates, onToggleDevice, viewMode, showGrid, showDimensions, activeFloor }: any) {
  const materials = useMaterials(viewMode);
  const floors = 5;
  const floorHeight = 3;
  
  const isFloorVisible = (floorIndex: number) => {
    if (activeFloor === null) return true;
    return floorIndex === activeFloor;
  };

  return (
    <Canvas shadows camera={{ position: [20, 15, 20], fov: 40 }} className="w-full h-full">
      <color attach="background" args={["#0a0e1a"]} />
      <fog attach="fog" args={["#0a0e1a", 35, 70]} />
      
      <ambientLight intensity={0.4} />
      <directionalLight position={[20, 30, 15]} intensity={1.3} castShadow shadow-mapSize={[2048, 2048]} />
      <directionalLight position={[-15, 15, -15]} intensity={0.3} color="#10b981" />
      
      <BlueprintGrid showGrid={showGrid} size={60} />
      
      <group position={[0, 0, 0]}>
        {/* Ground */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[60, 60]} />
          <meshStandardMaterial color="#0f172a" roughness={1} />
        </mesh>

        {/* Plaza / Entrance area */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 8]} receiveShadow>
          <planeGeometry args={[14, 8]} />
          <meshStandardMaterial color="#1e293b" roughness={0.8} />
        </mesh>

        {/* ============ MAIN BUILDING STRUCTURE ============ */}
        {/* Core structure */}
        <mesh position={[0, 7.5, 0]} castShadow receiveShadow>
          <boxGeometry args={[10, 15, 8]} />
          <primitive object={materials.concrete} attach="material" />
        </mesh>
        <Edges scale={1} threshold={15} linewidth={1.5}>
          <mesh position={[0, 7.5, 0]}>
            <boxGeometry args={[10, 15, 8]} />
          </mesh>
        </Edges>

        {/* Floor slabs (visible in x-ray) */}
        {[0, 1, 2, 3, 4, 5].map((floor) => (
          <mesh key={floor} position={[0, floor * floorHeight, 0]} castShadow>
            <boxGeometry args={[10.2, 0.2, 8.2]} />
            <primitive object={materials.steelDark} attach="material" />
          </mesh>
        ))}

        {/* Structural columns */}
        {[[-4.5, -3.5], [-4.5, 3.5], [4.5, -3.5], [4.5, 3.5], [0, -3.5], [0, 3.5]].map((pos, i) => (
          <mesh key={i} position={[pos[0], 7.5, pos[1]]} castShadow>
            <boxGeometry args={[0.4, 15, 0.4]} />
            <primitive object={materials.steel} attach="material" />
          </mesh>
        ))}

        {/* ============ GLASS CURTAIN WALL ============ */}
        {/* Front facade */}
        <mesh position={[0, 7.5, 4.01]}>
          <planeGeometry args={[10, 15]} />
          <primitive object={materials.glass} attach="material" />
        </mesh>
        
        {/* Mullions (vertical) */}
        {[-4, -2, 0, 2, 4].map((x, i) => (
          <mesh key={`mv-${i}`} position={[x, 7.5, 4.02]}>
            <boxGeometry args={[0.08, 15, 0.05]} />
            <primitive object={materials.steelDark} attach="material" />
          </mesh>
        ))}
        {/* Transoms (horizontal) */}
        {[0, 1, 2, 3, 4, 5].map((floor) => (
          <mesh key={`mh-${floor}`} position={[0, floor * floorHeight, 4.02]}>
            <boxGeometry args={[10, 0.08, 0.05]} />
            <primitive object={materials.steelDark} attach="material" />
          </mesh>
        ))}

        {/* Side facades */}
        <mesh position={[5.01, 7.5, 0]} rotation={[0, Math.PI / 2, 0]}>
          <planeGeometry args={[8, 15]} />
          <primitive object={materials.glass} attach="material" />
        </mesh>
        <mesh position={[-5.01, 7.5, 0]} rotation={[0, Math.PI / 2, 0]}>
          <planeGeometry args={[8, 15]} />
          <primitive object={materials.glass} attach="material" />
        </mesh>

        {/* Window lights per floor */}
        {[0, 1, 2, 3, 4].map((floor) => {
          const isOn = deviceStates.lighting && isFloorVisible(floor);
          return isOn ? (
            <pointLight key={`fl-${floor}`} position={[0, floor * floorHeight + 1.5, 0]} intensity={0.8} color="#fbbf24" distance={8} />
          ) : null;
        })}

        {/* ============ ENTRANCE CANOPY ============ */}
        <mesh position={[0, 3.5, 6]} castShadow>
          <boxGeometry args={[6, 0.15, 4]} />
          <primitive object={materials.steel} attach="material" />
        </mesh>
        {/* Canopy columns */}
        <mesh position={[-2.5, 1.75, 7.5]} castShadow>
          <cylinderGeometry args={[0.15, 0.15, 3.5, 16]} />
          <primitive object={materials.steel} attach="material" />
        </mesh>
        <mesh position={[2.5, 1.75, 7.5]} castShadow>
          <cylinderGeometry args={[0.15, 0.15, 3.5, 16]} />
          <primitive object={materials.steel} attach="material" />
        </mesh>

        {/* Entrance doors */}
        <group position={[0, 1.5, 4.05]} onClick={() => onToggleDevice('accessControl')}>
          <mesh>
            <boxGeometry args={[2.5, 3, 0.08]} />
            <primitive object={materials.glass} attach="material" />
          </mesh>
          <mesh position={[0, 1.2, 0.05]}>
            <boxGeometry args={[0.3, 0.4, 0.05]} />
            <meshStandardMaterial 
              color={deviceStates.accessControl ? "#10b981" : "#ef4444"}
              emissive={deviceStates.accessControl ? "#10b981" : "#ef4444"}
              emissiveIntensity={2}
            />
          </mesh>
        </group>

        {/* ============ ROOFTOP EQUIPMENT ============ */}
        {/* HVAC units */}
        <group position={[-3, 15.5, -2]} onClick={() => onToggleDevice('hvac')}>
          <mesh castShadow>
            <boxGeometry args={[2, 1.5, 2]} />
            <primitive object={materials.steel} attach="material" />
          </mesh>
          <Rotator speed={6} active={deviceStates.hvac} axis="y">
            <mesh position={[0, 0.8, 0]}>
              <cylinderGeometry args={[0.7, 0.7, 0.15, 24]} />
              <meshStandardMaterial color="#1e293b" metalness={0.8} />
            </mesh>
          </Rotator>
        </group>
        <group position={[3, 15.5, -2]} onClick={() => onToggleDevice('hvac')}>
          <mesh castShadow>
            <boxGeometry args={[2, 1.5, 2]} />
            <primitive object={materials.steel} attach="material" />
          </mesh>
          <Rotator speed={6} active={deviceStates.hvac} axis="y">
            <mesh position={[0, 0.8, 0]}>
              <cylinderGeometry args={[0.7, 0.7, 0.15, 24]} />
              <meshStandardMaterial color="#1e293b" metalness={0.8} />
            </mesh>
          </Rotator>
        </group>

        {/* Antenna tower */}
        <group position={[0, 16, 2]}>
          <mesh>
            <cylinderGeometry args={[0.08, 0.08, 3, 8]} />
            <primitive object={materials.steel} attach="material" />
          </mesh>
          <mesh position={[0, 1.6, 0]}>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={3} />
          </mesh>
          {/* Cross bars */}
          {[0.5, 1, 1.5].map((y, i) => (
            <mesh key={i} position={[0, y - 1.5, 0]}>
              <boxGeometry args={[0.8 - i * 0.15, 0.05, 0.05]} />
              <primitive object={materials.steel} attach="material" />
            </mesh>
          ))}
        </group>

        {/* ============ SERVER ROOM (Side extension) ============ */}
        <group position={[7, 1.5, 0]} onClick={() => onToggleDevice('server')}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[3, 3, 4]} />
            <primitive object={materials.concreteLight} attach="material" />
          </mesh>
          <Edges scale={1} threshold={15} linewidth={1.5}>
            <mesh>
              <boxGeometry args={[3, 3, 4]} />
            </mesh>
          </Edges>
          {/* Server racks visible */}
          {[0, 1, 2].map((i) => (
            <mesh key={i} position={[0.5, 0, -1 + i]} castShadow>
              <boxGeometry args={[0.6, 2, 0.8]} />
              <meshStandardMaterial 
                color={deviceStates.server ? "#1e3a8a" : "#1e293b"}
                roughness={0.3}
                metalness={0.7}
              />
            </mesh>
          ))}
          {deviceStates.server && (
            <pointLight position={[0, 0, 0]} intensity={0.8} color="#3b82f6" distance={4} />
          )}
        </group>

        {/* ============ MAIN POWER PANEL ============ */}
        <group position={[-6.5, 1.5, 0]} onClick={() => onToggleDevice('mcb')}>
          <mesh castShadow>
            <boxGeometry args={[1, 2.5, 1.5]} />
            <meshStandardMaterial color="#1e3a8a" roughness={0.4} metalness={0.5} />
          </mesh>
          <mesh position={[-0.51, 0.5, 0]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial 
              color={deviceStates.mcb ? "#10b981" : "#ef4444"}
              emissive={deviceStates.mcb ? "#10b981" : "#ef4444"}
              emissiveIntensity={3}
            />
          </mesh>
        </group>

        {/* ============ DIMENSIONS ============ */}
        {showDimensions && (
          <>
            <DimensionLine start={[-5, 0, 5]} end={[5, 0, 5]} offset={[0, 0, 2]} label="10.00m" />
            <DimensionLine start={[-6, 0, -4]} end={[-6, 0, 4]} offset={[-2, 0, 0]} label="8.00m" />
            <DimensionLine start={[-5.5, 15, 4]} end={[-5.5, 0, 4]} offset={[-1, 0, 0]} label="15.00m" color="#a855f7" />
            <DimensionLine start={[5.5, 3, 4.5]} end={[5.5, 0, 4.5]} offset={[0.5, 0, 0.5]} label="3.00m" color="#f59e0b" />
          </>
        )}

        {/* ============ DEVICE MARKERS ============ */}
        <DeviceMarker position={[-6.5, 4, 0]} label="MAIN POWER" status={deviceStates.mcb} color="#3b82f6" onClick={() => onToggleDevice('mcb')} />
        <DeviceMarker position={[0, 18.5, -2]} label="HVAC SYSTEM" status={deviceStates.hvac} color="#10b981" onClick={() => onToggleDevice('hvac')} />
        <DeviceMarker position={[7, 4, 0]} label="SERVER ROOM" status={deviceStates.server} color="#3b82f6" onClick={() => onToggleDevice('server')} />
        <DeviceMarker position={[0, 18, 2]} label="WIFI ANTENNA" status={true} color="#ef4444" />
        <DeviceMarker position={[0, 4, 5]} label="ACCESS CTRL" status={deviceStates.accessControl} color="#10b981" onClick={() => onToggleDevice('accessControl')} />
        <DeviceMarker position={[0, 9, 4.5]} label="SMART LIGHTING" status={deviceStates.lighting} color="#f59e0b" onClick={() => onToggleDevice('lighting')} />
      </group>

      <ContactShadows position={[0, 0, 0]} opacity={0.5} scale={40} blur={2.5} far={15} />
      <Environment preset="city" />
      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={15}
        maxDistance={45}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2.1}
        autoRotate
        autoRotateSpeed={0.3}
        target={[0, 7, 0]}
      />
    </Canvas>
  );
}

// ==========================================
// 3. INDUSTRIAL BIM - Manufacturing Plant
// ==========================================
function IndustrialBIM({ deviceStates, onToggleDevice, viewMode, showGrid, showDimensions }: any) {
  const materials = useMaterials(viewMode);
  
  return (
    <Canvas shadows camera={{ position: [25, 18, 25], fov: 40 }} className="w-full h-full">
      <color attach="background" args={["#0a0e1a"]} />
      <fog attach="fog" args={["#0a0e1a", 40, 80]} />
      
      <ambientLight intensity={0.4} />
      <directionalLight position={[25, 35, 20]} intensity={1.4} castShadow shadow-mapSize={[2048, 2048]} />
      <directionalLight position={[-20, 20, -20]} intensity={0.3} color="#a855f7" />
      
      <BlueprintGrid showGrid={showGrid} size={80} />
      
      <group position={[0, 0, 0]}>
        {/* Ground */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[80, 80]} />
          <meshStandardMaterial color="#0f172a" roughness={1} />
        </mesh>

        {/* ============ MAIN FACTORY BUILDING ============ */}
        {/* Foundation */}
        <mesh position={[0, 0.15, 0]} receiveShadow>
          <boxGeometry args={[26, 0.3, 16]} />
          <meshStandardMaterial color="#334155" roughness={0.9} />
        </mesh>

        {/* Main walls */}
        <mesh position={[0, 4, 0]} castShadow receiveShadow>
          <boxGeometry args={[24, 7.5, 14]} />
          <primitive object={materials.concrete} attach="material" />
        </mesh>
        <Edges scale={1} threshold={15} linewidth={1.5}>
          <mesh position={[0, 4, 0]}>
            <boxGeometry args={[24, 7.5, 14]} />
          </mesh>
        </Edges>

        {/* ============ SAWTOOTH ROOF TRUSS ============ */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <group key={i} position={[-10 + i * 4, 7.75, 0]}>
            {/* Sloped section */}
            <mesh position={[0, 0.5, 0]} rotation={[0, 0, Math.PI / 8]} castShadow>
              <boxGeometry args={[4.5, 0.2, 14]} />
              <primitive object={materials.steelDark} attach="material" />
            </mesh>
            {/* Vertical section */}
            <mesh position={[2.2, 1.2, 0]} castShadow>
              <boxGeometry args={[0.2, 1.5, 14]} />
              <primitive object={materials.steelDark} attach="material" />
            </mesh>
            {/* Skylight */}
            <mesh position={[0, 0.6, 0]} rotation={[0, 0, Math.PI / 8]}>
              <planeGeometry args={[3.8, 13.5]} />
              <primitive object={materials.glass} attach="material" />
            </mesh>
          </group>
        ))}

        {/* Steel structural columns */}
        {[-11, -7, -3, 1, 5, 9].map((x, i) => (
          <group key={i}>
            <mesh position={[x, 4, 7]} castShadow>
              <boxGeometry args={[0.3, 7.5, 0.3]} />
              <primitive object={materials.steel} attach="material" />
            </mesh>
            <mesh position={[x, 4, -7]} castShadow>
              <boxGeometry args={[0.3, 7.5, 0.3]} />
              <primitive object={materials.steel} attach="material" />
            </mesh>
          </group>
        ))}

        {/* Safety stripes on floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.16, 5]} receiveShadow>
          <planeGeometry args={[22, 0.3]} />
          <meshStandardMaterial color="#fbbf24" roughness={0.7} />
        </mesh>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.16, -5]} receiveShadow>
          <planeGeometry args={[22, 0.3]} />
          <meshStandardMaterial color="#fbbf24" roughness={0.7} />
        </mesh>

        {/* ============ MOTOR 1 ============ */}
        <group position={[-8, 1.5, 3]} onClick={() => onToggleDevice('motor1')}>
          {/* Base */}
          <mesh castShadow>
            <boxGeometry args={[3, 0.5, 3]} />
            <primitive object={materials.steelDark} attach="material" />
          </mesh>
          {/* Motor body */}
          <mesh position={[0, 1, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[1, 1, 2.5, 24]} />
            <meshStandardMaterial 
              color={deviceStates.motor1 ? "#7c3aed" : "#334155"}
              roughness={0.4}
              metalness={0.7}
            />
          </mesh>
          {/* Cooling fins */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <mesh key={i} position={[-1 + i * 0.28, 1, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[1.05, 1.05, 0.05, 24]} />
              <primitive object={materials.steelDark} attach="material" />
            </mesh>
          ))}
          {/* Rotating shaft */}
          <Rotator speed={deviceStates.motor1 ? 8 : 0} axis="x">
            <mesh position={[1.5, 1, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.15, 0.15, 1, 16]} />
              <meshStandardMaterial color="#a855f7" emissive={deviceStates.motor1 ? "#a855f7" : "#000"} emissiveIntensity={deviceStates.motor1 ? 1 : 0} metalness={0.9} />
            </mesh>
          </Rotator>
          {deviceStates.motor1 && (
            <pointLight position={[0, 1, 0]} intensity={0.5} color="#a855f7" distance={3} />
          )}
        </group>

        {/* ============ MOTOR 2 ============ */}
        <group position={[-3, 1.5, 3]} onClick={() => onToggleDevice('motor2')}>
          <mesh castShadow>
            <boxGeometry args={[3, 0.5, 3]} />
            <primitive object={materials.steelDark} attach="material" />
          </mesh>
          <mesh position={[0, 1, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[1, 1, 2.5, 24]} />
            <meshStandardMaterial 
              color={deviceStates.motor2 ? "#7c3aed" : "#334155"}
              roughness={0.4}
              metalness={0.7}
            />
          </mesh>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <mesh key={i} position={[-1 + i * 0.28, 1, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[1.05, 1.05, 0.05, 24]} />
              <primitive object={materials.steelDark} attach="material" />
            </mesh>
          ))}
          <Rotator speed={deviceStates.motor2 ? 8 : 0} axis="x">
            <mesh position={[1.5, 1, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.15, 0.15, 1, 16]} />
              <meshStandardMaterial color="#a855f7" emissive={deviceStates.motor2 ? "#a855f7" : "#000"} emissiveIntensity={deviceStates.motor2 ? 1 : 0} metalness={0.9} />
            </mesh>
          </Rotator>
        </group>

        {/* ============ CONVEYOR BELT ============ */}
        <group position={[5, 1, 3]} onClick={() => onToggleDevice('conveyor')}>
          {/* Frame */}
          <mesh castShadow>
            <boxGeometry args={[8, 0.3, 1.8]} />
            <primitive object={materials.steel} attach="material" />
          </mesh>
          {/* Legs */}
          {[[-3.5, -0.7, -0.7], [-3.5, -0.7, 0.7], [3.5, -0.7, -0.7], [3.5, -0.7, 0.7]].map((pos, i) => (
            <mesh key={i} position={pos as [number, number, number]} castShadow>
              <boxGeometry args={[0.2, 1, 0.2]} />
              <primitive object={materials.steelDark} attach="material" />
            </mesh>
          ))}
          {/* Rollers */}
          {[-3, -2, -1, 0, 1, 2, 3].map((x, i) => (
            <Rotator key={i} speed={deviceStates.conveyor ? 5 : 0} axis="z">
              <mesh position={[x, 0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.2, 0.2, 1.6, 16]} />
                <meshStandardMaterial color="#1e293b" metalness={0.8} />
              </mesh>
            </Rotator>
          ))}
          {/* Belt surface */}
          <mesh position={[0, 0.35, 0]}>
            <boxGeometry args={[7.5, 0.05, 1.5]} />
            <meshStandardMaterial 
              color={deviceStates.conveyor ? "#1e3a8a" : "#334155"}
              roughness={0.8}
            />
          </mesh>
          {/* Moving boxes */}
          {deviceStates.conveyor && (
            <Rotator speed={1} axis="x">
              {[-2, 0, 2].map((x, i) => (
                <mesh key={i} position={[x, 0.7, 0]} castShadow>
                  <boxGeometry args={[0.6, 0.6, 0.6]} />
                  <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.3} />
                </mesh>
              ))}
            </Rotator>
          )}
        </group>

        {/* ============ AIR COMPRESSOR ============ */}
        <group position={[-8, 1.5, -4]} onClick={() => onToggleDevice('compressor')}>
          <mesh castShadow>
            <boxGeometry args={[3, 2.5, 3]} />
            <meshStandardMaterial 
              color={deviceStates.compressor ? "#7f1d1d" : "#334155"}
              roughness={0.5}
              metalness={0.5}
            />
          </mesh>
          {/* Tank */}
          <mesh position={[0, 0.5, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.8, 0.8, 2.5, 24]} />
            <meshStandardMaterial 
              color={deviceStates.compressor ? "#ef4444" : "#475569"}
              roughness={0.3}
              metalness={0.7}
              emissive={deviceStates.compressor ? "#ef4444" : "#000"}
              emissiveIntensity={deviceStates.compressor ? 0.3 : 0}
            />
          </mesh>
          {/* Pressure gauge */}
          <mesh position={[1.51, 1, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.2, 0.2, 0.05, 16]}  />
            <meshStandardMaterial color="#fbbf24" metalness={0.8} />
          </mesh>
          {/* Piping */}
          <mesh position={[0, 1.8, 0]}>
            <cylinderGeometry args={[0.08, 0.08, 1, 8]} />
            <primitive object={materials.steel} attach="material" />
          </mesh>
        </group>

        {/* ============ GENERATOR ============ */}
        <group position={[-3, 1.5, -4]} onClick={() => onToggleDevice('generator')}>
          <mesh castShadow>
            <boxGeometry args={[3, 2.5, 3]} />
            <meshStandardMaterial 
              color={deviceStates.generator ? "#064e3b" : "#334155"}
              roughness={0.5}
              metalness={0.5}
            />
          </mesh>
          {/* Engine block */}
          <mesh position={[0, 0.5, 0]} castShadow>
            <boxGeometry args={[2.5, 1.5, 2]} />
            <meshStandardMaterial 
              color={deviceStates.generator ? "#10b981" : "#475569"}
              roughness={0.4}
              metalness={0.7}
              emissive={deviceStates.generator ? "#10b981" : "#000"}
              emissiveIntensity={deviceStates.generator ? 0.3 : 0}
            />
          </mesh>
          {/* Exhaust */}
          <mesh position={[1, 1.8, 0]}>
            <cylinderGeometry args={[0.12, 0.12, 1.5, 12]} />
            <primitive object={materials.steelDark} attach="material" />
          </mesh>
        </group>

        {/* ============ CONTROL ROOM ============ */}
        <group position={[9, 2, -4]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[4, 4, 4]} />
            <primitive object={materials.concreteLight} attach="material" />
          </mesh>
          <Edges scale={1} threshold={15} linewidth={1.5}>
            <mesh>
              <boxGeometry args={[4, 4, 4]} />
            </mesh>
          </Edges>
          {/* Control room window */}
          <mesh position={[0, 1, 2.01]}>
            <planeGeometry args={[3, 2]} />
            <primitive object={materials.glass} attach="material" />
          </mesh>
          {/* Control panels inside */}
          <mesh position={[0, 1, -1.5]}>
            <boxGeometry args={[3, 2, 0.3]} />
            <meshStandardMaterial color="#1e3a8a" roughness={0.3} metalness={0.6} />
          </mesh>
          {/* Indicator lights */}
          {[[-1, 1.5], [0, 1.5], [1, 1.5], [-1, 0.8], [0, 0.8], [1, 0.8]].map((pos, i) => (
            <mesh key={i} position={[pos[0], pos[1], -1.34]}>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshStandardMaterial 
                color={["#3b82f6", "#10b981", "#ef4444", "#fbbf24", "#06b6d4", "#a855f7"][i]}
                emissive={["#3b82f6", "#10b981", "#ef4444", "#fbbf24", "#06b6d4", "#a855f7"][i]}
                emissiveIntensity={1.5}
              />
            </mesh>
          ))}
        </group>

        {/* ============ MAIN POWER PANEL ============ */}
        <group position={[-12.5, 2, 0]} onClick={() => onToggleDevice('mainPower')}>
          <mesh castShadow>
            <boxGeometry args={[1, 4, 3]} />
            <meshStandardMaterial color="#4c1d95" roughness={0.4} metalness={0.6} />
          </mesh>
          <mesh position={[-0.51, 1, 0]}>
            <boxGeometry args={[0.05, 1.5, 1.5]} />
            <meshStandardMaterial 
              color={deviceStates.mainPower ? "#10b981" : "#ef4444"}
              emissive={deviceStates.mainPower ? "#10b981" : "#ef4444"}
              emissiveIntensity={2}
            />
          </mesh>
          {/* Warning stripes */}
          <mesh position={[-0.51, -1, 0]}>
            <boxGeometry args={[0.06, 0.5, 2.5]} />
            <meshStandardMaterial color="#fbbf24" />
          </mesh>
        </group>

        {/* ============ SAFETY SYSTEM ============ */}
        <group position={[12.5, 2, 0]} onClick={() => onToggleDevice('safety')}>
          <mesh castShadow>
            <boxGeometry args={[1, 4, 3]} />
            <meshStandardMaterial 
              color={deviceStates.safety ? "#7f1d1d" : "#334155"}
              roughness={0.4}
              metalness={0.5}
            />
          </mesh>
          <mesh position={[0.51, 1, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.4, 0.4, 0.1, 24]} />
            <meshStandardMaterial 
              color={deviceStates.safety ? "#ef4444" : "#64748b"}
              emissive={deviceStates.safety ? "#ef4444" : "#000"}
              emissiveIntensity={deviceStates.safety ? 3 : 0}
            />
          </mesh>
          <mesh position={[0.51, 1, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.5, 0.5, 0.05, 24]} />
            <meshStandardMaterial color="#fbbf24" transparent opacity={0.3} />
          </mesh>
        </group>

        {/* ============ SMOKESTACK ============ */}
        <group position={[10, 0, -6]}>
          <mesh position={[0, 5, 0]} castShadow>
            <cylinderGeometry args={[0.8, 1.2, 10, 16]} />
            <meshStandardMaterial color="#64748b" roughness={0.6} metalness={0.4} />
          </mesh>
          <mesh position={[0, 10.2, 0]}>
            <cylinderGeometry args={[1, 0.8, 0.5, 16]} />
            <primitive object={materials.steelDark} attach="material" />
          </mesh>
          {/* Red warning stripes */}
          <mesh position={[0, 8, 0]}>
            <cylinderGeometry args={[0.88, 0.92, 1, 16]} />
            <meshStandardMaterial color="#ef4444" roughness={0.7} />
          </mesh>
          <mesh position={[0, 6, 0]}>
            <cylinderGeometry args={[0.98, 1.02, 1, 16]} />
            <meshStandardMaterial color="#ef4444" roughness={0.7} />
          </mesh>
        </group>

        {/* ============ PIPING SYSTEM ============ */}
        {/* Main horizontal pipe */}
        <mesh position={[0, 6.5, -6.5]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.15, 0.15, 20, 12]} />
          <meshStandardMaterial color="#f59e0b" roughness={0.4} metalness={0.6} />
        </mesh>
        {/* Vertical pipes */}
        {[-8, -3, 5].map((x, i) => (
          <mesh key={i} position={[x, 3.5, -6.5]}>
            <cylinderGeometry args={[0.15, 0.15, 6, 12]} />
            <meshStandardMaterial color="#f59e0b" roughness={0.4} metalness={0.6} />
          </mesh>
        ))}

        {/* ============ DIMENSIONS ============ */}
        {showDimensions && (
          <>
            <DimensionLine start={[-12, 0, 8]} end={[12, 0, 8]} offset={[0, 0, 2]} label="24.00m" />
            <DimensionLine start={[-13, 0, -7]} end={[-13, 0, 7]} offset={[-2, 0, 0]} label="14.00m" />
            <DimensionLine start={[-12, 7.75, 7]} end={[-12, 0, 7]} offset={[-1, 0, 0]} label="7.50m" color="#a855f7" />
          </>
        )}

        {/* ============ DEVICE MARKERS ============ */}
        <DeviceMarker position={[-12.5, 5.5, 0]} label="3-PHASE PWR" status={deviceStates.mainPower} color="#a855f7" onClick={() => onToggleDevice('mainPower')} />
        <DeviceMarker position={[-8, 4, 3]} label="MOTOR 1" status={deviceStates.motor1} color="#a855f7" onClick={() => onToggleDevice('motor1')} />
        <DeviceMarker position={[-3, 4, 3]} label="MOTOR 2" status={deviceStates.motor2} color="#a855f7" onClick={() => onToggleDevice('motor2')} />
        <DeviceMarker position={[5, 3.5, 3]} label="CONVEYOR" status={deviceStates.conveyor} color="#3b82f6" onClick={() => onToggleDevice('conveyor')} />
        <DeviceMarker position={[-8, 4, -4]} label="COMPRESSOR" status={deviceStates.compressor} color="#ef4444" onClick={() => onToggleDevice('compressor')} />
        <DeviceMarker position={[-3, 4, -4]} label="GENERATOR" status={deviceStates.generator} color="#10b981" onClick={() => onToggleDevice('generator')} />
        <DeviceMarker position={[9, 5, -4]} label="CTRL ROOM" status={true} color="#3b82f6" />
        <DeviceMarker position={[12.5, 5.5, 0]} label="SAFETY SYS" status={deviceStates.safety} color="#ef4444" onClick={() => onToggleDevice('safety')} />
      </group>

      <ContactShadows position={[0, 0, 0]} opacity={0.5} scale={60} blur={2.5} far={20} />
      <Environment preset="warehouse" />
      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={20}
        maxDistance={55}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2.1}
        autoRotate
        autoRotateSpeed={0.3}
        target={[0, 3, 0]}
      />
    </Canvas>
  );
}

// ==========================================
// SMARTPHONE MOCKUP (Same as before)
// ==========================================
function SmartphoneMockup({ scene, deviceStates, onToggleDevice }: any) {
  const isHome = scene === "home";
  const isOffice = scene === "office";
  const isIndustrial = scene === "industrial";

  const homeDevices = [
    { id: 'light1', name: 'Living Room Light', icon: Lightbulb },
    { id: 'light2', name: 'Bedroom Light', icon: Lightbulb },
    { id: 'tv', name: 'Smart TV', icon: Tv },
    { id: 'ac', name: 'Air Conditioner', icon: Wind },
    { id: 'fridge', name: 'Refrigerator', icon: Refrigerator },
    { id: 'doorLock', name: 'Smart Door Lock', icon: Lock },
    { id: 'camera', name: 'Security Camera', icon: Camera },
  ];

  const officeDevices = [
    { id: 'hvac', name: 'HVAC System', icon: Wind },
    { id: 'lighting', name: 'Smart Lighting', icon: Lightbulb },
    { id: 'projector', name: 'Projector', icon: Monitor },
    { id: 'printer', name: 'Network Printer', icon: Printer },
    { id: 'accessControl', name: 'Access Control', icon: Lock },
    { id: 'server', name: 'Server Room', icon: Server },
  ];

  const industrialDevices = [
    { id: 'motor1', name: 'Motor 1', icon: Cog },
    { id: 'motor2', name: 'Motor 2', icon: Cog },
    { id: 'conveyor', name: 'Conveyor Belt', icon: Factory },
    { id: 'compressor', name: 'Air Compressor', icon: Fan },
    { id: 'generator', name: 'Generator', icon: Plug },
    { id: 'safety', name: 'Safety System', icon: AlertTriangle },
  ];

  const currentDevices = isHome ? homeDevices : isOffice ? officeDevices : industrialDevices;

  return (
    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative mx-auto sticky top-4">
      <div className="relative w-full max-w-xs mx-auto aspect-[9/19] bg-gradient-to-br from-slate-900 to-slate-950 rounded-[2.5rem] border-[10px] border-slate-800 shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-950 rounded-b-2xl z-20" />
        
        <div className="pt-8 px-3 pb-3 h-full bg-gradient-to-br from-slate-950 to-slate-900 overflow-y-auto">
          <div className="flex justify-between items-center mb-3 text-[9px] text-slate-400 font-mono">
            <span>9:41</span>
            <div className="flex items-center gap-1"><Wifi className="w-2.5 h-2.5" /><span>100%</span></div>
          </div>

          <div className="mb-3">
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[8px] font-mono text-cyan-400 tracking-wider">DIGITAL TWIN</span>
            </div>
            <h3 className="text-base font-bold text-white">Nexora Control</h3>
            <p className="text-[10px] text-slate-400 capitalize">{scene} · Live</p>
          </div>

          <div className="space-y-1.5">
            {/* Main Power */}
            <motion.div whileTap={{ scale: 0.98 }} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-xl p-2.5">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isIndustrial ? 'bg-gradient-to-br from-purple-500 to-pink-500' : isOffice ? 'bg-gradient-to-br from-emerald-500 to-teal-500' : 'bg-gradient-to-br from-blue-500 to-cyan-500'}`}>
                    {isIndustrial ? <Settings className="w-3.5 h-3.5 text-white" /> : <Zap className="w-3.5 h-3.5 text-white" />}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-white">{isHome ? "Smart MCB" : isOffice ? "Main Power" : "3-Phase Power"}</div>
                    <div className="text-[8px] text-slate-400">{isHome ? "Main Panel" : isOffice ? "Distribution" : "Industrial"}</div>
                  </div>
                </div>
                <button onClick={() => onToggleDevice(isHome ? 'mcb' : isOffice ? 'mcb' : 'mainPower')} className={`relative w-10 h-5 rounded-full ${deviceStates[isHome ? 'mcb' : isOffice ? 'mcb' : 'mainPower'] ? 'bg-emerald-500' : 'bg-slate-700'}`}>
                  <motion.div className="absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-lg" animate={{ x: deviceStates[isHome ? 'mcb' : isOffice ? 'mcb' : 'mainPower'] ? 20 : 2 }} transition={{ type: "spring", stiffness: 500, damping: 30 }} />
                </button>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="bg-slate-950/50 rounded p-1 text-center">
                  <div className="text-[7px] text-slate-500">Voltage</div>
                  <div className={`text-[9px] font-bold font-mono ${isIndustrial ? 'text-purple-400' : 'text-blue-400'}`}>{isIndustrial ? '380V' : '228V'}</div>
                </div>
                <div className="bg-slate-950/50 rounded p-1 text-center">
                  <div className="text-[7px] text-slate-500">Current</div>
                  <div className="text-[9px] font-bold text-emerald-400 font-mono">{isIndustrial ? '45A' : '0.59A'}</div>
                </div>
                <div className="bg-slate-950/50 rounded p-1 text-center">
                  <div className="text-[7px] text-slate-500">Power</div>
                  <div className="text-[9px] font-bold text-purple-400 font-mono">{isIndustrial ? '15kW' : '121W'}</div>
                </div>
              </div>
            </motion.div>

            {/* Device List */}
            {currentDevices.map((device) => {
              const Icon = device.icon;
              const isOn = deviceStates[device.id];
              const gradientColor = isHome ? 'from-yellow-400 to-orange-500' : isOffice ? 'from-emerald-400 to-teal-500' : 'from-purple-500 to-pink-500';
              
              return (
                <motion.div key={device.id} whileTap={{ scale: 0.98 }} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-lg p-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-md flex items-center justify-center transition-colors ${isOn ? `bg-gradient-to-br ${gradientColor}` : 'bg-slate-700'}`}>
                        <Icon className={`w-3.5 h-3.5 ${isOn ? 'text-white' : 'text-slate-400'}`} />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-white">{device.name}</div>
                        <div className="text-[8px] text-slate-400">{isOn ? (isIndustrial ? 'Running' : 'Active') : (isIndustrial ? 'Stopped' : 'Standby')}</div>
                      </div>
                    </div>
                    <button onClick={() => onToggleDevice(device.id)} className={`relative w-9 h-4 rounded-full ${isOn ? 'bg-emerald-500' : 'bg-slate-700'}`}>
                      <motion.div className="absolute top-0.5 w-3 h-3 bg-white rounded-full shadow" animate={{ x: isOn ? 18 : 2 }} transition={{ type: "spring", stiffness: 500, damping: 30 }} />
                    </button>
                  </div>
                </motion.div>
              );
            })}

            {/* Energy Stats */}
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-2">
              <div className="text-[8px] text-slate-400 mb-0.5 font-mono">ENERGY TODAY</div>
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-base font-bold text-white font-mono">{isIndustrial ? '145.2' : isOffice ? '28.5' : '0.027'}</div>
                  <div className="text-[8px] text-slate-400">kWh</div>
                </div>
                <div className="text-right">
                  <div className="text-[9px] text-emerald-400 font-bold">↓ 12%</div>
                  <div className="text-[7px] text-slate-400">vs yesterday</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-56 h-6 bg-black/30 blur-xl rounded-full" />
    </motion.div>
  );
}
