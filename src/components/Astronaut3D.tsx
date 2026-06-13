"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, RoundedBox, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function Astronaut3D() {
  const groupRef = useRef<THREE.Group>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const hologramRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Animasi frame-by-frame
  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Rotasi lembut seluruh astronaut
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.2;
      groupRef.current.position.y = Math.sin(t * 0.8) * 0.15;
    }

    // Animasi lengan kiri (memegang hologram)
    if (leftArmRef.current) {
      leftArmRef.current.rotation.x = Math.sin(t * 1.2) * 0.1 - 0.3;
      leftArmRef.current.rotation.z = Math.sin(t * 0.8) * 0.05 + 0.2;
    }

    // Animasi lengan kanan (menekan tombol)
    if (rightArmRef.current) {
      rightArmRef.current.rotation.x = Math.sin(t * 2) * 0.15;
    }

    // Rotasi hologram
    if (hologramRef.current) {
      hologramRef.current.rotation.y = t * 0.8;
    }

    // Animasi partikel data
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.3;
      particlesRef.current.rotation.x = t * 0.1;
    }
  });

  // Generate partikel data
  const particlePositions = new Float32Array(60 * 3);
  for (let i = 0; i < 60; i++) {
    const angle = (i / 60) * Math.PI * 2;
    const radius = 0.8 + Math.random() * 0.3;
    particlePositions[i * 3] = Math.cos(angle) * radius;
    particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 0.6;
    particlePositions[i * 3 + 2] = Math.sin(angle) * radius;
  }

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={groupRef} scale={0.9}>
        
        {/* === HELMET (Kepala) === */}
        <group position={[0, 1.1, 0]}>
          {/* Outer Helmet */}
          <mesh castShadow>
            <sphereGeometry args={[0.55, 32, 32]} />
            <meshStandardMaterial color="#f8fafc" metalness={0.3} roughness={0.4} />
          </mesh>

          {/* Visor (Kaca Helm) dengan refleksi */}
          <mesh position={[0, 0, 0.35]} castShadow>
            <sphereGeometry args={[0.42, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
            <meshPhysicalMaterial
              color="#1e40af"
              metalness={0.9}
              roughness={0.1}
              clearcoat={1}
              clearcoatRoughness={0.1}
              transmission={0.3}
              ior={1.5}
            />
          </mesh>

          {/* HUD Display di Visor (Hologram kecil) */}
          <mesh position={[0.15, 0.1, 0.5]}>
            <planeGeometry args={[0.15, 0.08]} />
            <meshBasicMaterial color="#22d3ee" transparent opacity={0.8} />
          </mesh>
          <mesh position={[-0.15, 0.1, 0.5]}>
            <planeGeometry args={[0.1, 0.06]} />
            <meshBasicMaterial color="#a855f7" transparent opacity={0.6} />
          </mesh>

          {/* Antenna */}
          <mesh position={[0.3, 0.4, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 0.25, 8]} />
            <meshStandardMaterial color="#64748b" metalness={0.8} />
          </mesh>
          <mesh position={[0.3, 0.55, 0]}>
            <sphereGeometry args={[0.04, 16, 16]} />
            <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={2} />
          </mesh>

          {/* Lampu Helm Kiri-Kanan */}
          <pointLight position={[0.3, 0.3, 0.3]} color="#22d3ee" intensity={0.5} distance={1} />
          <pointLight position={[-0.3, 0.3, 0.3]} color="#a855f7" intensity={0.5} distance={1} />
        </group>

        {/* === BODY (Badan) === */}
        <group position={[0, 0.2, 0]}>
          {/* Main Body */}
          <RoundedBox args={[0.9, 1.1, 0.6]} radius={0.15} smoothness={4} castShadow>
            <meshStandardMaterial color="#f1f5f9" metalness={0.2} roughness={0.5} />
          </RoundedBox>

          {/* Chest Panel (Control Panel) */}
          <RoundedBox args={[0.5, 0.4, 0.05]} radius={0.05} position={[0, 0.1, 0.32]}>
            <meshStandardMaterial color="#1e293b" metalness={0.6} roughness={0.3} />
          </RoundedBox>

          {/* Panel Lights (LED indicators) */}
          <mesh position={[-0.15, 0.2, 0.35]}>
            <circleGeometry args={[0.03, 16]} />
            <meshBasicMaterial color="#22c55e" />
          </mesh>
          <mesh position={[0, 0.2, 0.35]}>
            <circleGeometry args={[0.03, 16]} />
            <meshBasicMaterial color="#3b82f6" />
          </mesh>
          <mesh position={[0.15, 0.2, 0.35]}>
            <circleGeometry args={[0.03, 16]} />
            <meshBasicMaterial color="#f59e0b" />
          </mesh>

          {/* Arvana Logo (Garis horizontal) */}
          <mesh position={[0, 0, 0.35]}>
            <planeGeometry args={[0.3, 0.02]} />
            <meshBasicMaterial color="#3b82f6" />
          </mesh>
          <mesh position={[0, -0.05, 0.35]}>
            <planeGeometry args={[0.2, 0.015]} />
            <meshBasicMaterial color="#a855f7" />
          </mesh>

          {/* Belt */}
          <mesh position={[0, -0.4, 0]}>
            <boxGeometry args={[0.95, 0.12, 0.65]} />
            <meshStandardMaterial color="#334155" metalness={0.5} />
          </mesh>
          <mesh position={[0, -0.4, 0.33]}>
            <boxGeometry args={[0.15, 0.08, 0.02]} />
            <meshStandardMaterial color="#fbbf24" metalness={0.8} emissive="#fbbf24" emissiveIntensity={0.3} />
          </mesh>
        </group>

        {/* === JETPACK === */}
        <group position={[0, 0.3, -0.4]}>
          <RoundedBox args={[0.6, 0.8, 0.3]} radius={0.1} smoothness={4} castShadow>
            <meshStandardMaterial color="#475569" metalness={0.6} roughness={0.3} />
          </RoundedBox>
          
          {/* Jetpack Details */}
          <mesh position={[0.15, 0.2, 0.16]}>
            <cylinderGeometry args={[0.05, 0.05, 0.1, 16]} />
            <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.5} />
          </mesh>
          <mesh position={[-0.15, 0.2, 0.16]}>
            <cylinderGeometry args={[0.05, 0.05, 0.1, 16]} />
            <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={0.5} />
          </mesh>

          {/* Thruster Nozzles */}
          <mesh position={[0.15, -0.35, 0]}>
            <cylinderGeometry args={[0.08, 0.12, 0.15, 16]} />
            <meshStandardMaterial color="#1e293b" metalness={0.8} />
          </mesh>
          <mesh position={[-0.15, -0.35, 0]}>
            <cylinderGeometry args={[0.08, 0.12, 0.15, 16]} />
            <meshStandardMaterial color="#1e293b" metalness={0.8} />
          </mesh>

          {/* Flame Effect */}
          <mesh position={[0.15, -0.55, 0]}>
            <coneGeometry args={[0.1, 0.3, 16]} />
            <meshBasicMaterial color="#f97316" transparent opacity={0.7} />
          </mesh>
          <mesh position={[-0.15, -0.55, 0]}>
            <coneGeometry args={[0.1, 0.3, 16]} />
            <meshBasicMaterial color="#f97316" transparent opacity={0.7} />
          </mesh>
        </group>

        {/* === LEFT ARM (Memegang Hologram Dashboard) === */}
        <group ref={leftArmRef} position={[-0.55, 0.4, 0]}>
          {/* Upper Arm */}
          <mesh position={[0, -0.15, 0]} castShadow>
            <capsuleGeometry args={[0.12, 0.35, 8, 16]} />
            <meshStandardMaterial color="#f1f5f9" metalness={0.2} roughness={0.5} />
          </mesh>
          
          {/* Forearm */}
          <mesh position={[-0.15, -0.45, 0.2]} rotation={[0.5, 0, -0.3]} castShadow>
            <capsuleGeometry args={[0.11, 0.35, 8, 16]} />
            <meshStandardMaterial color="#f1f5f9" metalness={0.2} roughness={0.5} />
          </mesh>

          {/* Glove */}
          <mesh position={[-0.3, -0.65, 0.4]} castShadow>
            <sphereGeometry args={[0.13, 16, 16]} />
            <meshStandardMaterial color="#334155" metalness={0.4} />
          </mesh>

          {/* === HOLOGRAM DASHBOARD (Smart Home Control) === */}
          <group ref={hologramRef} position={[-0.3, -0.65, 0.7]}>
            {/* Main Hologram Panel */}
            <mesh>
              <planeGeometry args={[0.5, 0.35]} />
              <meshBasicMaterial color="#22d3ee" transparent opacity={0.3} side={THREE.DoubleSide} />
            </mesh>

            {/* Hologram Border */}
            <lineSegments>
              <edgesGeometry args={[new THREE.PlaneGeometry(0.5, 0.35)]} />
              <lineBasicMaterial color="#22d3ee" linewidth={2} />
            </lineSegments>

            {/* Data Bars (Energy Monitoring) */}
            {[0.08, 0.15, 0.12, 0.18, 0.1, 0.14].map((height, i) => (
              <mesh key={i} position={[-0.18 + i * 0.07, -0.1 + height / 2, 0.01]}>
                <boxGeometry args={[0.04, height, 0.01]} />
                <meshBasicMaterial 
                  color={i % 2 === 0 ? "#3b82f6" : "#a855f7"} 
                  transparent 
                  opacity={0.8} 
                />
              </mesh>
            ))}

            {/* Status Indicator */}
            <mesh position={[0.15, 0.12, 0.01]}>
              <circleGeometry args={[0.025, 16]} />
              <meshBasicMaterial color="#22c55e" />
            </mesh>

            {/* Hologram Glow */}
            <pointLight color="#22d3ee" intensity={1} distance={1.5} />
          </group>

          {/* Rotating Data Particles around hologram */}
          <points ref={particlesRef} position={[-0.3, -0.65, 0.7]}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={60}
                array={particlePositions}
                itemSize={3}
              />
            </bufferGeometry>
            <pointsMaterial color="#22d3ee" size={0.02} transparent opacity={0.8} sizeAttenuation />
          </points>
        </group>

        {/* === RIGHT ARM (Menekan Tombol Switch) === */}
        <group ref={rightArmRef} position={[0.55, 0.4, 0]}>
          <mesh position={[0, -0.15, 0]} castShadow>
            <capsuleGeometry args={[0.12, 0.35, 8, 16]} />
            <meshStandardMaterial color="#f1f5f9" metalness={0.2} roughness={0.5} />
          </mesh>
          
          <mesh position={[0.1, -0.45, 0.15]} rotation={[0.3, 0, 0.2]} castShadow>
            <capsuleGeometry args={[0.11, 0.35, 8, 16]} />
            <meshStandardMaterial color="#f1f5f9" metalness={0.2} roughness={0.5} />
          </mesh>

          <mesh position={[0.2, -0.65, 0.3]} castShadow>
            <sphereGeometry args={[0.13, 16, 16]} />
            <meshStandardMaterial color="#334155" metalness={0.4} />
          </mesh>

          {/* Smart Switch yang ditekan */}
          <group position={[0.35, -0.65, 0.45]}>
            <RoundedBox args={[0.15, 0.15, 0.05]} radius={0.02}>
              <meshStandardMaterial color="#1e293b" metalness={0.6} />
            </RoundedBox>
            <mesh position={[0, 0, 0.03]}>
              <circleGeometry args={[0.03, 16]} />
              <meshBasicMaterial color="#22c55e" />
            </mesh>
            <pointLight color="#22c55e" intensity={0.5} distance={0.5} />
          </group>
        </group>

        {/* === LEGS === */}
        <group position={[0, -0.7, 0]}>
          {/* Left Leg */}
          <mesh position={[-0.2, -0.2, 0]} rotation={[0.1, 0, 0.05]} castShadow>
            <capsuleGeometry args={[0.14, 0.5, 8, 16]} />
            <meshStandardMaterial color="#f1f5f9" metalness={0.2} roughness={0.5} />
          </mesh>
          <mesh position={[-0.22, -0.6, 0.05]} castShadow>
            <boxGeometry args={[0.22, 0.15, 0.3]} />
            <meshStandardMaterial color="#334155" metalness={0.4} />
          </mesh>

          {/* Right Leg */}
          <mesh position={[0.2, -0.2, 0]} rotation={[-0.1, 0, -0.05]} castShadow>
            <capsuleGeometry args={[0.14, 0.5, 8, 16]} />
            <meshStandardMaterial color="#f1f5f9" metalness={0.2} roughness={0.5} />
          </mesh>
          <mesh position={[0.22, -0.6, 0.05]} castShadow>
            <boxGeometry args={[0.22, 0.15, 0.3]} />
            <meshStandardMaterial color="#334155" metalness={0.4} />
          </mesh>
        </group>

      </group>
    </Float>
  );
}
