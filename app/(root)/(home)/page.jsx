import AboutPreview from '@/components/AboutPreview'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import React from 'react'
import Certificates from '@/components/Certificates'
import AppointmentCTA from '@/components/AppointmentCTA'
import Contact from '@/components/Contact'


function page() {
  return (
    <div>
      <Hero/>
      <AboutPreview/>
      <Services/>
      <Certificates/>
      <AppointmentCTA/>
      <Contact/>
      
    </div>
  )
}

export default page
