'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function FloatingOrbs() {
  const group = useRef<THREE.Group>(null)
  const orbs = useMemo(
    () =>
      Array.from({ length: 8 }).map((_, i) => ({
        radius: 0.6 + Math.random() * 0.5,
        angle: (i / 8) * Math.PI * 2,
        speed: 0.15 + Math.random() * 0.1,
        phase: Math.random() * Math.PI * 2,
        orbit: 4 + Math.random() * 2,
        yAmp: 0.6 + Math.random() * 0.3,
        color: ['#60a5fa', '#a78bfa', '#f472b6', '#22d3ee'][i % 4],
        z: -10 - Math.random() * 2,
        rotSpeed: 0.1 + Math.random() * 0.2,
      })),
    []
  )

  useFrame((state) => {
    const t = state.clock.elapsedTime
    const g = group.current
    if (!g) return
    for (let i = 0; i < g.children.length; i++) {
      const m = g.children[i] as THREE.Mesh
      const o = orbs[i]
      if (!o) continue
      const angle = o.angle + t * o.speed
      m.position.x = Math.cos(angle) * o.orbit
      m.position.y = Math.sin(angle + o.phase) * o.yAmp
      m.position.z = o.z
      m.rotation.x += o.rotSpeed * 0.01
      m.rotation.y += o.rotSpeed * 0.012
    }
  })

  return (
    <group ref={group}>
      {orbs.map((o, i) => (
        <mesh key={i} position={[Math.cos(o.angle) * o.orbit, Math.sin(o.angle + o.phase) * o.yAmp, o.z]}>
          <icosahedronGeometry args={[o.radius, 1]} />
          <meshStandardMaterial color={o.color} transparent opacity={0.35} metalness={0.2} roughness={0.4} />
        </mesh>
      ))}
    </group>
  )
}

export default function ThreeBackground() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
      setReduced(mq.matches)
      const handler = () => setReduced(mq.matches)
      mq.addEventListener?.('change', handler)
      return () => mq.removeEventListener?.('change', handler)
    }
  }, [])

  if (reduced) {
    return (
      <div className="fixed inset-0 -z-10 bg-[#0a0a0a] [background-image:radial-gradient(60%_40%_at_50%_0%,rgba(59,130,246,0.15),transparent),radial-gradient(60%_50%_at_50%_100%,rgba(168,85,247,0.12),transparent)]" />
    )
  }

  return (
    <div className="fixed inset-0 -z-10 bg-[#0a0a0a] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 7], fov: 65 }} dpr={[1, 2]} gl={{ antialias: true, powerPreference: 'high-performance' }}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[5, 8, 5]} intensity={0.6} />
        <directionalLight position={[-6, -4, 6]} intensity={0.3} />
        <fog attach="fog" args={["#0a0a0a", 12, 28]} />
        <FloatingOrbs />
      </Canvas>
    </div>
  )
}