import HeroSection from '@/components/sections/HeroSection'
import WhyUs from '@/components/sections/WhyUs'
import ProductsPreview from '@/components/sections/ProductsPreview'
import StatsCounter from '@/components/sections/StatsCounter'
import Testimonials from '@/components/sections/Testimonials'
import FinalCTA from '@/components/sections/FinalCTA'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyUs />
      <ProductsPreview />
      <StatsCounter />
      <Testimonials />
      <FinalCTA />
    </>
  )
}
