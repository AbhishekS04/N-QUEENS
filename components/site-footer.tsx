"use client"

import type React from "react"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

export default function SiteFooter() {
  return (
    <footer className="w-full border-t border-white/10 bg-black/30 backdrop-blur-sm py-4 mt-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-300">© 2025 N-Queens CSP Visualizer. Made by Team DevAura.</p>

        <div className="flex items-center gap-4">
          <SocialIcon href="https://github.com/AbhishekS04/N-QUEENS" icon={<FaGithub />} label="GitHub" />
          {/* <SocialIcon href="https://linkedin.com" icon={<FaLinkedin />} label="LinkedIn" /> */}
          {/* <SocialIcon href="https://instagram.com" icon={<FaInstagram />} label="Instagram" /> */}
        </div>
      </div>
    </footer>
  )
}

interface SocialIconProps {
  href: string
  icon: React.ReactNode
  label: string
}

function SocialIcon({ href, icon, label }: SocialIconProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-white transition-colors"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      aria-label={label}
    >
      <span className="text-xl">{icon}</span>
    </motion.a>
  )
}
