import React from 'react'
import { FeatureOverviewSection } from '@/components/Feature_Overview_Section'
import { Footer } from "@//components/Footer"
import { Header } from "@//components/Header"
import { HeroSection } from "@//components/Hero_Section"
import { PriceSection } from "@//components/Price_Section"
import { StaticSection } from "@//components/Static_Section"
import { SubSection } from "@//components/Sub_Section"
export const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeatureOverviewSection />
      <StaticSection />
      <PriceSection />
      <SubSection />
      <Footer />
    </div>
  )
}
