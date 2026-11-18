import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import HowItWorks from '../Components/HowItWorks'
import PopularSkills from '../Components/PopularSkills'
import WhySkillSwap from '../Components/WhySkillSwap'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <HowItWorks />
      <PopularSkills />
      <WhySkillSwap />
      <Footer />
    </div>
  )
}

export default Home
