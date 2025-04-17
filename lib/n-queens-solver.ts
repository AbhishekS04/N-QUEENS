export interface Step {
  board: boolean[][]
  domains: boolean[][]
  message: string
  type: "init" | "place" | "backtrack" | "solution"
}

export class NQueensSolver {
  private steps: Step[] = []

  solve(n: number): Step[] {
    this.steps = []

    // Initialize empty board and domains
    const board = Array(n)
      .fill(null)
      .map(() => Array(n).fill(false))
    const domains = Array(n)
      .fill(null)
      .map(() => Array(n).fill(true))

    // Add initial step
    this.steps.push({
      board: this.copyBoard(board),
      domains: this.copyBoard(domains),
      message: "Initializing the N-Queens solver with an empty board.",
      type: "init",
    })

    // Solve using backtracking with constraint propagation
    this.solveBacktrack(board, domains, 0, n)

    return this.steps
  }

  private solveBacktrack(board: boolean[][], domains: boolean[][], row: number, n: number): boolean {
    // If all queens are placed, we found a solution
    if (row === n) {
      this.steps.push({
        board: this.copyBoard(board),
        domains: this.copyBoard(domains),
        message: `Solution found! All ${n} queens have been placed without conflicts.`,
        type: "solution",
      })
      return true
    }

    // Try placing queen in each column of the current row
    for (let col = 0; col < n; col++) {
      if (domains[row][col]) {
        // Place queen
        board[row][col] = true

        // Create a copy of domains for constraint propagation
        const newDomains = this.copyBoard(domains)

        // Apply constraints (remove conflicting positions from domains)
        this.applyConstraints(newDomains, row, col, n)

        this.steps.push({
          board: this.copyBoard(board),
          domains: this.copyBoard(newDomains),
          message: `Placing queen at Row ${row}, Column ${col} and updating constraints.`,
          type: "place",
        })

        // Recursively place queens in next rows
        if (this.solveBacktrack(board, newDomains, row + 1, n)) {
          return true
        }

        // If placing queen at (row, col) doesn't lead to a solution, backtrack
        board[row][col] = false

        this.steps.push({
          board: this.copyBoard(board),
          domains: this.copyBoard(domains),
          message: `Backtracking: Removing queen from Row ${row}, Column ${col} as it leads to conflicts.`,
          type: "backtrack",
        })
      }
    }

    return false
  }

  private applyConstraints(domains: boolean[][], row: number, col: number, n: number) {
    // Remove all positions in the same column
    for (let i = 0; i < n; i++) {
      domains[i][col] = false
    }

    // Remove all positions in the same row
    for (let j = 0; j < n; j++) {
      domains[row][j] = false
    }

    // Remove all positions in the diagonal going down-right
    for (let i = row, j = col; i < n && j < n; i++, j++) {
      domains[i][j] = false
    }

    // Remove all positions in the diagonal going up-right
    for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
      domains[i][j] = false
    }

    // Remove all positions in the diagonal going down-left
    for (let i = row, j = col; i < n && j >= 0; i++, j--) {
      domains[i][j] = false
    }

    // Remove all positions in the diagonal going up-left
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      domains[i][j] = false
    }
  }

  private copyBoard(board: boolean[][]): boolean[][] {
    return board.map((row) => [...row])
  }
}
