"use client"

import { motion, AnimatePresence } from "framer-motion"
import { FaChessQueen } from "react-icons/fa"

interface ChessboardProps {
  size: number
  queens: boolean[][]
  domains: boolean[][]
  theme: "classic" | "modern" | "blackwhite" | "glass" | "neon" | "minimalist" | "wooden"
}

export default function Chessboard({ size, queens, domains, theme }: ChessboardProps) {
  // Ensure queens and domains are properly initialized with fallbacks
  const safeQueens =
    queens ||
    Array(size)
      .fill(null)
      .map(() => Array(size).fill(false))
  const safeDomains =
    domains ||
    Array(size)
      .fill(null)
      .map(() => Array(size).fill(true))

  const getSquareColor = (row: number, col: number) => {
    const isLight = (row + col) % 2 === 0

    switch (theme) {
      case "classic":
        return isLight ? "bg-amber-200" : "bg-amber-800"
      case "modern":
        return isLight ? "bg-slate-200" : "bg-purple-700"
      case "blackwhite":
        return isLight ? "bg-gray-100" : "bg-gray-900"
      case "glass":
        return isLight ? "bg-white/20 backdrop-blur-sm" : "bg-black/30 backdrop-blur-sm"
      case "neon":
        return isLight ? "bg-black" : "bg-black border border-purple-500"
      case "minimalist":
        return isLight ? "bg-slate-50" : "bg-slate-300"
      case "wooden":
        return isLight ? "bg-amber-100" : "bg-amber-700"
      default:
        return isLight ? "bg-slate-200" : "bg-purple-700"
    }
  }

  const getSquareHoverColor = (row: number, col: number) => {
    const isLight = (row + col) % 2 === 0

    switch (theme) {
      case "classic":
        return isLight ? "hover:bg-amber-300" : "hover:bg-amber-900"
      case "modern":
        return isLight ? "hover:bg-slate-300" : "hover:bg-purple-800"
      case "blackwhite":
        return isLight ? "hover:bg-gray-200" : "hover:bg-gray-800"
      case "glass":
        return isLight ? "hover:bg-white/30" : "hover:bg-black/40"
      case "neon":
        return isLight
          ? "hover:bg-black hover:shadow-inner hover:shadow-purple-500/20"
          : "hover:bg-black hover:border-purple-400"
      case "minimalist":
        return isLight ? "hover:bg-slate-100" : "hover:bg-slate-400"
      case "wooden":
        return isLight ? "hover:bg-amber-200" : "hover:bg-amber-800"
      default:
        return isLight ? "hover:bg-slate-300" : "hover:bg-purple-800"
    }
  }

  const getQueenColor = () => {
    switch (theme) {
      case "classic":
        return "text-black"
      case "modern":
        return "text-white"
      case "blackwhite":
        return "text-white"
      case "glass":
        return "text-white"
      case "neon":
        return "text-purple-400"
      case "minimalist":
        return "text-slate-800"
      case "wooden":
        return "text-black"
      default:
        return "text-white"
    }
  }

  return (
    <div
      className={`w-full aspect-square max-w-[600px] mx-auto border-4 rounded-md overflow-hidden shadow-2xl ${
        theme === "classic"
          ? "border-amber-900"
          : theme === "modern"
            ? "border-purple-900"
            : theme === "blackwhite"
              ? "border-gray-900"
              : theme === "glass"
                ? "border-white/30"
                : theme === "neon"
                  ? "border-purple-500"
                  : theme === "minimalist"
                    ? "border-slate-300"
                    : theme === "wooden"
                      ? "border-amber-900"
                      : "border-purple-900"
      }`}
    >
      <div className="grid" style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}>
        {Array.from({ length: size }).map((_, row) =>
          Array.from({ length: size }).map((_, col) => {
            const hasQueen = safeQueens[row] && safeQueens[row][col] === true
            const inDomain = safeDomains[row] && safeDomains[row][col] === true

            return (
              <div
                key={`${row}-${col}`}
                className={`aspect-square ${getSquareColor(row, col)} ${getSquareHoverColor(row, col)} relative`}
              >
                {!inDomain && !hasQueen && (
                  <motion.div
                    className="absolute inset-0 bg-red-500/20 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      className="w-1/2 h-0.5 bg-red-500/70 absolute"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 45 }}
                    />
                    <motion.div
                      className="w-1/2 h-0.5 bg-red-500/70 absolute"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: -45 }}
                    />
                  </motion.div>
                )}

                <AnimatePresence>
                  {hasQueen && (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{
                        y: -20,
                        opacity: 0,
                        scale: 0.8,
                      }}
                      animate={{
                        y: 0,
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        y: 20,
                        opacity: 0,
                        scale: 0.8,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <FaChessQueen className={`text-4xl md:text-5xl ${getQueenColor()} drop-shadow-lg`} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          }),
        )}
      </div>
    </div>
  )
}
