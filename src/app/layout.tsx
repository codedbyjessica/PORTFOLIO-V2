import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import HeaderUnder from '@/components/HeaderUnder'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Jessica Zhang - Front-End Developer',
  description: 'A portfolio website for Jessica Zhang, a Canadian Front-End Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Nav />
        <Header />
        <HeaderUnder />
        {children}
      </body>
    </html>
  )
}
