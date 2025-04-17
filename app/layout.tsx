import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'N-Queens CSP Visualizer',
  description: 'Created By Team Devaura',
  generator: 'DevAura',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
    <link rel="icon" href="/logo.png" />
  </head>
      <body>{children}</body>
    </html>
  )
}
