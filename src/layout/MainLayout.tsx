import React from 'react'
import Header from '@/layout/Header.tsx'
import Footer from '@/layout/Footer.tsx'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
