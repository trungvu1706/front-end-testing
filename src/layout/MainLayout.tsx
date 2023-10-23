import React from 'react'
import Header from '@/layout/Header.tsx'
import Footer from '@/layout/Footer.tsx'
import SummaryCharts from '@/layout/SummaryCharts.tsx'
import { ButtonScroll } from '@/components'

interface MainLayoutProps {
  children: React.ReactNode
  hasSummaryCharts?: boolean
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  hasSummaryCharts,
}) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      {hasSummaryCharts && <SummaryCharts />}
      <div className="max-w-5xl m-auto py-14 relative">
        {children}
        <ButtonScroll className="absolute top-1/2 -right-[60px] cursor-pointer" />
      </div>

      <Footer />
    </div>
  )
}

export default MainLayout
