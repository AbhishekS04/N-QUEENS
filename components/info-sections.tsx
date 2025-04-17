"use client"

import { motion } from "framer-motion"
import { FaChessQueen, FaCode, FaLightbulb } from "react-icons/fa"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function InfoSections() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="space-y-12"
      >
        <motion.div variants={item}>
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Learn More</h2>

          <div className="hidden md:block">
            <div className="grid md:grid-cols-3 gap-8">
              <AboutProjectCard />
              <NQueensExplanationCard />
              <TechStackCard />
            </div>
          </div>

          <div className="md:hidden">
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="nqueens">N-Queens</TabsTrigger>
                <TabsTrigger value="tech">Tech Stack</TabsTrigger>
              </TabsList>
              <TabsContent value="about">
                <AboutProjectCard />
              </TabsContent>
              <TabsContent value="nqueens">
                <NQueensExplanationCard />
              </TabsContent>
              <TabsContent value="tech">
                <TechStackCard />
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

function AboutProjectCard() {
  return (
    <Card className="bg-black/30 backdrop-blur-sm border-white/10 h-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <FaChessQueen className="text-purple-400 text-xl" />
          <CardTitle>About the Project</CardTitle>
        </div>
        <CardDescription>Understanding the N-Queens Visualizer</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          This N-Queens Visualizer is an interactive educational tool designed to help you understand the classic
          N-Queens problem and its solution using backtracking with constraint satisfaction.
        </p>
        <p>
          The visualizer demonstrates step-by-step how queens are placed on a chessboard such that no two queens
          threaten each other, using constraint propagation and arc-consistency to efficiently prune the search space.
        </p>
        <p>
          You can control the visualization speed, step through the algorithm manually, adjust the board size, and
          explore different visual themes to enhance your learning experience.
        </p>
      </CardContent>
    </Card>
  )
}

function NQueensExplanationCard() {
  return (
    <Card className="bg-black/30 backdrop-blur-sm border-white/10 h-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <FaLightbulb className="text-yellow-400 text-xl" />
          <CardTitle>What is the N-Queens Problem?</CardTitle>
        </div>
        <CardDescription>A classic problem in computer science</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          The N-Queens problem asks: "How can N chess queens be placed on an N×N chessboard so that no two queens
          threaten each other?" This means no two queens can share the same row, column, or diagonal.
        </p>
        <p>
          For example, the 8-Queens problem requires placing 8 queens on a standard 8×8 chessboard. This problem has 92
          distinct solutions (or 12 unique solutions when accounting for symmetry).
        </p>
        <p>
          The N-Queens problem is important in artificial intelligence and computer science as it demonstrates
          constraint satisfaction problems (CSPs), backtracking algorithms, and heuristic search techniques. It has
          real-world applications in scheduling, resource allocation, and circuit design.
        </p>
      </CardContent>
    </Card>
  )
}

function TechStackCard() {
  return (
    <Card className="bg-black/30 backdrop-blur-sm border-white/10 h-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <FaCode className="text-green-400 text-xl" />
          <CardTitle>Tech Stack & Algorithm</CardTitle>
        </div>
        <CardDescription>How this visualizer was built</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">Technologies Used:</h4>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Next.js 14 with App Router</li>
            <li>TypeScript for type safety</li>
            <li>Tailwind CSS for styling</li>
            <li>ShadCN UI for components</li>
            <li>Framer Motion for animations</li>
            <li>React Icons for iconography</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">Algorithm:</h4>
          <p>
            This visualizer implements a backtracking algorithm enhanced with constraint propagation (arc-consistency).
            The algorithm works by:
          </p>
          <ol className="list-decimal list-inside space-y-1 pl-2">
            <li>Placing queens row by row</li>
            <li>Using constraints to eliminate invalid positions</li>
            <li>Backtracking when no valid positions remain</li>
            <li>Continuing until all queens are placed or all possibilities are exhausted</li>
          </ol>
        </div>
      </CardContent>
    </Card>
  )
}
