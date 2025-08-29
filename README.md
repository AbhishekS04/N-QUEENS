# 🏰 N-Queens Visualizer with CSP

[![Next.js](https://img.shields.io/badge/Next.js-15.3.0-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

An interactive educational tool that visualizes the classic **N-Queens problem** using backtracking algorithms enhanced with **Constraint Satisfaction Problem (CSP)** techniques. Watch as queens are strategically placed on a chessboard while avoiding conflicts through intelligent constraint propagation!

## 🌟 Features

### 🎮 Interactive Visualization
- **Step-by-step animation** of the backtracking algorithm
- **Play/Pause controls** with adjustable speed settings
- **Manual stepping** through each algorithm iteration
- **Visual constraint representation** showing blocked squares
- **Real-time feedback** with detailed step descriptions

### 🎨 Customizable Themes
Choose from 7 beautiful chessboard themes:
- **Modern** - Sleek purple and slate design
- **Classic** - Traditional amber wood tones  
- **Black & White** - Minimalist monochrome
- **Glass** - Translucent backdrop effects
- **Neon** - Cyberpunk-inspired glowing borders
- **Minimalist** - Clean and simple design
- **Wooden** - Rustic wood texture appearance

### 🔧 Flexible Configuration
- **Adjustable board sizes** (4x4 to 12x12)
- **Variable animation speed** (0.5x to 3x)
- **Responsive design** works on desktop and mobile
- **Real-time progress tracking** with visual progress bar

### 🧠 Educational Value
- **Algorithm explanation** with step-by-step breakdowns
- **CSP concept demonstration** through visual constraints
- **Interactive learning** with pause-and-examine functionality
- **Mathematical insights** into queen placement rules

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/AbhishekS04/N-QUEENS.git
cd N-QUEENS
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the application in action!

### Production Build

```bash
npm run build
npm start
```

## 🏗️ Project Structure

```
N-QUEENS/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Main page component
├── components/            # React components
│   ├── ui/               # Reusable UI components (ShadCN)
│   ├── chessboard.tsx    # Interactive chessboard component
│   ├── main-visualizer.tsx # Main visualization interface
│   ├── welcome-screen.tsx # Landing screen
│   ├── info-sections.tsx  # Educational content
│   └── visualizer-panel.tsx # Control panel
├── lib/                   # Utilities and algorithms
│   ├── n-queens-solver.ts # Core N-Queens algorithm
│   └── utils.ts          # Helper functions
├── hooks/                 # Custom React hooks
├── public/               # Static assets
└── ...config files
```

## 🧮 Algorithm Details

### Core Algorithm: Backtracking with CSP

The visualizer implements a **backtracking algorithm** enhanced with **Constraint Satisfaction Problem** techniques:

#### 🔄 Backtracking Process
1. **Place queens row by row** starting from the first row
2. **Try each column** in the current row for valid placement
3. **Apply constraints** to eliminate invalid future positions
4. **Recursively solve** for the next row
5. **Backtrack** if no valid placement exists in current configuration

#### 🚫 Constraint Rules
For a queen placed at position `(row, col)`, the following constraints apply:
- **Column constraint**: No other queen in the same column
- **Row constraint**: No other queen in the same row  
- **Diagonal constraints**: No other queen on either diagonal
  - Main diagonal: `row - col = constant`
  - Anti-diagonal: `row + col = constant`

#### 💡 CSP Optimization
- **Domain reduction**: Eliminates impossible positions early
- **Arc consistency**: Maintains constraint satisfaction throughout
- **Visual feedback**: Shows which squares are blocked by constraints

### Mathematical Complexity
- **Time Complexity**: O(N!) in worst case, significantly optimized by CSP
- **Space Complexity**: O(N²) for board representation
- **Solutions exist** for all N ≥ 4 (except N = 2, 3)

## 🛠️ Tech Stack

### Frontend Framework
- **[Next.js 15.3.0](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://reactjs.org/)** - UI library with latest features
- **[TypeScript 5.0](https://www.typescriptlang.org/)** - Type-safe development

### Styling & UI
- **[Tailwind CSS 3.4.17](https://tailwindcss.com/)** - Utility-first CSS framework
- **[ShadCN UI](https://ui.shadcn.com/)** - Beautiful, accessible component library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible UI primitives

### Animation & Interactivity
- **[Framer Motion](https://www.framer.com/motion/)** - Smooth, performant animations
- **[React Icons](https://react-icons.github.io/react-icons/)** - Comprehensive icon library

### Developer Tools
- **[ESLint](https://eslint.org/)** - Code linting and formatting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Autoprefixer](https://autoprefixer.github.io/)** - CSS vendor prefixing

## 📚 Educational Content

### The N-Queens Problem
The **N-Queens problem** is a classic puzzle in computer science and mathematics:

> **"Place N chess queens on an N×N chessboard so that no two queens threaten each other."**

#### Key Characteristics:
- **Constraint Satisfaction**: Each queen placement creates multiple constraints
- **Combinatorial Optimization**: Finding valid configurations among many possibilities
- **Backtracking Application**: Systematic exploration with intelligent pruning
- **Real-world Applications**: Scheduling, resource allocation, circuit design

#### Historical Context:
- Originally proposed for 8×8 chessboard (8-Queens)
- Has **92 distinct solutions** for N=8
- **12 unique solutions** when considering rotational symmetry
- Scales exponentially in difficulty as N increases

### Learning Objectives:
- Understanding **backtracking algorithms**
- Visualizing **constraint propagation**
- Exploring **computational complexity**
- Appreciating **algorithmic optimization**

## 🎯 Usage Guide

### Getting Started
1. **Launch the application** and click "Continue" on the welcome screen
2. **Choose your board size** (4-12) using the settings panel
3. **Select a visual theme** that suits your preference
4. **Start the visualization** using the play button

### Controls Overview
- **▶️ Play/Pause**: Start or stop the automatic visualization
- **⏭️ Step Forward**: Manually advance to the next step
- **↩️ Reset**: Return to the initial board state
- **🎚️ Speed Control**: Adjust animation speed (0.5x - 3x)

### Understanding the Visualization
- **👑 Queens**: Placed pieces shown as chess queen icons
- **❌ Blocked Squares**: Red X marks indicate constraint violations
- **🟦 Available Squares**: Valid positions for future queen placements
- **📊 Progress Bar**: Visual indication of algorithm progress

### Tips for Learning
- **Start small**: Try 4×4 or 5×5 boards first
- **Use manual stepping**: Pause and examine each placement decision
- **Experiment with themes**: Different visual styles aid comprehension
- **Read the descriptions**: Each step includes explanatory text

## 🤝 Contributing

Contributions are welcome! Here's how you can help improve the N-Queens Visualizer:

### Ways to Contribute:
- 🐛 **Bug Reports**: Found an issue? Open an issue with details
- 💡 **Feature Requests**: Have ideas for new features or improvements?
- 🎨 **Design Improvements**: Suggest UI/UX enhancements
- 📚 **Documentation**: Help improve README or code comments
- 🔧 **Code Contributions**: Submit pull requests for fixes or features

### Development Setup:
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and test thoroughly
4. Commit with descriptive messages: `git commit -m 'Add amazing feature'`
5. Push to your branch: `git push origin feature/amazing-feature`
6. Open a Pull Request with detailed description

### Code Style:
- Follow existing **TypeScript** conventions
- Use **Prettier** for code formatting
- Add **JSDoc comments** for new functions
- Ensure **responsive design** compatibility
- Test on multiple **board sizes** and **themes**

## 🐛 Known Issues & Limitations

### Current Limitations:
- **Board size limit**: Maximum 12×12 (performance considerations)
- **Single solution**: Shows first solution found, not all possible solutions
- **Mobile optimization**: Some UI elements may be cramped on very small screens

### Planned Improvements:
- **Multiple solution exploration**: Browse through different valid solutions
- **Algorithm comparison**: Visualize different solving approaches
- **Performance metrics**: Show time complexity and steps taken
- **Solution counting**: Display total number of solutions for each N
- **Export functionality**: Save visualizations as images or animations

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### MIT License Summary:
- ✅ **Commercial use** - Use in commercial projects
- ✅ **Modification** - Modify and adapt the code
- ✅ **Distribution** - Distribute original or modified versions
- ✅ **Private use** - Use for personal projects
- ❗ **Liability** - No warranty or liability provided
- ❗ **Attribution** - Must include license and copyright notice

## 🙏 Acknowledgments

Special thanks to:
- **Chess.com** - Inspiration for chess piece visualization
- **ShadCN** - Beautiful UI component library
- **Vercel** - Excellent hosting and deployment platform
- **The Open Source Community** - For the amazing tools and libraries

### Educational Resources:
- [GeeksforGeeks N-Queens Algorithm](https://www.geeksforgeeks.org/n-queen-problem-backtracking-3/)
- [Wikipedia: Eight Queens Puzzle](https://en.wikipedia.org/wiki/Eight_queens_puzzle)
- [Stanford CS106B: Backtracking](https://web.stanford.edu/class/cs106b/)

---

## 🚀 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/), [Netlify](https://netlify.com/), or any static hosting service that supports Next.js.

### Deploy on Vercel:
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/AbhishekS04/N-QUEENS)

### Deploy on Netlify:
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/AbhishekS04/N-QUEENS)

---

<div align="center">

**Made with ❤️ for Computer Science Education**

[🌟 Star this repo](https://github.com/AbhishekS04/N-QUEENS) if you found it helpful!

[Report Bug](https://github.com/AbhishekS04/N-QUEENS/issues) • [Request Feature](https://github.com/AbhishekS04/N-QUEENS/issues) • [Contribute](https://github.com/AbhishekS04/N-QUEENS/pulls)

</div>
