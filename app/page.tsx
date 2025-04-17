"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import WelcomeScreen from "@/components/welcome-screen"
import MainVisualizer from "@/components/main-visualizer"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <main className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950 text-white">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" />
          ) : showWelcome ? (
            <WelcomeScreen key="welcome" onContinue={() => setShowWelcome(false)} />
          ) : (
            <MainVisualizer key="main" />
          )}
        </AnimatePresence>
      </main>
    </ThemeProvider>
  )
}

function LoadingScreen() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-64 h-8 bg-gray-700 rounded-lg overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 animate-shimmer"
          style={{
            backgroundSize: "200% 100%",
            animation: "shimmer 2s infinite linear",
          }}
        ></div>
      </div>
    </div>
  )
}
