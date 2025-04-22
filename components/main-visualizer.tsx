"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaCog, FaPlay, FaPause, FaStepForward, FaUndo } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useTheme } from "next-themes"
import Chessboard from "./chessboard"
import VisualizerPanel from "./visualizer-panel"
import { NQueensSolver, type Step } from "@/lib/n-queens-solver"
// import { ModeToggle } from "./mode-toggle"
import InfoSections from "./info-sections"
import SiteFooter from "./site-footer"

export default function MainVisualizer() {
  const { theme, setTheme } = useTheme()
  const [boardSize, setBoardSize] = useState(8)
  const [isPlaying, setIsPlaying] = useState(false)
  const [speed, setSpeed] = useState(1)
  const [currentStep, setCurrentStep] = useState(0)
  const [solver] = useState(() => new NQueensSolver())
  const [solution, setSolution] = useState<Step[]>([])
  const [boardTheme, setBoardTheme] = useState<
    "classic" | "modern" | "blackwhite" | "glass" | "neon" | "minimalist" | "wooden"
  >("modern")

  useEffect(() => {
    // Generate solution steps when board size changes
    const steps = solver.solve(boardSize)
    setSolution(steps)
    setCurrentStep(0)
    setIsPlaying(false)
  }, [boardSize, solver])

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isPlaying && currentStep < solution.length - 1) {
      interval = setInterval(() => {
        setCurrentStep((prev) => {
          const next = prev + 1
          if (next >= solution.length - 1) {
            setIsPlaying(false)
          }
          return next
        })
      }, 1000 / speed)
    }

    return () => clearInterval(interval)
  }, [isPlaying, currentStep, solution.length, speed])

  const handleReset = () => {
    setCurrentStep(0)
    setIsPlaying(false)
  }

  const handleStepForward = () => {
    if (currentStep < solution.length - 1) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const currentStepData = solution[currentStep] || {
    board: Array(boardSize)
      .fill(null)
      .map(() => Array(boardSize).fill(false)),
    domains: Array(boardSize)
      .fill(null)
      .map(() => Array(boardSize).fill(true)),
    message: "Initializing...",
    type: "init",
  }

  return (
    <motion.div
      className="min-h-screen w-full p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <motion.h1
            className="text-2xl md:text-4xl font-serif font-bold items-center w-full text-center md:text-left"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            N-Queens Solver with CSP
          </motion.h1>

          <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            {/* <ModeToggle /> */}
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            className="lg:col-span-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Chessboard
              size={boardSize}
              queens={currentStepData.board}
              domains={currentStepData.domains}
              theme={boardTheme}
            />

            <div className="mt-6 flex flex-wrap gap-4 items-center justify-between">
              <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={() => setIsPlaying(!isPlaying)} className="h-10 w-10">
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleStepForward}
                  disabled={currentStep >= solution.length - 1}
                  className="h-10 w-10"
                >
                  <FaStepForward />
                </Button>

                <Button variant="outline" size="icon" onClick={handleReset} className="h-10 w-10">
                  <FaUndo />
                </Button>
              </div>

              <div className="flex items-center gap-2 min-w-[150px]">
                <span className="text-sm">Speed:</span>
                <Slider
                  value={[speed]}
                  min={0.5}
                  max={3}
                  step={0.5}
                  onValueChange={(value) => setSpeed(value[0])}
                  className="w-24"
                />
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm whitespace-nowrap">
                  Step: {currentStep + 1}/{solution.length}
                </span>
                <div className="w-48 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-purple-500"
                    style={{ width: `${(currentStep / (solution.length - 1)) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
            <VisualizerPanel step={currentStepData} boardSize={boardSize} />

            <Accordion type="single" collapsible className="mt-6">
              <AccordionItem value="settings">
                <AccordionTrigger className="flex items-center gap-2">
                  <FaCog className="text-purple-400" />
                  <span>Settings</span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 p-2">
                    <div>
                      <label className="block text-sm mb-2">Board Size (N = {boardSize})</label>
                      <Slider
                        value={[boardSize]}
                        min={4}
                        max={12}
                        step={1}
                        onValueChange={(value) => setBoardSize(value[0])}
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-2">Board Theme</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        <Button
                          variant={boardTheme === "modern" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setBoardTheme("modern")}
                        >
                          Modern
                        </Button>
                        <Button
                          variant={boardTheme === "classic" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setBoardTheme("classic")}
                        >
                          Classic
                        </Button>
                        <Button
                          variant={boardTheme === "blackwhite" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setBoardTheme("blackwhite")}
                        >
                          Black & White
                        </Button>
                        <Button
                          variant={boardTheme === "glass" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setBoardTheme("glass")}
                        >
                          Glass
                        </Button>
                        <Button
                          variant={boardTheme === "neon" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setBoardTheme("neon")}
                        >
                          Neon
                        </Button>
                        <Button
                          variant={boardTheme === "minimalist" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setBoardTheme("minimalist")}
                        >
                          Minimalist
                        </Button>
                        <Button
                          variant={boardTheme === "wooden" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setBoardTheme("wooden")}
                        >
                          Wooden
                        </Button>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </div>
      <InfoSections />
      <SiteFooter />
    </motion.div>
  )
}
