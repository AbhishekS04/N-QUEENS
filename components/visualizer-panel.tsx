"use client"

import { motion } from "framer-motion"
import { FaChessQueen, FaInfoCircle, FaExclamationTriangle } from "react-icons/fa"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Step } from "@/lib/n-queens-solver"

interface VisualizerPanelProps {
  step: Step
  boardSize: number
}

export default function VisualizerPanel({ step, boardSize }: VisualizerPanelProps) {
  // Count queens on the board
  const queenCount = step.board.flat().filter(Boolean).length

  // Get rows with queens
  const queenPositions = step.board
    .map((row, rowIndex) => {
      const colIndex = row.findIndex(Boolean)
      return colIndex !== -1 ? { row: rowIndex, col: colIndex } : null
    })
    .filter(Boolean)

  return (
    <Card className="bg-black/30 backdrop-blur-sm border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FaChessQueen className="text-purple-400" />
          <span>Visualization Panel</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="px-3 py-1">
            Queens: {queenCount}/{boardSize}
          </Badge>

          <Badge
            variant={step.type === "solution" ? "default" : "outline"}
            className={`px-3 py-1 ${
              step.type === "solution"
                ? "bg-green-600"
                : step.type === "backtrack"
                  ? "border-yellow-500 text-yellow-500"
                  : ""
            }`}
          >
            {step.type === "solution"
              ? "Solution Found"
              : step.type === "backtrack"
                ? "Backtracking"
                : step.type === "place"
                  ? "Placing Queen"
                  : "Initializing"}
          </Badge>
        </div>

        <div className="bg-black/20 p-3 rounded-md border border-white/5">
          <div className="flex items-start gap-2">
            {step.type === "solution" ? (
              <FaInfoCircle className="text-green-400 mt-1 flex-shrink-0" />
            ) : step.type === "backtrack" ? (
              <FaExclamationTriangle className="text-yellow-400 mt-1 flex-shrink-0" />
            ) : (
              <FaInfoCircle className="text-blue-400 mt-1 flex-shrink-0" />
            )}
            <motion.p
              key={step.message}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm"
            >
              {step.message}
            </motion.p>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Queen Positions:</h3>
          <div className="grid grid-cols-2 gap-2">
            {queenPositions.map((pos, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-2 bg-white/5 p-2 rounded-md"
              >
                <FaChessQueen className="text-purple-400" />
                <span className="text-sm">
                  Row {pos?.row} → Col {pos?.col}
                </span>
              </motion.div>
            ))}
            {queenPositions.length === 0 && (
              <div className="col-span-2 text-sm text-gray-400 italic">No queens placed yet</div>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Domain Reduction:</h3>
          <div className="text-sm">
            {step.type === "place" || step.type === "backtrack" ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white/5 p-2 rounded-md">
                <p>
                  {step.domains.flat().filter(Boolean).length} valid positions remaining out of {boardSize * boardSize}{" "}
                  total squares.
                </p>
              </motion.div>
            ) : (
              <div className="text-gray-400 italic">
                {step.type === "solution"
                  ? "Solution found! All queens are placed without conflicts."
                  : "Initializing domains..."}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
