"use client"

import { motion } from "framer-motion"
import { FaChessQueen, FaArrowRight, FaTimes } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import ParticleBackground from "./particle-background"

interface WelcomeScreenProps {
  onContinue: () => void
}

export default function WelcomeScreen({ onContinue }: WelcomeScreenProps) {
  return (
    <motion.div
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ParticleBackground />

      <motion.div
        className="bg-black/30 backdrop-blur-lg p-8 rounded-xl border border-white/10 max-w-md w-full z-10"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          delay: 0.2,
        }}
      >
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ rotate: -30, scale: 0.8 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
              delay: 0.5,
            }}
          >
            <FaChessQueen className="text-6xl text-purple-400" />
          </motion.div>
        </div>

        <motion.h1
          className="text-3xl font-bold text-center mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Welcome to the N-Queens Visualizer!
        </motion.h1>

        <motion.p
          className="text-gray-300 text-center mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Explore the classic N-Queens problem with an interactive visualization of backtracking and constraint
          propagation algorithms.
        </motion.p>

        <div className="flex flex-col gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button
              onClick={onContinue}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-6"
            >
              <span className="mr-2">Continue</span>
              <FaArrowRight />
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03, x: [0, -2, 2, -2, 0] }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.9,
              whileHover: {
                x: { repeat: Number.POSITIVE_INFINITY, repeatType: "mirror", duration: 0.3 },
              },
            }}
          >
            <Button
              variant="outline"
              className="w-full border-red-500/50 text-red-400 hover:bg-red-950/30 hover:text-red-300 py-6"
              onClick={() => window.close()}
            >
              <span className="mr-2">Exit</span>
              <FaTimes />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
