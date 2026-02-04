import type { Metadata } from 'next'
import { Inter, Source_Sans_3 } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _sourceSans = Source_Sans_3({ subsets: ['latin'], variable: '--font-source-sans' })

export const metadata: Metadata = {
  title: 'Digital Teaching Effectiveness Benchmarking Tool',
  description: 'A comprehensive platform for evaluating and benchmarking digital teaching effectiveness across institutions.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_inter.variable} ${_sourceSans.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
