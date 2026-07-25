import AboutPreview from '@/components/AboutPreview'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

function page() {
  return (
    <div>
      <Hero/>
      <AboutPreview/>
      <Services/>
      <WhyChooseUs/>
      <Testimonials/>
      <CTA/>
      
    </div>
  )
}

export default page
