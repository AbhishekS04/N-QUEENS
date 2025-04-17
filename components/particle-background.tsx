"use client"

import type React from "react"

import { useRef } from "react"
import { motion } from "framer-motion"

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 50 }).map((_, i) => (
        <Particle key={i} containerRef={containerRef} />
      ))}
    </div>
  )
}

function Particle({ containerRef }: { containerRef: React.RefObject<HTMLDivElement> }) {
  const size = Math.random() * 4 + 1
  const duration = Math.random() * 20 + 10
  const initialX = Math.random() * 100
  const initialY = Math.random() * 100

  const finalX = Math.random() * 100
  const finalY = Math.random() * 100

  return (
    <motion.div
      className="absolute rounded-full bg-white/20"
      style={{
        width: size,
        height: size,
        left: `${initialX}%`,
        top: `${initialY}%`,
      }}
      animate={{
        x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
        y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    />
  )
}
